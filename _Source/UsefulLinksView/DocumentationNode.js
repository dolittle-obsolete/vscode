/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { TreeItem, TreeItemCollapsibleState, commands } from "vscode";
const path = require('path');

export class DocumentationNode extends TreeItem {
    constructor() {
        super('Read the Dolittle documentation!', TreeItemCollapsibleState.None);
        super.iconPath = path.join(__filename, '..', '..', '..', 'Resources', 'iconfinder_Info_Circle_Symbol_Information_Letter_1396823.png');
        super.command = {command: 'dolittle.usefulLinksView.documentation', title: 'Documentation'};
    }
}