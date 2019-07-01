/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import './turnOffLogging';

import * as vscode from 'vscode';
import globals from './globals';


export function activate(context: vscode.ExtensionContext) {
    registerCommands(context);
    globals.outputter.print('Print')
    globals.outputter.warn('Warn')
    globals.outputter.error('Error')
    // createViews() Register when inside a bounded context context
}

function registerCommands(context: vscode.ExtensionContext) {
    // vscode.commands.registerCommand('', (parameters)=> {

    // })
}