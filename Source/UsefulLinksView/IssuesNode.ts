/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { LinkNode } from "./LinkNode";
import path from 'path';

export class IssuesNode extends LinkNode {
    constructor() {
        super('Report issue', 'dolittle.usefulLinksView.issues', 'Issues', 'Report issues', 
            path.join(__filename, '..', '..', '..', 'Resources', 'GitHub-Mark-Light-32px.png')
        );
    }
}