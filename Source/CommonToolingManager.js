/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// import { Dependency } from '@dolittle/tooling.common/Source/dependencies/Dependency';

const vscode = require('vscode');

export class CommonToolingManager {
    #boilerPlatesManager;
    #applicationsManager;
    #boundedContextsManager;
    #artifactsManager;
    #dependenciesManager;
    #promptManager;
    #logger;

    constructor(boilerPlatesManager, applicationsManager, boundedContextsManager, artifactsManager, dependenciesManager, promptManager, logger) {
        this.#boilerPlatesManager = boilerPlatesManager;
        this.#applicationsManager = applicationsManager;
        this.#boundedContextsManager = boundedContextsManager;
        this.#artifactsManager = artifactsManager;
        this.#dependenciesManager = dependenciesManager;
        this.#promptManager = promptManager;
        this.#logger = logger;

    }

    async createApplication(language = 'any', destinationFolder = vscode.workspace.workspaceFolders[0].uri.fsPath) {
        let dependencies = this.#applicationsManager.getDependencies(language);
        let context = await this.#promptManager.generateContext(dependencies, language, destinationFolder);
        this.#applicationsManager.createApplication(context, destinationFolder);
    }
    /**
     * Creates a Bounded Context
     *
     * @param {string} [language='csharp']
     * @param {string} [destinationFolder=vscode.workspace.workspaceFolders[0].uri.fsPath]
     * @memberof CommonToolingManager
     */
    async createBoundedContext(language = 'csharp', destinationFolder = vscode.workspace.workspaceFolders[0].uri.fsPath) {
        let dependencies = this.#boundedContextsManager.getDependencies(language);
        let context = await this.#promptManager.generateContext(dependencies, language, destinationFolder);
        if (! this.#boundedContextsManager.createBoundedContext(context, language, destinationFolder)) {
            throw new Error('Failed to create bounded context');
        }

    }
    /**
     * Updates the boilerplates
     *
     * @returns {Promise<void>}
     * @memberof CommonToolingManager
     */
    async updateBoilerPlates() {
        return this.#boilerPlatesManager.update();
    }
    
}

    