/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommand } from '@dolittle/tooling.common.commands';
import { CommandListItem } from '../index';

/**
 * Represents an implementation of {CommandListItem} for a command
 *
 * @export
 * @class CommandItem
 * @extends {CommandListItem}
 */
export class CommandItem extends CommandListItem {
    /**
     * Instantiates an instance of {CommandItem}.
     * @param {ICommand} cmd
     */
    constructor(cmd: ICommand) {
        super(cmd.name, 'Command', cmd.shortDescription, [], cmd);
    }
} 