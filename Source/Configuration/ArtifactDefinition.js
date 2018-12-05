

export class ArtifactDefinition {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} artifact
     * @param {number} generation
     * @param {string} type
     * @memberof ArtifactDefinition
     */
    constructor (artifact, generation, type) {
        this.artifact = artifact;
        this.generation = generation;
        this.type = type;
        
    }

    get name() {
        return this.type.split(',')[0].split('.').pop();
    }
    get area() {
        return this.type.split(',')[1].trim();
    }
}