/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TreeItem, TreeItemCollapsibleState} from 'vscode';


export class ArtifactNode extends TreeItem {
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
        
    }    
}