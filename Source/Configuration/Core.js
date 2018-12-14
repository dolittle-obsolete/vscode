/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
  * Represents a Bounded Context's core configuration
  */

const _language = new WeakMap();
export class Core
{
    /**
      * Instantiates an instance of Core
      * @param {string} language 
      */
    constructor (language) {
        _language.set(this, language);
    }
    /**
      * Gets the programming language
      * @returns {string} The string representing the programming language
      */
    get language() {
        return _language.get(this);
    }
    
}