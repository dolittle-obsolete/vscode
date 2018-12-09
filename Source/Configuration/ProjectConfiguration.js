/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { BoundedContextConfiguration, loadBoundedContextConfigurations } from "./BoundedContextConfiguration";
import { loadApplicationConfiguration, ApplicationConfiguration } from "./ApplicationConfiguration";

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

const _application = new WeakMap();
const _boundedContexts = new WeakMap();
export class ProjectConfiguration {
    
    /**
     *Creates an instance of ProjectConfiguration.
     * @param {ApplicationConfiguration} application
     * @param {BoundedContextConfiguration[]} boundedContexts
     * @memberof ProjectConfiguration
     */
    constructor(application, boundedContexts) {
        _application.set(this, application);
        _boundedContexts.set(this, boundedContexts);
    }
    /**
     * Gets the application configuration for this project
     * @readonly
     * @memberof ProjectConfiguration
     * @returns {ApplicationConfiguration}
     */
    get application() {
        return _application.get(this);
    }
    /**
     * Gets the bounded contexts of this project
     * @returns {BoundedContextConfiguration[]}
     * @readonly
     * @memberof ProjectConfiguration
     */
    get boundedContexts() {
        return _boundedContexts.get(this);
    }
}