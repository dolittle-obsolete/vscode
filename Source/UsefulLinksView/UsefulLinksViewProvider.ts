/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IssuesNode } from './IssuesNode';
import { TweetNode } from './TweetNode';
import { SamplesNode } from './SamplesNode';
import { DocumentationNode } from './DocumentationNode';
import * as vscode from 'vscode';
import { ILinkNode } from './ILinkNode';

const nodes = [
    new IssuesNode(),
    new TweetNode(),
    new SamplesNode(),
    new DocumentationNode()
];

export class UsefulLinksViewProvider implements vscode.TreeDataProvider<ILinkNode> {
    private _onDidChangeTreeData: vscode.EventEmitter<ILinkNode> = new vscode.EventEmitter<ILinkNode>();
    readonly onDidChangeTreeData = this._onDidChangeTreeData.event;
    
    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: ILinkNode) {
        return element;
    }

    async getChildren(element?: ILinkNode) {
        if (element === undefined) {
            return nodes;
        }
        return undefined;
    }
}
