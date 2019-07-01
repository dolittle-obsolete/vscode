/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { fileExistsSync, readJsonFromFileSync } from "../helpers";
import { ModuleDefinition } from "./ModuleDefinition";
import { FeatureDefinition } from "./FeatureDefinition";

/**
 * Represents the module id
 * @typedef {string} Module 
 */
/**
 * Represents the feature id
 * @typedef {string} Feature 
 */
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

    let topology = readJsonFromFileSync(topologyPath);
    return new Topology(topology.modules, topology.features);
}
export class Topology {
    #modules: Map<Module, ModuleDefinition>;
    #features: Map<Feature, FeatureDefinition>;
    /**
     * Creates an instance of {Topology}.
     * @param {Map<Module, ModuleDefinition>} modules
     * @param {Map<Feature, FeatureDefinition>} features
     * @memberof Artifacts
     */
    constructor (modules, features) {
        let modulesMap = new Map();
        let featuresMap = new Map();
        if (modules) {
            Object.keys(modules).forEach( module => {
                let obj = modules[module];
                modulesMap.set(module, new ModuleDefinition(obj.name, obj.features));
            });
        }
        if (features) {
            Object.keys(features).forEach( feature => {
                let obj = features[feature];
                featuresMap.set(feature, new FeatureDefinition(obj.name, obj.subFeatures));
            });
        }
        this.#modules = modulesMap;
        this.#features = featuresMap;
    }
    /**
     * Gets the map of modules
     *
     * @readonly
     * @memberof Topology
     */
    get modules() {
        return this.#modules;
    }
    /**
     * Gets the map of features
     *
     * @readonly 
     * @memberof Topology
     */
    get features() {
        return this.#features;
    }
    /**
     * Gets whether or not the topology has modules or not 
     *
     * @returns {boolean}
     * @memberof Topology
     */
    hasModules() {
        return this.modules.length > 0;
    }
    /**
     * Finds a specific feature
     *
     * @param {Feature} feature The feature id
     * @returns {FeatureDefinition}
     * @memberof Topology
     */
    findFeature(feature) {
        if (this.hasModules()) {
            if (this.modules.has(feature)) return this.modules.get(feature);
            for ( let [moduleId, moduleObj] of this.modules) {
                let res = moduleObj.findFeature(feature);
                if (res) return res;
            };
        }
        else {
            if (this.features.has(feature)) return this.features.get(feature);
            for (let [featureId, featureObj] of this.features) {
                let res = featureObj.findFeature(feature);
                if (res) return res;
            }
        }
        return null;
    }

}