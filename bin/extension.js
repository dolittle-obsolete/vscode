'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _ProjectConfiguration = require('./Configuration/ProjectConfiguration');

var vscode = require('vscode'); /*---------------------------------------------------------------------------------------------
                                 *  Copyright (c) Dolittle. All rights reserved.
                                 *  Licensed under the MIT License. See LICENSE in the project root for license information.
                                 *--------------------------------------------------------------------------------------------*/

var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    vscode.workspace.findFiles('**/application.json').then(function (applications) {
        var hasApplication = applications.length > 0;

        vscode.commands.registerCommand('dolittle.createBoundedContext', function () {
            console.log('Creating bounded context');
            var workspaceUri = vscode.workspace.workspaceFolders[0].uri;
            var dolittleCreateApplicationPath = require.resolve('@dolittle/cli/bin/dolittle-create-application.js');
            var dolittleCreateBoundedContextPath = require.resolve('@dolittle/cli/bin/dolittle-create-boundedcontext.js');
            var spawnDolittleCreateApplication = function spawnDolittleCreateApplication(applicationName) {
                return spawnSync('node', ['' + dolittleCreateApplicationPath, applicationName], { cwd: workspaceUri.fsPath });
            };
            var spawnDolittleCreateBoundedContext = function spawnDolittleCreateBoundedContext(boundedContextName) {
                console.log(workspaceUri.fsPath);
                return spawnSync('node', ['' + dolittleCreateBoundedContextPath, boundedContextName], { cwd: workspaceUri.fsPath });
            };
            var createBoundedContext = function createBoundedContext() {
                vscode.window.showInputBox({ prompt: 'Bounded Context Name' }).then(function (boundedContextName) {
                    spawnDolittleCreateBoundedContext(boundedContextName);
                }, function (err) {
                    vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
                });
            };
            var createApplicationAndBoundedContext = function createApplicationAndBoundedContext() {
                vscode.window.showInputBox({ prompt: 'Application name' }).then(function (applicationName) {
                    spawnDolittleCreateApplication(applicationName);
                    createBoundedContext();
                }, function (err) {
                    vscode.window.showErrorMessage('Could retrieve application name from input', err);
                });
            };
            if (!hasApplication) createApplicationAndBoundedContext();else createBoundedContext();
        });
        vscode.commands.registerCommand('dolittle.start', function () {
            (0, _ProjectConfiguration.loadProjectConfiguration)().then(function (config) {
                return buildContext(context, config);
            }, function (err) {
                return vscode.window.showErrorMessage('Could not load project', err);
            }).catch(function (err) {
                return vscode.window.showErrorMessage('Could not load project', err);
            });
        });

        if (!hasApplication) vscode.commands.executeCommand('dolittle.createBoundedContext').then(function (res) {
            vscode.commands.executeCommand('dolittle.start');
        }, function (err) {
            vscode.window.showErrorMessage('Could not create bounded context');
        });else vscode.commands.executeCommand('dolittle.start');
    });
}

/**
 *
 * @param {import("vscode").ExtensionContext} context
 * @param {import('./Configuration/ProjectConfiguration').ProjectConfiguration} projectConfiguration
 */
function buildContext(context, projectConfiguration) {
    console.log(projectConfiguration);
    vscode.commands.registerTextEditorCommand('dolittle.build', function (textEditor) {
        var editorFileUri = textEditor.document.uri;
        var workspaceUri = vscode.workspace.workspaceFolders[0].uri;
        console.log(vscode.workspace.workspaceFolders);
        console.log(editorFileUri);
        console.log(workspaceUri);
    });
}
var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwicmVxdWlyZSIsInNwYXduIiwic3Bhd25TeW5jIiwiYWN0aXZhdGUiLCJjb250ZXh0Iiwid29ya3NwYWNlIiwiZmluZEZpbGVzIiwidGhlbiIsImhhc0FwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25zIiwibGVuZ3RoIiwiY29tbWFuZHMiLCJyZWdpc3RlckNvbW1hbmQiLCJjb25zb2xlIiwibG9nIiwid29ya3NwYWNlVXJpIiwid29ya3NwYWNlRm9sZGVycyIsInVyaSIsImRvbGl0dGxlQ3JlYXRlQXBwbGljYXRpb25QYXRoIiwicmVzb2x2ZSIsImRvbGl0dGxlQ3JlYXRlQm91bmRlZENvbnRleHRQYXRoIiwic3Bhd25Eb2xpdHRsZUNyZWF0ZUFwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25OYW1lIiwiY3dkIiwiZnNQYXRoIiwic3Bhd25Eb2xpdHRsZUNyZWF0ZUJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHROYW1lIiwiY3JlYXRlQm91bmRlZENvbnRleHQiLCJ3aW5kb3ciLCJzaG93SW5wdXRCb3giLCJwcm9tcHQiLCJzaG93RXJyb3JNZXNzYWdlIiwiZXJyIiwiY3JlYXRlQXBwbGljYXRpb25BbmRCb3VuZGVkQ29udGV4dCIsImJ1aWxkQ29udGV4dCIsImNvbmZpZyIsImNhdGNoIiwiZXhlY3V0ZUNvbW1hbmQiLCJwcm9qZWN0Q29uZmlndXJhdGlvbiIsInJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQiLCJ0ZXh0RWRpdG9yIiwiZWRpdG9yRmlsZVVyaSIsImRvY3VtZW50IiwiX2FjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl9kZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWYsQyxDQVBBOzs7OztBQVFBLElBQU1DLFFBQVFELFFBQVEsZUFBUixFQUF5QkMsS0FBdkM7QUFDQSxJQUFNQyxZQUFZRixR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QS9CO0FBQ0gsU0FITCxFQUdPLGVBQU87QUFDTnRDLG1CQUFPNkIsTUFBUCxDQUFjRyxnQkFBZCxDQUErQixrQ0FBL0I7QUFDSCxTQUxMLEVBREosS0FRSWhDLE9BQU9ZLFFBQVAsQ0FBZ0IwQixjQUFoQixDQUErQixnQkFBL0I7QUFDUCxLQXBETDtBQXFESDs7QUFFRDs7Ozs7QUFLQSxTQUFTSCxZQUFULENBQXNCOUIsT0FBdEIsRUFBK0JrQyxvQkFBL0IsRUFBcUQ7QUFDakR6QixZQUFRQyxHQUFSLENBQVl3QixvQkFBWjtBQUNBdkMsV0FBT1ksUUFBUCxDQUFnQjRCLHlCQUFoQixDQUEwQyxnQkFBMUMsRUFBNEQsVUFBQ0MsVUFBRCxFQUFnQjtBQUN4RSxZQUFJQyxnQkFBZ0JELFdBQVdFLFFBQVgsQ0FBb0J6QixHQUF4QztBQUNBLFlBQUlGLGVBQWVoQixPQUFPTSxTQUFQLENBQWlCVyxnQkFBakIsQ0FBa0MsQ0FBbEMsRUFBcUNDLEdBQXhEO0FBQ0FKLGdCQUFRQyxHQUFSLENBQVlmLE9BQU9NLFNBQVAsQ0FBaUJXLGdCQUE3QjtBQUNBSCxnQkFBUUMsR0FBUixDQUFZMkIsYUFBWjtBQUNBNUIsZ0JBQVFDLEdBQVIsQ0FBWUMsWUFBWjtBQUdILEtBUkQ7QUFVSDtBQUNELElBQU00QixZQUFZeEMsUUFBbEI7UUFDc0JBLFEsR0FBYndDLFM7O0FBRVQ7O0FBQ0EsU0FBU0MsVUFBVCxHQUFzQixDQUNyQjtBQUNELElBQU1DLGNBQWNELFVBQXBCO1FBQ3dCQSxVLEdBQWZDLFciLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQgeyBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuY29uc3Qgc3Bhd24gPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuc3Bhd247XG5jb25zdCBzcGF3blN5bmMgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuc3Bhd25TeW5jO1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KFwidnNjb2RlXCIpLkV4dGVuc2lvbkNvbnRleHR9IGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gYWN0aXZhdGUoY29udGV4dCkge1xuICAgIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9hcHBsaWNhdGlvbi5qc29uJylcbiAgICAgICAgLnRoZW4oYXBwbGljYXRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc0FwcGxpY2F0aW9uID0gYXBwbGljYXRpb25zLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUJvdW5kZWRDb250ZXh0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBib3VuZGVkIGNvbnRleHQnKTtcbiAgICAgICAgICAgICAgICBsZXQgd29ya3NwYWNlVXJpID0gdnNjb2RlLndvcmtzcGFjZS53b3Jrc3BhY2VGb2xkZXJzWzBdLnVyaTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2xpdHRsZUNyZWF0ZUFwcGxpY2F0aW9uUGF0aCA9IHJlcXVpcmUucmVzb2x2ZSgnQGRvbGl0dGxlL2NsaS9iaW4vZG9saXR0bGUtY3JlYXRlLWFwcGxpY2F0aW9uLmpzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9saXR0bGVDcmVhdGVCb3VuZGVkQ29udGV4dFBhdGggPSByZXF1aXJlLnJlc29sdmUoJ0Bkb2xpdHRsZS9jbGkvYmluL2RvbGl0dGxlLWNyZWF0ZS1ib3VuZGVkY29udGV4dC5qcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYXduRG9saXR0bGVDcmVhdGVBcHBsaWNhdGlvbiA9IChhcHBsaWNhdGlvbk5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYXduU3luYygnbm9kZScsIFtgJHtkb2xpdHRsZUNyZWF0ZUFwcGxpY2F0aW9uUGF0aH1gLCBhcHBsaWNhdGlvbk5hbWVdLCB7Y3dkOiB3b3Jrc3BhY2VVcmkuZnNQYXRofSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGF3bkRvbGl0dGxlQ3JlYXRlQm91bmRlZENvbnRleHQgPSAoYm91bmRlZENvbnRleHROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmtzcGFjZVVyaS5mc1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Bhd25TeW5jKCdub2RlJywgW2Ake2RvbGl0dGxlQ3JlYXRlQm91bmRlZENvbnRleHRQYXRofWAsIGJvdW5kZWRDb250ZXh0TmFtZV0sIHtjd2Q6IHdvcmtzcGFjZVVyaS5mc1BhdGh9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUJvdW5kZWRDb250ZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbnB1dEJveCh7cHJvbXB0OiAnQm91bmRlZCBDb250ZXh0IE5hbWUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGJvdW5kZWRDb250ZXh0TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25Eb2xpdHRsZUNyZWF0ZUJvdW5kZWRDb250ZXh0KGJvdW5kZWRDb250ZXh0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgcmV0cmlldmUgYm91bmRlZCBjb250ZXh0IG5hbWUgZnJvbSBpbnB1dCcsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUFwcGxpY2F0aW9uQW5kQm91bmRlZENvbnRleHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdBcHBsaWNhdGlvbiBuYW1lJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihhcHBsaWNhdGlvbk5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduRG9saXR0bGVDcmVhdGVBcHBsaWNhdGlvbihhcHBsaWNhdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJvdW5kZWRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgcmV0cmlldmUgYXBwbGljYXRpb24gbmFtZSBmcm9tIGlucHV0JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNBcHBsaWNhdGlvbikgY3JlYXRlQXBwbGljYXRpb25BbmRCb3VuZGVkQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGVsc2UgY3JlYXRlQm91bmRlZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUuc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZFByb2plY3RDb25maWd1cmF0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oY29uZmlnID0+IGJ1aWxkQ29udGV4dChjb250ZXh0LCBjb25maWcpLCBlcnIgPT4gdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCBub3QgbG9hZCBwcm9qZWN0JywgZXJyKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBsb2FkIHByb2plY3QnLCBlcnIpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmICghaGFzQXBwbGljYXRpb24pIFxuICAgICAgICAgICAgICAgIHZzY29kZS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQm91bmRlZENvbnRleHQnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZCgnZG9saXR0bGUuc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBib3VuZGVkIGNvbnRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdnNjb2RlLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kKCdkb2xpdHRsZS5zdGFydCcpO1xuICAgICAgICB9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCJ2c2NvZGVcIikuRXh0ZW5zaW9uQ29udGV4dH0gY29udGV4dFxuICogQHBhcmFtIHtpbXBvcnQoJy4vQ29uZmlndXJhdGlvbi9Qcm9qZWN0Q29uZmlndXJhdGlvbicpLlByb2plY3RDb25maWd1cmF0aW9ufSBwcm9qZWN0Q29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZENvbnRleHQoY29udGV4dCwgcHJvamVjdENvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q29uZmlndXJhdGlvbik7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLmJ1aWxkJywgKHRleHRFZGl0b3IpID0+IHtcbiAgICAgICAgbGV0IGVkaXRvckZpbGVVcmkgPSB0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaTtcbiAgICAgICAgbGV0IHdvcmtzcGFjZVVyaSA9IHZzY29kZS53b3Jrc3BhY2Uud29ya3NwYWNlRm9sZGVyc1swXS51cmk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZzY29kZS53b3Jrc3BhY2Uud29ya3NwYWNlRm9sZGVycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVkaXRvckZpbGVVcmkpO1xuICAgICAgICBjb25zb2xlLmxvZyh3b3Jrc3BhY2VVcmkpO1xuXG4gICAgICAgIFxuICAgIH0pO1xuICAgIFxufVxuY29uc3QgX2FjdGl2YXRlID0gYWN0aXZhdGU7XG5leHBvcnQgeyBfYWN0aXZhdGUgYXMgYWN0aXZhdGUgfTtcblxuLy8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4geW91ciBleHRlbnNpb24gaXMgZGVhY3RpdmF0ZWRcbmZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XG59XG5jb25zdCBfZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XG5leHBvcnQgeyBfZGVhY3RpdmF0ZSBhcyBkZWFjdGl2YXRlIH07Il19