/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BoundedContext } from "./BoundedContext";
import { ArtifactDefinitionsPerFeature } from "./ArtifactDefinitionsPerFeature";
import { fileExistsSync, readJsonFromFileSync } from "../helpers";

const path = require('path');

/**
 * 
 *
 * @param {string} corePath
 * @returns {Artifacts}
 */
export function getArtifactsFromCore(corePath) {
    const artifactsPath = path.join(corePath, '.dolittle',  'artifacts.json');
    if (! fileExistsSync(artifactsPath)) throw `Couldn't find file at path '${artifactsPath}'`;

    return new Artifacts(readJsonFromFileSync(artifactsPath).artifacts);
}
export class Artifacts {
    #artifacts;
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
        this.#artifacts = artifactsMap;
    }
    /**
     *
     * @readonly
     * @memberof Artifacts
     * @returns {Map<string, ArtifactDefinitionsPerFeature>}
     */
    get artifacts() {
        return this.#artifacts;
    }
}