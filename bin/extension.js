"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _ProjectConfiguration = require("./Configuration/ProjectConfiguration");

var _cli = require("./cli");

var _Project = require("./Project/Project");

var vscode = require('vscode');

/**
 * @type {ProjectConfiguration}
 */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var projectConfig = null;

function ensureProjectConfiguration() {
    if (projectConfig === null) {
        (0, _ProjectConfiguration.loadProjectConfiguration)().then(function (config) {
            projectConfig = config;
        }, function (err) {
            vscode.window.showErrorMessage('Could not load dolittle project');
            throw err;
        }).catch(function (err) {
            vscode.window.showErrorMessage('Could not load dolittle project');
            throw err;
        });
    }
}

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    vscode.commands.registerCommand('dolittle.newDolittleProject', function () {});

    vscode.commands.registerTextEditorCommand('dolittle.build', function (textEditor) {
        ensureProjectConfiguration();
        var documentUri = textEditor.document.uri;
        var workspace = vscode.workspace.getWorkspaceFolder(documentUri);
        var boundedContext = projectConfig.boundedContexts.filter(function (bc) {
            return bc.workspace === workspace;
        })[0];
        if (boundedContext === undefined) throw 'Something went wrong while getting the bounded context configuration';
        console.log(boundedContext);
        (0, _Project.build)(boundedContext.core.language.language, workspace.uri, documentUri);
    });
    vscode.commands.registerCommand('dolittle.createApplication', function () {
        vscode.window.showInputBox({ prompt: 'Application name' }).then(function (applicationName) {
            try {
                console.log('Creating application');
                (0, _cli.spawnDolittleCliCommand)(['create', 'application'], [applicationName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                    if (code !== 0) throw 'Could not create application';
                    console.log('Created application');
                    vscode.window.showInformationMessage("Created application '" + applicationName + "'");
                });
            } catch (err) {
                vscode.window.showErrorMessage('Could not create application');
                throw err;
            }
        }, function (err) {
            vscode.window.showErrorMessage('Could retrieve application name from input', err);
            throw err;
        });
    });
    vscode.commands.registerCommand('dolittle.createBoundedContext', function () {
        vscode.window.showInputBox({ prompt: 'Bounded Context name' }).then(function (boundedContextName) {
            try {
                console.log('Creating bounded context');
                (0, _cli.spawnDolittleCliCommand)(['create', 'boundedcontext'], [boundedContextName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                    if (code !== 0) throw 'Could not create bounded context';
                    console.log('Created bounded context');
                    vscode.window.showInformationMessage("Created bounded context '" + boundedContextName + "'");
                });
            } catch (err) {
                vscode.window.showErrorMessage('Could not create bounded context', err);
                throw err;
            }
        }, function (err) {
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

var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwicmVxdWlyZSIsInByb2plY3RDb25maWciLCJlbnN1cmVQcm9qZWN0Q29uZmlndXJhdGlvbiIsInRoZW4iLCJjb25maWciLCJ3aW5kb3ciLCJzaG93RXJyb3JNZXNzYWdlIiwiZXJyIiwiY2F0Y2giLCJhY3RpdmF0ZSIsImNvbnRleHQiLCJjb21tYW5kcyIsInJlZ2lzdGVyQ29tbWFuZCIsInJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQiLCJ0ZXh0RWRpdG9yIiwiZG9jdW1lbnRVcmkiLCJkb2N1bWVudCIsInVyaSIsIndvcmtzcGFjZSIsImdldFdvcmtzcGFjZUZvbGRlciIsImJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHRzIiwiZmlsdGVyIiwiYmMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiY29yZSIsImxhbmd1YWdlIiwic2hvd0lucHV0Qm94IiwicHJvbXB0IiwiYXBwbGljYXRpb25OYW1lIiwiY3dkIiwid29ya3NwYWNlRm9sZGVycyIsImZzUGF0aCIsIm9uIiwiY29kZSIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJfYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiX2RlYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjs7QUFFQTs7O0FBWEE7Ozs7O0FBY0EsSUFBSUMsZ0JBQWdCLElBQXBCOztBQUVBLFNBQVNDLDBCQUFULEdBQXNDO0FBQ2xDLFFBQUlELGtCQUFrQixJQUF0QixFQUE0QjtBQUN4Qiw4REFDS0UsSUFETCxDQUNVLGtCQUFVO0FBQ1pGLDRCQUFnQkcsTUFBaEI7QUFDSCxTQUhMLEVBR08sZUFBTztBQUNOTCxtQkFBT00sTUFBUCxDQUFjQyxnQkFBZCxDQUErQixpQ0FBL0I7QUFDQSxrQkFBTUMsR0FBTjtB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QkFBWjtBQUNBM0IsMkJBQU9NLE1BQVAsQ0FBY2dDLHNCQUFkLCtCQUFpRUMsa0JBQWpFO0FBQ0gsaUJBUkQ7QUFTSCxhQVhELENBV0UsT0FBTS9CLEdBQU4sRUFBVztBQUNUUix1QkFBT00sTUFBUCxDQUFjQyxnQkFBZCxDQUErQixrQ0FBL0IsRUFBbUVDLEdBQW5FO0FBQ0Esc0JBQU1BLEdBQU47QUFDSDtBQUNKLFNBakJMLEVBaUJPLGVBQU87QUFDTlIsbUJBQU9NLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0IsNENBQS9CLEVBQTZFQyxHQUE3RTtBQUNBLGtCQUFNQSxHQUFOO0FBQ0gsU0FwQkw7QUFxQkgsS0F0QkQ7QUF1QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVELElBQU1nQyxZQUFZOUIsUUFBbEI7UUFDc0JBLFEsR0FBYjhCLFM7O0FBRVQ7O0FBQ0EsU0FBU0MsVUFBVCxHQUFzQixDQUNyQjtBQUNELElBQU1DLGNBQWNELFVBQXBCO1FBQ3dCQSxVLEdBQWZDLFciLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQgeyBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24sIFByb2plY3RDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvbi9Qcm9qZWN0Q29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQgfSBmcm9tIFwiLi9jbGlcIjtcbmltcG9ydCB7IGJ1aWxkIH0gZnJvbSBcIi4vUHJvamVjdC9Qcm9qZWN0XCI7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuXG4vKipcbiAqIEB0eXBlIHtQcm9qZWN0Q29uZmlndXJhdGlvbn1cbiAqL1xubGV0IHByb2plY3RDb25maWcgPSBudWxsO1xuXG5mdW5jdGlvbiBlbnN1cmVQcm9qZWN0Q29uZmlndXJhdGlvbigpIHtcbiAgICBpZiAocHJvamVjdENvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgICBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgLnRoZW4oY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29uZmlnID0gY29uZmlnO1xuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBsb2FkIGRvbGl0dGxlIHByb2plY3QnKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGxvYWQgZG9saXR0bGUgcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcInZzY29kZVwiKS5FeHRlbnNpb25Db250ZXh0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGNvbnRleHQpIHtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5uZXdEb2xpdHRsZVByb2plY3QnLCAoKSA9PiB7fSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUuYnVpbGQnLCAodGV4dEVkaXRvcikgPT4ge1xuICAgICAgICBlbnN1cmVQcm9qZWN0Q29uZmlndXJhdGlvbigpO1xuICAgICAgICBsZXQgZG9jdW1lbnRVcmkgPSB0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaTtcbiAgICAgICAgbGV0IHdvcmtzcGFjZSA9IHZzY29kZS53b3Jrc3BhY2UuZ2V0V29ya3NwYWNlRm9sZGVyKGRvY3VtZW50VXJpKTtcbiAgICAgICAgbGV0IGJvdW5kZWRDb250ZXh0ID0gcHJvamVjdENvbmZpZy5ib3VuZGVkQ29udGV4dHMuZmlsdGVyKGJjID0+IGJjLndvcmtzcGFjZSA9PT0gd29ya3NwYWNlKVswXTtcbiAgICAgICAgaWYgKGJvdW5kZWRDb250ZXh0ID09PSB1bmRlZmluZWQpIFxuICAgICAgICAgICAgdGhyb3cgJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGdldHRpbmcgdGhlIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uJzsgXG4gICAgICAgIGNvbnNvbGUubG9nKGJvdW5kZWRDb250ZXh0KTtcbiAgICAgICAgYnVpbGQoYm91bmRlZENvbnRleHQuY29yZS5sYW5ndWFnZS5sYW5ndWFnZSwgd29ya3NwYWNlLnVyaSwgZG9jdW1lbnRVcmkpO1xuICAgIH0pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUFwcGxpY2F0aW9uJywgKCkgPT4ge1xuICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbnB1dEJveCh7cHJvbXB0OiAnQXBwbGljYXRpb24gbmFtZSd9KVxuICAgICAgICAgICAgLnRoZW4oYXBwbGljYXRpb25OYW1lID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICBzcGF3bkRvbGl0dGxlQ2xpQ29tbWFuZChcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY3JlYXRlJywgJ2FwcGxpY2F0aW9uJ10sIFxuICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGxpY2F0aW9uTmFtZV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAge2N3ZDogdnNjb2RlLndvcmtzcGFjZS53b3Jrc3BhY2VGb2xkZXJzWzBdLnVyaS5mc1BhdGh9XG4gICAgICAgICAgICAgICAgICAgICkub24oJ2Nsb3NlJywgKGNvZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IDApIHRocm93ICdDb3VsZCBub3QgY3JlYXRlIGFwcGxpY2F0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoYENyZWF0ZWQgYXBwbGljYXRpb24gJyR7YXBwbGljYXRpb25OYW1lfSdgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBhcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIHJldHJpZXZlIGFwcGxpY2F0aW9uIG5hbWUgZnJvbSBpbnB1dCcsIGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQm91bmRlZENvbnRleHQnLCAoKSA9PiB7XG4gICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdCb3VuZGVkIENvbnRleHQgbmFtZSd9KVxuICAgICAgICAgICAgLnRoZW4oYm91bmRlZENvbnRleHROYW1lID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgYm91bmRlZCBjb250ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NyZWF0ZScsICdib3VuZGVkY29udGV4dCddLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFtib3VuZGVkQ29udGV4dE5hbWVdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjd2Q6IHZzY29kZS53b3Jrc3BhY2Uud29ya3NwYWNlRm9sZGVyc1swXS51cmkuZnNQYXRofVxuICAgICAgICAgICAgICAgICAgICApLm9uKCdjbG9zZScsIChjb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAwKSB0aHJvdyAnQ291bGQgbm90IGNyZWF0ZSBib3VuZGVkIGNvbnRleHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgYm91bmRlZCBjb250ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoYENyZWF0ZWQgYm91bmRlZCBjb250ZXh0ICcke2JvdW5kZWRDb250ZXh0TmFtZX0nYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCByZXRyaWV2ZSBhcHBsaWNhdGlvbiBuYW1lIGZyb20gaW5wdXQnLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9hcHBsaWNhdGlvbi5qc29uJylcbiAgICAvLyAgICAgLnRoZW4oYXBwbGljYXRpb25zID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGhhc0FwcGxpY2F0aW9uID0gYXBwbGljYXRpb25zLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUJvdW5kZWRDb250ZXh0JywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBib3VuZGVkIGNvbnRleHQnKTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgd29ya3NwYWNlVXJpID0gdnNjb2RlLndvcmtzcGFjZS53b3Jrc3BhY2VGb2xkZXJzWzBdLnVyaTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkb2xpdHRsZUNyZWF0ZUFwcGxpY2F0aW9uUGF0aCA9IHJlcXVpcmUucmVzb2x2ZSgnQGRvbGl0dGxlL2NsaS9iaW4vZG9saXR0bGUtY3JlYXRlLWFwcGxpY2F0aW9uLmpzJyk7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZG9saXR0bGVDcmVhdGVCb3VuZGVkQ29udGV4dFBhdGggPSByZXF1aXJlLnJlc29sdmUoJ0Bkb2xpdHRsZS9jbGkvYmluL2RvbGl0dGxlLWNyZWF0ZS1ib3VuZGVkY29udGV4dC5qcycpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHNwYXduRG9saXR0bGVDcmVhdGVBcHBsaWNhdGlvbiA9IChhcHBsaWNhdGlvbk5hbWUpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYXduU3luYygnbm9kZScsIFtgJHtkb2xpdHRsZUNyZWF0ZUFwcGxpY2F0aW9uUGF0aH1gLCBhcHBsaWNhdGlvbk5hbWVdLCB7Y3dkOiB3b3Jrc3BhY2VVcmkuZnNQYXRofSk7XG4gICAgLy8gICAgICAgICAgICAgfTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBzcGF3bkRvbGl0dGxlQ3JlYXRlQm91bmRlZENvbnRleHQgPSAoYm91bmRlZENvbnRleHROYW1lKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmtzcGFjZVVyaS5mc1BhdGgpO1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gc3Bhd25TeW5jKCdub2RlJywgW2Ake2RvbGl0dGxlQ3JlYXRlQm91bmRlZENvbnRleHRQYXRofWAsIGJvdW5kZWRDb250ZXh0TmFtZV0sIHtjd2Q6IHdvcmtzcGFjZVVyaS5mc1BhdGh9KTtcbiAgICAvLyAgICAgICAgICAgICB9O1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUJvdW5kZWRDb250ZXh0ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbnB1dEJveCh7cHJvbXB0OiAnQm91bmRlZCBDb250ZXh0IE5hbWUnfSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC50aGVuKGJvdW5kZWRDb250ZXh0TmFtZSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25Eb2xpdHRsZUNyZWF0ZUJvdW5kZWRDb250ZXh0KGJvdW5kZWRDb250ZXh0TmFtZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgcmV0cmlldmUgYm91bmRlZCBjb250ZXh0IG5hbWUgZnJvbSBpbnB1dCcsIGVycik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICB9O1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUFwcGxpY2F0aW9uQW5kQm91bmRlZENvbnRleHQgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdBcHBsaWNhdGlvbiBuYW1lJ30pXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAudGhlbihhcHBsaWNhdGlvbk5hbWUgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduRG9saXR0bGVDcmVhdGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbk5hbWUpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJvdW5kZWRDb250ZXh0KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgcmV0cmlldmUgYXBwbGljYXRpb24gbmFtZSBmcm9tIGlucHV0JywgZXJyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIH07XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFoYXNBcHBsaWNhdGlvbikgY3JlYXRlQXBwbGljYXRpb25BbmRCb3VuZGVkQ29udGV4dCgpO1xuICAgIC8vICAgICAgICAgICAgIGVsc2UgY3JlYXRlQm91bmRlZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUuc3RhcnQnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgbG9hZFByb2plY3RDb25maWd1cmF0aW9uKClcbiAgICAvLyAgICAgICAgICAgICAgICAgLnRoZW4oY29uZmlnID0+IGJ1aWxkQ29udGV4dChjb250ZXh0LCBjb25maWcpLCBlcnIgPT4gdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCBub3QgbG9hZCBwcm9qZWN0JywgZXJyKSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBsb2FkIHByb2plY3QnLCBlcnIpKTtcbiAgICAvLyAgICAgICAgIH0pXG5cbiAgICAvLyAgICAgICAgIGlmICghaGFzQXBwbGljYXRpb24pIFxuICAgIC8vICAgICAgICAgICAgIHZzY29kZS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQm91bmRlZENvbnRleHQnKVxuICAgIC8vICAgICAgICAgICAgICAgICAudGhlbihyZXMgID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZzY29kZS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZCgnZG9saXR0bGUuc3RhcnQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBib3VuZGVkIGNvbnRleHQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAgdnNjb2RlLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kKCdkb2xpdHRsZS5zdGFydCcpO1xuICAgIC8vICAgICB9KTtcbn1cblxuY29uc3QgX2FjdGl2YXRlID0gYWN0aXZhdGU7XG5leHBvcnQgeyBfYWN0aXZhdGUgYXMgYWN0aXZhdGUgfTtcblxuLy8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4geW91ciBleHRlbnNpb24gaXMgZGVhY3RpdmF0ZWRcbmZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XG59XG5jb25zdCBfZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XG5leHBvcnQgeyBfZGVhY3RpdmF0ZSBhcyBkZWFjdGl2YXRlIH07Il19