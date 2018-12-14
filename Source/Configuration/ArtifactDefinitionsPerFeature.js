import { ArtifactDefinition } from "./ArtifactDefinition";

const _featureId = new WeakMap();
const _commands = new WeakMap();
const _events = new WeakMap();
const _eventSources = new WeakMap();
const _readModels = new WeakMap();
const _queries = new WeakMap();
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
        _featureId.set(this, featureId);
        _commands.set(this, commands.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)));
        _events.set(this, events.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)));
        _eventSources.set(this, eventSources.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)));
        _readModels.set(this, readModels.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)));
        _queries.set(this, queries.map(artifact => new ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type)));
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {string}
     */
    get featureId() {
        return _featureId.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get commands() {
        return _commands.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get events() {
        return _events.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get eventSources() {
        return _eventSources.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get readModels() {
        return _readModels.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {ArtifactDefinition[]}
     */
    get queries() {
        return _queries.get(this);
    }
}