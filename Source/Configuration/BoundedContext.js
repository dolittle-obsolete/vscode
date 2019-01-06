/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Core } from "./Core";
import { readJsonFromUriSync, getDirectoryPath, getArtifactFolderPath, getEventsFolderPaths } from "../helpers";
import { getArtifactsFromCore, Artifacts } from "./Artifacts";
import { getTopologyFromCore, Topology } from "./Topology";
import globals from '../globals';
const vscode = require('vscode');

/**
 * Loads the bounded context configurations
 * @export
 * @returns {Promise<BoundedContext[]>}
 */
export async function loadBoundedContextConfigurations() {
    globals.dolittleProjectOutputChannel.appendLine('Loading bounded context configurations');
    let uris = await vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**');
    if (!uris || uris.length == 0) {
        globals.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'bounded-context.json\' file in the current workspace');
        throw new Error('Couldn\'t find any \'bounded-context.json\' file in the current workspace');
    }
    let boundedContextConfigs = [];
    for (let uri of uris) {
        let workspace = vscode.workspace.getWorkspaceFolder(uri);
        const filePath = uri.path;
        const jsonObj = readJsonFromUriSync(uri);
        
        const application = jsonObj['application'];
        const boundedContext = jsonObj['boundedContext'];
        const boundedContextName = jsonObj['boundedContextName'];
        const core = jsonObj['core'];uris
        const coreLanguage = core.language || undefined;
        
        if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
            let msg = `Found an invalid bounded context configuration at path ${filePath}`;
            globals.dolittleProjectOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
        } else {

            globals.dolittleProjectOutputChannel.appendLine(`Loaded bounded context configuration with id '${boundedContext}' and name '${boundedContextName}'`)
            
            boundedContextConfigs.push(new BoundedContext(application, boundedContext, boundedContextName, new Core(coreLanguage), filePath, workspace));
        }
    }

    return boundedContextConfigs;
}
export class BoundedContext {
    #application;
    #boundedContext;
    #boundedContextName;
    #core;
    #path;
    #workspace;
    #rootPath;
    #domainFolder;
    #readFolder;
    #coreFolder;
    #eventFolders;
    #artifacts;
    #topology;
    
    /**
      * Instantiates an instance of BoundedContext
      * @param {string} application 
      * @param {string} boundedContext 
      * @param {string} boundedContextName 
      * @param {Core} core 
      * @param {string} path
      * @param {{index: number, name: string, uri: import('vscode').Uri}} workspace 
      */
     constructor (application, boundedContext, boundedContextName, core, path, workspace) {
        this.#application = application;
        this.#boundedContext = boundedContext;
        this.#boundedContextName = boundedContextName;
        this.#core = core;
        this.#path = path;
        this.#workspace = workspace;

        this.#rootPath = getDirectoryPath(path);
        this.#domainFolder = getArtifactFolderPath(this.rootPath, 'domain')[0] || undefined;
        this.#readFolder = getArtifactFolderPath(this.rootPath, 'read')[0] || undefined;
        this.#coreFolder = getArtifactFolderPath(this.rootPath, 'core')[0] || undefined;
        this.#eventFolders = getEventsFolderPaths(this.rootPath, 'events');
        
        this.#artifacts = getArtifactsFromCore(this.coreFolder);
        this.#topology = getTopologyFromCore(this.coreFolder);
    }
    /**
     * 
     * @returns {Artifacts}
     */
    get artifacts() {
        return this.#artifacts;
    }
    /**
      * Gets the application GUID
      * @returns {string} The GUID of the Application
      */
    get application() {
        return this.#application;
    }
    /**
      * Gets the bounded context GUID
      * @returns {string} The GUID of the bounded context
      */
    get boundedContext() {
        return this.#boundedContext;
    }
    /**
      * Gets the name of the bounded context
      * @returns {string} Bounded Context name
      */
    get boundedContextName() {
        return this.#boundedContextName;
    }
    /**
      * Gets the core configuration 
      * @returns {Core}
      */
    get core() {
        return this.#core;
    }
    /**
     * Gets the bounded context configuration's path
     *
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get path() {
        return this.#path;
    }
    get workspace() {
        return this.#workspace;
    }
    /**
     * Gets the path of the root folder of the bounded context
     * 
     * @readonly
     * @memberof BoundedContextConfiguration
     * @returns {string} 
     */
    get rootPath() {
        return this.#rootPath;
    }
    /**
     *
     *
     * @readonly
     * @memberof BoundedContextConfiguration
     * @returns {Topology}
     */
    get topology() {
        return this.#topology;
    }

    get domainFolder() {
        return this.#domainFolder;
    }
    get readPath() {
        return this.#readFolder;
    }
    get coreFolder() {
        return this.#coreFolder;
    }
    get eventsFolders() {
        return this.#eventFolders;
    }
}