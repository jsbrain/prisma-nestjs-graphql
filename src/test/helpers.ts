import { PropertyDeclaration, SourceFile } from 'ts-morph';

import { FieldSetting } from '../helpers/field-settings';

export function getFieldOptions(
    sourceFile: SourceFile,
    property: string | PropertyDeclaration,
) {
    let propertyDeclaration: PropertyDeclaration | undefined;
    if (typeof property === 'string') {
        propertyDeclaration = sourceFile.getClass(() => true)?.getProperty(property);
    }
    const result = propertyDeclaration?.getStructure()?.decorators?.[0]?.arguments?.[1];
    return result as string;
    // return new Function(`return ${text}`)();
}

export function getPropertyStructure(sourceFile: SourceFile, name: string) {
    return sourceFile
        .getClass(() => true)
        ?.getProperty(p => p.getName() === name)
        ?.getStructure();
}

export const changeToNamedImport = <T extends FieldSetting>(options: T) => {
    return {
        ...options,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        name: options.name.replace(`${options.namespaceImport}.`, ''),
        namespaceImport: undefined,
        namedImport: true,
    };
};
