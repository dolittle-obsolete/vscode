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

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    process.addListener('unhandledRejection', function (reason) {
        console.error('Rejection not handled', reason);
    });
    process.addListener('uncaughtException', function (error) {
        console.error('Uncaught exception', error);
    });
    registerDolittleProjectCommands(context);
    registerDolittleArtifactsCommands(context);
}
function ensureProjectConfiguration(refresh) {
    if (_globals2.default.projectConfiguration === null || refresh === true) {
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

function registerDolittleProjectCommands(context) {
    var _this = this;

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
                        return ensureProjectConfiguration(true).then(function (success) {}, function (error) {
                            return vscode.window.showErrorMessage("Failed to load dolittle projects.\nError: " + error);
                        });

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
        var applicationName;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.prev = 0;
                        _context9.next = 3;
                        return vscode.window.showInputBox({ prompt: 'Application name', ignoreFocusOut: true });

                    case 3:
                        applicationName = _context9.sent;

                        _globals2.default.dolittleOutputChannel.appendLine('Creating application');
                        (0, _cli.spawnDolittleCliCommand)(['create', 'application'], [applicationName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                            if (code !== 0) throw 'Could not create application';
                            _globals2.default.dolittleOutputChannel.appendLine("Created application '" + applicationName + "'");
                        });
                        _context9.next = 12;
                        break;

                    case 8:
                        _context9.prev = 8;
                        _context9.t0 = _context9["catch"](0);

                        _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create application.\nError: " + _context9.t0);
                        vscode.window.showErrorMessage('Could not create application');

                    case 12:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, _this, [[0, 8]]);
    })));
    vscode.commands.registerCommand('dolittle.createBoundedContext', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
        var boundedContextName;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.prev = 0;
                        _context10.next = 3;
                        return vscode.window.showInputBox({ prompt: 'Bounded Context name', ignoreFocusOut: true });

                    case 3:
                        boundedContextName = _context10.sent;

                        _globals2.default.dolittleOutputChannel.appendLine('Creating bounded context');
                        (0, _cli.spawnDolittleCliCommand)(['create', 'boundedcontext'], [boundedContextName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                            if (code !== 0) throw 'Could not create bounded context';
                            _globals2.default.dolittleOutputChannel.appendLine("Created bounded context '" + boundedContextName + "'");
                        });
                        _context10.next = 12;
                        break;

                    case 8:
                        _context10.prev = 8;
                        _context10.t0 = _context10["catch"](0);

                        _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create bounded context.\nError: " + _context10.t0);
                        vscode.window.showErrorMessage('Could not create bounded context', _context10.t0);

                    case 12:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, _this, [[0, 8]]);
    })));
}

function registerDolittleArtifactsCommands(context) {
    var _this2 = this;

    var path = require('path');
    var artifacts = ['Command', 'Event', 'Read Model', 'Aggregate Root', 'Command Handler', 'Query', 'Event Processor', 'Concept'];
    vscode.commands.registerTextEditorCommand('dolittle.addArtifact', function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(editor) {
            var pick, command, queryPick, conceptPick, artifactName, commandArgs;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.prev = 0;
                            _context11.next = 3;
                            return vscode.window.showQuickPick(artifacts, { canPickMany: false, ignoreFocusOut: true });

                        case 3:
                            pick = _context11.sent;
                            command = ['add'];
                            _context11.t0 = pick;
                            _context11.next = _context11.t0 === 'Command' ? 8 : _context11.t0 === 'Event' ? 10 : _context11.t0 === 'Read Model' ? 12 : _context11.t0 === 'Aggregate Root' ? 14 : _context11.t0 === 'Command Handler' ? 16 : _context11.t0 === 'Query' ? 18 : _context11.t0 === 'Event Processor' ? 23 : _context11.t0 === 'Concept' ? 25 : 30;
                            break;

                        case 8:
                            command.push('command');
                            return _context11.abrupt("break", 30);

                        case 10:
                            command.push('event');
                            return _context11.abrupt("break", 30);

                        case 12:
                            command.push('readmodel');
                            return _context11.abrupt("break", 30);

                        case 14:
                            command.push('aggregateroot');
                            return _context11.abrupt("break", 30);

                        case 16:
                            command.push('commandhandler');
                            return _context11.abrupt("break", 30);

                        case 18:
                            _context11.next = 20;
                            return vscode.window.showQuickPick(['Query', 'Query For a Read Model'], { canPickMany: false, ignoreFocusOut: true });

                        case 20:
                            queryPick = _context11.sent;

                            if (queryPick === 'Query') command.push('query');else command.push('queryfor');
                            return _context11.abrupt("break", 30);

                        case 23:
                            command.push('eventprocessor');
                            return _context11.abrupt("break", 30);

                        case 25:
                            _context11.next = 27;
                            return vscode.window.showQuickPick(['Concept', 'Int Concept', 'String Concept', 'GUID Concept'], { canPickMany: false, ignoreFocusOut: true });

                        case 27:
                            conceptPick = _context11.sent;

                            if (conceptPick === 'Concept') command.push('concept');else if (conceptPick === 'Int Concept') command.push('intconcept');else if (conceptPick === 'String Concept') command.push('stringconcept');else if (conceptPick === 'GUID Concept') command.push('guidconcept');
                            return _context11.abrupt("break", 30);

                        case 30:
                            _context11.next = 32;
                            return vscode.window.showInputBox({ prompt: 'Artifact name: ', ignoreFocusOut: true });

                        case 32:
                            artifactName = _context11.sent;
                            commandArgs = [artifactName];

                            (0, _cli.runDolittleCliCommandThroughIntegratedTerminal)(command, commandArgs, { cwd: path.dirname(editor.document.uri.fsPath) });
                            _context11.next = 41;
                            break;

                        case 37:
                            _context11.prev = 37;
                            _context11.t1 = _context11["catch"](0);

                            _globals2.default.dolittleProjectOutputChannel.appendLine("Could not add artifact.\nError: " + _context11.t1);
                            vscode.window.showErrorMessage('Could add artifact ', _context11.t1);

                        case 41:
                        case "end":
                            return _context11.stop();
                    }
                }
            }, _callee11, _this2, [[0, 37]]);
        }));

        return function (_x7) {
            return _ref11.apply(this, arguments);
        };
    }());
}

var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwiZ2xvYmFscyIsInByb2plY3QiLCJyZXF1aXJlIiwiYWN0aXZhdGUiLCJjb250ZXh0IiwicHJvY2VzcyIsImFkZExpc3RlbmVyIiwicmVhc29uIiwiY29uc29sZSIsImVycm9yIiwicmVnaXN0ZXJEb2xpdHRsZVByb2plY3RDb21tYW5kcyIsInJlZ2lzdGVyRG9saXR0bGVBcnRpZmFjdHNDb21tYW5kcyIsImVuc3VyZVByb2plY3RDb25maWd1cmF0aW9uIiwicmVmcmVzaCIsInByb2plY3RDb25maWd1cmF0aW9uIiwiZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJzZXRQcm9qZWN0Q29uZmlndXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXhlY3V0ZUluQ29udGV4dCIsInRvZG8iLCJ0aGVuIiwid2luZG93Iiwic2hvd0Vycm9yTWVzc2FnZSIsImNvbW1hbmRzIiwicmVnaXN0ZXJDb21tYW5kIiwid29ya3NwYWNlIiwiZmluZEZpbGVzIiwiYXBwbGljYXRpb25VcmlzIiwibGVuZ3RoIiwibWFwIiwidXJpIiwiZnNQYXRoIiwiam9pbiIsImV4ZWN1dGVDb21tYW5kIiwicmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCIsInRleHRFZGl0b3IiLCJidWlsZCIsImRvY3VtZW50IiwibXNnIiwiYnVpbGRDdXJyZW50IiwicmVzdG9yZSIsInRlc3QiLCJ0ZXN0RGVidWciLCJ0ZXN0UmVydW4iLCJzaG93SW5wdXRCb3giLCJwcm9tcHQiLCJpZ25vcmVGb2N1c091dCIsImFwcGxpY2F0aW9uTmFtZSIsImRvbGl0dGxlT3V0cHV0Q2hhbm5lbCIsImN3ZCIsIndvcmtzcGFjZUZvbGRlcnMiLCJvbiIsImNvZGUiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJwYXRoIiwiYXJ0aWZhY3RzIiwiZWRpdG9yIiwic2hvd1F1aWNrUGljayIsImNhblBpY2tNYW55IiwicGljayIsImNvbW1hbmQiLCJwdXNoIiwicXVlcnlQaWNrIiwiY29uY2VwdFBpY2siLCJhcnRpZmFjdE5hbWUiLCJjb21tYW5kQXJncyIsImRpcm5hbWUiLCJfYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiX2RlYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUNBOzs7Ozs7QUFOQTs7Ozs7QUFRQSxJQUFNQSxTQUFTQyxrQkFBUUQsTUFBdkI7QUFDQSxJQUFNRSxVQUFVQyxRQUFRLG1CQUFSLENBQWhCOztBQUVBOzs7QUFHQSxTQUFTQyxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUN2QkMsWUFBUUMsV0FBUixDQUFvQixvQkFBcEIsRUFBMEMsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xEQyxnQkFBUUMsS0FBUixDQUFjLHVCQUFkLEVBQXVDRixNQUF2QztBQUNILEtBRkQ7QUFHQUYsWUFBUUMsV0FBUixDQUFvQixtQkFBcEIsRUFBeUMsVUFBQ0csS0FBRCxFQUFXO0FBQ2hERCxnQkFBUUMsS0FBUixDQUFjLG9CQUFkLEVBQW9DQSxLQUFwQztBQUNILEtBRkQ7QUFHQUMsb0NBQWdDTixPQUFoQztBQUNBTyxzQ0FBa0NQLE9BQWxDO0FBQ0g7QUFDRCxTQUFTUSwwQkFBVCxDQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsUUFBSWIsa0JBQVFjLG9CQUFSLEtBQWlDLElBQWpDLElBQXlDRCxZQUFZLElBQXpELEVBQStEO0FBQzNEYiwwQkFBUWUsNEJBQVIsQ0FBcUNDLFVBQXJDLENBQWdELHFDQUFoRDtBQUNBLGVBQU9oQixrQkFBUWlCLHVCQUFSLEVBQVA7QUFDSCxLQUhELE1BSUssT0FBT0MsUUFBUUMsT0FBUixFQUFQO0FBQ1I7QUFDRDs7Ozs7QUFLQSxTQUFTQyxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDNUIsV0FBT1QsNkJBQ0ZVLElBREUsQ0FFQztBQUFBLGVBQVdELE1BQVg7QUFBQSxLQUZELEVBR0MsaUJBQVM7QUFDTHRCLGVBQU93QixNQUFQLENBQWNDLGdCQUFk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YixFQUEvQixLQUNLLElBQUlFLGdCQUFnQixhQUFwQixFQUFtQ0gsUUFBUUMsSUFBUixDQUFhLFlBQWIsRUFBbkMsS0FDQSxJQUFJRSxnQkFBZ0IsZ0JBQXBCLEVBQXNDSCxRQUFRQyxJQUFSLENBQWEsZUFBYixFQUF0QyxLQUNBLElBQUlFLGdCQUFnQixjQUFwQixFQUFvQ0gsUUFBUUMsSUFBUixDQUFhLGFBQWI7QUFwQ1M7O0FBQUE7QUFBQTtBQUFBLG1DQXdDL0JoRSxPQUFPd0IsTUFBUCxDQUFjdUIsWUFBZCxDQUEyQixFQUFDQyxRQUFRLGlCQUFULEVBQTRCQyxnQkFBZ0IsSUFBNUMsRUFBM0IsQ0F4QytCOztBQUFBO0FBd0NwRGtCLHdDQXhDb0Q7QUF5Q3REQyx1Q0F6Q3NELEdBeUN4QyxDQUFDRCxZQUFELENBekN3Qzs7QUEwQzFELHFGQUErQ0osT0FBL0MsRUFBd0RLLFdBQXhELEVBQXFFLEVBQUNoQixLQUFLSyxLQUFLWSxPQUFMLENBQWFWLE9BQU9uQixRQUFQLENBQWdCUCxHQUFoQixDQUFvQkMsTUFBakMsQ0FBTixFQUFyRTtBQTFDMEQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBNEMxRGpDLDhDQUFRZSw0QkFBUixDQUFxQ0MsVUFBckM7QUFDQWpCLG1DQUFPd0IsTUFBUCxDQUFjQyxnQkFBZCxDQUErQixxQkFBL0I7O0FBN0MwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFsRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdESDs7QUFFRCxJQUFNNkMsWUFBWWxFLFFBQWxCO1FBQ3NCQSxRLEdBQWJrRSxTOztBQUVUOztBQUNBLFNBQVNDLFVBQVQsR0FBc0IsQ0FDckI7QUFDRCxJQUFNQyxjQUFjRCxVQUFwQjtRQUN3QkEsVSxHQUFmQyxXIiwiZmlsZSI6ImV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQsIHJ1bkRvbGl0dGxlQ2xpQ29tbWFuZFRocm91Z2hJbnRlZ3JhdGVkVGVybWluYWwgfSBmcm9tIFwiLi9jbGlcIjtcbmltcG9ydCBnbG9iYWxzIGZyb20gXCIuL2dsb2JhbHNcIjtcblxuY29uc3QgdnNjb2RlID0gZ2xvYmFscy52c2NvZGU7XG5jb25zdCBwcm9qZWN0ID0gcmVxdWlyZSgnLi9Qcm9qZWN0L1Byb2plY3QnKTtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcInZzY29kZVwiKS5FeHRlbnNpb25Db250ZXh0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGNvbnRleHQpIHtcbiAgICBwcm9jZXNzLmFkZExpc3RlbmVyKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlamVjdGlvbiBub3QgaGFuZGxlZCcsIHJlYXNvbik7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5hZGRMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5jYXVnaHQgZXhjZXB0aW9uJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIHJlZ2lzdGVyRG9saXR0bGVQcm9qZWN0Q29tbWFuZHMoY29udGV4dCk7XG4gICAgcmVnaXN0ZXJEb2xpdHRsZUFydGlmYWN0c0NvbW1hbmRzKGNvbnRleHQpO1xufVxuZnVuY3Rpb24gZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24ocmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxzLnByb2plY3RDb25maWd1cmF0aW9uID09PSBudWxsIHx8IHJlZnJlc2ggPT09IHRydWUpIHtcbiAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0F0dGVtcHRpbmcgdG8gbG9hZCBkb2xpdHRsZSBwcm9qZWN0Jyk7XG4gICAgICAgIHJldHVybiBnbG9iYWxzLnNldFByb2plY3RDb25maWd1cmF0aW9uKCk7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuLyoqXG4gKiBFeGVjdXRlcyBhIGZ1bmN0aW9uIHRoYXQgbmVlZHMgdG8gYmUgcmFuIGluIGEgcHJvamVjdCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IHRvZG9cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZUluQ29udGV4dCh0b2RvKSB7XG4gICAgcmV0dXJuIGVuc3VyZVByb2plY3RDb25maWd1cmF0aW9uKClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICBzdWNjZXNzID0+IHRvZG8oKSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoYEZhaWxlZCB0byBsb2FkIGRvbGl0dGxlIHByb2plY3RzLlxcbkVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckRvbGl0dGxlUHJvamVjdENvbW1hbmRzKGNvbnRleHQpIHtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5uZXdEb2xpdHRsZVByb2plY3QnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgYXBwbGljYXRpb25VcmlzID0gYXdhaXQgdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2FwcGxpY2F0aW9uLmpzb24nLCAnKiovbm9kZV9tb2R1bGVzLyoqJywgMik7XG4gICAgICAgICAgICBpZiAoYXBwbGljYXRpb25VcmlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgRm91bmQgYXBwbGljYXRpb24uanNvbiBmaWxlcyBhdCBwYXRocyAke2FwcGxpY2F0aW9uVXJpcy5tYXAodXJpID0+IHVyaS5mc1BhdGgpLmpvaW4oJywgJyl9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBzdGFydCBuZXcgZG9saXR0bGUgcHJvamVjdCBiZWNhdXNlIHRoZXJlIGFscmVhZHkgZXhpc3RzIGEgZG9saXR0bGUgYXBwbGljYXRpb24gaGVyZSEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdnNjb2RlLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kKCdkb2xpdHRsZS5jcmVhdGVBcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgYXdhaXQgdnNjb2RlLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kKCdkb2xpdHRsZS5jcmVhdGVCb3VuZGVkQ29udGV4dCcpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgYSBuZXcgZG9saXR0bGUgcHJvamVjdCcpO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCBjcmVhdGUgYSBuZXcgZG9saXR0bGUgcHJvamVjdC5cXG5FcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLnJlbG9hZFByb2plY3QnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGVuc3VyZVByb2plY3RDb25maWd1cmF0aW9uKHRydWUpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShgRmFpbGVkIHRvIGxvYWQgZG9saXR0bGUgcHJvamVjdHMuXFxuRXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgICAgICk7XG4gICAgfSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUuYnVpbGQnLCBhc3luYyB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCgpID0+IHByb2plY3QuYnVpbGQodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdDb3VsZCBub3QgYnVpbGQgcHJvamVjdCc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLmJ1aWxkQ3VycmVudCcsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LmJ1aWxkQ3VycmVudCh0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0NvdWxkIG5vdCBidWlsZCBjdXJyZW50IHByb2plY3QnO1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnJlc3RvcmUnLCBhc3luYyB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZUluQ29udGV4dCggKCkgPT4gcHJvamVjdC5yZXN0b3JlKHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBwZXJmb3JtIGEgcHJvamVjdCByZXN0b3JlJyk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdDb3VsZCBub3QgcGVyZm9ybSBwcm9qZWN0IHJlc3RvcmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnRlc3QnLCBhc3luYyB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZUluQ29udGV4dCggKCkgPT4gcHJvamVjdC50ZXN0KHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnQ291bGQgbm90IHBlcmZvcm0gdGVzdHMnO1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlclRleHRFZGl0b3JDb21tYW5kKCdkb2xpdHRsZS50ZXN0RGVidWcnLCBhc3luYyB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZUluQ29udGV4dCggKCkgPT4gcHJvamVjdC50ZXN0RGVidWcodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdDb3VsZCBub3QgZGVidWcgdGVzdHMnO1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlclRleHRFZGl0b3JDb21tYW5kKCdkb2xpdHRsZS50ZXN0UmVydW4nLCBhc3luYyB0ZXh0RWRpdG9yID0+IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZUluQ29udGV4dCggKCkgPT4gcHJvamVjdC50ZXN0UmVydW4odGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge30sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0NvdWxkIG5vdCByZXJ1biB0ZXN0cyc7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICBcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJDb21tYW5kKCdkb2xpdHRsZS5jcmVhdGVBcHBsaWNhdGlvbicsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uTmFtZSA9IGF3YWl0IHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdBcHBsaWNhdGlvbiBuYW1lJywgaWdub3JlRm9jdXNPdXQ6IHRydWV9KTtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NyZWF0aW5nIGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICBzcGF3bkRvbGl0dGxlQ2xpQ29tbWFuZChcbiAgICAgICAgICAgICAgICBbJ2NyZWF0ZScsICdhcHBsaWNhdGlvbiddLCBcbiAgICAgICAgICAgICAgICBbYXBwbGljYXRpb25OYW1lXSwgXG4gICAgICAgICAgICAgICAge2N3ZDogdnNjb2RlLndvcmtzcGFjZS53b3Jrc3BhY2VGb2xkZXJzWzBdLnVyaS5mc1BhdGh9XG4gICAgICAgICAgICApLm9uKCdjbG9zZScsIChjb2RlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgJ0NvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24nO1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENyZWF0ZWQgYXBwbGljYXRpb24gJyR7YXBwbGljYXRpb25OYW1lfSdgKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgY3JlYXRlIGFwcGxpY2F0aW9uLlxcbkVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBhcHBsaWNhdGlvbicpO1xuICAgICAgICB9ICAgIFxuICAgIH0pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUJvdW5kZWRDb250ZXh0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm91bmRlZENvbnRleHROYW1lID0gYXdhaXQgdnNjb2RlLndpbmRvdy5zaG93SW5wdXRCb3goe3Byb21wdDogJ0JvdW5kZWQgQ29udGV4dCBuYW1lJywgaWdub3JlRm9jdXNPdXQ6IHRydWV9KTtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NyZWF0aW5nIGJvdW5kZWQgY29udGV4dCcpO1xuICAgICAgICAgICAgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQoXG4gICAgICAgICAgICAgICAgWydjcmVhdGUnLCAnYm91bmRlZGNvbnRleHQnXSwgXG4gICAgICAgICAgICAgICAgW2JvdW5kZWRDb250ZXh0TmFtZV0sIFxuICAgICAgICAgICAgICAgIHtjd2Q6IHZzY29kZS53b3Jrc3BhY2Uud29ya3NwYWNlRm9sZGVyc1swXS51cmkuZnNQYXRofVxuICAgICAgICAgICAgKS5vbignY2xvc2UnLCAoY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IDApIHRocm93ICdDb3VsZCBub3QgY3JlYXRlIGJvdW5kZWQgY29udGV4dCc7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ3JlYXRlZCBib3VuZGVkIGNvbnRleHQgJyR7Ym91bmRlZENvbnRleHROYW1lfSdgKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgY3JlYXRlIGJvdW5kZWQgY29udGV4dC5cXG5FcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0JywgZXJyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckRvbGl0dGxlQXJ0aWZhY3RzQ29tbWFuZHMoY29udGV4dCkge1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgY29uc3QgYXJ0aWZhY3RzID0gW1xuICAgICAgICAnQ29tbWFuZCcsXG4gICAgICAgICdFdmVudCcsXG4gICAgICAgICdSZWFkIE1vZGVsJyxcbiAgICAgICAgJ0FnZ3JlZ2F0ZSBSb290JyxcbiAgICAgICAgJ0NvbW1hbmQgSGFuZGxlcicsXG4gICAgICAgICdRdWVyeScsXG4gICAgICAgICdFdmVudCBQcm9jZXNzb3InLFxuICAgICAgICAnQ29uY2VwdCdcbiAgICBdXG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLmFkZEFydGlmYWN0JywgYXN5bmMgKGVkaXRvcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGljayA9IGF3YWl0IHZzY29kZS53aW5kb3cuc2hvd1F1aWNrUGljayhhcnRpZmFjdHMsIHtjYW5QaWNrTWFueTogZmFsc2UsIGlnbm9yZUZvY3VzT3V0OiB0cnVlfSk7XG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IFsnYWRkJ107XG4gICAgICAgICAgICBzd2l0Y2ggKHBpY2spIHtcbiAgICAgICAgICAgICAgICBjYXNlICdDb21tYW5kJzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5wdXNoKCdjb21tYW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0V2ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5wdXNoKCdldmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdSZWFkIE1vZGVsJzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5wdXNoKCdyZWFkbW9kZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQWdncmVnYXRlIFJvb3QnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnB1c2goJ2FnZ3JlZ2F0ZXJvb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQ29tbWFuZCBIYW5kbGVyJzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5wdXNoKCdjb21tYW5kaGFuZGxlcicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdRdWVyeSc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGljayA9IGF3YWl0IHZzY29kZS53aW5kb3cuc2hvd1F1aWNrUGljayhbJ1F1ZXJ5JywgJ1F1ZXJ5IEZvciBhIFJlYWQgTW9kZWwnXSwge2NhblBpY2tNYW55OiBmYWxzZSwgaWdub3JlRm9jdXNPdXQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGljayA9PT0gJ1F1ZXJ5JykgY29tbWFuZC5wdXNoKCdxdWVyeScpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbW1hbmQucHVzaCgncXVlcnlmb3InKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRXZlbnQgUHJvY2Vzc29yJzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5wdXNoKCdldmVudHByb2Nlc3NvcicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDb25jZXB0JzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uY2VwdFBpY2sgPSBhd2FpdCB2c2NvZGUud2luZG93LnNob3dRdWlja1BpY2soXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ0NvbmNlcHQnLCAnSW50IENvbmNlcHQnLCAnU3RyaW5nIENvbmNlcHQnLCAnR1VJRCBDb25jZXB0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuUGlja01hbnk6IGZhbHNlLCBpZ25vcmVGb2N1c091dDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmNlcHRQaWNrID09PSAnQ29uY2VwdCcpIGNvbW1hbmQucHVzaCgnY29uY2VwdCcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25jZXB0UGljayA9PT0gJ0ludCBDb25jZXB0JykgY29tbWFuZC5wdXNoKCdpbnRjb25jZXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmNlcHRQaWNrID09PSAnU3RyaW5nIENvbmNlcHQnKSBjb21tYW5kLnB1c2goJ3N0cmluZ2NvbmNlcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uY2VwdFBpY2sgPT09ICdHVUlEIENvbmNlcHQnKSBjb21tYW5kLnB1c2goJ2d1aWRjb25jZXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhcnRpZmFjdE5hbWUgPSBhd2FpdCB2c2NvZGUud2luZG93LnNob3dJbnB1dEJveCh7cHJvbXB0OiAnQXJ0aWZhY3QgbmFtZTogJywgaWdub3JlRm9jdXNPdXQ6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBjb21tYW5kQXJncyA9IFthcnRpZmFjdE5hbWVdO1xuICAgICAgICAgICAgcnVuRG9saXR0bGVDbGlDb21tYW5kVGhyb3VnaEludGVncmF0ZWRUZXJtaW5hbChjb21tYW5kLCBjb21tYW5kQXJncywge2N3ZDogcGF0aC5kaXJuYW1lKGVkaXRvci5kb2N1bWVudC51cmkuZnNQYXRoKX0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ291bGQgbm90IGFkZCBhcnRpZmFjdC5cXG5FcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgYWRkIGFydGlmYWN0ICcsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBfYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbmV4cG9ydCB7IF9hY3RpdmF0ZSBhcyBhY3RpdmF0ZSB9O1xuXG4vLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB5b3VyIGV4dGVuc2lvbiBpcyBkZWFjdGl2YXRlZFxuZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbn1cbmNvbnN0IF9kZWFjdGl2YXRlID0gZGVhY3RpdmF0ZTtcbmV4cG9ydCB7IF9kZWFjdGl2YXRlIGFzIGRlYWN0aXZhdGUgfTsiXX0=