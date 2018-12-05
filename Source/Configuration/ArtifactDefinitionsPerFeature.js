import { ArtifactDefinition } from "./ArtifactDefinition";


export class ArtifactDefinitionsPerFeature {
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
        this.featureId = featureId;
        this.commands = commands.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type));
        this.events = events.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type));
        this.eventSources = eventSources.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type));
        this.readModels = readModels.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type));
        this.queries = queries.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type));
    }
}