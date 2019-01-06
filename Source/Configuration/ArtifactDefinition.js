/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class ArtifactDefinition {
    #artifact;
    #generation;
    #type;
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} artifact
     * @param {number} generation
     * @param {string} type
     * @memberof ArtifactDefinition
     */
    constructor (artifact, generation, type) {
        this.#artifact = artifact;
        this.#generation = generation;
        this.#type = type;
        
    }
    get artifact() {
        return this.#artifact;
    }
    get generation() {
        return this.#generation;
    }
    get type() {
        return this.#type;
    }
    /**
     * Gets the name of the artifact
     *
     * @readonly
     * @memberof ArtifactDefinition
     */
    get name() {
        return this.#type.split(',')[0].split('.').pop();
    }
    /**
     * Gets the artifact area
     *
     * @readonly
     * @memberof ArtifactDefinition
     */
    get area() {
        return this.#type.split(',')[1].trim();
    }
}