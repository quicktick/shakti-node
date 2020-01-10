// https://stackoverflow.com/a/51476106
import path from 'path';

const ROOT_PATH = new URL(path.dirname(import.meta.url) + '/src').pathname;

export function resolve(specifier, parentModuleURL, defaultResolver) {
    specifier = specifier.replace(/^~/, ROOT_PATH);
    return defaultResolver(specifier, parentModuleURL);
}
