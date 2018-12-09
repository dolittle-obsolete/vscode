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
        globals.dolittleProjectOutputChannel.appendLine('Attempting to load dolittle project');
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
    return ensureProjectConfiguration()
        .then(
            success => todo(),
            error => {
                vscode.window.showErrorMessage(`Failed to load dolittle projects.
Error: ${error}`);
                throw error;
            }
        );
}

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    process.addListener('unhandledRejection', (reason) => {
        console.error('Rejection not handled', reason);
    });
    process.addListener('uncaughtException', (error) => {
        console.error('Uncaught exception', error);
    });

    vscode.commands.registerCommand('dolittle.newDolittleProject', async () => {
        try {

            let applicationUris = await vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2);
            if (applicationUris.length > 0) {
                globals.dolittleProjectOutputChannel.appendLine(`Found application.json files at paths ${applicationUris.map(uri => uri.fsPath).join(', ')}`);
                throw 'Could not start new dolittle project because there already exists a dolittle application here!';
            }
            await vscode.commands.executeCommand('dolittle.createApplication');
            await vscode.commands.executeCommand('dolittle.createBoundedContext');
        } catch (error){
            vscode.window.showErrorMessage('Could not create a new dolittle project');
            globals.dolittleProjectOutputChannel.appendLine(`Could not create a new dolittle project.\nError: ${error}`);
        }
    });
    vscode.commands.registerCommand('dolittle.reloadProject', async () => {
        await executeInContext(() => {})
            .then(
                success => {},
                error => {}
            );
    });

    vscode.commands.registerTextEditorCommand('dolittle.build', async textEditor => {
       await executeInContext(() => project.build(textEditor.document.uri))
            .then(
                success => {},
                error => {
                    const msg = 'Could not build project';
                    vscode.window.showErrorMessage(msg);
                    globals.dolittleProjectOutputChannel.appendLine(msg);
                }
            );
    });
    vscode.commands.registerTextEditorCommand('dolittle.buildCurrent', async textEditor => {
        await executeInContext( () => project.buildCurrent(textEditor.document.uri))
            .then(
                success => {},
                error => {
                    const msg = 'Could not build current project';
                    vscode.window.showErrorMessage(msg);
                    globals.dolittleProjectOutputChannel.appendLine(msg);
                }
            );
    });

    vscode.commands.registerTextEditorCommand('dolittle.restore', async textEditor => {
        await executeInContext( () => project.restore(textEditor.document.uri))
            .then(
                success => {},
                error => {
                    vscode.window.showErrorMessage('Could not perform a project restore');
                    globals.dolittleProjectOutputChannel.appendLine('Could not perform project restore');
                }
            );
    });

    vscode.commands.registerTextEditorCommand('dolittle.test', async textEditor => {
        await executeInContext( () => project.test(textEditor.document.uri))
            .then(
                success => {},
                error => {
                    const msg = 'Could not perform tests';
                    vscode.window.showErrorMessage(msg);
                    globals.dolittleProjectOutputChannel.appendLine(msg);
                }
            );
    });
    vscode.commands.registerTextEditorCommand('dolittle.testDebug', async textEditor => {
        await executeInContext( () => project.testDebug(textEditor.document.uri))
            .then(
                success => {},
                error => {
                    const msg = 'Could not debug tests';
                    vscode.window.showErrorMessage(msg);
                    globals.dolittleProjectOutputChannel.appendLine(msg);
                }
            );
    });
    vscode.commands.registerTextEditorCommand('dolittle.testRerun', async textEditor => {
        await executeInContext( () => project.testRerun(textEditor.document.uri))
        .then(
            success => {},
            error => {
                const msg = 'Could not rerun tests';
                vscode.window.showErrorMessage(msg);
                globals.dolittleProjectOutputChannel.appendLine(msg);
            }
        );
    });

    vscode.commands.registerCommand('dolittle.createApplication', async () => {
        await vscode.window.showInputBox({prompt: 'Application name'})
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
                }
            }, err => {
                globals.dolittleProjectOutputChannel.appendLine(`Could not retrieve application name from input.\nError: ${err}`);
                vscode.window.showErrorMessage('Could retrieve application name from input', err);
            });
    });
    vscode.commands.registerCommand('dolittle.createBoundedContext', async () => {
        await vscode.window.showInputBox({prompt: 'Bounded Context name'})
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
                }
            }, err => {
                globals.dolittleProjectOutputChannel.appendLine(`Could not retrieve bounded context name from input.\nError: ${err}`);
                vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
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