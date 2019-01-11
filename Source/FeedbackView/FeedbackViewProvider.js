/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IssuesNode } from './IssuesNode';
import { TweetNode } from './TweetNode';
const vscode = require('vscode');

const nodes = [
    new IssuesNode(),
    new TweetNode()

]

export class FeedbackViewProvider {
    #onDidChangeTreeData;
    /**
     *Creates an instance of {FeedbackViewProvider}.
     * @memberof BoundedContextNodeProvider
     */
    constructor() {    
        this.#onDidChangeTreeData = new vscode.EventEmitter();
    }
    /**
     * 
     *
     * @readonly
     * @memberof BoundedContextNodeProvider
     */
    get onDidChangeTreeData() {
        return this.#onDidChangeTreeData.event;
    }

    refresh() {
        this.#onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
        return element;
    }

    /**
     * Gets the children nodes
     *
     * @param {BoundedContextNode | ModuleNode | FeatureNode} element
     * @memberof BoundedContextNodeProvider
     * @returns {Promise<any[]>}
     */
    getChildren(element) {
        if (element === undefined) {
            return Promise.resolve(nodes);
        }
    }
    

}
