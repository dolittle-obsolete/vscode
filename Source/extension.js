/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { loadProjectConfiguration } from "./Configuration/ProjectConfiguration";
import { BoundedContextNodeProvider } from "./Explorer/BoundedContextNodeProvider";

const vscode = require('vscode');

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "dolittle-feature-explorer" is now active!');
    
    vscode.commands.registerCommand('extension.startDolittleFeatureExplorer', () => {});
    vscode.commands.registerCommand('extension.reloadConfiguration', () => {
        loadProjectConfiguration()
            .then( (config) => {
                buildContext(context, config);
            }).catch(err => {
                throw err;
            });
    });
    

    // const featureDependenciesProvider = new FeatureProvider(vscode.workspace.rootPath);
    // vscode.window.registerTreeDataProvider('featureDependencies', featureDependenciesProvider);
	// vscode.commands.registerCommand('featureDependencies.refresh', () => vscode.window.showInformationMessage('Successfully called refresh'));
	// vscode.commands.registerCommand('featureDependencies.addCommand', node => vscode.window.showInformationMessage('Successfully called add command'));

    // new FeatureExplorer(context);
}
/**
 *
 * @param {import("vscode").ExtensionContext} context
 * @param {import('./Configuration/ProjectConfiguration').ProjectConfiguration} projectConfiguration
 */
function buildContext(context, projectConfiguration) {
    // vscode.window.registerTreeDataProvider('boundedContextExplorer', new BoundedContextNodeProvider(projectConfiguration));
    vscode.window.createTreeView('boundedContextExplorer', {treeDataProvider: new BoundedContextNodeProvider(projectConfiguration)});
    vscode.window.showInformationMessage('Loaded Dolittle project configuration');
    
}
const _activate = activate;
export { _activate as activate };

// this method is called when your extension is deactivated
function deactivate() {
}
const _deactivate = deactivate;
export { _deactivate as deactivate };