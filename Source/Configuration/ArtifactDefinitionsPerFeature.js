import { ArtifactDefinition } from "./ArtifactDefinition";


export class ArtifactDefinitionsPerFeature {
    /**
     *Creates an instance of ArtifactDefinitionsPerFeature.
     * @param {string} featureId
     * @param {ArtifactDefinition[]} commands
     * @param {ArtifactDefinition[]} events
     * @param {ArtifactDefinition[]} eventSources
     * @param {ArtifactDefinition[]} readModels
     * @param {ArtifactDefinition[]} queries
     * @memberof ArtifactDefinitionsPerFeature
     */
    constructor (featureId, commands, events, eventSources, readModels, queries) {
        this.featureId = featureId;
        this.commands = commands;
        this.events = events;
        this.eventSources = eventSources;
        this.readModels = readModels;
        this.queries = queries;
    }
}