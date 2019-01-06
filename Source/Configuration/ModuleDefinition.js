/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Feature } from "./Feature";

export class ModuleDefinition {
    #module;
    #name;
    #features;
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} module
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} features
     * @memberof ArtifactDefinition
     */
    constructor (module, name, features) {
        this.#module = module;
        this.#name = name;
        this.#features = features? features.map(feature => new Feature(feature.feature, feature.name, feature.subFeatures)) : [];
        
    }
    /**
     * 
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {string}
     */
    get module() {
        return this.#module;
    }
    /**
     * 
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {string}
     */
    get name() {
        return this.#name;
    }
    /**
     *
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {Feature[]}
     */
    get features() {
        return this.#features;
    }
    /**
     *
     *
     * @param {string} feature The feature id
     * @returns {Feature}
     * @memberof ModuleDefinition
     */
    findFeature(feature) {
        for (let featureToSearch of this.features) {
            let res = featureToSearch.findFeature(feature); 
            if (res !== null) return res;
        }
        return null;
    }
}