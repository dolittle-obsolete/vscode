/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Core } from "./Core";
import { readJsonFromUriSync, getDirectoryPath, getArtifactFolderPath, getEventsFolderPaths } from "../helpers";
import { getArtifactsFromCore, Artifacts } from "./Artifacts";
import { getTopologyFromCore, Topology } from "./Topology";
import globals from '../globals';
import { Uri } from "vscode";

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
    #application: string;
    #boundedContext: string;
    #boundedContextName: string;
    #core: Core;
    #path: string;
    #workspace: {index: number, name: string, uri: Uri};
    #rootPath: string;
    #domainFolder: string;
    #readFolder: string;
    #coreFolder: string;
    #eventFolders: string[];
    #artifacts: Artifacts;
    #topology: Topology;
    
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
     * Gets the artifacts configuration
     *
     * @readonly
     * @memberof BoundedContext
     */
    get artifacts() {
        return this.#artifacts;
    }
    /**
     * Gets the application GUID
     * 
     * @readonly
     * @memberof BoundedContext
     */
    get application() {
        return this.#application;
    }
    /**
     * Gets the bounded context GUID
     * 
     * @readonly
     * @memberof BoundedContext
     */
    get boundedContext() {
        return this.#boundedContext;
    }
    /**
     * Gets the name of the bounded context
     * @readonly
     * @memberof BoundedContext
     */
    get boundedContextName() {
        return this.#boundedContextName;
    }
    /**
     * Gets the core configuration 
     * 
     * @readonly
     * @memberof BoundedContext
     */
    get core() {
        return this.#core;
    }
    /**
     * Gets the bounded context configuration's path
     *
     * 
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get path() {
        return this.#path;
    }
    /**
     * Gets the workspace of the bounded context configuration
     *
     * @readonly
     * @memberof BoundedContext
     */
    get workspace() {
        return this.#workspace;
    }
    /**
     * Gets the path of the root folder of the bounded context
     * 
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get rootPath() {
        return this.#rootPath;
    }
    /**
     * Gets the topology configuration
     *
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get topology() {
        return this.#topology;
    }
    /**
     * Gets the path of the domain folder
     *
     * @readonly
     * @memberof BoundedContext
     */
    get domainFolder() {
        return this.#domainFolder;
    }
    /**
     * Gets the path of the read folder
     *
     * @readonly
     * @memberof BoundedContext
     */
    get readPath() {
        return this.#readFolder;
    }
    /**
     * Gets the path of the core folder
     *
     * @readonly
     * @memberof BoundedContext
     */
    get coreFolder() {
        return this.#coreFolder;
    }
    /**
     * Gets the paths of the events folders
     *
     * @readonly
     * @memberof BoundedContext
     */
    get eventsFolders() {
        return this.#eventFolders;
    }
}