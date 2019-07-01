/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {BoilerPlatesManager, ApplicationsManager, BoundedContextsManager, ArtifactsManager, DependenciesManager, Folders } from '@dolittle/tooling.common';
import { PromptManager } from './PromptManager';

const vscode = require('vscode');

export class CommonToolingManager {
    #boilerPlatesManager: BoilerPlatesManager;
    #applicationsManager: ApplicationsManager;
    #boundedContextsManager: BoundedContextsManager;
    #artifactsManager: ArtifactsManager;
    #dependenciesManager: DependenciesManager;
    #folders: Folders;
    #dolittleConfig;
    #promptManager: PromptManager;
    #logger;

    constructor(boilerPlatesManager, applicationsManager, boundedContextsManager, artifactsManager, dependenciesManager, folders, dolittleConfig, promptManager, logger) {
        this.#boilerPlatesManager = boilerPlatesManager;
        this.#applicationsManager = applicationsManager;
        this.#boundedContextsManager = boundedContextsManager;
        this.#artifactsManager = artifactsManager;
        this.#dependenciesManager = dependenciesManager;
        this.#folders = folders;
        this.#dolittleConfig = dolittleConfig;
        this.#promptManager = promptManager;
        this.#logger = logger;

    }
    get boilerPlatesManager() {return this.#boilerPlatesManager}
    get applicationsManager() {return this.#applicationsManager}
    get boundedContextsManager() {return this.#boundedContextsManager}
    get artifactsManager() {return this.#artifactsManager}
    get dependenciesManager() {return this.#dependenciesManager}
    get folders() {return this.#folders}
    get dolittleConfig() {return this.#dolittleConfig}
    get promptManager() {return this.#promptManager}
    get logger() {return this.#logger}

    /**
     * Creates an application
     *
     * @param {string} [language='any']
     * @param {*} [destinationFolder=vscode.workspace.workspaceFolders[0].uri.fsPath]
     * @returns {Promise<boolean>}
     * @memberof CommonToolingManager
     */
    async createApplication(language = 'any', destinationFolder = vscode.workspace.workspaceFolders[0].uri.fsPath) {
        let dependencies = this.applicationsManager.getDependencies(language);
        let context = await this.promptManager.generateContext(dependencies, language, destinationFolder);
        return this.applicationsManager.createApplication(context, destinationFolder);
    }
    /**
     * Creates a Bounded Context
     *
     * @param {string} [language='csharp']
     * @param {string} [destinationFolder=vscode.workspace.workspaceFolders[0].uri.fsPath]
     * @returns {Promise<boolean>}
     * @memberof CommonToolingManager
     */
    async createBoundedContext(language = 'csharp', destinationFolder = vscode.workspace.workspaceFolders[0].uri.fsPath) {
        let application = this.applicationsManager.getApplicationFrom(destinationFolder);
        if (!application) throw new Error('Could not create bounded context - application configuration not found');
        let dependencies = this.boundedContextsManager.getDependencies(language);
        let context = await this.promptManager.generateContext(dependencies, language, destinationFolder);
        context['applicationId'] = application.id; // Hard coded, for now
        return this.boundedContextsManager.createBoundedContext(context, language, destinationFolder);

    }
    // async addFeature(cwd, feature) {
    //     // Get workspace from URI
    //     this.boundedContextsManager.
    //     this.folders.createFeature(cwd, feature, boundedContext, this.dolittleConfig);
    // }
    /**
     * Adds an artifact
     *
     * @param {string} artifactType
     * @param {string} [language='csharp']
     * @param {string} [destinationFolder=vscode.workspace.workspaceFolders[0].uri.fsPath]
     * @memberof CommonToolingManager
     */
    async addArtifact(artifactType, language = 'csharp', destinationFolder = vscode.workspace.workspaceFolders[0].uri.fsPath) {
        let artifactTemplate = this.artifactsManager.getArtifactTemplate(language, artifactType);
        if (!artifactTemplate) throw new Error(`Failed to add artifact - artifact template for artifact type '${artifactType}' and language '${language}' could not be found`);
        let dependencies = this.artifactsManager.getDependencies(artifactType, language);
        let context = await this.promptManager.generateContext(dependencies, language, destinationFolder);
        this.artifactsManager.createArtifact(context, language, artifactTemplate, destinationFolder);
    }
    /**
     * Updates the boilerplates
     *
     * @returns {Promise<void>}
     * @memberof CommonToolingManager
     */
    async updateBoilerPlates() {
        return this.boilerPlatesManager.update();
    }
}

    