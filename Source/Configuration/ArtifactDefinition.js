/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class ArtifactDefinition {
    #generation: number;
    #type: string;
    #name: string;
    #area: string;
    /**
     * Creates an instance of {ArtifactDefinition}.
     * @param {number} generation
     * @param {string} type
     * @memberof ArtifactDefinition
     */
    constructor (generation, type) {
        this.#generation = generation;
        this.#type = type;
        
        let splittedType = type.split(',');
        this.#name = splittedType[0].split('.').pop();
        this.#area = splittedType[1].trim();
        
    }
    /**
     * Gets the generation
     *
     * @readonly
     * @memberof ArtifactDefinition
     */
    get generation() {
        return this.#generation;
    }
    /**
     * Gets the type string
     *
     * @readonly
     * @memberof ArtifactDefinition
     */
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
        return this.#name;
    }
    /**
     * Gets the artifact area
     *
     * @readonly
     * @memberof ArtifactDefinition
     */
    get area() {
        return this.#area;
    }
}