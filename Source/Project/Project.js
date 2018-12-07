import { Uri } from 'vscode';

const vscode = require('vscode');
const path = require('path');
/**
 *
 *
 * @export
 * @param {string} language
 * @param {Uri} workspaceUri
 * @param {Uri} documentUri
 */
export function build(language, workspaceUri, documentUri) {
    const fileDir = path.dirname(documentUri.fsPath);
    const root = workspaceUri.fsPath;

    switch(language) {
        case 'csharp':
            const dotnet = require('./DotNet/dotnetProject');
            vscode.window.showInformationMessage('Building dotnet application');
            let childProcess = dotnet.build(root, fileDir);
            childProcess.on('close', code => {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while building dotnet application');
                    throw 'error while building dotnet application';
                }
                
                vscode.window.showInformationMessage('Finished building dotnet application');
            })
            break;
        default:
            vscode.window.showErrorMessage(`Dolittle Project: Build does not support language '${language}'`)
            break;
    }
}