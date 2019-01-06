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
        if (!this.#applicationsManager.hasApplication(destinationFolder)) throw new Error('Could not create bounded context - application configuration not found');
        let dependencies = this.#boundedContextsManager.getDependencies(language);
        let context = await this.#promptManager.generateContext(dependencies, language, destinationFolder);
        if (! this.#boundedContextsManager.createBoundedContext(context, language, destinationFolder)) {
            throw new Error('Failed to create bounded context');
        }

    }
    async addArtifact(artifactType, language = 'csharp', destinationFolder = vscode.workspace.workspaceFolders[0].uri.fspath) {
        let artifactTemplate = this.#artifactsManager.getArtifactTemplate(language, artifactType);
        if (!artifactTemplate) throw new Error(`Failed to add artifact - artifact template for artifact type '${artifactType}' and language '${language}' could not be found`);
        let dependencies = this.artifactsManager.getDependencies(artifactType, language);
        let context = await this.#promptManager.generateContext(dependencies, language, destinationFolder);
        this.#artifactsManager.createArtifact(context, language, artifactTemplate, destinationFolder);
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

    