import { Feature } from "./Feature";

const _module = new WeakMap();
const _name = new WeakMap();
const _features = new WeakMap();
export class ModuleDefinition {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} module
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} features
     * @memberof ArtifactDefinition
     */
    constructor (module, name, features) {
        _module.set(this, module);
        _name.set(this, name);
        _features.set(this, features.map(feature => new Feature(feature.feature, feature.name, feature.subFeatures)));
        
    }
    /**
     * 
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {string}
     */
    get module() {
        return _module.get(this);
    }
    /**
     * 
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {string}
     */
    get name() {
        return _name.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {Feature[]}
     */
    get features() {
        return _features.get(this);
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