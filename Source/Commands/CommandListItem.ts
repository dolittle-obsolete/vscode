/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommand, INamespace, ICommandGroup } from '@dolittle/tooling.common.commands';
import {QuickPickItem} from 'vscode';

/**
 * Represents an abstract implementation of {QuickPickItem}
 *
 * @export
 * @abstract
 * @class CommandListItem
 * @implements {QuickPickItem}
 */
export abstract class CommandListItem implements QuickPickItem {
    label: string;
    description: string;
    detail: string;

    constructor(name: string, type: string, shortDescription: string, public commandListItems: CommandListItem[] = [], public command?: ICommand, public commandGroup?: ICommandGroup, public namespace?: INamespace ) {
        this.label = name;
        this.description = type;
        this.detail = shortDescription;
    }


}