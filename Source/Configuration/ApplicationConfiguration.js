import { readJsonFromUriSync, getDirectoryPath } from '../helpers';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Loads application configurations from the current workspace
 * @returns {Promise<ApplicationConfiguration>}
 * @export
 */
export async function loadApplicationConfiguration() {
    const vscode = require('vscode');

    console.log('Loading application configuration');
    vscode.window.showInformationMessage('Loading application configuration');

    return vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2)
        .then(result => {
            if (!result || result.length == 0) {
                vscode.window.showErrorMessage('Error loading application configuration');
                console.error('Couldn\'t find any \'application.json\' file in the current workspace');

                throw 'Couldn\'t find any \'application.json\' file in the current workspace';
            }
            if (result.length > 1) {
                vscode.window.showErrorMessage('Error loading application configuration');
                console.error('Found more than one \'application.json\' file in the current workspace');

                throw 'Found more than one \'application.json\' file in the current workspace';
            }
            
            const uri = result[0];
            const filePath = uri.path;

            console.log(filePath);
            const jsonObj = readJsonFromUriSync(uri);

            const applicationId = jsonObj['id'];
            const applicationName = jsonObj['name'];
            if (applicationId === undefined || applicationName === undefined) {
                vscode.window.showErrorMessage(`Found an invalid application configuration at path ${filePath}`)
            } else {
                return new ApplicationConfiguration({id: applicationId, name: applicationName}, filePath);
            };
        }, error => {
            throw error;
        });

}
export class ApplicationConfiguration {

    /**
     *Creates an instance of ApplicationConfiguration.
     * @param {{id: string, name: string}} application
     * @param {string} path path
     * @memberof ApplicationConfiguration
     */
    constructor (application, path) {
        this._application = application;
        this._path = path;
        this._rootPath = getDirectoryPath(path);
    }

    /**
     * Gets the application configuration
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {{id:string, name:string}} The path to the application configuration file
     */
    get application(){
        return this._application;
    }
    /**
     * Gets the application configuration's path
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {string}
     */
    get path() {
        return this._path;
    }
    /**
     * Get the root directory of the application
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {string} The path to the application configuration file
     */
    get rootPath(){
        return this._rootPath;
    }
}