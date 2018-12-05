

export class Feature {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} feature
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} subFeatures
     * @memberof ArtifactDefinition
     */
    constructor (feature, name, subFeatures) {
        this.feature = feature;
        this.name = name;
        this.subFeatures = subFeatures.map(subFeature => new Feature(subFeature.feature, subFeature.name, subFeature.subFeatures));
        
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