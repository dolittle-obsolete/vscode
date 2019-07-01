/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
  * Represents a Bounded Context's core configuration
  */
export class Core
{
    #language: string;
    /**
      * Instantiates an instance of Core
      * @param {string} language 
      */
    constructor (language) {
        this.#language = language;
    }
    
    /**
     * Gets the core language
     *
     * @readonly
     * @memberof Core
     */
    get language() {
        return this.#language;
    }
    
}