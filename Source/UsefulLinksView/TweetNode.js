/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { TreeItem, TreeItemCollapsibleState, commands } from "vscode";
const path = require('path');

export class TweetNode extends TreeItem {
    constructor() {
        super('Give us a tweet', TreeItemCollapsibleState.None);
        super.iconPath = path.join(__filename, '..', '..', '..', 'Resources', 'Twitter_Social_Icon_Circle_Color.png');
        super.command = {command: 'dolittle.usefulLinksView.tweet', title: 'Tweet'};
    }
}