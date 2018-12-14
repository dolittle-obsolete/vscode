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
 * @returns {Promise<BoundedContextConfiguration[]>}
 */
export async function loadBoundedContextConfigurations() {
    globals.dolittleProjectOutputChannel.appendLine('Loading bounded context configurations');
    let uris = await vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**');
    if (!uris || uris.length == 0) {
        globals.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'bounded-context.json\' file in the current workspace');
        throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';
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
            
            boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new Core(coreLanguage), filePath, workspace));
        }
    }

    return boundedContextConfigs;
            
        
}
const _application = new WeakMap();
const _boundedContext = new WeakMap();
const _boundedContextName = new WeakMap();
const _core = new WeakMap();
const _path = new WeakMap();
const _workspace = new WeakMap();
const _rootPath = new WeakMap();
const _domainFolder = new WeakMap();
const _readFolder = new WeakMap();
const _coreFolder = new WeakMap();
const _eventFolders = new WeakMap();
const _artifacts = new WeakMap();
const _topology = new WeakMap();
export class BoundedContextConfiguration {
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
        _application.set(this, application);
        _boundedContext.set(this, boundedContext);
        _boundedContextName.set(this, boundedContextName);
        _core.set(this, core);
        _path.set(this, path);
        _workspace.set(this, workspace);

        _rootPath.set(this, getDirectoryPath(path));
        _domainFolder.set(this, getArtifactFolderPath(this.rootPath, 'domain')[0] || undefined);
        _readFolder.set(this, getArtifactFolderPath(this.rootPath, 'read')[0] || undefined);
        _coreFolder.set(this,getArtifactFolderPath(this.rootPath, 'core')[0] || undefined);
        _eventFolders.set(this, getEventsFolderPaths(this.rootPath, 'events'));
        
        _artifacts.set(this, getArtifactsFromCore(this.coreFolder));
        _topology.set(this, getTopologyFromCore(this.coreFolder));
    }
    /**
     * 
     * @returns {Artifacts}
     */
    get artifacts() {
        return _artifacts.get(this);
    }
    /**
      * Gets the application GUID
      * @returns {string} The GUID of the Application
      */
    get application() {
        return _application.get(this);
    }
    /**
      * Gets the bounded context GUID
      * @returns {string} The GUID of the bounded context
      */
    get boundedContext() {
        return _boundedContext.get(this);
    }
    /**
      * Gets the name of the bounded context
      * @returns {string} Bounded Context name
      */
    get boundedContextName() {
        return _boundedContextName.get(this);
    }
    /**
      * Gets the core configuration 
      * @returns {Core}
      */
    get core() {
        return _core.get(this);
    }
    /**
     * Gets the bounded context configuration's path
     *
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get path() {
        return _path.get(this);
    }
    get workspace() {
        return _workspace.get(this);
    }
    /**
     * Gets the path of the root folder of the bounded context
     * 
     * @readonly
     * @memberof BoundedContextConfiguration
     * @returns {string} 
     */
    get rootPath() {
        return _rootPath.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof BoundedContextConfiguration
     * @returns {Topology}
     */
    get topology() {
        return _topology.get(this);
    }

    get domainFolder() {
        return _domainFolder.get(this);
    }
    get readPath() {
        return _readFolder.get(this);
    }
    get coreFolder() {
        return _coreFolder.get(this);
    }
    get eventsFolders() {
        return _eventFolders.get(this);
    }
}