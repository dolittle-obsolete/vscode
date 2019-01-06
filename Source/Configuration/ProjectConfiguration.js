/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { BoundedContext, loadBoundedContextConfigurations } from "./BoundedContext";
import { loadApplicationConfiguration, Application } from "./Application";

/**
 * Loads the project configuration
 * @export
 * @returns {Promise<ProjectConfiguration>}
 */
export async function loadProjectConfiguration() {
    let application = await loadApplicationConfiguration();
    let boundedContexts = await loadBoundedContextConfigurations();
    return new ProjectConfiguration(application, boundedContexts);
    
}

export class ProjectConfiguration {
    #application: Application;
    #boundedContexts: BoundedContext[];
    /**
     *Creates an instance of ProjectConfiguration.
     * @param {Application} application
     * @param {BoundedContext[]} boundedContexts
     * @memberof ProjectConfiguration
     */
    constructor(application, boundedContexts) {
        this.#application = application;
        this.#boundedContexts = boundedContexts;
    }
    /**
     * Gets the application configuration for this project
     * 
     * @readonly
     * @memberof ProjectConfiguration
     */
    get application() {
        return this.#application;
    }
    /**
     * Gets the bounded contexts of this project
     * 
     * @readonly
     * @memberof ProjectConfiguration
     */
    get boundedContexts() {
        return this.#boundedContexts;
    }
}