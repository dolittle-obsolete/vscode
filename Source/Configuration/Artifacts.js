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
export class Artifacts {
    /**
     * Creates an instance of Artifacts.
     * @param {any} artifacts 
     * @memberof Artifacts
     */
    constructor (artifacts) {
        this._artifacts = new Map();
        Object.keys(artifacts).forEach(key => {
            let artifactsPerFeature = artifacts[key];
            this._artifacts.set(key, new ArtifactDefinitionsPerFeature(
                key, 
                artifactsPerFeature.commands, 
                artifactsPerFeature.events, 
                artifactsPerFeature.eventSources, 
                artifactsPerFeature.readModels,
                artifactsPerFeature.queries));
        });
    }
    /**
     *
     * @returns {Map<string, ArtifactDefinitionsPerFeature>}
     * @readonly
     * @memberof Artifacts
     */
    get artifacts() {
        return this._artifacts;
    }
}