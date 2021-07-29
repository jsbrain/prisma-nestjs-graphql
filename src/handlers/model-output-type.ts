import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray, remove, trim } from 'lodash';
import {
    ClassDeclarationStructure,
    CommentStatement,
    DecoratorStructure,
    ExportSpecifierStructure,
    ImportDeclarationStructure,
    ImportSpecifierStructure,
    OptionalKind,
    StatementStructures,
    StructureKind,
} from 'ts-morph';

import { createFieldSettings, FieldSetting } from '../helpers/field-settings';
import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { changeToNamedImport } from '../test/helpers';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function modelOutputType(outputType: OutputType, args: EventArguments) {
    const { getSourceFile, models, config, modelFields, fieldSettings, eventEmitter } =
        args;
    const model = models.get(outputType.name);
    ok(model, `Cannot find model by name ${outputType.name}`);
    const sourceFile = getSourceFile({
        name: outputType.name,
        type: 'model',
    });
    const sourceFileStructure = sourceFile.getStructure();
    const imports = remove(
        sourceFileStructure.statements as StatementStructures[],
        s => s.kind === StructureKind.ImportDeclaration,
    ).flatMap(s => {
        return (
            (s as ImportDeclarationStructure)
                .namedImports as OptionalKind<ImportSpecifierStructure>[]
        ).map(x => [
            x.name || x.alias,
            {
                moduleSpecifier: (s as ImportDeclarationStructure).moduleSpecifier,
                namedImports: [{ name: x.name, alias: x.alias }],
            },
        ]);
    }) as Array<[string, OptionalKind<ImportDeclarationStructure>]>;
    const importDeclarations = new ImportDeclarationMap(imports);

    let classStructure = (sourceFileStructure.statements as StatementStructures[]).find(
        (s: StatementStructures) => s.kind === StructureKind.Class,
    ) as ClassDeclarationStructure | undefined;

    if (!classStructure) {
        classStructure = {
            kind: StructureKind.Class,
            isExported: true,
            name: outputType.name,
            decorators: [
                // ! -> Disable graphql decorators
                // {
                //     name: 'ObjectType',
                //     arguments: [],
                // },
            ],
            properties: [],
        };
        (sourceFileStructure.statements as StatementStructures[]).push(classStructure);
    }

    // * -> Enable class decorators for model and make proper docs comment
    if (model.documentation) {
        const { result, documentation } = createFieldSettings({
            config,
            text: model.documentation,
        });

        classStructure.docs = [{ description: documentation }];
        if (result.length > 0) {
            classStructure.decorators = result.map(d => {
                // * -> Create the decorator imports

                const name = d.name.replace(`${d.namespaceImport}.`, '');

                importDeclarations.create({
                    // * => Create named import for each decorator
                    name,
                    from: d.from,
                    // namespaceImport: d.namespaceImport,
                    namedImport: true,
                });

                return {
                    name, // use de-namespaced name here as well
                    kind: d.kind as unknown as DecoratorStructure['kind'],
                    arguments: d.arguments,
                };
            });
        }
    }

    // ! -> Disable graphql decorators
    // const decorator = classStructure.decorators?.find(d => d.name === 'ObjectType');
    // ok(decorator, 'ObjectType decorator not found');
    // const decoratorArgument = decorator.arguments?.[0]
    //     ? JSON5.parse(decorator.arguments[0])
    //     : {};
    // if (model.documentation) {
    //     if (!classStructure.leadingTrivia) {
    //         classStructure.leadingTrivia = `/** ${model.documentation} */\n`;
    //     }
    //     decoratorArgument.description = model.documentation;
    // } else {
    //     delete decoratorArgument.description;
    // }

    // decorator.arguments =
    //     Object.keys(decoratorArgument).length > 0
    //         ? [JSON5.stringify(decoratorArgument)]
    //         : [];

    // ! -> Disable graphql decorators
    // importDeclarations.add('Field', nestjsGraphql);
    // importDeclarations.add('ObjectType', nestjsGraphql);

    for (const field of outputType.fields) {
        // if (model.name === 'Comment') {
        //     console.dir(field);
        // }

        // Do not generate already defined properties for model
        if (classStructure.properties?.some(p => p.name === field.name)) {
            continue;
        }

        let fileType = 'model';
        const { location, isList, type, namespace } = field.outputType;

        let outputTypeName = String(type);
        if (namespace !== 'model') {
            fileType = 'output';
            outputTypeName = getOutputTypeName(outputTypeName);
        }
        const customType = config.types[outputTypeName]; // todo: remove
        const modelField = modelFields.get(model.name)?.get(field.name);
        const settings = fieldSettings.get(model.name)?.get(field.name);
        const fieldType = settings?.getFieldType();
        const propertySettings = settings?.getPropertyType();

        const propertyType = castArray(
            // propertySettings.name can be skipped now if `importOnly` flag is set
            propertySettings?.name ||
                customType?.fieldType?.split('|').map(trim) ||
                getPropertyType({
                    location,
                    type: outputTypeName,
                }),
        );

        // For model we keep only one type
        propertyType.splice(1, propertyType.length);

        if (field.isNullable && !isList && ['enumTypes', 'scalar'].includes(location)) {
            // TODO: Maybe remove ...
            // NOTE: type | null for model is defined here!
            propertyType.push('null');
        }

        let graphqlType: string;

        if (fieldType && fieldType.output) {
            graphqlType = fieldType.name;
            importDeclarations.create({ ...fieldType });
        } else {
            const graphqlImport = getGraphqlImport({
                sourceFile,
                fileType,
                location,
                isId: modelField?.isId,
                typeName: outputTypeName,
                customType,
                getSourceFile,
            });

            graphqlType = graphqlImport.name;

            // if (graphqlImport.name !== outputType.name && graphqlImport.specifier) {
            if (
                graphqlImport.name !== outputType.name &&
                graphqlImport.specifier &&
                // ! -> Disable graphql imports
                graphqlImport.specifier !== '@nestjs/graphql'
            ) {
                importDeclarations.add(graphqlImport.name, graphqlImport.specifier);
            }
        }

        // console.log({
        //     'field.outputType': field.outputType,
        //     'outputType.name': outputType.name,
        //     'model.name': model.name,
        //     outputTypeName,
        //     'field.name': field.name,
        //     settings,
        //     propertyType,
        //     graphqlType,
        //     location,
        // });

        const property = propertyStructure({
            name: field.name,
            isNullable: field.isNullable,
            hasExclamationToken: true,
            hasQuestionToken: false,
            propertyType,
            isList,
        });

        if (typeof property.leadingTrivia === 'string' && modelField?.documentation) {
            // property.leadingTrivia += `/** ${modelField.documentation} */\n`;
            // ! -> Fix comments
            property.docs = [modelField.documentation];
        }

        classStructure.properties?.push(property);

        if (propertySettings) {
            importDeclarations.create({ ...propertySettings });
        }

        // Create import for typescript field/property type
        if (customType && customType.fieldType && customType.fieldModule) {
            importDeclarations.add(customType.fieldType, customType.fieldModule);
        }

        if (settings?.shouldHideField({ name: outputType.name, output: true })) {
            importDeclarations.add('HideField', nestjsGraphql);
            property.decorators?.push({ name: 'HideField', arguments: [] });
        } else {
            // ! -> Disable graphql decorators
            // property.decorators?.push({
            //     name: 'Field',
            //     arguments: [
            //         `() => ${isList ? `[${graphqlType}]` : graphqlType}`,
            //         JSON5.stringify({
            //             nullable: Boolean(field.isNullable),
            //             defaultValue: ['number', 'string', 'boolean'].includes(
            //                 typeof modelField?.default,
            //             )
            //                 ? modelField?.default
            //                 : undefined,
            //             description: modelField?.documentation
            //             // ! -> Can be used to remove newline but it actually prints out in docs just fine.
            //             // description: modelField?.documentation?.replace('\n', ' '),
            //         }),
            //     ],
            // });

            for (const options of settings || []) {
                // if (!options.output || options.kind !== 'Decorator') {
                // Only apply for Decorators and if output option is specified
                if (!options.output || options.kind !== 'Decorator') {
                    continue;
                }

                // property.decorators?.push({
                //     name: `${options.name}`,
                //     arguments: options.arguments,
                // });

                // * -> Enable named imports and usage for field decorators
                const newOptions = changeToNamedImport(options);
                // * -> Skip importOnly:true decorators but still apply imports
                if (!newOptions.importOnly) {
                    property.decorators?.push({
                        name: newOptions.name,
                        arguments: newOptions.arguments,
                    });
                }
                ok(
                    newOptions.from,
                    "Missed 'from' part in configuration or field setting",
                );
                importDeclarations.create(newOptions);
            }
        }

        eventEmitter.emitSync('ClassProperty', property, { location, isList });
    }

    const hasExportDeclaration = (
        sourceFileStructure.statements as StatementStructures[]
    ).some(structure => {
        return (
            structure.kind === StructureKind.ExportDeclaration &&
            (structure.namedExports as ExportSpecifierStructure[]).some(
                o => (o.alias || o.name) === model.name,
            )
        );
    });

    // Check re-export, comment generated class if found
    if (hasExportDeclaration) {
        let commentStatement: CommentStatement | undefined;
        while (
            (commentStatement = sourceFile.getStatementByKind(
                2 /* SingleLineCommentTrivia */,
            ))
        ) {
            commentStatement.remove();
        }

        sourceFile.addStatements([classStructure]);
        const classDeclaration = sourceFile.getClassOrThrow(model.name);

        const commentedText = classDeclaration
            .getText()
            .split('\n')
            .map(x => `// ${x}`);
        classDeclaration.remove();
        sourceFile.addStatements(['\n', ...commentedText]);
    } else {
        (sourceFileStructure.statements as StatementStructures[]).unshift(
            ...importDeclarations.toStatements(),
        );
        sourceFile.set(sourceFileStructure);
    }
}
