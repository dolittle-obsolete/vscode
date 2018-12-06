import { Uri } from 'vscode';

const vscode = require('vscode');
/**
 *
 *
 * @export
 * @param {string} language
 * @param {Uri} workspaceUri
 * @param {Uri} documentUri
 */
export function build(language, workspaceUri, documentUri) {
    switch(language) {
        case 'csharp':
            const path = require('path');
            const spawn = require('child_process');
            let root = workspaceUri.fsPath;
            let fileDirName = path.dirname(documentUri.fsPath);
            console.log(workspaceUri);
            console.log(documentUri);
            console.log(root);
            console.log(fileDirName);
            // spawn('node', ['DotNet/Build/dotnet.js', 'root:'])
            
        default:
            vscode.window.showErrorMessage(`Dolittle Project: Build does not support language '${language}'`)
    }
}