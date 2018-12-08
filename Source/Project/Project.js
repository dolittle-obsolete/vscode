import { Uri } from 'vscode';
import globals from '../globals';

const dotnet = require('./DotNet/dotnetProject');
const vscode = globals.vscode;
const path = require('path');

/**
 * 
 * @param {Uri} uri
 * @returns {import('vscode').WorkspaceFolder}
 */
function getWorkspace(uri) {
    return vscode.workspace.getWorkspaceFolder(uri);
}
/**
 *
 * @param {Uri} openDocumentUri
 */
function getBoundedContextLanguage(openDocumentUri) {
    let workspace = getWorkspace(openDocumentUri);
    let boundedContext = globals.projectConfiguration.boundedContexts.filter(bc => bc.workspace === workspace)[0];

    if (boundedContext === undefined) 
        throw 'Something went wrong while getting the bounded context configuration'; 
    
    return boundedContext.core.language;
}
/**
 *
 *
 * @param {Uri} documentUri
 * @returns {[string, string, string]} [fileDIr, root, language]
 */
function getRequiredParameters(documentUri) {
    return [
        path.dirname(documentUri.fsPath), 
        getWorkspace(documentUri).uri.fsPath, 
        getBoundedContextLanguage(documentUri)
    ];
}
/**
 * 
 * @export
 * @param {Uri} documentUri
 */
export function build(documentUri) {
    const [fileDir, root, language] = getRequiredParameters(documentUri);

    globals.dolittleOutputChannel.appendLine('Building project');
    switch(language) {
        case 'csharp':
            dotnet.build(root, fileDir)
                .on('close', code => {
                    if (code !== 0) {
                        vscode.window.showErrorMessage('Error while building dotnet application');
                        throw 'error while building dotnet application';
                    }
                });
            break;
        default:
            const msg = `Error: Dolittle Project: Build does not support language '${language}'`;
            globals.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg)
            break;
    }
}
/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
export function buildCurrent(documentUri) {
    const [fileDir, root, language] = getRequiredParameters(documentUri);

    globals.dolittleOutputChannel.appendLine('Building current project');
    switch(language) {
        case 'csharp':
            dotnet.buildCurrent(root, fileDir)
                .on('close', code => {
                    if (code !== 0) {
                        vscode.window.showErrorMessage('Error while building current dotnet application');
                        throw 'error while building current dotnet application';
                    }
                });
            break;
        default:
            const msg = `Error: Dolittle Project: Build Current does not support language '${language}'`;
            globals.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg)
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
export function restore(documentUri) {
    const [fileDir, root, language] = getRequiredParameters(documentUri);

    globals.dolittleOutputChannel.appendLine('Restoring project');
    switch(language) {
        case 'csharp':
            dotnet.restore(root, fileDir)
                .on('close', code => {
                    if (code !== 0) {
                        vscode.window.showErrorMessage('Error while restoring dotnet application');
                        throw 'error while restoring dotnet application';
                    }
                });
            break;
        default:
            const msg = `Error: Dolittle Project: Restore does not support language '${language}'`;
            globals.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
export function test(documentUri) {
    const [fileDir, root, language] = getRequiredParameters(documentUri);

    globals.dolittleOutputChannel.appendLine('Testing project');
    switch(language) {
        case 'csharp':
            dotnet.test(root, fileDir)
                .on('close', code => {
                    if (code !== 0) {
                        vscode.window.showErrorMessage('Error while testing dotnet application');
                        throw 'error while testing dotnet application';
                    }
                });
            break;
        default:
            const msg = `Error: Dolittle Project: Test does not support language '${language}'`;
            globals.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg)
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
export function testDebug(documentUri) {
    const [fileDir, root, language] = getRequiredParameters(documentUri);

    globals.dolittleOutputChannel.appendLine('Debugging project tests');
    switch(language) {
        case 'csharp':
            dotnet.testDebug(root, fileDir)
                .on('close', code => {
                    if (code !== 0) {
                        vscode.window.showErrorMessage('Error while debugging test for dotnet application');
                        throw 'error while building dotnet application';
                    }
                });
            break;
        default:
            const msg = `Error: Dolittle Project: Test Debug does not support language '${language}'`;
            globals.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg)
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
export function testRerun(documentUri) {
    const [fileDir, root, language] = getRequiredParameters(documentUri);

    globals.dolittleOutputChannel.appendLine('Reruns project tests');
    switch(language) {
        case 'csharp':
            dotnet.rerunTest(root, fileDir)
                .on('close', code => {
                    if (code !== 0) {
                        vscode.window.showErrorMessage('Error while debugging test for dotnet application');
                        throw 'error while building dotnet application';
                    }
                });
            break;
        default:
            const msg = `Error: Dolittle Project: Test Rerun does not support language '${language}'`;
            globals.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg)
            break;
    }
}