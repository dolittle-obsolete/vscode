/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { TreeItem, TreeItemCollapsibleState, commands } from "vscode";
const path = require('path');

export class SampleNode extends TreeItem {
    constructor() {
        super('Struggling getting started? Take a look at a sample!', TreeItemCollapsibleState.None);
        super.iconPath = path.join(__filename, '..', '..', '..', 'Resources', 'GitHub-Mark-Light-32px.png');
        super.command = {command: 'dolittle.feedbackView.sample', title: 'Sample'};
    }
}