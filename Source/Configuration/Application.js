/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { readJsonFromUriSync, getDirectoryPath } from '../helpers';
import globals from '../globals';

const vscode = require('vscode');

/**
 * Loads application configurations from the current workspace
 * @returns {Promise<Application>}
 * @export
 */
export async function loadApplicationConfiguration() {
    globals.dolittleProjectOutputChannel.appendLine('Loading application configuration');
    
    let uris = await vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2);
    if (!uris || uris.length == 0) {
        globals.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'application.json\' file in the current workspace');
        throw 'Couldn\'t find any \'application.json\' file in the current workspace';
    }
    if (uris.length > 1) {
        globals.dolittleProjectOutputChannel.appendLine('Found more than one \'application.json\' file in the current workspace');
        throw 'Found more than one \'application.json\' file in the current workspace';
    }
    
    const applicationUri = uris[0];
    const filePath = applicationUri.path;

    const jsonObj = readJsonFromUriSync(applicationUri);

    const id = jsonObj['id'];
    const name = jsonObj['name'];
    if (id === undefined || name === undefined) {
        globals.dolittleProjectOutputChannel.appendLine(`Found an invalid application configuration at path ${filePath}`);
        throw new Error('Found an invalid application configuration')
    } else {
        globals.dolittleProjectOutputChannel.appendLine(`Loaded application configuration with id '${id}' and name '${name}'`);
        return new Application(id, name, filePath);
    }

}
export class Application {
    #id: string;
    #name: string;
    #path: string;
    #rootPath: string;
    /**
     *Creates an instance of Application.
     * @param {string} id
     * @param {string} name
     * @param {string} path path
     * @memberof Application
     */
    constructor (id, name, path) {
        this.#id = id;
        this.#name = name;
        this.#path = path;
        this.#rootPath = getDirectoryPath(path);
    }

    /**
     * Gets the application id
     * 
     * @readonly
     * @memberof Application
     */
    get id() {
        return this.#id;
    }
    /**
     * Gets the application name
     *
     * @readonly
     * @memberof Application
     */
    get name() {
        return this.#name;
    }
    /**
     * Gets the application configuration's path
     * 
     * @readonly
     * @memberof Application
     */
    get path() {
        return this.#path;
    }
    /**
     * Get the root directory of the application
     * 
     * @readonly
     * @memberof Application
     */
    get rootPath(){
        return this.#rootPath;
    }
}