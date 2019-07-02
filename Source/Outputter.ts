/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICanOutputMessages } from "@dolittle/tooling.common.utilities";
import * as vscode from 'vscode';

/**
 * Represents an implementation of {ICanOutputMessages}
 *
 * @export
 * @class Outputter
 * @implements {ICanOutputMessages}
 */
export class Outputter implements ICanOutputMessages {
    private static debugChannel: vscode.OutputChannel = vscode.window.createOutputChannel('Dolittle Debug');
    private static warnChannel: vscode.OutputChannel = vscode.window.createOutputChannel('Dolittle Warn');
    private static errorChannel: vscode.OutputChannel = vscode.window.createOutputChannel('Dolittle Error');

    print(...args: string[]): void {
        args.forEach(_ => Outputter.debugChannel.appendLine(_));
    }
    warn(...args: string[]): void {
        args.forEach(_ => Outputter.warnChannel.appendLine(_));
    }
    error(...args: string[]): void {
        Outputter.errorChannel.show(true);
        args.forEach(_ => Outputter.errorChannel.appendLine(_));
    }
}