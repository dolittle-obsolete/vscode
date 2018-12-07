/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { loadProjectConfiguration, ProjectConfiguration } from "./Configuration/ProjectConfiguration";
import { spawnDolittleCliCommand } from "./cli";
import { build } from "./Project/Project";

const vscode = require('vscode');

/**
 * @type {ProjectConfiguration}
 */
let projectConfig = null;

function ensureProjectConfiguration() {
    if (projectConfig === null) {
        loadProjectConfiguration()
            .then(config => {
                projectConfig = config;
            }, err => {
                vscode.window.showErrorMessage('Could not load dolittle project');
                throw err; 
            })
            .catch(err => {
                vscode.window.showErrorMessage('Could not load dolittle project');
                throw err;
            });
    }
}

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    vscode.commands.registerCommand('dolittle.newDolittleProject', () => {});

    vscode.commands.registerTextEditorCommand('dolittle.build', (textEditor) => {
        ensureProjectConfiguration();
        let documentUri = textEditor.document.uri;
        let workspace = vscode.workspace.getWorkspaceFolder(documentUri);
        let boundedContext = projectConfig.boundedContexts.filter(bc => bc.workspace === workspace)[0];
        if (boundedContext === undefined) 
            throw 'Something went wrong while getting the bounded context configuration'; 
        console.log(boundedContext);
        build(boundedContext.core.language.language, workspace.uri, documentUri);
    });
    vscode.commands.registerCommand('dolittle.createApplication', () => {
        vscode.window.showInputBox({prompt: 'Application name'})
            .then(applicationName => {
                try {
                    console.log('Creating application')
                    spawnDolittleCliCommand(
                        ['create', 'application'], 
                        [applicationName], 
                        {cwd: vscode.workspace.workspaceFolders[0].uri.fsPath}
                    ).on('close', (code => {
                        if (code !== 0) throw 'Could not create application';
                        console.log('Created application');
                        vscode.window.showInformationMessage(`Created application '${applicationName}'`);
                    }));
                } catch(err) {
                    vscode.window.showErrorMessage('Could not create application');
                    throw err;
                }
            }, err => {
                vscode.window.showErrorMessage('Could retrieve application name from input', err);
                throw err;
            });
    });
    vscode.commands.registerCommand('dolittle.createBoundedContext', () => {
        vscode.window.showInputBox({prompt: 'Bounded Context name'})
            .then(boundedContextName => {
                try {
                    console.log('Creating bounded context')
                    spawnDolittleCliCommand(
                        ['create', 'boundedcontext'], 
                        [boundedContextName], 
                        {cwd: vscode.workspace.workspaceFolders[0].uri.fsPath}
                    ).on('close', (code => {
                        if (code !== 0) throw 'Could not create bounded context';
                        console.log('Created bounded context');
                        vscode.window.showInformationMessage(`Created bounded context '${boundedContextName}'`);
                    }));
                } catch(err) {
                    vscode.window.showErrorMessage('Could not create bounded context', err);
                    throw err;
                }
            }, err => {
                vscode.window.showErrorMessage('Could retrieve application name from input', err);
                throw err;
            });
    });
    // vscode.workspace.findFiles('**/application.json')
    //     .then(applications => {
    //         const hasApplication = applications.length > 0;
            
    //         vscode.commands.registerCommand('dolittle.createBoundedContext', () => {
    //             console.log('Creating bounded context');
    //             let workspaceUri = vscode.workspace.workspaceFolders[0].uri;
    //             const dolittleCreateApplicationPath = require.resolve('@dolittle/cli/bin/dolittle-create-application.js');
    //             const dolittleCreateBoundedContextPath = require.resolve('@dolittle/cli/bin/dolittle-create-boundedcontext.js');
    //             const spawnDolittleCreateApplication = (applicationName) => {
    //                 return spawnSync('node', [`${dolittleCreateApplicationPath}`, applicationName], {cwd: workspaceUri.fsPath});
    //             };
    //             const spawnDolittleCreateBoundedContext = (boundedContextName) => {
    //                 console.log(workspaceUri.fsPath);
    //                 return spawnSync('node', [`${dolittleCreateBoundedContextPath}`, boundedContextName], {cwd: workspaceUri.fsPath});
    //             };
    //             const createBoundedContext = () => {
    //                 vscode.window.showInputBox({prompt: 'Bounded Context Name'})
    //                     .then(boundedContextName => {
    //                         spawnDolittleCreateBoundedContext(boundedContextName);
    //                     }, err => {
    //                         vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
    //                     });
    //             };
    //             const createApplicationAndBoundedContext = () => {
    //                 vscode.window.showInputBox({prompt: 'Application name'})
    //                     .then(applicationName => {
    //                         spawnDolittleCreateApplication(applicationName);
    //                         createBoundedContext();
    //                     }, err => {
    //                         vscode.window.showErrorMessage('Could retrieve application name from input', err);
    //                     });
    //             };
    //             if (!hasApplication) createApplicationAndBoundedContext();
    //             else createBoundedContext();
                
    //         });
    //         vscode.commands.registerCommand('dolittle.start', () => {
    //             loadProjectConfiguration()
    //                 .then(config => buildContext(context, config), err => vscode.window.showErrorMessage('Could not load project', err))
    //                 .catch(err => vscode.window.showErrorMessage('Could not load project', err));
    //         })

    //         if (!hasApplication) 
    //             vscode.commands.executeCommand('dolittle.createBoundedContext')
    //                 .then(res  => {
    //                     vscode.commands.executeCommand('dolittle.start');
    //                 }, err => {
    //                     vscode.window.showErrorMessage('Could not create bounded context');
    //                 });
    //         else
    //             vscode.commands.executeCommand('dolittle.start');
    //     });
}

const _activate = activate;
export { _activate as activate };

// this method is called when your extension is deactivated
function deactivate() {
}
const _deactivate = deactivate;
export { _deactivate as deactivate };