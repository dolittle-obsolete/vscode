import { Feature } from "./Feature";

export class ModuleDefinition {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} module
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} features
     * @memberof ArtifactDefinition
     */
    constructor (module, name, features) {
        this.module = module;
        this.name = name;
        this.features = features.map(feature => new Feature(feature.feature, feature.name, feature.subFeatures));
        
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