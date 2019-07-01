/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TreeItem, TreeItemCollapsibleState} from 'vscode';

export class ArtifactNode extends TreeItem {
    #artifactType: string;
    #id: string;
    /**
     *Creates an instance of ArtifactNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id
     * @param {string} artifactType
     * @memberof ArtifactNode
     */
    constructor (label, collapsibleState, id, artifactType) {
        super(`${label} - ${artifactType}`, collapsibleState);
        super.tooltip = `Artifact id: '${id}'`;
        super.contextValue = 'artifact';
        // super.iconPath = Set icon  
        this.#artifactType = artifactType;
        this.#id = id;

        // TODO: Each artifact type should have its own image 
    }    
    /**
     * Gets the artifact type
     *
     * @readonly
     * @memberof ArtifactNode
     */
    get artifactType() {
        return this.#artifactType;
    }
    /**
     * Gets the id
     *
     * @readonly
     * @memberof ArtifactNode
     */
    get id() {
        return this.#id;
    }

    //TODO: Add functionality to edit and delete artifacts here that deletes / edits the actual entry from the configuration
    
}