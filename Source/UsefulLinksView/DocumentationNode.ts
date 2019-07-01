/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { LinkNode } from "./LinkNode";
import path from 'path';

export class DocumentationNode extends LinkNode {
    constructor() {
        super('Documentation', 'dolittle.usefulLinksView.documentation', 'Documentation', 'Read the dolittle documentation', 
            path.join(__filename, '..', '..', '..', 'Resources', 'iconfinder_Info_Circle_Symbol_Information_Letter_1396823.png')
        );
    }
}
