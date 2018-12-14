
const _feature = new WeakMap();
const _name = new WeakMap();
const _subFeatures = new WeakMap();
export class Feature {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} feature
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} subFeatures
     * @memberof ArtifactDefinition
     */
    constructor (feature, name, subFeatures) {
        _feature.set(this, feature);
        _name.set(this, name);
        _subFeatures.set(this, subFeatures.map(subFeature => new Feature(subFeature.feature, subFeature.name, subFeature.subFeatures)));
        
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {string}
     */
    get feature() {
        return _feature.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {string}
     */
    get name() {
        return _name.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {Feature[]}
     */
    get subFeatures() {
        return _subFeatures.get(this);
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