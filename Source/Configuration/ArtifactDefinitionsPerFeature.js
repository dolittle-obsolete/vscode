/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ArtifactDefinition } from "./ArtifactDefinition";

export class ArtifactDefinitionsPerFeature {
    #featureId;
    #commands;
    #events;
    #eventSources;
    #readModels;
    #queries;
    /**
     *Creates an instance of ArtifactDefinitionsPerFeature.
     * @param {string} featureId
     * @param {{artifact: string, generation: number, type: string}[]} commands
     * @param {{artifact: string, generation: number, type: string}[]} events
     * @param {{artifact: string, generation: number, type: string}[]} eventSources
     * @param {{artifact: string, generation: number, type: string}[]} readModels
     * @param {{artifact: string, generation: number, type: string}[]} queries
     * @memberof ArtifactDefinitionsPerFeature
     */
    constructor (featureId, commands, events, eventSources, readModels, queries) {
        this.#featureId = featureId;
        this.#commands = commands? commands.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)) : [];
        this.#events = events? events.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)) : [];
        this.#eventSources = eventSources? eventSources.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)) : [];
        this.#readModels = readModels? readModels.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)) : [];
        this.#queries = queries? queries.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)) : [];
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {string}
     */
    get featureId() {
        return this.#featureId;
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get commands() {
        return this.#commands;
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get events() {
        return this.#events;
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get eventSources() {
        return this.#eventSources;
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get readModels() {
        return this.#readModels;
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get queries() {
        return this.#queries.get(this);
    }
}