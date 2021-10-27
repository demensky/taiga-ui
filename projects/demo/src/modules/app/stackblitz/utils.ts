import {Project} from '@stackblitz/sdk/typings/interfaces';
import {TuiDocCodeProcessedValue} from '@taiga-ui/addon-doc';
import {TsFileComponentParser, TsFileModuleParser, TsFileParser} from '../classes';
import {isLess, isPrimaryComponentFile, isTS} from '../utils';

export const prepareLess = (content: TuiDocCodeProcessedValue): string => {
    return (
        content?.replace(
            '~@taiga-ui/core/styles/taiga-ui-local',
            '@taiga-ui/core/styles/taiga-ui-local.less',
        ) ?? ''
    );
};

export const appPrefix = (stringsPart: TemplateStringsArray, path: string = '') =>
    `src/app/${stringsPart.join('')}${path}`;

type FileName = string;
type FileContent = TuiDocCodeProcessedValue;

export const getSupportFiles = <T extends Record<string, TuiDocCodeProcessedValue>>(
    files: T,
): Array<[FileName, FileContent]> => {
    return Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );
};

export const prepareSupportFiles = (
    files: Array<[FileName, FileContent]>,
): Project['files'] => {
    const processedContent: Project['files'] = {};

    for (const [fileName, fileContent] of files) {
        const prefixedFileName = appPrefix`${fileName}`;

        processedContent[prefixedFileName] = isLess(fileName)
            ? prepareLess(fileContent) ?? ''
            : fileContent ?? '';
    }

    return processedContent;
};

export const getComponentsClassNames = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, FileContent]> => {
    return files
        .filter(
            ([fileName, fileContent]) =>
                isTS(fileName) && new TsFileParser(fileContent).hasNgComponent,
        )
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileComponentParser(fileContent).className,
        ]);
};

export const getSupportModules = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, TsFileModuleParser]> => {
    return files
        .filter(([name, content]) => isTS(name) && new TsFileParser(content).hasNgModule)
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileModuleParser(fileContent),
        ]);
};
