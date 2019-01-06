/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ArtifactsByTypeDefinition } from "./ArtifactsByTypeDefinition";
import { fileExistsSync, readJsonFromFileSync } from "../helpers";

const path = require('path');

/**
 * Represents the Feature id
 * @typedef {string} Feature 
 */


/**
 * 
 *
 * @param {string} corePath
 * @returns {Artifacts}
 */
export function getArtifactsFromCore(corePath) {
    const artifactsPath = path.join(corePath, '.dolittle',  'artifacts.json');
    if (! fileExistsSync(artifactsPath)) throw `Couldn't find file at path '${artifactsPath}'`;

    return new Artifacts(readJsonFromFileSync(artifactsPath));
}
export class Artifacts {
    #artifacts: Map<Feature, ArtifactsByTypeDefinition>;
    /**
     * Creates an instance of Artifacts.
     * @param {Map<Feature, ArtifactsByTypeDefinition} artifacts 
     * @memberof Artifacts
     */
    constructor (artifacts) {
        let artifactsMap = new Map();
        if (artifacts) {
            Object.keys(artifacts).forEach(key => {
                let artifactsPerFeature = artifacts[key];
                artifactsMap.set(key, new ArtifactsByTypeDefinition(
                    artifactsPerFeature.commands, 
                    artifactsPerFeature.events, 
                    artifactsPerFeature.eventSources, 
                    artifactsPerFeature.readModels,
                    artifactsPerFeature.queries));
            });    
        }
        this.#artifacts = artifactsMap;
    }
    /**
     * Gets the artifacts map of the artifacts configuration
     * 
     * @readonly
     * @memberof Artifacts
     */
    get artifacts() {
        return this.#artifacts;
    }
}