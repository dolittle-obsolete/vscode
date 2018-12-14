import { BoundedContextConfiguration } from "./BoundedContextConfiguration";
import { ArtifactDefinitionsPerFeature } from "./ArtifactDefinitionsPerFeature";
import { fileExistsSync, readJsonFromFileSync } from "../helpers";

/**
 * 
 *
 * @param {string} corePath
 * @returns {Artifacts}
 */
export function getArtifactsFromCore(corePath) {
    const path = require('path');
    const artifactsPath = path.join(corePath, '.dolittle',  'artifacts.json');
    if (! fileExistsSync(artifactsPath)) throw `Couldn't find file at path '${artifactsPath}'`;

    return new Artifacts(readJsonFromFileSync(artifactsPath).artifacts);
}
const _artifacts = new WeakMap();
export class Artifacts {
    /**
     * Creates an instance of Artifacts.
     * @param {any} artifacts 
     * @memberof Artifacts
     */
    constructor (artifacts) {
        let artifactsMap = new Map();
        Object.keys(artifacts).forEach(key => {
            let artifactsPerFeature = artifacts[key];
            artifactsMap.set(key, new ArtifactDefinitionsPerFeature(
                key, 
                artifactsPerFeature.commands, 
                artifactsPerFeature.events, 
                artifactsPerFeature.eventSources, 
                artifactsPerFeature.readModels,
                artifactsPerFeature.queries));
        });
        _artifacts.set(this, artifactsMap);
    }
    /**
     *
     * @readonly
     * @memberof Artifacts
     * @returns {Map<string, ArtifactDefinitionsPerFeature>}
     */
    get artifacts() {
        return _artifacts.get(this);
    }
}