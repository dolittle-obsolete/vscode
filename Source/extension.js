/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { loadProjectConfiguration } from "./Configuration/ProjectConfiguration";

const vscode = require('vscode');
const spawn = require('child_process').spawn;
const spawnSync = require('child_process').spawnSync;

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    vscode.workspace.findFiles('**/application.json')
        .then(applications => {
            const hasApplication = applications.length > 0;
            
            vscode.commands.registerCommand('dolittle.createBoundedContext', () => {
                console.log('Creating bounded context');
                let workspaceUri = vscode.workspace.workspaceFolders[0].uri;
                const dolittleCreateApplicationPath = require.resolve('@dolittle/cli/bin/dolittle-create-application.js');
                const dolittleCreateBoundedContextPath = require.resolve('@dolittle/cli/bin/dolittle-create-boundedcontext.js');
                const spawnDolittleCreateApplication = (applicationName) => {
                    return spawnSync('node', [`${dolittleCreateApplicationPath}`, applicationName], {cwd: workspaceUri.fsPath});
                };
                const spawnDolittleCreateBoundedContext = (boundedContextName) => {
                    console.log(workspaceUri.fsPath);
                    return spawnSync('node', [`${dolittleCreateBoundedContextPath}`, boundedContextName], {cwd: workspaceUri.fsPath});
                };
                const createBoundedContext = () => {
                    vscode.window.showInputBox({prompt: 'Bounded Context Name'})
                        .then(boundedContextName => {
                            spawnDolittleCreateBoundedContext(boundedContextName);
                        }, err => {
                            vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
                        });
                };
                const createApplicationAndBoundedContext = () => {
                    vscode.window.showInputBox({prompt: 'Application name'})
                        .then(applicationName => {
                            spawnDolittleCreateApplication(applicationName);
                            createBoundedContext();
                        }, err => {
                            vscode.window.showErrorMessage('Could retrieve application name from input', err);
                        });
                };
                if (!hasApplication) createApplicationAndBoundedContext();
                else createBoundedContext();
                
            });
            vscode.commands.registerCommand('dolittle.start', () => {
                loadProjectConfiguration()
                    .then(config => buildContext(context, config), err => vscode.window.showErrorMessage('Could not load project', err))
                    .catch(err => vscode.window.showErrorMessage('Could not load project', err));
            })

            if (!hasApplication) 
                vscode.commands.executeCommand('dolittle.createBoundedContext')
                    .then(res  => {
                        vscode.commands.executeCommand('dolittle.start');
                    }, err => {
                        vscode.window.showErrorMessage('Could not create bounded context');
                    });
            else
                vscode.commands.executeCommand('dolittle.start');
        });
}

/**
 *
 * @param {import("vscode").ExtensionContext} context
 * @param {import('./Configuration/ProjectConfiguration').ProjectConfiguration} projectConfiguration
 */
function buildContext(context, projectConfiguration) {
    console.log(projectConfiguration);
    vscode.commands.registerTextEditorCommand('dolittle.build', (textEditor) => {
        let editorFileUri = textEditor.document.uri;
        let workspaceUri = vscode.workspace.workspaceFolders[0].uri;
        console.log(vscode.workspace.workspaceFolders);
        console.log(editorFileUri);
        console.log(workspaceUri);

        
    });
    
}
const _activate = activate;
export { _activate as activate };

// this method is called when your extension is deactivated
function deactivate() {
}
const _deactivate = deactivate;
export { _deactivate as deactivate };