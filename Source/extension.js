/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import globals from "./globals";
import { getDirectoryPath, isFile } from "./helpers";
import { ArtifactNode } from "./Explorer/ArtifactNode";
import { UsefulLinksViewProvider } from "./usefulLinksView/UsefulLinksViewProvider";

const vscode = require('vscode');
const project = require('./Project/Project');

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
    // vscode.commands.registerCommand('dolittle.features.addFeature', (...args) => {
    //     console.log(args);
    //     // globals.commonToolingManager.addFeature();
    // })
    registerViews(context);
    registerDolittleProjectCommands(context);
    registerDolittleArtifactsCommands(context);
    
}
function ensureProjectConfiguration(refresh) {
    if (globals.projectConfiguration === null || refresh === true) {
        globals.dolittleProjectOutputChannel.appendLine('Attempting to load dolittle project');
        return globals.setProjectConfiguration();
    }
    else return Promise.resolve();
}
/**
 * Executes a function that needs to be executed in a project configuration context
 *
 * @param {() => void} todo
 */
function executeInContext(todo) {
    return ensureProjectConfiguration()
        .then(
            success => todo(),
            error => {
                globals.dolittleDebugOutputChannel.appendLine(`Failed to load dolittle projects.\nError: ${error}`)
                vscode.window.showErrorMessage(`Failed to load dolittle projects.\nError: ${error}`);
                throw error;
            }
        );
}

function registerViews(context) {
    globals.onConfigurationLoaded(vscode.commands.executeCommand('dolittle.featuresView.reloadView'));
    vscode.window.registerTreeDataProvider('featuresView', globals.boundedContextNodeProvider);
    vscode.commands.registerCommand('dolittle.featuresView.reloadView', async () => {
        await ensureProjectConfiguration(true)
        .then(
            success => {
                globals.boundedContextNodeProvider.refresh();
            },
            error => vscode.window.showErrorMessage(`Failed to load dolittle projects.\nError: ${error}`)
        );
    });
    vscode.commands.registerCommand('dolittle.featuresView.editArtifact', (artifactItem: ArtifactNode) => {
        console.log('Edit artifact: ')
    });

    vscode.commands.registerCommand('dolittle.featuresView.deleteArtifact', (artifactItem: ArtifactNode) => {
        console.log('Delete artifact: ')
    });

    vscode.window.registerTreeDataProvider('usefulLinksView', new UsefulLinksViewProvider());
    
    vscode.commands.registerCommand('dolittle.usefulLinksView.issues', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://github.com/dolittle-tools/vscode/issues'));
    });
    vscode.commands.registerCommand('dolittle.usefulLinksView.tweet', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://twitter.com/dolittle'));
    });
    vscode.commands.registerCommand('dolittle.usefulLinksView.documentation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://dolittle.io/'))
    });
    vscode.commands.registerCommand('dolittle.usefulLinksView.sample', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://github.com/dolittle-samples/eCommerce'))
    });
}

function registerDolittleProjectCommands(context) {
    vscode.commands.registerCommand('dolittle.project.newDolittleProject', async () => {
        try {
            let applicationUris = await vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2);
            if (applicationUris.length > 0) {
                globals.dolittleProjectOutputChannel.appendLine(`Found application.json files at paths ${applicationUris.map(uri => uri.fsPath).join(', ')}`);
                throw new Error('Could not start new dolittle project because there already exists a dolittle application here!');
            }
            await vscode.commands.executeCommand('dolittle.project.createApplication');
            await vscode.commands.executeCommand('dolittle.project.createBoundedContext');
        } catch (error){
            vscode.window.showErrorMessage('Could not create a new dolittle project');
            globals.dolittleProjectOutputChannel.appendLine(`Could not create a new dolittle project.\nError: ${error}`);
        }
    });
    vscode.commands.registerCommand('dolittle.project.reloadProject', async () => {
        await ensureProjectConfiguration(true)
            .then(
                success => {},
                error => vscode.window.showErrorMessage(`Failed to load dolittle projects.\nError: ${error}`)
            );
    });

    vscode.commands.registerTextEditorCommand('dolittle.project.build', async textEditor => {
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
    vscode.commands.registerTextEditorCommand('dolittle.project.buildCurrent', async textEditor => {
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

    vscode.commands.registerTextEditorCommand('dolittle.project.restore', async textEditor => {
        await executeInContext( () => project.restore(textEditor.document.uri))
            .then(
                success => {},
                error => {
                    vscode.window.showErrorMessage('Could not perform a project restore');
                    globals.dolittleProjectOutputChannel.appendLine('Could not perform project restore');
                }
            );
    });

    vscode.commands.registerTextEditorCommand('dolittle.project.test', async textEditor => {
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
    vscode.commands.registerTextEditorCommand('dolittle.project.testDebug', async textEditor => {
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
    vscode.commands.registerTextEditorCommand('dolittle.project.testRerun', async textEditor => {
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
    
    vscode.commands.registerCommand('dolittle.project.createApplication', async () => {
        try {
            await globals.commonToolingManager.createApplication();
            globals.dolittleOutputChannel.appendLine('Created application');
        } catch(err) {
            globals.dolittleProjectOutputChannel.appendLine(`Could not create application.\nError: ${err}`);
            vscode.window.showErrorMessage('Could not create application');
        }    
    });
    vscode.commands.registerCommand('dolittle.project.createBoundedContext', async () => {
        try {
            await globals.commonToolingManager.createBoundedContext('csharp');
            globals.dolittleOutputChannel.appendLine('Created bounded context');
        } catch(err) {
            globals.dolittleProjectOutputChannel.appendLine(`Could not create bounded context.\nError: ${err}`);
            vscode.window.showErrorMessage('Could not create bounded context', err);
        }
    });
}

function registerDolittleArtifactsCommands(context) {
    let handleAddArtifact = (artifactType, language, destinationFolder) => {
        try {
            globals.commonToolingManager.addArtifact(artifactType, language, destinationFolder);
        }
        catch (error) {
            globals.dolittleProjectOutputChannel.appendLine(`Could not add artifact.\nError: ${error}`);
            vscode.window.showErrorMessage('Could add artifact ', error);
        }
    }
    const artifacts = [
        'Command',
        'Event',
        'Read Model',
        'Aggregate Root',
        'Command Handler',
        'Query',
        'Event Processor',
        'Concept'
    ]
    vscode.commands.registerTextEditorCommand('dolittle.artifacts.addArtifact', async (editor) => {
        try {
            const pick = await vscode.window.showQuickPick(artifacts, {canPickMany: false, ignoreFocusOut: true});
            let artifactType = '';
            switch (pick) {
                case 'Command':
                    artifactType = 'command';
                    break;
                case 'Event':
                    artifactType = 'event';
                    break;
                case 'Read Model':
                    artifactType = 'readModel';
                    break;
                case 'Aggregate Root':
                    artifactType = 'aggregateRoot';
                    break;
                case 'Command Handler':
                    artifactType = 'commandHandler';
                    break;
                case 'Query':
                    const queryPick = await vscode.window.showQuickPick(['Query', 'Query For a Read Model'], {canPickMany: false, ignoreFocusOut: true});
                    if (queryPick === 'Query') artifactType = 'query';
                    else artifactType = 'queryFor';
                    break;
                case 'Event Processor':
                    artifactType = 'eventProcessor';
                    break;
                case 'Concept':
                    const conceptPick = await vscode.window.showQuickPick(
                        ['Concept', 'Int Concept', 'String Concept', 'GUID Concept'],
                        {canPickMany: false, ignoreFocusOut: true}
                    );
                    if (conceptPick === 'Concept') command.push('concept');
                    else if (conceptPick === 'Int Concept') artifactType = 'conceptAsInt';
                    else if (conceptPick === 'String Concept') artifactType = 'conceptAsString';
                    else if (conceptPick === 'GUID Concept') artifactType = 'conceptAsGuid';
                    break;
            }
            handleAddArtifact(artifactType, 'csharp', getDirectoryPath(editor.document.uri.fsPath));
        }
        catch (error) {
            globals.dolittleProjectOutputChannel.appendLine(`Could not add artifact.\nError: ${error}`);
            vscode.window.showErrorMessage('Could add artifact ', error);
        }
    });
    vscode.commands.registerCommand('dolittle.artifacts.addCommand', (...args) => {
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add command to a file');
            else {
                handleAddArtifact('command', 'csharp', uri.fsPath);
            }
        }
    });

    vscode.commands.registerCommand('dolittle.artifacts.addEvent', (...args) => {
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add event to a file');
            else {
                handleAddArtifact('event', 'csharp', uri.fsPath);
            }
        }
    });

    vscode.commands.registerCommand('dolittle.artifacts.addReadModel', (...args) => {
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add read model to a file');
            else {
                handleAddArtifact('readModel', 'csharp', uri.fsPath);
            }
        }
    });

    vscode.commands.registerCommand('dolittle.artifacts.addQuery', async (...args) => {
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add query to a file');
            else {
                let artifactType = '';
                const queryPick = await vscode.window.showQuickPick(['Query', 'Query For a Read Model'], {canPickMany: false, ignoreFocusOut: true});
                if (queryPick === 'Query') artifactType = 'query';
                else artifactType = 'queryFor';
                handleAddArtifact(artifactType, 'csharp', uri.fsPath);
            }
        }
    });

    vscode.commands.registerCommand('dolittle.artifacts.addAggregateRoot', (...args) => {
        console.log(args);
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add aggregate root to a file');
            else {
                handleAddArtifact('aggregateRoot', 'csharp', uri.fsPath);
            }
        }
    });

    vscode.commands.registerCommand('dolittle.artifacts.addCommandHandler', (...args) => {
        console.log(args);
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add command handler to a file');
            else {
                handleAddArtifact('commandHandler', 'csharp', uri.fsPath);
            }
        }
    });

    vscode.commands.registerCommand('dolittle.artifacts.addEventProcessor', (...args) => {
        console.log(args);
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add event processor to a file');
            else {
                handleAddArtifact('eventProcessor', 'csharp', uri.fsPath);
            }
        }
    });
    vscode.commands.registerCommand('dolittle.artifacts.addConcept', async (...args) => {
        console.log(args);
        let uri = args[0];
        if (uri) {
            if (isFile(uri.fsPath)) vscode.window.showErrorMessage('Cannot add concept to a file');
            else {
                let artifactType = '';
                const conceptPick = await vscode.window.showQuickPick(
                    ['Concept', 'Int Concept', 'String Concept', 'GUID Concept'],
                    {canPickMany: false, ignoreFocusOut: true}
                );
                if (conceptPick === 'Concept') command.push('concept');
                else if (conceptPick === 'Int Concept') artifactType = 'conceptAsInt';
                else if (conceptPick === 'String Concept') artifactType = 'conceptAsString';
                else if (conceptPick === 'GUID Concept') artifactType = 'conceptAsGuid';
                handleAddArtifact(artifactType, 'csharp', uri.fsPath);
            }
        }
    });
}

const _activate = activate;
export { _activate as activate };

// this method is called when your extension is deactivated
function deactivate() {
}
const _deactivate = deactivate;
export { _deactivate as deactivate };