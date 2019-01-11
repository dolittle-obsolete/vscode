/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { TreeItem, TreeItemCollapsibleState, commands } from "vscode";
const path = require('path');

export class IssuesNode extends TreeItem {
    constructor() {
        super('Having issues?', TreeItemCollapsibleState.None);
        super.iconPath = path.join(__filename, '..', '..', '..', 'Resources', 'GitHub-Mark-Light-32px.png');
        super.command = {command: 'dolittle.usefulLinksView.issues', title: 'Issues'};
    }
}