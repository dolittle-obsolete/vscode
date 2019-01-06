/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {DependencyManager} from '@dolittle/tooling.common';

const vscode = require('vscode');

export class PromptManager {
    #dependencyManager;
    #logger;
    /**
     * Initializes a new instance of {PromptManager}
     * @param {DependencyManager} dependencyManager
     * @param {Logger} logger
     */
    constructor(dependencyManager, logger) {
        this.#dependencyManager = dependencyManager;
        this.#logger = logger;
        
    }
    /**
     * @param {Dependency[]} dependencies
     * @param {string} language
     * @param {string} location
     * @returns {Promise<any>}
     */
    async generateContext(dependencies, language, location) {
        let context = {};
        dependencies.forEach(async dep => {
            context[dep.name] = await this.#handleDependency(dep, language, location);
        });
        return context;
    }
    /**
     * Handles a {Dependency} and returns a value for that dependency
     * 
     * @param {Dependency} dependency
     * @param {string} language
     * @param {string} location
     * @returns {Promise<any>}
     */
    async #handleDependency(dependency, language, location) {
        switch (dependency.type) {
            case 'userInput':
                return await this.#handleUserInput(dependency);
            case 'discover':
                return await this.#handleDiscover(dependency, language, location);
            default:
                throw new Error(`Invalided type '${dependency.type}'`);
        }
    }
    /**
     * 
     * @param {Dependency} dependency
     * @param {any[]} choices
     * @returns {Promise<any>} 
     */
    async #handleUserInput(dependency, choices = []) {
        const inputType = dependency.userInputType;
        let response = {}
        if (inputType === 'input' || inputType === 'argument') {
            response = await this.#getResponseFromTextInput(dependency.promptMessage || 'Input');
        }
        else if (inputType === 'chooseOne') {
            let items = dependency.choices !== undefined? 
                dependency.choices.concat(choices)
                : choices;
            if (dependency.customInput !== undefined) items.push(dependency.customInput);
            response = await this.#getResponseFromChoice(items, dependency.promptMessage || 'Input');
            if (dependency.customInput !== undefined && response === dependency.customInput) response = await this.#getResponseFromTextInput(dependency.customInput);
        }
        else if (inputType === 'chooseMultiple') {
            let items = dependency.choices !== undefined? 
                dependency.choices.concat(choices)
                : choices;
            response = await this.#getResponseFromMultipleChoice(items, dependency.promptMessage || 'Input');
        }
        else {
            throw new Error(`Invalid userInputType '${inputType}'`)
        }
                            
        if (response === undefined) throw new Error('User input was terminated')
        return response;
    }
    /**
     * 
     * @param {Dependency} dependency
     * @param {string} language
     * @param {string} location
     * @returns {Promise<any>}
     */
    async #handleDiscover(dependency, language, location) {
        /**
         * @type {any}
         */
        let discoveryResult = this.#dependencyManager.discover(dependency, location, language); // May have to get the dolittleConfig from 'location'
        if (dependency.userInputType !== undefined) {
            let choices = typeof discoveryResult === 'string' || discoveryResult instanceof String?
                [discoveryResult]
                : discoveryResult.length === 0?
                    []
                    : discoveryResult[0]['namespace'] !== undefined? 
                        discoveryResult.map(item => new Object(
                            {
                                detail: `${item.namespace}.${item.value}`, 
                                describe: `${item.namespace}.${item.value}`, 
                                label: item.value 
                            })) 
                        : discoveryResult;
            return await this.#handleUserInput(dependency, choices)
        }
        return discoveryResult;
    }
    /**
     * 
     * @param {string} promptMessage
     * @returns {Promise<string>}
     */
    async #getResponseFromTextInput(promptMessage) {
        return await vscode.window.showInputBox({prompt: promptMessage, ignoreFocusOut: true});
    }

    /**
     * 
     * @param {any[]} choices
     * @param {string} promptMessage
     * @returns {Promise<any>} 
     */
    async #getResponseFromChoice(choices, promptMessage) {
        return await vscode.window.showQuickPick(choices, {canPickMany: false, ignoreFocusOut: true, placeHolder: promptMessage})
    }
    /**
     * 
     * @param {any[]} choices
     * @param {string} promptMessage
     * @returns {Promise<any[]>} 
     */
    async #getResponseFromMultipleChoice(choices, promptMessage) {
        return await vscode.window.showQuickPick(choices, {canPickMany: true, ignoreFocusOut: true, placeHolder: promptMessage })
    }
}