/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Uri } from "vscode";
const fs = require('fs-extra');
const path = require('path');



 /**
  * Reads json object from file given by uri
  *
  * @export
  * @param {Uri} uri
  * @returns {any}
  */
export function readJsonFromUriSync(uri) {
    if (uri.scheme !== 'file') throw `${uri.path} is not a file`
    return fs.readJsonSync(uri.path);
}

export function readJsonFromFileSync(source) {
    if (!fs.statSync(source).isFile) throw `${source} is not a file`;
    return fs.readJsonSync(source);
}

export function fileExistsSync(source) {
    return fs.existsSync(source);
}

/**
 * Gets the directory path of the source
 *
 * @export
 * @param {string} source
 * @returns
 */
export function getDirectoryPath(source) {
    if (fs.statSync(source).isFile()) return path.dirname(source);
    return source;
}

 /**
  * Gets a folder containing artifacts from a given root folder
  * @export
  * @param {string} rootFolder
  * @param {string} folderNameIgnoringCase
  * @returns {string[]}
  */
export function getArtifactFolderPath(rootFolder, folderNameIgnoringCase) {
    if (! fs.statSync(rootFolder).isDirectory()) 
        throw 'rootFolder isn\'t a directory';

    return fs.readdirSync(rootFolder).filter(f => {
        const folderPath = path.join(rootFolder, f);
        return fs.statSync(folderPath).isDirectory() && f.toLowerCase() === folderNameIgnoringCase.toLowerCase();
    }).map(item => path.join(rootFolder, item));
}

/**
 * Gets a folder containing artifacts from a given root folder
 * @export
 * @param {string} rootFolder
 * @param {string} folderNameIgnoringCase
 * @returns
 */
export function getEventsFolderPaths(rootFolder, folderNameIgnoringCase) {
    if (! fs.statSync(rootFolder).isDirectory()) 
        throw 'rootFolder isn\'t a directory';

    const regex = new RegExp(`${folderNameIgnoringCase}`, 'i');
    return fs.readdirSync(rootFolder).filter(f => {
        const folderPath = path.join(rootFolder, f);
        return fs.statSync(folderPath).isDirectory() && regex.test(f);
    }).map(item => path.join(rootFolder, item));
}
