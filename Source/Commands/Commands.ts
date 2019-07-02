/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommand, ICommandManager } from "@dolittle/tooling.common.commands";
import { IDependencyResolvers } from "@dolittle/tooling.common.dependencies";
import { ICanOutputMessages } from "@dolittle/tooling.common.utilities";
import * as vscode from 'vscode';
import { ICommands, CommandListItem, CommandItem, CommandGroupItem, NamespaceItem } from "../index";

export class Commands implements ICommands {

    constructor(private _commandManager: ICommandManager, private _dependencyResolvers: IDependencyResolvers,
        private _outputter: ICanOutputMessages) {}
    
    get commands() {
        let commands: ICommand[] = [];
        commands.push(...this._commandManager.commands);
        this._commandManager.commandGroups.forEach(_ => commands.push(..._.commands));
        this._commandManager.namespaces.forEach(namespace => {
            commands.push(...namespace.commands);
            namespace.commandGroups.forEach(_ => commands.push(..._.commands));
        })
        return commands;
    } 
    async executeCommand(editor: vscode.TextEditor) {
        const {command, allArguments} = await this.getCommand();
        if (command === undefined) {
            vscode.window.showErrorMessage('No such dolittle command');
        }
        else {
            this._outputter.print(`Resolved to command: '${command.name}'`);
            this._outputter.print(`All arguments: '${allArguments.join(' ')}'`)
            
        }
    }
    private async getCommand(): Promise<{command: ICommand | undefined, allArguments: string[]}> {
        let choices: CommandListItem[] = [];
        choices.push(...this._commandManager.commands.map(_ => new CommandItem(_)));
        choices.push(...this._commandManager.commandGroups.map(_ => new CommandGroupItem(_)));
        choices.push(...this._commandManager.namespaces.map(_ => new NamespaceItem(_)));
        
        let res = await vscode.window.showQuickPick(choices, {canPickMany: false, ignoreFocusOut: true});
        return this.promptForCommand(res);
    }
    private async promptForCommand(commandListItem: CommandListItem | undefined, allArguments: string[] = []): Promise<{command: ICommand | undefined, allArguments: string[]}> {
        if (commandListItem === undefined) return {command: undefined, allArguments};
        allArguments.push(commandListItem.label);

        if (commandListItem.command) return {command: commandListItem.command, allArguments};
        else {
            if (commandListItem.commandListItems.length === 0) return {command: undefined, allArguments};
            let res = await vscode.window.showQuickPick(commandListItem.commandListItems, {canPickMany: false, ignoreFocusOut: true});
            return this.promptForCommand(res, allArguments);
        }
    }


}