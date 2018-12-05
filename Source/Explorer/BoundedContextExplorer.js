import { BoundedContextNodeProvider } from './BoundedContextNodeProvider';

const vscode = require('vscode');

export class BoundedContextExplorer {
    /**
     *Creates an instance of BoundedContextExplorer.
     * @param {import("vscode").ExtensionContext} context
     * @param {BoundedContextNodeProvider} nodeProvider
     * @memberof BoundedContextExplorer
     */
    constructor (context, nodeProvider) {
        // context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider('boundedContexts', nodeProvider));
        // this.viewer = vscode.window.createTreeView()

    }
}