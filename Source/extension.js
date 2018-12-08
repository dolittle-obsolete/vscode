/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { spawnDolittleCliCommand } from "./cli";
import globals from "./globals";

const vscode = globals.vscode;
const project = require('./Project/Project');

function ensureProjectConfiguration() {
    if (globals.projectConfiguration === null) {
        return globals.setProjectConfiguration();
    }
    else return Promise.resolve();
}
/**
 * Executes a function that needs to be ran in a project configuration context
 *
 * @param {() => void} todo
 */
function executeInContext(todo) {
    ensureProjectConfiguration()
        .then( () => {
            todo()
        }, error => {
            this.dolittleProjectOutputChannel.appendLine(`Could not load dolittle project:\nError: ${error}`)
            this.vscode.window.showErrorMessage('Could not load dolittle project', error);
            throw error;
        })
        .catch(error => {
            this.dolittleProjectOutputChannel.appendLine(`Could not load dolittle project:\nError: ${error}`)
            this.vscode.window.showErrorMessage('Could not load dolittle project', error);
            throw error;
        });
}


/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    vscode.commands.registerCommand('dolittle.newDolittleProject', () => {});

    vscode.commands.registerTextEditorCommand('dolittle.build', textEditor => {
        executeInContext(() => project.build(textEditor.document.uri));
    });
    vscode.commands.registerTextEditorCommand('dolittle.buildCurrent', textEditor => {
        executeInContext( () => project.buildCurrent(textEditor.document.uri));
    });

    vscode.commands.registerTextEditorCommand('dolittle.restore', textEditor => {
        executeInContext( () => project.restore(textEditor.document.uri));
    });

    vscode.commands.registerTextEditorCommand('dolittle.test', textEditor => {
        executeInContext( () => project.test(textEditor.document.uri));
    });
    vscode.commands.registerTextEditorCommand('dolittle.testDebug', textEditor => {
        executeInContext( () => project.testDebug(textEditor.document.uri));
    });
    vscode.commands.registerTextEditorCommand('dolittle.testRerun', textEditor => {
        executeInContext( () => project.testRerun(textEditor.document.uri));
    });

    vscode.commands.registerCommand('dolittle.createApplication', () => {
        vscode.window.showInputBox({prompt: 'Application name'})
            .then(applicationName => {
                try {
                    globals.dolittleOutputChannel.appendLine('Creating application');
                    spawnDolittleCliCommand(
                        ['create', 'application'], 
                        [applicationName], 
                        {cwd: vscode.workspace.workspaceFolders[0].uri.fsPath}
                    ).on('close', (code => {
                        if (code !== 0) throw 'Could not create application';
                        globals.dolittleOutputChannel.appendLine(`Created application '${applicationName}'`);
                    }));
                } catch(err) {
                    globals.dolittleProjectOutputChannel.appendLine(`Could not create application.\nError: ${err}`);
                    vscode.window.showErrorMessage('Could not create application');
                    throw err;
                }
            }, err => {
                globals.dolittleProjectOutputChannel.appendLine(`Could not retrieve application name from input.\nError: ${err}`);
                vscode.window.showErrorMessage('Could retrieve application name from input', err);
                throw err;
            });
    });
    vscode.commands.registerCommand('dolittle.createBoundedContext', () => {
        vscode.window.showInputBox({prompt: 'Bounded Context name'})
            .then(boundedContextName => {
                try {

                    globals.dolittleOutputChannel.appendLine('Creating bounded context');
                    spawnDolittleCliCommand(
                        ['create', 'boundedcontext'], 
                        [boundedContextName], 
                        {cwd: vscode.workspace.workspaceFolders[0].uri.fsPath}
                    ).on('close', (code => {
                        if (code !== 0) throw 'Could not create bounded context';
                        globals.dolittleOutputChannel.appendLine(`Created bounded context '${boundedContextName}'`);
                    }));
                } catch(err) {

                    globals.dolittleProjectOutputChannel.appendLine(`Could not create bounded context.\nError: ${err}`);
                    vscode.window.showErrorMessage('Could not create bounded context', err);
                    throw err;
                }
            }, err => {

                globals.dolittleProjectOutputChannel.appendLine(`Could not retrieve bounded context name from input.\nError: ${err}`);
                vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
                throw err;
            });
    });
}

const _activate = activate;
export { _activate as activate };

// this method is called when your extension is deactivated
function deactivate() {
}
const _deactivate = deactivate;
export { _deactivate as deactivate };