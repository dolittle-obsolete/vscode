/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { fileExistsSync, readJsonFromFileSync } from "../helpers";
import { ModuleDefinition } from "./ModuleDefinition";
import { Feature } from "./Feature";

/**
 * 
 *
 * @param {string} corePath
 * @returns {Topology}
 */
export function getTopologyFromCore(corePath) {
    const path = require('path');
    const topologyPath = path.join(corePath, '.dolittle',  'topology.json');
    if (! fileExistsSync(topologyPath)) throw `Couldn't find file at path '${topologyPath}'`;

    return new Topology(readJsonFromFileSync(topologyPath));
}
export class Topology {
    #modules;
    #features;
    /**
     * Creates an instance of Artifacts.
     * @param {{modules: {module: string, name: string, features: any[]}[], features: {feature: string, name: string, subFeatures: any[]}[]}} topology
     * @memberof Artifacts
     */
    constructor (topology) {
        this.#modules = topology && topology.modules? topology.modules.map(module => new ModuleDefinition(module.module, module.name, module.features)) : [];
        this.#features = topology && topology.features? topology.features.map(feature => new Feature(feature.feature, feature.name, feature.subFeatures)) : [];
    }
    /**
     *
     *
     * @readonly
     * @memberof Topology
     * @returns {ModuleDefinition[]}
     */
    get modules() {
        return this.#modules;
    }
    /**
     *
     *
     * @readonly 
     * @memberof Topology
     * @returns {Feature[]}
     */
    get features() {
        return this.#features;
    }

    hasModules() {
        return this.#modules.length > 0;
    }
    /**
     *
     *
     * @param {string} feature The feature id
     * @returns {Feature}
     * @memberof Topology
     */
    findFeature(feature) {
        if (this.hasModules()) {
            for ( let module of this.#modules) {
                let res = module.findFeature(feature);
                if (res !== null) return res;
            };
        }
        else {
            for (let featureToSearch of this.#features) {
                let res = featureToSearch.findFeature(feature);
                if (res !== null) return res;
            }
        }
        return null;
    }

}