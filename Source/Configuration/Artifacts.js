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

    return new Artifacts(readJsonFromFileSync(artifactsPath));
}
export class Artifacts {
    /**
     * Creates an instance of Artifacts.
     * @param {ArtifactDefinitionsPerFeature[]} artifacts
     * @memberof Artifacts
     */
    constructor (artifacts) {
        this.artifacts = artifacts;
    }
}