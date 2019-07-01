/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IssuesNode } from './IssuesNode';
import { TweetNode } from './TweetNode';
import { SampleNode } from './SampleNode';
import { DocumentationNode } from './DocumentationNode';
const vscode = require('vscode');

const nodes = [
    new IssuesNode(),
    new TweetNode(),
    new SampleNode(),
    new DocumentationNode()
];

export class UsefulLinksViewProvider {
    #onDidChangeTreeData;
    
    constructor() {    
        this.#onDidChangeTreeData = new vscode.EventEmitter();
    }
    get onDidChangeTreeData() {
        return this.#onDidChangeTreeData.event;
    }

    refresh() {
        this.#onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
        return element;
    }

    getChildren(element) {
        if (element === undefined) {
            return Promise.resolve(nodes);
        }
    }
    

}
