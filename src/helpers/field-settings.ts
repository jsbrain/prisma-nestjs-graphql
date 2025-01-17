import JSON5 from 'json5';
import { merge, trim } from 'lodash';
import outmatch from 'outmatch';

import { GeneratorConfiguration } from '../types';

export type FieldSetting = {
    /**
     * Act as named import or namespaceImport or defaultImport
     */
    name: string;
    kind: 'Decorator' | 'FieldType' | 'PropertyType';
    arguments?: string[];
    input: boolean;
    output: boolean;
    match?: (test: string) => boolean;
    from: string;
    namespace?: string;
    defaultImport?: string | true;
    namespaceImport?: string;
    namedImport?: boolean;
    // * New field to enable named utility imports that don't act as types
    /**
     * Can be used to specify a required import via @PropertyType({..., importOnly: true})
     * that doesn't act as a type but needs to imported, e.g. a custom validation function
     * for @Transform(myCustomValidationFunction).
     */
    importOnly?: boolean;
};

export class FieldSettings extends Array<FieldSetting> {
    shouldHideField({
        name,
        input = false,
        output = false,
    }: {
        name: string;
        input?: boolean;
        output?: boolean;
    }): boolean {
        const hideField = this.find(s => s.name === 'HideField');

        return Boolean(
            (hideField?.input && input) ||
                (hideField?.output && output) ||
                hideField?.match?.(name),
        );
    }

    getFieldType() {
        return this.find(s => s.kind === 'FieldType');
    }

    getPropertyType() {
        return this.find(s => s.kind === 'PropertyType');
    }
}

export function createFieldSettings(args: {
    text: string;
    config: GeneratorConfiguration;
}) {
    const { config, text } = args;
    const result: FieldSettings = new FieldSettings();
    const textLines = text.split('\n');
    const documentationLines: string[] = [];
    for (const line of textLines) {
        const match = /^@(?<name>\w+(\.(\w+))?)\((?<args>.*)\)/.exec(line);
        const name = match?.groups?.name;
        if (!match || !name) {
            documentationLines.push(line);
            continue;
        }
        const decorator: FieldSetting = {
            kind: 'Decorator',
            name: '',
            arguments: [],
            input: false,
            output: false,
            from: '',
        };
        if (name === 'TypeGraphQL.omit' || name === 'HideField') {
            Object.assign(decorator, hideFieldDecorator(match));
        } else if (['FieldType', 'PropertyType'].includes(name) && match.groups?.args) {
            const options = customType(match.groups.args);
            merge(
                decorator,
                options.namespace && config.fields[options.namespace],
                options,
                { kind: name },
            );
        } else {
            const namespace = getNamespace(name);
            decorator.namespaceImport = namespace;
            const options = {
                name,
                arguments: (match.groups?.args || '')
                    .split(',')
                    .map(s => trim(s))
                    .filter(Boolean),
            };
            merge(decorator, config.fields[namespace], options);
        }
        result.push(decorator);
    }

    return {
        result,
        // ! -> join with proper newline
        documentation: documentationLines.filter(Boolean).join('\n') || undefined,
    };
}

function customType(args: string) {
    const result: Partial<FieldSetting> = {};
    let options = parseArgs(args);
    if (typeof options === 'string') {
        options = { name: options };
    }
    Object.assign(result, options);
    const namespace = getNamespace(options.name);
    result.namespace = namespace;
    if ((options as { name: string }).name.includes('.')) {
        result.namespaceImport = namespace;
    }
    return result;
}

function hideFieldDecorator(match: RegExpExecArray) {
    const result: Partial<FieldSetting> = {
        name: 'HideField',
        arguments: [],
        from: '@nestjs/graphql',
        defaultImport: undefined,
        namespaceImport: undefined,
        match: undefined,
    };
    if (!match.groups?.args) {
        result.output = true;
        return result;
    }

    if (match.groups.args.includes('{') && match.groups.args.includes('}')) {
        const options = parseArgs(match.groups.args) as Record<string, unknown>;
        result.output = Boolean(options.output);
        result.input = Boolean(options.input);
        if (typeof options.match === 'string' || Array.isArray(options.match)) {
            result.match = outmatch(options.match, { separator: false });
        }
    } else {
        if (/output:\s*true/.test(match.groups.args)) {
            result.output = true;
        }
        if (/input:\s*true/.test(match.groups.args)) {
            result.input = true;
        }
    }

    return result;
}

function parseArgs(string: string): Record<string, unknown> | string {
    try {
        return JSON5.parse(string);
    } catch {
        throw new Error(`Failed to parse: ${string}`);
    }
}

function getNamespace(name: unknown) {
    let result = String(name);
    if (result.includes('.')) {
        [result] = result.split('.');
    }
    return result;
}
