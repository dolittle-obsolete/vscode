/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import './turnOffLogging';

import * as vscode from 'vscode';
import globals from './globals';
import { UsefulLinksViewProvider } from './index';


export function activate(context: vscode.ExtensionContext) {
    registerCommands(context);
    registerViews(context);
    
}

function registerCommands(context: vscode.ExtensionContext) {
    vscode.commands.registerTextEditorCommand('dolittle.tooling.commands', async (editor, edit) => {
        
        let commandsSystem = await globals.getCommandsSystem();
        commandsSystem.executeCommand(editor);
    });
}

function registerViews(context: vscode.ExtensionContext) {
    // globals.onConfigurationLoaded(vscode.commands.executeCommand('dolittle.featuresView.reloadView'));
    // vscode.window.registerTreeDataProvider('featuresView', globals.boundedContextNodeProvider);
    // vscode.commands.registerCommand('dolittle.featuresView.reloadView', async () => {
    //     await ensureProjectConfiguration(true)
    //     .then(
    //         success => {
    //             globals.boundedContextNodeProvider.refresh();
    //         },
    //         error => vscode.window.showErrorMessage(`Failed to load dolittle projects.\nError: ${error}`)
    //     );
    // });
    // vscode.commands.registerCommand('dolittle.featuresView.editArtifact', (artifactItem: ArtifactNode) => {
    //     console.log('Edit artifact: ')
    // });

    // vscode.commands.registerCommand('dolittle.featuresView.deleteArtifact', (artifactItem: ArtifactNode) => {
    //     console.log('Delete artifact: ')
    // });

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
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://github.com/dolittle-samples/'))
    });
}