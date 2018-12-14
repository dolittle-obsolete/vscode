
const _artifact = new WeakMap();
const _generation = new WeakMap();
const _type = new WeakMap();

export class ArtifactDefinition {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} artifact
     * @param {number} generation
     * @param {string} type
     * @memberof ArtifactDefinition
     */
    constructor (artifact, generation, type) {
        _artifact.set(this, artifact);
        _generation.set(this, generation);
        _type.set(this, type);
        
    }
    get artifact() {
        return _artifact.get(this);
    }
    get generation() {
        return _generation.get(this);
    }
    get type() {
        return _type.get(this);
    }

    name() {
        return this.type.split(',')[0].split('.').pop();
    }
    area() {
        return this.type.split(',')[1].trim();
    }
}