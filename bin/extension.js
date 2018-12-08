"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _cli = require("./cli");

var _globals = require("./globals");

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var vscode = _globals2.default.vscode;
var project = require('./Project/Project');

function ensureProjectConfiguration() {
    if (_globals2.default.projectConfiguration === null) {
        return _globals2.default.setProjectConfiguration();
    } else return Promise.resolve();
}
/**
 * Executes a function that needs to be ran in a project configuration context
 *
 * @param {() => void} todo
 */
function executeInContext(todo) {
    var _this = this;

    ensureProjectConfiguration().then(function () {
        todo();
    }, function (error) {
        _this.dolittleProjectOutputChannel.appendLine("Could not load dolittle project:\nError: " + error);
        _this.vscode.window.showErrorMessage('Could not load dolittle project', error);
        throw error;
    }).catch(function (error) {
        _this.dolittleProjectOutputChannel.appendLine("Could not load dolittle project:\nError: " + error);
        _this.vscode.window.showErrorMessage('Could not load dolittle project', error);
        throw error;
    });
}

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    vscode.commands.registerCommand('dolittle.newDolittleProject', function () {});

    vscode.commands.registerTextEditorCommand('dolittle.build', function (textEditor) {
        executeInContext(function () {
            return project.build(textEditor.document.uri);
        });
    });
    vscode.commands.registerTextEditorCommand('dolittle.buildCurrent', function (textEditor) {
        executeInContext(function () {
            return project.buildCurrent(textEditor.document.uri);
        });
    });

    vscode.commands.registerTextEditorCommand('dolittle.restore', function (textEditor) {
        executeInContext(function () {
            return project.restore(textEditor.document.uri);
        });
    });

    vscode.commands.registerTextEditorCommand('dolittle.test', function (textEditor) {
        executeInContext(function () {
            return project.test(textEditor.document.uri);
        });
    });
    vscode.commands.registerTextEditorCommand('dolittle.testDebug', function (textEditor) {
        executeInContext(function () {
            return project.testDebug(textEditor.document.uri);
        });
    });
    vscode.commands.registerTextEditorCommand('dolittle.testRerun', function (textEditor) {
        executeInContext(function () {
            return project.testRerun(textEditor.document.uri);
        });
    });

    vscode.commands.registerCommand('dolittle.createApplication', function () {
        vscode.window.showInputBox({ prompt: 'Application name' }).then(function (applicationName) {
            try {
                _globals2.default.dolittleOutputChannel.appendLine('Creating application');
                (0, _cli.spawnDolittleCliCommand)(['create', 'application'], [applicationName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                    if (code !== 0) throw 'Could not create application';
                    _globals2.default.dolittleOutputChannel.appendLine("Created application '" + applicationName + "'");
                });
            } catch (err) {
                _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create application.\nError: " + err);
                vscode.window.showErrorMessage('Could not create application');
                throw err;
            }
        }, function (err) {
            _globals2.default.dolittleProjectOutputChannel.appendLine("Could not retrieve application name from input.\nError: " + err);
            vscode.window.showErrorMessage('Could retrieve application name from input', err);
            throw err;
        });
    });
    vscode.commands.registerCommand('dolittle.createBoundedContext', function () {
        vscode.window.showInputBox({ prompt: 'Bounded Context name' }).then(function (boundedContextName) {
            try {

                _globals2.default.dolittleOutputChannel.appendLine('Creating bounded context');
                (0, _cli.spawnDolittleCliCommand)(['create', 'boundedcontext'], [boundedContextName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                    if (code !== 0) throw 'Could not create bounded context';
                    _globals2.default.dolittleOutputChannel.appendLine("Created bounded context '" + boundedContextName + "'");
                });
            } catch (err) {

                _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create bounded context.\nError: " + err);
                vscode.window.showErrorMessage('Could not create bounded context', err);
                throw err;
            }
        }, function (err) {

            _globals2.default.dolittleProjectOutputChannel.appendLine("Could not retrieve bounded context name from input.\nError: " + err);
            vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
            throw err;
        });
    });
}

var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwiZ2xvYmFscyIsInByb2plY3QiLCJyZXF1aXJlIiwiZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24iLCJwcm9qZWN0Q29uZmlndXJhdGlvbiIsInNldFByb2plY3RDb25maWd1cmF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJleGVjdXRlSW5Db250ZXh0IiwidG9kbyIsInRoZW4iLCJkb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsIiwiYXBwZW5kTGluZSIsImVycm9yIiwid2luZG93Iiwic2hvd0Vycm9yTWVzc2FnZSIsImNhdGNoIiwiYWN0aXZhdGUiLCJjb250ZXh0IiwiY29tbWFuZHMiLCJyZWdpc3RlckNvbW1hbmQiLCJyZWdpc3RlclRleHRFZGl0b3JDb21tYW5kIiwiYnVpbGQiLCJ0ZXh0RWRpdG9yIiwiZG9jdW1lbnQiLCJ1cmkiLCJidWlsZEN1cnJlbnQiLCJyZXN0b3JlIiwidGVzdCIsInRlc3REZWJ1ZyIsInRlc3RSZXJ1biIsInNob3dJbnB1dEJveCIsInByb21wdCIsImRvbGl0dGxlT3V0cHV0Q2hhbm5lbCIsImFwcGxpY2F0aW9uTmFtZSIsImN3ZCIsIndvcmtzcGFjZSIsIndvcmtzcGFjZUZvbGRlcnMiLCJmc1BhdGgiLCJvbiIsImNvZGUiLCJlcnIiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJfYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiX2RlYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7QUFDQTs7Ozs7O0FBTkE7Ozs7O0FBUUEsSUFBTUEsU0FBU0Msa0JBQVFELE1BQXZCO0FBQ0EsSUFBTUUsVUFBVUMsUUFBUSxtQkFBUixDQUFoQjs7QUFFQSxTQUFTQywwQkFBVCxHQUFzQztBQUNsQyxRQUFJSCxrQkFBUUksb0JBQVIsS0FBaUMsSUFBckMsRUFBMkM7QUFDdkMsZUFBT0osa0JBQVFLLHVCQUFSLEVBQVA7QUFDSCxLQUZELE1BR0ss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QUE4QnJCLFVBQTlCLCtCQUFxRThCLGtCQUFyRTtBQUNILGlCQVBEO0FBUUgsYUFYRCxDQVdFLE9BQU1ELEdBQU4sRUFBVzs7QUFFVHpDLGtDQUFRVyw0QkFBUixDQUFxQ0MsVUFBckMsZ0RBQTZGNkIsR0FBN0Y7QUFDQTFDLHVCQUFPZSxNQUFQLENBQWNDLGdCQUFkLENBQStCLGtDQUEvQixFQUFtRTBCLEdBQW5FO0FBQ0Esc0JBQU1BLEdBQU47QUFDSDtBQUNKLFNBbkJMLEVBbUJPLGVBQU87O0FBRU56Qyw4QkFBUVcsNEJBQVIsQ0FBcUNDLFVBQXJDLGtFQUErRzZCLEdBQS9HO0FBQ0ExQyxtQkFBT2UsTUFBUCxDQUFjQyxnQkFBZCxDQUErQixnREFBL0IsRUFBaUYwQixHQUFqRjtBQUNBLGtCQUFNQSxHQUFOO0FBQ0gsU0F4Qkw7QUF5QkgsS0ExQkQ7QUEyQkg7O0FBRUQsSUFBTUUsWUFBWTFCLFFBQWxCO1FBQ3NCQSxRLEdBQWIwQixTOztBQUVUOztBQUNBLFNBQVNDLFVBQVQsR0FBc0IsQ0FDckI7QUFDRCxJQUFNQyxjQUFjRCxVQUFwQjtRQUN3QkEsVSxHQUFmQyxXIiwiZmlsZSI6ImV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQgfSBmcm9tIFwiLi9jbGlcIjtcbmltcG9ydCBnbG9iYWxzIGZyb20gXCIuL2dsb2JhbHNcIjtcblxuY29uc3QgdnNjb2RlID0gZ2xvYmFscy52c2NvZGU7XG5jb25zdCBwcm9qZWN0ID0gcmVxdWlyZSgnLi9Qcm9qZWN0L1Byb2plY3QnKTtcblxuZnVuY3Rpb24gZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgaWYgKGdsb2JhbHMucHJvamVjdENvbmZpZ3VyYXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbHMuc2V0UHJvamVjdENvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG4vKipcbiAqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gdGhhdCBuZWVkcyB0byBiZSByYW4gaW4gYSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24gY29udGV4dFxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gdG9kb1xuICovXG5mdW5jdGlvbiBleGVjdXRlSW5Db250ZXh0KHRvZG8pIHtcbiAgICBlbnN1cmVQcm9qZWN0Q29uZmlndXJhdGlvbigpXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvKClcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCBsb2FkIGRvbGl0dGxlIHByb2plY3Q6XFxuRXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgICAgIHRoaXMudnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCBub3QgbG9hZCBkb2xpdHRsZSBwcm9qZWN0JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ291bGQgbm90IGxvYWQgZG9saXR0bGUgcHJvamVjdDpcXG5FcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICAgICAgdGhpcy52c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBsb2FkIGRvbGl0dGxlIHByb2plY3QnLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG59XG5cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcInZzY29kZVwiKS5FeHRlbnNpb25Db250ZXh0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGNvbnRleHQpIHtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5uZXdEb2xpdHRsZVByb2plY3QnLCAoKSA9PiB7fSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUuYnVpbGQnLCB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICAgZXhlY3V0ZUluQ29udGV4dCgoKSA9PiBwcm9qZWN0LmJ1aWxkKHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLmJ1aWxkQ3VycmVudCcsIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LmJ1aWxkQ3VycmVudCh0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpO1xuICAgIH0pO1xuXG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnJlc3RvcmUnLCB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICAgZXhlY3V0ZUluQ29udGV4dCggKCkgPT4gcHJvamVjdC5yZXN0b3JlKHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSk7XG4gICAgfSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUudGVzdCcsIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3QodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKTtcbiAgICB9KTtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUudGVzdERlYnVnJywgdGV4dEVkaXRvciA9PiB7XG4gICAgICAgIGV4ZWN1dGVJbkNvbnRleHQoICgpID0+IHByb2plY3QudGVzdERlYnVnKHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnRlc3RSZXJ1bicsIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3RSZXJ1bih0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpO1xuICAgIH0pO1xuXG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQXBwbGljYXRpb24nLCAoKSA9PiB7XG4gICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdBcHBsaWNhdGlvbiBuYW1lJ30pXG4gICAgICAgICAgICAudGhlbihhcHBsaWNhdGlvbk5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NyZWF0aW5nIGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHNwYXduRG9saXR0bGVDbGlDb21tYW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgWydjcmVhdGUnLCAnYXBwbGljYXRpb24nXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXBwbGljYXRpb25OYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3dkOiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnNbMF0udXJpLmZzUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgKS5vbignY2xvc2UnLCAoY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgJ0NvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ3JlYXRlZCBhcHBsaWNhdGlvbiAnJHthcHBsaWNhdGlvbk5hbWV9J2ApO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24uXFxuRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCByZXRyaWV2ZSBhcHBsaWNhdGlvbiBuYW1lIGZyb20gaW5wdXQuXFxuRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgcmV0cmlldmUgYXBwbGljYXRpb24gbmFtZSBmcm9tIGlucHV0JywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5jcmVhdGVCb3VuZGVkQ29udGV4dCcsICgpID0+IHtcbiAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93SW5wdXRCb3goe3Byb21wdDogJ0JvdW5kZWQgQ29udGV4dCBuYW1lJ30pXG4gICAgICAgICAgICAudGhlbihib3VuZGVkQ29udGV4dE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnQ3JlYXRpbmcgYm91bmRlZCBjb250ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNwYXduRG9saXR0bGVDbGlDb21tYW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgWydjcmVhdGUnLCAnYm91bmRlZGNvbnRleHQnXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBbYm91bmRlZENvbnRleHROYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3dkOiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnNbMF0udXJpLmZzUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgKS5vbignY2xvc2UnLCAoY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgJ0NvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENyZWF0ZWQgYm91bmRlZCBjb250ZXh0ICcke2JvdW5kZWRDb250ZXh0TmFtZX0nYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgY3JlYXRlIGJvdW5kZWQgY29udGV4dC5cXG5FcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBib3VuZGVkIGNvbnRleHQnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyID0+IHtcblxuICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgcmV0cmlldmUgYm91bmRlZCBjb250ZXh0IG5hbWUgZnJvbSBpbnB1dC5cXG5FcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCByZXRyaWV2ZSBib3VuZGVkIGNvbnRleHQgbmFtZSBmcm9tIGlucHV0JywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgX2FjdGl2YXRlID0gYWN0aXZhdGU7XG5leHBvcnQgeyBfYWN0aXZhdGUgYXMgYWN0aXZhdGUgfTtcblxuLy8gdGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4geW91ciBleHRlbnNpb24gaXMgZGVhY3RpdmF0ZWRcbmZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XG59XG5jb25zdCBfZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XG5leHBvcnQgeyBfZGVhY3RpdmF0ZSBhcyBkZWFjdGl2YXRlIH07Il19