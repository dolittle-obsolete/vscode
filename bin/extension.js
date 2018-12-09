"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
        _globals2.default.dolittleProjectOutputChannel.appendLine('Attempting to load dolittle project');
        return _globals2.default.setProjectConfiguration();
    } else return Promise.resolve();
}
/**
 * Executes a function that needs to be ran in a project configuration context
 *
 * @param {() => void} todo
 */
function executeInContext(todo) {
    return ensureProjectConfiguration().then(function (success) {
        return todo();
    }, function (error) {
        vscode.window.showErrorMessage("Failed to load dolittle projects.\nError: " + error);
        throw error;
    });
}

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    var _this = this;

    process.addListener('unhandledRejection', function (reason) {
        console.error('Rejection not handled', reason);
    });
    process.addListener('uncaughtException', function (error) {
        console.error('Uncaught exception', error);
    });

    vscode.commands.registerCommand('dolittle.newDolittleProject', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var applicationUris;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2);

                    case 3:
                        applicationUris = _context.sent;

                        if (!(applicationUris.length > 0)) {
                            _context.next = 7;
                            break;
                        }

                        _globals2.default.dolittleProjectOutputChannel.appendLine("Found application.json files at paths " + applicationUris.map(function (uri) {
                            return uri.fsPath;
                        }).join(', '));
                        throw 'Could not start new dolittle project because there already exists a dolittle application here!';

                    case 7:
                        _context.next = 9;
                        return vscode.commands.executeCommand('dolittle.createApplication');

                    case 9:
                        _context.next = 11;
                        return vscode.commands.executeCommand('dolittle.createBoundedContext');

                    case 11:
                        _context.next = 17;
                        break;

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](0);

                        vscode.window.showErrorMessage('Could not create a new dolittle project');
                        _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create a new dolittle project.\nError: " + _context.t0);

                    case 17:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this, [[0, 13]]);
    })));
    vscode.commands.registerCommand('dolittle.reloadProject', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return executeInContext(function () {}).then(function (success) {}, function (error) {});

                    case 2:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    })));

    vscode.commands.registerTextEditorCommand('dolittle.build', function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(textEditor) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return executeInContext(function () {
                                return project.build(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not build project';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, _this);
        }));

        return function (_x) {
            return _ref3.apply(this, arguments);
        };
    }());
    vscode.commands.registerTextEditorCommand('dolittle.buildCurrent', function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(textEditor) {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return executeInContext(function () {
                                return project.buildCurrent(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not build current project';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, _this);
        }));

        return function (_x2) {
            return _ref4.apply(this, arguments);
        };
    }());

    vscode.commands.registerTextEditorCommand('dolittle.restore', function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(textEditor) {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return executeInContext(function () {
                                return project.restore(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                vscode.window.showErrorMessage('Could not perform a project restore');
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Could not perform project restore');
                            });

                        case 2:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, _this);
        }));

        return function (_x3) {
            return _ref5.apply(this, arguments);
        };
    }());

    vscode.commands.registerTextEditorCommand('dolittle.test', function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(textEditor) {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return executeInContext(function () {
                                return project.test(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not perform tests';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, _this);
        }));

        return function (_x4) {
            return _ref6.apply(this, arguments);
        };
    }());
    vscode.commands.registerTextEditorCommand('dolittle.testDebug', function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(textEditor) {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return executeInContext(function () {
                                return project.testDebug(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not debug tests';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, _this);
        }));

        return function (_x5) {
            return _ref7.apply(this, arguments);
        };
    }());
    vscode.commands.registerTextEditorCommand('dolittle.testRerun', function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(textEditor) {
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return executeInContext(function () {
                                return project.testRerun(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not rerun tests';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, _this);
        }));

        return function (_x6) {
            return _ref8.apply(this, arguments);
        };
    }());

    vscode.commands.registerCommand('dolittle.createApplication', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
        return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return vscode.window.showInputBox({ prompt: 'Application name' }).then(function (applicationName) {
                            try {
                                _globals2.default.dolittleOutputChannel.appendLine('Creating application');
                                (0, _cli.spawnDolittleCliCommand)(['create', 'application'], [applicationName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                                    if (code !== 0) throw 'Could not create application';
                                    _globals2.default.dolittleOutputChannel.appendLine("Created application '" + applicationName + "'");
                                });
                            } catch (err) {
                                _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create application.\nError: " + err);
                                vscode.window.showErrorMessage('Could not create application');
                            }
                        }, function (err) {
                            _globals2.default.dolittleProjectOutputChannel.appendLine("Could not retrieve application name from input.\nError: " + err);
                            vscode.window.showErrorMessage('Could retrieve application name from input', err);
                        });

                    case 2:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, _this);
    })));
    vscode.commands.registerCommand('dolittle.createBoundedContext', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
        return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return vscode.window.showInputBox({ prompt: 'Bounded Context name' }).then(function (boundedContextName) {
                            try {

                                _globals2.default.dolittleOutputChannel.appendLine('Creating bounded context');
                                (0, _cli.spawnDolittleCliCommand)(['create', 'boundedcontext'], [boundedContextName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                                    if (code !== 0) throw 'Could not create bounded context';
                                    _globals2.default.dolittleOutputChannel.appendLine("Created bounded context '" + boundedContextName + "'");
                                });
                            } catch (err) {
                                _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create bounded context.\nError: " + err);
                                vscode.window.showErrorMessage('Could not create bounded context', err);
                            }
                        }, function (err) {
                            _globals2.default.dolittleProjectOutputChannel.appendLine("Could not retrieve bounded context name from input.\nError: " + err);
                            vscode.window.showErrorMessage('Could retrieve bounded context name from input', err);
                        });

                    case 2:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, _this);
    })));
}

var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwiZ2xvYmFscyIsInByb2plY3QiLCJyZXF1aXJlIiwiZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24iLCJwcm9qZWN0Q29uZmlndXJhdGlvbiIsImRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwiLCJhcHBlbmRMaW5lIiwic2V0UHJvamVjdENvbmZpZ3VyYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsImV4ZWN1dGVJbkNvbnRleHQiLCJ0b2RvIiwidGhlbiIsIndpbmRvdyIsInNob3dFcnJvck1lc3NhZ2UiLCJlcnJvciIsImFjdGl2YXRlIiwiY29udGV4dCIsInByb2Nlc3MiLCJhZGRMaXN0ZW5lciIsInJlYXNvbiIsImNvbnNvbGUiLCJjb21tYW5kcyIsInJlZ2lzdGVyQ29tbWFuZCIsIndvcmtzcGFjZSIsImZpbmRGaWxlcyIsImFwcGxpY2F0aW9uVXJpcyIsImxlbmd0aCIsIm1hcCIsInVyaSIsImZzUGF0aCIsImpvaW4iLCJleGVjdXRlQ29tbWFuZCIsInJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQiLCJ0ZXh0RWRpdG9yIiwiYnVpbGQiLCJkb2N1bWVudCIsIm1zZyIsImJ1aWxkQ3VycmVudCIsInJlc3RvcmUiLCJ0ZXN0IiwidGVzdERlYnVnIiwidGVzdFJlcnVuIiwic2hvd0lucHV0Qm94IiwicHJvbXB0IiwiZG9saXR0bGVPdXRwdXRDaGFubmVsIiwiYXBwbGljYXRpb25OYW1lIiwiY3dkIiwid29ya3NwYWNlRm9sZGVycyIsIm9uIiwiY29kZSIsImVyciIsImJvdW5kZWRDb250ZXh0TmFtZSIsIl9hY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJfZGVhY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBQ0E7Ozs7OztBQU5BOzs7OztBQVFBLElBQU1BLFNBQVNDLGtCQUFRRCxNQUF2QjtBQUNBLElBQU1FLFVBQVVDLFFBQVEsbUJBQVIs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QUFyRTtBQUNILGlDQVBEO0FBUUgsNkJBWEQsQ0FXRSxPQUFNRCxHQUFOLEVBQVc7QUFDVG5ELGtEQUFRSyw0QkFBUixDQUFxQ0MsVUFBckMsZ0RBQTZGNkMsR0FBN0Y7QUFDQXBELHVDQUFPYyxNQUFQLENBQWNDLGdCQUFkLENBQStCLGtDQUEvQixFQUFtRXFDLEdBQW5FO0FBQ0g7QUFDSix5QkFqQkMsRUFpQkMsZUFBTztBQUNObkQsOENBQVFLLDRCQUFSLENBQXFDQyxVQUFyQyxrRUFBK0c2QyxHQUEvRztBQUNBcEQsbUNBQU9jLE1BQVAsQ0FBY0MsZ0JBQWQsQ0FBK0IsZ0RBQS9CLEVBQWlGcUMsR0FBakY7QUFDSCx5QkFwQkMsQ0FEdUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBakU7QUF1Qkg7O0FBRUQsSUFBTUUsWUFBWXJDLFFBQWxCO1FBQ3NCQSxRLEdBQWJxQyxTOztBQUVUOztBQUNBLFNBQVNDLFVBQVQsR0FBc0IsQ0FDckI7QUFDRCxJQUFNQyxjQUFjRCxVQUFwQjtRQUN3QkEsVSxHQUFmQyxXIiwiZmlsZSI6ImV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQgfSBmcm9tIFwiLi9jbGlcIjtcbmltcG9ydCBnbG9iYWxzIGZyb20gXCIuL2dsb2JhbHNcIjtcblxuY29uc3QgdnNjb2RlID0gZ2xvYmFscy52c2NvZGU7XG5jb25zdCBwcm9qZWN0ID0gcmVxdWlyZSgnLi9Qcm9qZWN0L1Byb2plY3QnKTtcblxuZnVuY3Rpb24gZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgaWYgKGdsb2JhbHMucHJvamVjdENvbmZpZ3VyYXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0F0dGVtcHRpbmcgdG8gbG9hZCBkb2xpdHRsZSBwcm9qZWN0Jyk7XG4gICAgICAgIHJldHVybiBnbG9iYWxzLnNldFByb2plY3RDb25maWd1cmF0aW9uKCk7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuLyoqXG4gKiBFeGVjdXRlcyBhIGZ1bmN0aW9uIHRoYXQgbmVlZHMgdG8gYmUgcmFuIGluIGEgcHJvamVjdCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IHRvZG9cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZUluQ29udGV4dCh0b2RvKSB7XG4gICAgcmV0dXJuIGVuc3VyZVByb2plY3RDb25maWd1cmF0aW9uKClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICBzdWNjZXNzID0+IHRvZG8oKSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoYEZhaWxlZCB0byBsb2FkIGRvbGl0dGxlIHByb2plY3RzLlxuRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCJ2c2NvZGVcIikuRXh0ZW5zaW9uQ29udGV4dH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBhY3RpdmF0ZShjb250ZXh0KSB7XG4gICAgcHJvY2Vzcy5hZGRMaXN0ZW5lcigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWplY3Rpb24gbm90IGhhbmRsZWQnLCByZWFzb24pO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuYWRkTGlzdGVuZXIoJ3VuY2F1Z2h0RXhjZXB0aW9uJywgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuY2F1Z2h0IGV4Y2VwdGlvbicsIGVycm9yKTtcbiAgICB9KTtcblxuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLm5ld0RvbGl0dGxlUHJvamVjdCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IGFwcGxpY2F0aW9uVXJpcyA9IGF3YWl0IHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9hcHBsaWNhdGlvbi5qc29uJywgJyoqL25vZGVfbW9kdWxlcy8qKicsIDIpO1xuICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uVXJpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYEZvdW5kIGFwcGxpY2F0aW9uLmpzb24gZmlsZXMgYXQgcGF0aHMgJHthcHBsaWNhdGlvblVyaXMubWFwKHVyaSA9PiB1cmkuZnNQYXRoKS5qb2luKCcsICcpfWApO1xuICAgICAgICAgICAgICAgIHRocm93ICdDb3VsZCBub3Qgc3RhcnQgbmV3IGRvbGl0dGxlIHByb2plY3QgYmVjYXVzZSB0aGVyZSBhbHJlYWR5IGV4aXN0cyBhIGRvbGl0dGxlIGFwcGxpY2F0aW9uIGhlcmUhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHZzY29kZS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQXBwbGljYXRpb24nKTtcbiAgICAgICAgICAgIGF3YWl0IHZzY29kZS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQm91bmRlZENvbnRleHQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIGEgbmV3IGRvbGl0dGxlIHByb2plY3QnKTtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgY3JlYXRlIGEgbmV3IGRvbGl0dGxlIHByb2plY3QuXFxuRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5yZWxvYWRQcm9qZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCgpID0+IHt9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7fVxuICAgICAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlclRleHRFZGl0b3JDb21tYW5kKCdkb2xpdHRsZS5idWlsZCcsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgIGF3YWl0IGV4ZWN1dGVJbkNvbnRleHQoKCkgPT4gcHJvamVjdC5idWlsZCh0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0NvdWxkIG5vdCBidWlsZCBwcm9qZWN0JztcbiAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9KTtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUuYnVpbGRDdXJyZW50JywgYXN5bmMgdGV4dEVkaXRvciA9PiB7XG4gICAgICAgIGF3YWl0IGV4ZWN1dGVJbkNvbnRleHQoICgpID0+IHByb2plY3QuYnVpbGRDdXJyZW50KHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnQ291bGQgbm90IGJ1aWxkIGN1cnJlbnQgcHJvamVjdCc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUucmVzdG9yZScsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnJlc3RvcmUodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IHBlcmZvcm0gYSBwcm9qZWN0IHJlc3RvcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NvdWxkIG5vdCBwZXJmb3JtIHByb2plY3QgcmVzdG9yZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUudGVzdCcsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3QodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdDb3VsZCBub3QgcGVyZm9ybSB0ZXN0cyc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnRlc3REZWJ1ZycsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3REZWJ1Zyh0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0NvdWxkIG5vdCBkZWJ1ZyB0ZXN0cyc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnRlc3RSZXJ1bicsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3RSZXJ1bih0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnQ291bGQgbm90IHJlcnVuIHRlc3RzJztcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQXBwbGljYXRpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdBcHBsaWNhdGlvbiBuYW1lJ30pXG4gICAgICAgICAgICAudGhlbihhcHBsaWNhdGlvbk5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NyZWF0aW5nIGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHNwYXduRG9saXR0bGVDbGlDb21tYW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgWydjcmVhdGUnLCAnYXBwbGljYXRpb24nXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXBwbGljYXRpb25OYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3dkOiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnNbMF0udXJpLmZzUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgKS5vbignY2xvc2UnLCAoY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgJ0NvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ3JlYXRlZCBhcHBsaWNhdGlvbiAnJHthcHBsaWNhdGlvbk5hbWV9J2ApO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24uXFxuRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgcmV0cmlldmUgYXBwbGljYXRpb24gbmFtZSBmcm9tIGlucHV0LlxcbkVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIHJldHJpZXZlIGFwcGxpY2F0aW9uIG5hbWUgZnJvbSBpbnB1dCcsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5jcmVhdGVCb3VuZGVkQ29udGV4dCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdnNjb2RlLndpbmRvdy5zaG93SW5wdXRCb3goe3Byb21wdDogJ0JvdW5kZWQgQ29udGV4dCBuYW1lJ30pXG4gICAgICAgICAgICAudGhlbihib3VuZGVkQ29udGV4dE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnQ3JlYXRpbmcgYm91bmRlZCBjb250ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNwYXduRG9saXR0bGVDbGlDb21tYW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgWydjcmVhdGUnLCAnYm91bmRlZGNvbnRleHQnXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBbYm91bmRlZENvbnRleHROYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3dkOiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnNbMF0udXJpLmZzUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgKS5vbignY2xvc2UnLCAoY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgJ0NvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENyZWF0ZWQgYm91bmRlZCBjb250ZXh0ICcke2JvdW5kZWRDb250ZXh0TmFtZX0nYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ291bGQgbm90IGNyZWF0ZSBib3VuZGVkIGNvbnRleHQuXFxuRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0JywgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgcmV0cmlldmUgYm91bmRlZCBjb250ZXh0IG5hbWUgZnJvbSBpbnB1dC5cXG5FcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCByZXRyaWV2ZSBib3VuZGVkIGNvbnRleHQgbmFtZSBmcm9tIGlucHV0JywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBfYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbmV4cG9ydCB7IF9hY3RpdmF0ZSBhcyBhY3RpdmF0ZSB9O1xuXG4vLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB5b3VyIGV4dGVuc2lvbiBpcyBkZWFjdGl2YXRlZFxuZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbn1cbmNvbnN0IF9kZWFjdGl2YXRlID0gZGVhY3RpdmF0ZTtcbmV4cG9ydCB7IF9kZWFjdGl2YXRlIGFzIGRlYWN0aXZhdGUgfTsiXX0=