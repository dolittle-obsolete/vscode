/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';
import { ModuleNode } from './ModuleNode';

export class BoundedContextNode extends TreeItem {
    #childNodes;
    /**
     *Creates an instance of BoundedContextNode.
     * @param {string} label Bounded context name
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id The Bounded context id
     * @memberof BoundedContextNode
     */
    constructor (label, collapsibleState, id) {
        super(`${label} - Bounded Context`, collapsibleState);
        super.tooltip = `id: '${id}'`;
        this.#childNodes = [];
    }
    /**
     * Gets the features of this bounded context
     *
     * @readonly
     * @memberof BoundedContextNode
     * @returns {FeatureNode[]}
     */
    get children() {
        return this.#childNodes;
    }
    /**
     * Adds a feature to the bounded context
     *
     * @param {FeatureNode | ModuleNode} feature
     * @memberof BoundedContextNode
     */
    addChildNode(feature) {
        this.#childNodes.push(feature);
    }
    
}