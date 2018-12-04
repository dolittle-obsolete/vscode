/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Core } from "./Core";
import { readJsonFromUriSync, getDirectoryPath, getArtifactFolderPath, getEventsFolderPaths } from "../helpers";
import { getArtifactsFromCore } from "./Artifacts";

/**
 * Loads the bounded context configurations
 * @export
 * @returns {Promise<BoundedContextConfiguration[]>}
 */
export async function loadBoundedContextConfigurations() {
    const vscode = require('vscode');
    console.log('Loading bounded context configurations');
    vscode.window.showInformationMessage('Loading bounded context configuration');

    return vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**', 2)
        .then(result => {
            if (!result || result.length == 0) {
                vscode.window.showErrorMessage('Error loading bounded context configuration');
                console.error('Couldn\'t find any \'bounded-context.json\' file in the current workspace');

                throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';
            }
            let boundedContextConfigs = [];
            result.forEach( uri => {
                const filePath = uri.path;
                console.log(filePath);
                const jsonObj = readJsonFromUriSync(uri);
                
                const application = jsonObj['application'];
                const boundedContext = jsonObj['boundedContext'];
                const boundedContextName = jsonObj['boundedContextName'];
                const core = jsonObj['core'];
                const coreLanguage = core || core.language || undefined;
                if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                    vscode.window.showErrorMessage(`Found an invalid bounded context configuration at path ${filePath}`);
                } else {
                    boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new Core(coreLanguage), filePath));
                }
            });

            return boundedContextConfigs;
            
        }, error => {
            throw error;
        });
}
export class BoundedContextConfiguration {
    /**
      * Instantiates an instance of BoundedContext
      * @param {string} application 
      * @param {string} boundedContext 
      * @param {string} boundedContextName 
      * @param {Core} core 
      * @param {string} path 
      */
     constructor (application, boundedContext, boundedContextName, core, path) {
        this._application = application;
        this._boundedContext = boundedContext;
        this._boundedContextName = boundedContextName;
        this._core = core;
        this._path = path;

        this._rootPath = getDirectoryPath(path);
        this._domainFolder = getArtifactFolderPath(this._rootPath, 'domain')[0] || undefined;
        this._readFolder = getArtifactFolderPath(this._rootPath, 'read')[0] || undefined;
        this._coreFolder = getArtifactFolderPath(this._rootPath, 'core')[0] || undefined;
        this._eventFolders = getEventsFolderPaths(this._rootPath, 'events');
        
        this._artifacts = getArtifactsFromCore(this.coreFolder);
    }
    /**
      * Gets the application GUID
      * @returns {string} The GUID of the Application
      */
    get application() {
        return this._application;
    }
    /**
      * Gets the bounded context GUID
      * @returns {string} The GUID of the bounded context
      */
    get boundedContext() {
        return this._boundedContext;
    }
    /**
      * Gets the name of the bounded context
      * @returns {string} Bounded Context name
      */
    get boundedContextName() {
        return this._boundedContextName;
    }
    /**
      * Gets the core configuration 
      * @returns {Core}
      */
    get core() {
        return this._core;
    }
    /**
     * Gets the bounded context configuration's path
     *
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get path() {
        return this._path;
    }
    /**
     * Gets the path of the root folder of the bounded context
     * 
     * @readonly
     * @memberof BoundedContextConfiguration
     * @returns {string} 
     */
    get rootPath() {
        return this._rootPath;
    }

    get domainFolder() {
        return this._domainFolder;
    }
    get readPath() {
        return this._readFolder;
    }
    get coreFolder() {
        return this._coreFolder;
    }
    get eventsFolders() {
        return this._eventFolders;
    }

    get artifacts() {
        return this._artifacts;
    }
}