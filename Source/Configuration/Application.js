import { readJsonFromUriSync, getDirectoryPath } from '../helpers';
import globals from '../globals';

const vscode = require('vscode');
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

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

    const applicationId = jsonObj['id'];
    const applicationName = jsonObj['name'];
    if (applicationId === undefined || applicationName === undefined) {
        globals.dolittleProjectOutputChannel.appendLine(`Found an invalid application configuration at path ${filePath}`);
    } else {
        globals.dolittleProjectOutputChannel.appendLine(`Loaded application configuration with id '${applicationId}' and name '${applicationName}'`);
        return new Application({id: applicationId, name: applicationName}, filePath);
    }

}
export class Application {
    #application;
    #path;
    #rootPath;
    /**
     *Creates an instance of Application.
     * @param {{id: string, name: string}} application
     * @param {string} path path
     * @memberof ApplicationConfiguration
     */
    constructor (application, path) {
        this.#application = application;
        this.#path = path;
        this.#rootPath = getDirectoryPath(path);
    }

    /**
     * Gets the application configuration
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {{id:string, name:string}} The path to the application configuration file
     */
    get application(){
        return this.#application;
    }
    /**
     * Gets the application configuration's path
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {string}
     */
    get path() {
        return this.#path;
    }
    /**
     * Get the root directory of the application
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {string} The path to the application configuration file
     */
    get rootPath(){
        return this.#rootPath;
    }
}