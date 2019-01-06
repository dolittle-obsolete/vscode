/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class Feature {
    #feature;
    #name;
    #subFeatures;
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} feature
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} subFeatures
     * @memberof ArtifactDefinition
     */
    constructor (feature, name, subFeatures) {
        this.#feature = feature;
        this.#name = name;
        this.#subFeatures = subFeatures? subFeatures.map(subFeature => new Feature(subFeature.feature, subFeature.name, subFeature.subFeatures)) : [];
        
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {string}
     */
    get feature() {
        return this.#feature;
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {string}
     */
    get name() {
        return this.#name;
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {Feature[]}
     */
    get subFeatures() {
        return this.#subFeatures;
    }
    /**
     * 
     *
     * @param {string} feature The feature id
     * @returns {Feature}
     * @memberof Feature
     */
    findFeature(feature) {
        if (feature === this.feature) {
            return this;
        }
        for (let subFeature of this.subFeatures) {
            let res = subFeature.findFeature(feature);
            if (res !== null) return res;
        }
        return null;
    }
}