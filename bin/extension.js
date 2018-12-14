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

var _BoundedContextNodeProvider = require("./Explorer/BoundedContextNodeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vscode = _globals2.default.vscode; /*---------------------------------------------------------------------------------------------
                                        *  Copyright (c) Dolittle. All rights reserved.
                                        *  Licensed under the MIT License. See LICENSE in the project root for license information.
                                        *--------------------------------------------------------------------------------------------*/

var project = require('./Project/Project');

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
    registerDolittleProjectCommands(context);
    registerDolittleArtifactsCommands(context);
    vscode.commands.registerCommand('dolittle.loadView', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ensureProjectConfiguration(true).then(function (success) {
                            vscode.window.createTreeView('features', { treeDataProvider: new _BoundedContextNodeProvider.BoundedContextNodeProvider(_globals2.default.projectConfiguration) });
                        }, function (error) {
                            return vscode.window.showErrorMessage("Failed to load dolittle projects.\nError: " + error);
                        });

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this);
    })));
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
    var _this2 = this;

    vscode.commands.registerCommand('dolittle.newDolittleProject', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var applicationUris;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2);

                    case 3:
                        applicationUris = _context2.sent;

                        if (!(applicationUris.length > 0)) {
                            _context2.next = 7;
                            break;
                        }

                        _globals2.default.dolittleProjectOutputChannel.appendLine("Found application.json files at paths " + applicationUris.map(function (uri) {
                            return uri.fsPath;
                        }).join(', '));
                        throw 'Could not start new dolittle project because there already exists a dolittle application here!';

                    case 7:
                        _context2.next = 9;
                        return vscode.commands.executeCommand('dolittle.createApplication');

                    case 9:
                        _context2.next = 11;
                        return vscode.commands.executeCommand('dolittle.createBoundedContext');

                    case 11:
                        _context2.next = 17;
                        break;

                    case 13:
                        _context2.prev = 13;
                        _context2.t0 = _context2["catch"](0);

                        vscode.window.showErrorMessage('Could not create a new dolittle project');
                        _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create a new dolittle project.\nError: " + _context2.t0);

                    case 17:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, _this2, [[0, 13]]);
    })));
    vscode.commands.registerCommand('dolittle.reloadProject', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return ensureProjectConfiguration(true).then(function (success) {}, function (error) {
                            return vscode.window.showErrorMessage("Failed to load dolittle projects.\nError: " + error);
                        });

                    case 2:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, _this2);
    })));

    vscode.commands.registerTextEditorCommand('dolittle.build', function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(textEditor) {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return executeInContext(function () {
                                return project.build(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not build project';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, _this2);
        }));

        return function (_x) {
            return _ref4.apply(this, arguments);
        };
    }());
    vscode.commands.registerTextEditorCommand('dolittle.buildCurrent', function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(textEditor) {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return executeInContext(function () {
                                return project.buildCurrent(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not build current project';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, _this2);
        }));

        return function (_x2) {
            return _ref5.apply(this, arguments);
        };
    }());

    vscode.commands.registerTextEditorCommand('dolittle.restore', function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(textEditor) {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return executeInContext(function () {
                                return project.restore(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                vscode.window.showErrorMessage('Could not perform a project restore');
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Could not perform project restore');
                            });

                        case 2:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, _this2);
        }));

        return function (_x3) {
            return _ref6.apply(this, arguments);
        };
    }());

    vscode.commands.registerTextEditorCommand('dolittle.test', function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(textEditor) {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return executeInContext(function () {
                                return project.test(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not perform tests';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, _this2);
        }));

        return function (_x4) {
            return _ref7.apply(this, arguments);
        };
    }());
    vscode.commands.registerTextEditorCommand('dolittle.testDebug', function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(textEditor) {
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return executeInContext(function () {
                                return project.testDebug(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not debug tests';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, _this2);
        }));

        return function (_x5) {
            return _ref8.apply(this, arguments);
        };
    }());
    vscode.commands.registerTextEditorCommand('dolittle.testRerun', function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(textEditor) {
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return executeInContext(function () {
                                return project.testRerun(textEditor.document.uri);
                            }).then(function (success) {}, function (error) {
                                var msg = 'Could not rerun tests';
                                vscode.window.showErrorMessage(msg);
                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                            });

                        case 2:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, _this2);
        }));

        return function (_x6) {
            return _ref9.apply(this, arguments);
        };
    }());

    vscode.commands.registerCommand('dolittle.createApplication', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
        var applicationName;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.prev = 0;
                        _context10.next = 3;
                        return vscode.window.showInputBox({ prompt: 'Application name', ignoreFocusOut: true });

                    case 3:
                        applicationName = _context10.sent;

                        _globals2.default.dolittleOutputChannel.appendLine('Creating application');
                        (0, _cli.spawnDolittleCliCommand)(['create', 'application'], [applicationName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                            if (code !== 0) throw 'Could not create application';
                            _globals2.default.dolittleOutputChannel.appendLine("Created application '" + applicationName + "'");
                        });
                        _context10.next = 12;
                        break;

                    case 8:
                        _context10.prev = 8;
                        _context10.t0 = _context10["catch"](0);

                        _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create application.\nError: " + _context10.t0);
                        vscode.window.showErrorMessage('Could not create application');

                    case 12:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, _this2, [[0, 8]]);
    })));
    vscode.commands.registerCommand('dolittle.createBoundedContext', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
        var boundedContextName;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.prev = 0;
                        _context11.next = 3;
                        return vscode.window.showInputBox({ prompt: 'Bounded Context name', ignoreFocusOut: true });

                    case 3:
                        boundedContextName = _context11.sent;

                        _globals2.default.dolittleOutputChannel.appendLine('Creating bounded context');
                        (0, _cli.spawnDolittleCliCommand)(['create', 'boundedcontext'], [boundedContextName], { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }).on('close', function (code) {
                            if (code !== 0) throw 'Could not create bounded context';
                            _globals2.default.dolittleOutputChannel.appendLine("Created bounded context '" + boundedContextName + "'");
                        });
                        _context11.next = 12;
                        break;

                    case 8:
                        _context11.prev = 8;
                        _context11.t0 = _context11["catch"](0);

                        _globals2.default.dolittleProjectOutputChannel.appendLine("Could not create bounded context.\nError: " + _context11.t0);
                        vscode.window.showErrorMessage('Could not create bounded context', _context11.t0);

                    case 12:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, _this2, [[0, 8]]);
    })));
}

function registerDolittleArtifactsCommands(context) {
    var _this3 = this;

    var path = require('path');
    var artifacts = ['Command', 'Event', 'Read Model', 'Aggregate Root', 'Command Handler', 'Query', 'Event Processor', 'Concept'];
    vscode.commands.registerTextEditorCommand('dolittle.addArtifact', function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(editor) {
            var pick, command, queryPick, conceptPick, artifactName, commandArgs;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            _context12.prev = 0;
                            _context12.next = 3;
                            return vscode.window.showQuickPick(artifacts, { canPickMany: false, ignoreFocusOut: true });

                        case 3:
                            pick = _context12.sent;
                            command = ['add'];
                            _context12.t0 = pick;
                            _context12.next = _context12.t0 === 'Command' ? 8 : _context12.t0 === 'Event' ? 10 : _context12.t0 === 'Read Model' ? 12 : _context12.t0 === 'Aggregate Root' ? 14 : _context12.t0 === 'Command Handler' ? 16 : _context12.t0 === 'Query' ? 18 : _context12.t0 === 'Event Processor' ? 23 : _context12.t0 === 'Concept' ? 25 : 30;
                            break;

                        case 8:
                            command.push('command');
                            return _context12.abrupt("break", 30);

                        case 10:
                            command.push('event');
                            return _context12.abrupt("break", 30);

                        case 12:
                            command.push('readmodel');
                            return _context12.abrupt("break", 30);

                        case 14:
                            command.push('aggregateroot');
                            return _context12.abrupt("break", 30);

                        case 16:
                            command.push('commandhandler');
                            return _context12.abrupt("break", 30);

                        case 18:
                            _context12.next = 20;
                            return vscode.window.showQuickPick(['Query', 'Query For a Read Model'], { canPickMany: false, ignoreFocusOut: true });

                        case 20:
                            queryPick = _context12.sent;

                            if (queryPick === 'Query') command.push('query');else command.push('queryfor');
                            return _context12.abrupt("break", 30);

                        case 23:
                            command.push('eventprocessor');
                            return _context12.abrupt("break", 30);

                        case 25:
                            _context12.next = 27;
                            return vscode.window.showQuickPick(['Concept', 'Int Concept', 'String Concept', 'GUID Concept'], { canPickMany: false, ignoreFocusOut: true });

                        case 27:
                            conceptPick = _context12.sent;

                            if (conceptPick === 'Concept') command.push('concept');else if (conceptPick === 'Int Concept') command.push('intconcept');else if (conceptPick === 'String Concept') command.push('stringconcept');else if (conceptPick === 'GUID Concept') command.push('guidconcept');
                            return _context12.abrupt("break", 30);

                        case 30:
                            _context12.next = 32;
                            return vscode.window.showInputBox({ prompt: 'Artifact name: ', ignoreFocusOut: true });

                        case 32:
                            artifactName = _context12.sent;
                            commandArgs = [artifactName];

                            (0, _cli.runDolittleCliCommandThroughIntegratedTerminal)(command, commandArgs, { cwd: path.dirname(editor.document.uri.fsPath) });
                            _context12.next = 41;
                            break;

                        case 37:
                            _context12.prev = 37;
                            _context12.t1 = _context12["catch"](0);

                            _globals2.default.dolittleProjectOutputChannel.appendLine("Could not add artifact.\nError: " + _context12.t1);
                            vscode.window.showErrorMessage('Could add artifact ', _context12.t1);

                        case 41:
                        case "end":
                            return _context12.stop();
                    }
                }
            }, _callee12, _this3, [[0, 37]]);
        }));

        return function (_x7) {
            return _ref12.apply(this, arguments);
        };
    }());
}

var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwiZ2xvYmFscyIsInByb2plY3QiLCJyZXF1aXJlIiwiYWN0aXZhdGUiLCJjb250ZXh0IiwicHJvY2VzcyIsImFkZExpc3RlbmVyIiwicmVhc29uIiwiY29uc29sZSIsImVycm9yIiwicmVnaXN0ZXJEb2xpdHRsZVByb2plY3RDb21tYW5kcyIsInJlZ2lzdGVyRG9saXR0bGVBcnRpZmFjdHNDb21tYW5kcyIsImNvbW1hbmRzIiwicmVnaXN0ZXJDb21tYW5kIiwiZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24iLCJ0aGVuIiwid2luZG93IiwiY3JlYXRlVHJlZVZpZXciLCJ0cmVlRGF0YVByb3ZpZGVyIiwiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIiLCJwcm9qZWN0Q29uZmlndXJhdGlvbiIsInNob3dFcnJvck1lc3NhZ2UiLCJyZWZyZXNoIiwiZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJzZXRQcm9qZWN0Q29uZmlndXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXhlY3V0ZUluQ29udGV4dCIsInRvZG8iLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJhcHBsaWNhdGlvblVyaXMiLCJsZW5ndGgiLCJtYXAiLCJ1cmkiLCJmc1BhdGgiLCJqb2luIiwiZXhlY3V0ZUNvbW1hbmQiLCJyZWdpc3RlclRleHRFZGl0b3JDb21tYW5kIiwidGV4dEVkaXRvciIsImJ1aWxkIiwiZG9jdW1lbnQiLCJtc2ciLCJidWlsZEN1cnJlbnQiLCJyZXN0b3JlIiwidGVzdCIsInRlc3REZWJ1ZyIsInRlc3RSZXJ1biIsInNob3dJbnB1dEJveCIsInByb21wdCIsImlnbm9yZUZvY3VzT3V0IiwiYXBwbGljYXRpb25OYW1lIiwiZG9saXR0bGVPdXRwdXRDaGFubmVsIiwiY3dkIiwid29ya3NwYWNlRm9sZGVycyIsIm9uIiwiY29kZSIsImJvdW5kZWRDb250ZXh0TmFtZSIsInBhdGgiLCJhcnRpZmFjdHMiLCJlZGl0b3IiLCJzaG93UXVpY2tQaWNrIiwiY2FuUGlja01hbnkiLCJwaWNrIiwiY29tbWFuZCIsInB1c2giLCJxdWVyeVBpY2siLCJjb25jZXB0UGljayIsImFydGlmYWN0TmFtZSIsImNvbW1hbmRBcmdzIiwiZGlybmFtZSIsIl9hY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJfZGVhY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVNDLGtCQUFRRCxNQUF2QixDLENBVEE7Ozs7O0FBVUEsSUFBTUUsVUFBVUMsUUFBUSxtQkFBUixDQUFoQjs7QUFFQTs7O0FBR0EsU0FBU0MsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDdkJDLFlBQVFDLFdBQVIsQ0FBb0Isb0JBQXBCLEVBQTBDLFVBQUNDLE1BQUQsRUFBWTtBQUNsREMsZ0JBQVFDLEtBQVIsQ0FBYyx1QkFBZCxFQUF1Q0YsTUFBdkM7QUFDSCxLQUZEO0FBR0FGLFlBQVFDLFdBQVIsQ0FBb0IsbUJBQXBCLEVBQXlDLFVBQUNHLEtBQUQsRUFBVztBQUNoREQsZ0JBQVFDLEtBQVIsQ0FBYyxvQkFBZCxFQUFvQ0EsS0FBcEM7QUFDSCxLQUZEO0FBR0FDLG9DQUFnQ04sT0FBaEM7QUFDQU8sc0NBQWtDUCxPQUFsQztBQUNBTCxXQUFPYSxRQUFQLENBQWdCQyxlQUFoQixDQUFnQyxtQkFBaEMsMkVBQXFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUMzQ0MsMkJBQTJCLElBQTNCLEVBQ0xDLElBREssQ0FFRixtQkFBVztBQUNQaEIsbUNBQU9pQixNQUFQLENBQWNDLGNBQWQsQ0FBNkIsVUFBN0IsRUFBeUMsRUFBQ0Msa0JBQWtCLElBQUlDLHNEQUFKLENBQStCbkIsa0JBQVFvQixvQkFBdkMsQ0FBbkIsRUFBekM7QUFDSCx5QkFKQyxFQUtGO0FBQUEsbUNBQVNyQixPQUFPaUIsTUFBUCxDQUFjSyxnQkFB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QW9CQyxNQUFqQyxDQUFOLEVBQXJFO0FBMUMwRDtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUE0QzFEcEMsOENBQVF1Qiw0QkFBUixDQUFxQ0MsVUFBckM7QUFDQXpCLG1DQUFPaUIsTUFBUCxDQUFjSyxnQkFBZCxDQUErQixxQkFBL0I7O0FBN0MwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFsRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdESDs7QUFFRCxJQUFNbUQsWUFBWXJFLFFBQWxCO1FBQ3NCQSxRLEdBQWJxRSxTOztBQUVUOztBQUNBLFNBQVNDLFVBQVQsR0FBc0IsQ0FDckI7QUFDRCxJQUFNQyxjQUFjRCxVQUFwQjtRQUN3QkEsVSxHQUFmQyxXIiwiZmlsZSI6ImV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgc3Bhd25Eb2xpdHRsZUNsaUNvbW1hbmQsIHJ1bkRvbGl0dGxlQ2xpQ29tbWFuZFRocm91Z2hJbnRlZ3JhdGVkVGVybWluYWwgfSBmcm9tIFwiLi9jbGlcIjtcbmltcG9ydCBnbG9iYWxzIGZyb20gXCIuL2dsb2JhbHNcIjtcbmltcG9ydCB7IEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyIH0gZnJvbSBcIi4vRXhwbG9yZXIvQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXJcIjtcblxuY29uc3QgdnNjb2RlID0gZ2xvYmFscy52c2NvZGU7XG5jb25zdCBwcm9qZWN0ID0gcmVxdWlyZSgnLi9Qcm9qZWN0L1Byb2plY3QnKTtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcInZzY29kZVwiKS5FeHRlbnNpb25Db250ZXh0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGNvbnRleHQpIHtcbiAgICBwcm9jZXNzLmFkZExpc3RlbmVyKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlamVjdGlvbiBub3QgaGFuZGxlZCcsIHJlYXNvbik7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5hZGRMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5jYXVnaHQgZXhjZXB0aW9uJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIHJlZ2lzdGVyRG9saXR0bGVQcm9qZWN0Q29tbWFuZHMoY29udGV4dCk7XG4gICAgcmVnaXN0ZXJEb2xpdHRsZUFydGlmYWN0c0NvbW1hbmRzKGNvbnRleHQpO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLmxvYWRWaWV3JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBlbnN1cmVQcm9qZWN0Q29uZmlndXJhdGlvbih0cnVlKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuY3JlYXRlVHJlZVZpZXcoJ2ZlYXR1cmVzJywge3RyZWVEYXRhUHJvdmlkZXI6IG5ldyBCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlcihnbG9iYWxzLnByb2plY3RDb25maWd1cmF0aW9uKX0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShgRmFpbGVkIHRvIGxvYWQgZG9saXR0bGUgcHJvamVjdHMuXFxuRXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgXG59XG5mdW5jdGlvbiBlbnN1cmVQcm9qZWN0Q29uZmlndXJhdGlvbihyZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbHMucHJvamVjdENvbmZpZ3VyYXRpb24gPT09IG51bGwgfHwgcmVmcmVzaCA9PT0gdHJ1ZSkge1xuICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnQXR0ZW1wdGluZyB0byBsb2FkIGRvbGl0dGxlIHByb2plY3QnKTtcbiAgICAgICAgcmV0dXJuIGdsb2JhbHMuc2V0UHJvamVjdENvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG4vKipcbiAqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gdGhhdCBuZWVkcyB0byBiZSByYW4gaW4gYSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24gY29udGV4dFxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gdG9kb1xuICovXG5mdW5jdGlvbiBleGVjdXRlSW5Db250ZXh0KHRvZG8pIHtcbiAgICByZXR1cm4gZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHN1Y2Nlc3MgPT4gdG9kbygpLFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShgRmFpbGVkIHRvIGxvYWQgZG9saXR0bGUgcHJvamVjdHMuXFxuRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRG9saXR0bGVQcm9qZWN0Q29tbWFuZHMoY29udGV4dCkge1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLm5ld0RvbGl0dGxlUHJvamVjdCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhcHBsaWNhdGlvblVyaXMgPSBhd2FpdCB2c2NvZGUud29ya3NwYWNlLmZpbmRGaWxlcygnKiovYXBwbGljYXRpb24uanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKTtcbiAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvblVyaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBGb3VuZCBhcHBsaWNhdGlvbi5qc29uIGZpbGVzIGF0IHBhdGhzICR7YXBwbGljYXRpb25VcmlzLm1hcCh1cmkgPT4gdXJpLmZzUGF0aCkuam9pbignLCAnKX1gKTtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGQgbm90IHN0YXJ0IG5ldyBkb2xpdHRsZSBwcm9qZWN0IGJlY2F1c2UgdGhlcmUgYWxyZWFkeSBleGlzdHMgYSBkb2xpdHRsZSBhcHBsaWNhdGlvbiBoZXJlISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB2c2NvZGUuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICBhd2FpdCB2c2NvZGUuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUJvdW5kZWRDb250ZXh0Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBhIG5ldyBkb2xpdHRsZSBwcm9qZWN0Jyk7XG4gICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ291bGQgbm90IGNyZWF0ZSBhIG5ldyBkb2xpdHRsZSBwcm9qZWN0LlxcbkVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUucmVsb2FkUHJvamVjdCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZW5zdXJlUHJvamVjdENvbmZpZ3VyYXRpb24odHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKGBGYWlsZWQgdG8gbG9hZCBkb2xpdHRsZSBwcm9qZWN0cy5cXG5FcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlclRleHRFZGl0b3JDb21tYW5kKCdkb2xpdHRsZS5idWlsZCcsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgIGF3YWl0IGV4ZWN1dGVJbkNvbnRleHQoKCkgPT4gcHJvamVjdC5idWlsZCh0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0NvdWxkIG5vdCBidWlsZCBwcm9qZWN0JztcbiAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9KTtcbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUuYnVpbGRDdXJyZW50JywgYXN5bmMgdGV4dEVkaXRvciA9PiB7XG4gICAgICAgIGF3YWl0IGV4ZWN1dGVJbkNvbnRleHQoICgpID0+IHByb2plY3QuYnVpbGRDdXJyZW50KHRleHRFZGl0b3IuZG9jdW1lbnQudXJpKSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4ge30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnQ291bGQgbm90IGJ1aWxkIGN1cnJlbnQgcHJvamVjdCc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUucmVzdG9yZScsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnJlc3RvcmUodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IHBlcmZvcm0gYSBwcm9qZWN0IHJlc3RvcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NvdWxkIG5vdCBwZXJmb3JtIHByb2plY3QgcmVzdG9yZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG5cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUudGVzdCcsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3QodGV4dEVkaXRvci5kb2N1bWVudC51cmkpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdDb3VsZCBub3QgcGVyZm9ybSB0ZXN0cyc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnRlc3REZWJ1ZycsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3REZWJ1Zyh0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0NvdWxkIG5vdCBkZWJ1ZyB0ZXN0cyc7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyVGV4dEVkaXRvckNvbW1hbmQoJ2RvbGl0dGxlLnRlc3RSZXJ1bicsIGFzeW5jIHRleHRFZGl0b3IgPT4ge1xuICAgICAgICBhd2FpdCBleGVjdXRlSW5Db250ZXh0KCAoKSA9PiBwcm9qZWN0LnRlc3RSZXJ1bih0ZXh0RWRpdG9yLmRvY3VtZW50LnVyaSkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgc3VjY2VzcyA9PiB7fSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnQ291bGQgbm90IHJlcnVuIHRlc3RzJztcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xuICAgIFxuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2RvbGl0dGxlLmNyZWF0ZUFwcGxpY2F0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb25OYW1lID0gYXdhaXQgdnNjb2RlLndpbmRvdy5zaG93SW5wdXRCb3goe3Byb21wdDogJ0FwcGxpY2F0aW9uIG5hbWUnLCBpZ25vcmVGb2N1c091dDogdHJ1ZX0pO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnQ3JlYXRpbmcgYXBwbGljYXRpb24nKTtcbiAgICAgICAgICAgIHNwYXduRG9saXR0bGVDbGlDb21tYW5kKFxuICAgICAgICAgICAgICAgIFsnY3JlYXRlJywgJ2FwcGxpY2F0aW9uJ10sIFxuICAgICAgICAgICAgICAgIFthcHBsaWNhdGlvbk5hbWVdLCBcbiAgICAgICAgICAgICAgICB7Y3dkOiB2c2NvZGUud29ya3NwYWNlLndvcmtzcGFjZUZvbGRlcnNbMF0udXJpLmZzUGF0aH1cbiAgICAgICAgICAgICkub24oJ2Nsb3NlJywgKGNvZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAwKSB0aHJvdyAnQ291bGQgbm90IGNyZWF0ZSBhcHBsaWNhdGlvbic7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgQ3JlYXRlZCBhcHBsaWNhdGlvbiAnJHthcHBsaWNhdGlvbk5hbWV9J2ApO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCBjcmVhdGUgYXBwbGljYXRpb24uXFxuRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIGFwcGxpY2F0aW9uJyk7XG4gICAgICAgIH0gICAgXG4gICAgfSk7XG4gICAgdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZG9saXR0bGUuY3JlYXRlQm91bmRlZENvbnRleHQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dE5hbWUgPSBhd2FpdCB2c2NvZGUud2luZG93LnNob3dJbnB1dEJveCh7cHJvbXB0OiAnQm91bmRlZCBDb250ZXh0IG5hbWUnLCBpZ25vcmVGb2N1c091dDogdHJ1ZX0pO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnQ3JlYXRpbmcgYm91bmRlZCBjb250ZXh0Jyk7XG4gICAgICAgICAgICBzcGF3bkRvbGl0dGxlQ2xpQ29tbWFuZChcbiAgICAgICAgICAgICAgICBbJ2NyZWF0ZScsICdib3VuZGVkY29udGV4dCddLCBcbiAgICAgICAgICAgICAgICBbYm91bmRlZENvbnRleHROYW1lXSwgXG4gICAgICAgICAgICAgICAge2N3ZDogdnNjb2RlLndvcmtzcGFjZS53b3Jrc3BhY2VGb2xkZXJzWzBdLnVyaS5mc1BhdGh9XG4gICAgICAgICAgICApLm9uKCdjbG9zZScsIChjb2RlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkgdGhyb3cgJ0NvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0JztcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlT3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDcmVhdGVkIGJvdW5kZWQgY29udGV4dCAnJHtib3VuZGVkQ29udGV4dE5hbWV9J2ApO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoYENvdWxkIG5vdCBjcmVhdGUgYm91bmRlZCBjb250ZXh0LlxcbkVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBib3VuZGVkIGNvbnRleHQnLCBlcnIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRG9saXR0bGVBcnRpZmFjdHNDb21tYW5kcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgICBjb25zdCBhcnRpZmFjdHMgPSBbXG4gICAgICAgICdDb21tYW5kJyxcbiAgICAgICAgJ0V2ZW50JyxcbiAgICAgICAgJ1JlYWQgTW9kZWwnLFxuICAgICAgICAnQWdncmVnYXRlIFJvb3QnLFxuICAgICAgICAnQ29tbWFuZCBIYW5kbGVyJyxcbiAgICAgICAgJ1F1ZXJ5JyxcbiAgICAgICAgJ0V2ZW50IFByb2Nlc3NvcicsXG4gICAgICAgICdDb25jZXB0J1xuICAgIF1cbiAgICB2c2NvZGUuY29tbWFuZHMucmVnaXN0ZXJUZXh0RWRpdG9yQ29tbWFuZCgnZG9saXR0bGUuYWRkQXJ0aWZhY3QnLCBhc3luYyAoZWRpdG9yKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwaWNrID0gYXdhaXQgdnNjb2RlLndpbmRvdy5zaG93UXVpY2tQaWNrKGFydGlmYWN0cywge2NhblBpY2tNYW55OiBmYWxzZSwgaWdub3JlRm9jdXNPdXQ6IHRydWV9KTtcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gWydhZGQnXTtcbiAgICAgICAgICAgIHN3aXRjaCAocGljaykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0NvbW1hbmQnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnB1c2goJ2NvbW1hbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRXZlbnQnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnB1c2goJ2V2ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1JlYWQgTW9kZWwnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnB1c2goJ3JlYWRtb2RlbCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBZ2dyZWdhdGUgUm9vdCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQucHVzaCgnYWdncmVnYXRlcm9vdCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDb21tYW5kIEhhbmRsZXInOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnB1c2goJ2NvbW1hbmRoYW5kbGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1F1ZXJ5JzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQaWNrID0gYXdhaXQgdnNjb2RlLndpbmRvdy5zaG93UXVpY2tQaWNrKFsnUXVlcnknLCAnUXVlcnkgRm9yIGEgUmVhZCBNb2RlbCddLCB7Y2FuUGlja01hbnk6IGZhbHNlLCBpZ25vcmVGb2N1c091dDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlQaWNrID09PSAnUXVlcnknKSBjb21tYW5kLnB1c2goJ3F1ZXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tbWFuZC5wdXNoKCdxdWVyeWZvcicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdFdmVudCBQcm9jZXNzb3InOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnB1c2goJ2V2ZW50cHJvY2Vzc29yJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0NvbmNlcHQnOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25jZXB0UGljayA9IGF3YWl0IHZzY29kZS53aW5kb3cuc2hvd1F1aWNrUGljayhcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnQ29uY2VwdCcsICdJbnQgQ29uY2VwdCcsICdTdHJpbmcgQ29uY2VwdCcsICdHVUlEIENvbmNlcHQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5QaWNrTWFueTogZmFsc2UsIGlnbm9yZUZvY3VzT3V0OiB0cnVlfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uY2VwdFBpY2sgPT09ICdDb25jZXB0JykgY29tbWFuZC5wdXNoKCdjb25jZXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmNlcHRQaWNrID09PSAnSW50IENvbmNlcHQnKSBjb21tYW5kLnB1c2goJ2ludGNvbmNlcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uY2VwdFBpY2sgPT09ICdTdHJpbmcgQ29uY2VwdCcpIGNvbW1hbmQucHVzaCgnc3RyaW5nY29uY2VwdCcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25jZXB0UGljayA9PT0gJ0dVSUQgQ29uY2VwdCcpIGNvbW1hbmQucHVzaCgnZ3VpZGNvbmNlcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFydGlmYWN0TmFtZSA9IGF3YWl0IHZzY29kZS53aW5kb3cuc2hvd0lucHV0Qm94KHtwcm9tcHQ6ICdBcnRpZmFjdCBuYW1lOiAnLCBpZ25vcmVGb2N1c091dDogdHJ1ZX0pO1xuICAgICAgICAgICAgbGV0IGNvbW1hbmRBcmdzID0gW2FydGlmYWN0TmFtZV07XG4gICAgICAgICAgICBydW5Eb2xpdHRsZUNsaUNvbW1hbmRUaHJvdWdoSW50ZWdyYXRlZFRlcm1pbmFsKGNvbW1hbmQsIGNvbW1hbmRBcmdzLCB7Y3dkOiBwYXRoLmRpcm5hbWUoZWRpdG9yLmRvY3VtZW50LnVyaS5mc1BhdGgpfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBDb3VsZCBub3QgYWRkIGFydGlmYWN0LlxcbkVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdDb3VsZCBhZGQgYXJ0aWZhY3QgJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IF9hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuZXhwb3J0IHsgX2FjdGl2YXRlIGFzIGFjdGl2YXRlIH07XG5cbi8vIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHlvdXIgZXh0ZW5zaW9uIGlzIGRlYWN0aXZhdGVkXG5mdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xufVxuY29uc3QgX2RlYWN0aXZhdGUgPSBkZWFjdGl2YXRlO1xuZXhwb3J0IHsgX2RlYWN0aXZhdGUgYXMgZGVhY3RpdmF0ZSB9OyJdfQ==