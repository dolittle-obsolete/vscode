/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommand } from "@dolittle/tooling.common.commands";
import { TextEditor } from "vscode";

export interface ICommands {
    executeCommand(editor: TextEditor): Promise<void>
    readonly commands: ICommand[] 
}