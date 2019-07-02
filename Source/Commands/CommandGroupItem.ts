/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommandGroup } from '@dolittle/tooling.common.commands';
import { CommandListItem, CommandItem } from '../index';

/**
 * Represents an implementation of {CommandListItem} for a command group
 *
 * @export
 * @class CommandGroupItem
 * @extends {CommandListItem}
 */
export class CommandGroupItem extends CommandListItem {
    
    /**
     * Instantiates an instance of {CommandGroupItem}.
     * @param {ICommandGroup} commandGroup
     */
    constructor(commandGroup: ICommandGroup) {
        super(commandGroup.name, 'Command Group', commandGroup.shortDescription, commandGroup.commands.map(_ => new CommandItem(_)), undefined, commandGroup)
    }
} 