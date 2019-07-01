/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';
import { ModuleNode } from './ModuleNode';

export class BoundedContextNode extends TreeItem {
    #id: string;
    #childNodes: FeatureNode[] | ModuleNode[];
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
        super.contextValue = 'boundedContext';
        
        this.#id = id;
        this.#childNodes = [];
        
    }
    /**
     * Gets the bounded context's id
     *
     * @readonly
     * @memberof BoundedContextNode
     */
    get id() {
        return this.#id;
    }
    /**
     * Gets the child nodes
     *
     * @readonly
     * @memberof BoundedContextNode
     */
    get childNodes() {
        return this.#childNodes;
    }
    /**
     * Gets the feature- and module-nodes of this bounded context
     *
     * @readonly
     * @memberof BoundedContextNode
     */
    get children() {
        return this.childNodes;
    }
    /**
     * Adds a feature or module to the bounded context
     *
     * @param {FeatureNode | ModuleNode} node
     * @memberof BoundedContextNode
     */
    addChildNode(node) {
        this.#childNodes.push(node);
    }
    
}