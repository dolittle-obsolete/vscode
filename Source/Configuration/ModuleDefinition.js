/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { FeatureDefinition } from "./FeatureDefinition";

/**
 * Represents the feature id
 * @typedef {string} Feature
 */

export class ModuleDefinition {
    #name: string;
    #features: Map<Feature, FeatureDefinition>;
    /**
     *Creates an instance of ModuleDefinition.
     * @param {string} name
     * @param {Map<Feature, FeatureDefinition>} features
     * @memberof ModuleDefinition
     */
    constructor (name, features) {
        this.#name = name;
        let featureMap = new Map();
        if (features) {
            Object.keys(features).forEach(feature => {
                let obj = features[feature];
                featureMap.set(feature, new FeatureDefinition(obj.name, obj.subFeatures))
            });
        }
        this.#features = featureMap;
        
    }
    /**
     * Gets the name of the module
     *
     * @readonly
     * @memberof ModuleDefinition
     */
    get name() {
        return this.#name;
    }
    /**
     * Gets the map of features
     *
     * @readonly
     * @memberof ModuleDefinition
     */
    get features() {
        return this.#features;
    }
    /**
     * Finds a specific feature
     *
     * @param {Feature} feature The feature id
     * @returns {FeatureDefinition | null}
     * @memberof ModuleDefinition
     */
    findFeature(feature) {
        if (this.features.has(feature)) return this.features.get(feature);
        for (let [featureId, featureObj] of this.features) {
            let res = featureObj.findFeature(feature); 
            if (res) return res;
        }
        return null;
    }
}