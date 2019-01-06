/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents the feature id
 * @typedef {string} Feature
 */

export class FeatureDefinition {
    #name: string;
    #subFeatures: Map<Feature, FeatureDefinition>;
    /**
     *Creates an instance of {FeatureDefinition}.
     * @param {string} name
     * @param {Map<Feature, FeatureDefinition>} subFeatures
     * @memberof FeatureDefinition
     */
    constructor (name, subFeatures) {
        this.#name = name;
        let subFeatureMap = new Map();
        if (subFeatures) {
            Object.keys(subFeatures).forEach(subFeature => {
                let obj = subFeatures[subFeature];
                subFeatureMap.set(subFeature, new FeatureDefinition(obj.name, obj.subFeatures))
            });
        }
        this.#subFeatures = subFeatureMap;
        
    }
    /**
     * Gets the name of the feature
     *
     * @readonly
     * @memberof FeatureDefinition
     */
    get name() {
        return this.#name;
    }
    /**
     * Gets the map of sub features
     *
     * @readonly
     * @memberof FeatureDefinition
     */
    get subFeatures() {
        return this.#subFeatures;
    }
    /**
     * Finds a specific feature
     *
     * @param {Feature} feature The feature id
     * @returns {FeatureDefinition | null}
     * @memberof FeatureDefinition
     */
    findFeature(feature) {
        if (this.subFeatures.has(feature)) return this.subFeatures.get(feature);
        for (let [subFeatureId, subFeatureObj] of this.subFeatures) {
            let res = subFeatureObj.findFeature(feature);
            if (res) return res;
        }
        return null;
    }
}