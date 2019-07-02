/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { INamespace } from '@dolittle/tooling.common.commands';
import { CommandListItem, CommandItem, CommandGroupItem } from '../index';

/**
 * Represents an implementation of {CommandListItem} for a namespace
 *
 * @export
 * @class CommandGroupItem
 * @extends {CommandListItem}
 */
export class NamespaceItem extends CommandListItem {
    
    /**
     * Instantiates an instance of {CommandGroupItem}.
     * @param {INamespace} namespace
     */
    constructor(namespace: INamespace) {
        let commandListItems: CommandListItem[] = [];

        commandListItems.push(...namespace.commands.map( _ => new CommandItem(_)));
        commandListItems.push(...namespace.commandGroups.map(_ => new CommandGroupItem(_)));
        super(namespace.name, 'Namespace', namespace.shortDescription, commandListItems, undefined, undefined, namespace)
    }
} 