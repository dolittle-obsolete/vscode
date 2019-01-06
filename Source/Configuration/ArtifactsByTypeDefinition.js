/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ArtifactDefinition } from "./ArtifactDefinition";

/**
 * Represents the Feature id
 * @typedef {string} Feature 
 */


export class ArtifactsByTypeDefinition {
    #commands: Map<string, ArtifactDefinition>;
    #events: Map<string, ArtifactDefinition>;
    #eventSources: Map<string, ArtifactDefinition>;
    #readModels: Map<string, ArtifactDefinition>;
    #queries: Map<string, ArtifactDefinition>;
    /**
     *Creates an instance of {ArtifactsByTypeDefinition}.
     * @param {Map<Feature, ArtifactDefinition>} commands
     * @param {Map<Feature, ArtifactDefinition>} events
     * @param {Map<Feature, ArtifactDefinition>} eventSources
     * @param {Map<Feature, ArtifactDefinition>} readModels
     * @param {Map<Feature, ArtifactDefinition>} queries
     * @memberof ArtifactsByTypeDefinition
     */
    constructor (commands, events, eventSources, readModels, queries) {
        let commandsMap = new Map();
        let eventsMap = new Map();
        let eventSourcesMap = new Map();
        let readModelsMap = new Map();
        let queriesMap = new Map();

        if (commands) {
            Object.keys(commands).forEach( feature => {
                let obj = commands[feature];
                commandsMap.set(feature, new ArtifactDefinition(obj.generation, obj.type));
            });
        }
        if (events) {
            Object.keys(events).forEach( feature => {
                let obj = events[feature];
                eventsMap.set(feature, new ArtifactDefinition(obj.generation, obj.type));
            });
        }
        if (eventSources) {
            Object.keys(eventSources).forEach( feature => {
                let obj = eventSources[feature];
                eventSourcesMap.set(feature, new ArtifactDefinition(obj.generation, obj.type));
            });
        }
        if (readModels) {
            Object.keys(readModels).forEach( feature => {
                let obj = readModels[feature];
                readModelsMap.set(feature, new ArtifactDefinition(obj.generation, obj.type));
            });
        }
        if (queries) {
            Object.keys(queries).forEach( feature => {
                let obj = queries[feature];
                queriesMap.set(feature, new ArtifactDefinition(obj.generation, obj.type));
            });
        }
        this.#commands = commandsMap;
        this.#events = eventsMap;
        this.#eventSources = eventSourcesMap;
        this.#readModels = readModelsMap;
        this.#queries = queriesMap;
    }
    /**
     * Gets the command artifact definition map
     *
     * @readonly
     * @memberof ArtifactsByTypeDefinition
     */
    get commands() {
        return this.#commands;
    }
    /**
     * Gets the event artifact definition map
     *
     * @readonly
     * @memberof ArtifactsByTypeDefinition
     */
    get events() {
        return this.#events;
    }
    /**
     * Gets the event source artifact definition map
     *
     * @readonly
     * @memberof ArtifactsByTypeDefinition
     */
    get eventSources() {
        return this.#eventSources;
    }
    /**
     * Gets the read model artifact definition map
     *
     * @readonly
     * @memberof ArtifactsByTypeDefinition
     */
    get readModels() {
        return this.#readModels;
    }
    /**
     * Gets the query artifact definition map
     *
     * @readonly
     * @memberof ArtifactsByTypeDefinition
     */
    get queries() {
        return this.#queries;
    }
}