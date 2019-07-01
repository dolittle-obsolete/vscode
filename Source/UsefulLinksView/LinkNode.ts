/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import * as vscode from 'vscode';
import { ILinkNode } from './ILinkNode';

/**
 * Represents a base implementation of {ILinkNode} and {vscode.TreeItem}
 *
 * @export
 * @class LinkNode
 * @extends {vscode.TreeItem}
 * @implements {ILinkNode}
 */
export class LinkNode extends vscode.TreeItem implements ILinkNode {

    /**
     * Instantiates an instance of {LinkNode}.
     * @param {string} label
     * @param {string} command
     * @param {string} commandTitle
     * @param {string} [commandTooltip]
     * @param {(string | vscode.Uri)} [iconPath]
     */
    constructor(label: string, command: string, commandTitle: string, commandTooltip?: string, iconPath?: string | vscode.Uri) {
        super(label, vscode.TreeItemCollapsibleState.None);
        super.command = {command, title: commandTitle, tooltip: commandTooltip};
        super.iconPath = iconPath;

    }
} 