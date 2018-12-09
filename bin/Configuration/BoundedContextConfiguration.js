"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundedContextConfiguration = exports.loadBoundedContextConfigurations = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Loads the bounded context configurations
 * @export
 * @returns {Promise<BoundedContextConfiguration[]>}
 */
var loadBoundedContextConfigurations = exports.loadBoundedContextConfigurations = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var uris, boundedContextConfigs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, uri, workspace, filePath, jsonObj, application, boundedContext, boundedContextName, core, coreLanguage, msg;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _globals2.default.dolittleProjectOutputChannel.appendLine('Loading bounded context configurations');
                        _context.next = 3;
                        return vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**');

                    case 3:
                        uris = _context.sent;

                        if (!(!uris || uris.length == 0)) {
                            _context.next = 7;
                            break;
                        }

                        _globals2.default.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'bounded-context.json\' file in the current workspace');
                        throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';

                    case 7:
                        boundedContextConfigs = [];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 11;

                        for (_iterator = uris[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            uri = _step.value;
                            workspace = vscode.workspace.getWorkspaceFolder(uri);
                            filePath = uri.path;
                            jsonObj = (0, _helpers.readJsonFromUriSync)(uri);
                            application = jsonObj['application'];
                            boundedContext = jsonObj['boundedContext'];
                            boundedContextName = jsonObj['boundedContextName'];
                            core = jsonObj['core'];
                            uris;
                            coreLanguage = core.language || undefined;


                            if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                                msg = "Found an invalid bounded context configuration at path " + filePath;

                                _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                                vscode.window.showErrorMessage(msg);
                            } else {

                                _globals2.default.dolittleProjectOutputChannel.appendLine("Loaded bounded context configuration with id '" + boundedContext + "' and name '" + boundedContextName + "'");

                                boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new _Core.Core(coreLanguage), filePath, workspace));
                            }
                        }

                        _context.next = 19;
                        break;

                    case 15:
                        _context.prev = 15;
                        _context.t0 = _context["catch"](11);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 19:
                        _context.prev = 19;
                        _context.prev = 20;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 22:
                        _context.prev = 22;

                        if (!_didIteratorError) {
                            _context.next = 25;
                            break;
                        }

                        throw _iteratorError;

                    case 25:
                        return _context.finish(22);

                    case 26:
                        return _context.finish(19);

                    case 27:
                        return _context.abrupt("return", boundedContextConfigs);

                    case 28:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[11, 15, 19, 27], [20,, 22, 26]]);
    }));

    return function loadBoundedContextConfigurations() {
        return _ref.apply(this, arguments);
    };
}();

var _Core = require("./Core");

var _helpers = require("../helpers");

var _Artifacts = require("./Artifacts");

var _Topology = require("./Topology");

var _globals = require("../globals");

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vscode = require('vscode'); /*---------------------------------------------------------------------------------------------
                                 *  Copyright (c) Dolittle. All rights reserved.
                                 *  Licensed under the MIT License. See LICENSE in the project root for license information.
                                 *--------------------------------------------------------------------------------------------*/

var BoundedContextConfiguration = exports.BoundedContextConfiguration = function () {
    /**
      * Instantiates an instance of BoundedContext
      * @param {string} application 
      * @param {string} boundedContext 
      * @param {string} boundedContextName 
      * @param {Core} core 
      * @param {string} path
      * @param {{index: number, name: string, uri: import('vscode').Uri}} workspace 
      */
    function BoundedContextConfiguration(application, boundedContext, boundedContextName, core, path, workspace) {
        (0, _classCallCheck3.default)(this, BoundedContextConfiguration);

        this._application = application;
        this._boundedContext = boundedContext;
        this._boundedContextName = boundedContextName;
        this._core = core;
        this._path = path;
        this._workspace = workspace;

        this._rootPath = (0, _helpers.getDirectoryPath)(path);
        this._domainFolder = (0, _helpers.getArtifactFolderPath)(this._rootPath, 'domain')[0] || undefined;
        this._readFolder = (0, _helpers.getArtifactFolderPath)(this._rootPath, 'read')[0] || undefined;
        this._coreFolder = (0, _helpers.getArtifactFolderPath)(this._rootPath, 'core')[0] || undefined;
        this._eventFolders = (0, _helpers.getEventsFolderPaths)(this._rootPath, 'events');

        this._artifacts = (0, _Artifacts.getArtifactsFromCore)(this.coreFolder);
        this._topology = (0, _Topology.getTopologyFromCore)(this.coreFolder);
    }
    /**
     *
     *
     */


    (0, _createClass3.default)(BoundedContextConfiguration, [{
        key: "artifacts",
        get: function get() {
            return this._artifacts;
        }
        /**
          * Gets the application GUID
          * @returns {string} The GUID of the Application
          */

    }, {
        key: "application",
        get: function get() {
            return this._application;
        }
        /**
          * Gets the bounded context GUID
          * @returns {string} The GUID of the bounded context
          */

    }, {
        key: "boundedContext",
        get: function get() {
            return this._boundedContext;
        }
        /**
          * Gets the name of the bounded context
          * @returns {string} Bounded Context name
          */

    }, {
        key: "boundedContextName",
        get: function get() {
            return this._boundedContextName;
        }
        /**
          * Gets the core configuration 
          * @returns {Core}
          */

    }, {
        key: "core",
        get: function get() {
            return this._core;
        }
        /**
         * Gets the bounded context configuration's path
         *
         * @readonly
         * @memberof BoundedContextConfiguration
         */

    }, {
        key: "path",
        get: function get() {
            return this._path;
        }
    }, {
        key: "workspace",
        get: function get() {
            return this._workspace;
        }
        /**
         * Gets the path of the root folder of the bounded context
         * 
         * @readonly
         * @memberof BoundedContextConfiguration
         * @returns {string} 
         */

    }, {
        key: "rootPath",
        get: function get() {
            return this._rootPath;
        }
        /**
         *
         *
         * @readonly
         * @memberof BoundedContextConfiguration
         * @returns {Topology}
         */

    }, {
        key: "topology",
        get: function get() {
            return this._topology;
        }
    }, {
        key: "domainFolder",
        get: function get() {
            return this._domainFolder;
        }
    }, {
        key: "readPath",
        get: function get() {
            return this._readFolder;
        }
    }, {
        key: "coreFolder",
        get: function get() {
            return this._coreFolder;
        }
    }, {
        key: "eventsFolders",
        get: function get() {
            return this._eventFolders;
        }
    }]);
    return BoundedContextConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJnbG9iYWxzIiwiZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJ2c2NvZGUiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ1cmlzIiwibGVuZ3RoIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwidXJpIiwiZ2V0V29ya3NwYWNlRm9sZGVyIiwiZmlsZVBhdGgiLCJwYXRoIiwianNvbk9iaiIsImFwcGxpY2F0aW9uIiwiYm91bmRlZENvbnRleHQiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJjb3JlIiwiY29yZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJ1bmRlZmluZWQiLCJtc2ciLCJ3aW5kb3ciLCJzaG93RXJyb3JNZXNzYWdlIiwicHVzaCIsIkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiIsIkNvcmUiLCJsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucyIsInJlcXVpcmUiLCJfYXBwbGljYXRpb24iLCJfYm91bmRlZENvbnRleHQiLCJfYm91bmRlZENvbnRleHROYW1lIiwiX2NvcmUiLCJfcGF0aCIsIl93b3Jrc3BhY2UiLCJfcm9vdFBhdGgiLCJfZG9tYWluRm9sZGVyIiwiX3JlYWRGb2xkZXIiLCJfY29yZUZvbGRlciIsIl9ldmVudEZvbGRlcnMiLCJfYXJ0aWZhY3RzIiwiY29yZUZvbGRlciIsIl90b3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7O3dGQUtPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEEsMENBQVFDLDRCQUFSLENBQXFDQyxVQUFyQyxDQUFnRCx3Q0FBaEQ7QUFERztBQUFBLCtCQUVjQyxPQUFPQyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQix5QkFBM0IsRUFBc0Qsb0JBQXRELENBRmQ7O0FBQUE7QUFFQ0MsNEJB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TCxHQUFtQixvQ0FBc0IsS0FBS0gsU0FBM0IsRUFBc0MsTUFBdEMsRUFBOEMsQ0FBOUMsS0FBb0RmLFNBQXZFO0FBQ0EsYUFBS21CLGFBQUwsR0FBcUIsbUNBQXFCLEtBQUtKLFNBQTFCLEVBQXFDLFFBQXJDLENBQXJCOztBQUVBLGFBQUtLLFVBQUwsR0FBa0IscUNBQXFCLEtBQUtDLFVBQTFCLENBQWxCO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixtQ0FBb0IsS0FBS0QsVUFBekIsQ0FBakI7QUFDSDtBQUNEOzs7Ozs7Ozs0QkFJZ0I7QUFDWixtQkFBTyxLQUFLRCxVQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJa0I7QUFDZCxtQkFBTyxLQUFLWCxZQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJcUI7QUFDakIsbUJBQU8sS0FBS0MsZUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSXlCO0FBQ3JCLG1CQUFPLEtBQUtDLG1CQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJVztBQUNQLG1CQUFPLEtBQUtDLEtBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTVc7QUFDUCxtQkFBTyxLQUFLQyxLQUFaO0FBQ0g7Ozs0QkFDZTtBQUNaLG1CQUFPLEtBQUtDLFVBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9lO0FBQ1gsbUJBQU8sS0FBS0MsU0FBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBTyxLQUFLTyxTQUFaO0FBQ0g7Ozs0QkFFa0I7QUFDZixtQkFBTyxLQUFLTixhQUFaO0FBQ0g7Ozs0QkFDYztBQUNYLG1CQUFPLEtBQUtDLFdBQVo7QUFDSDs7OzRCQUNnQjtBQUNiLG1CQUFPLEtBQUtDLFdBQVo7QUFDSDs7OzRCQUNtQjtBQUNoQixtQkFBTyxLQUFLQyxhQUFaO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL0NvcmVcIjtcbmltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMsIGdldERpcmVjdG9yeVBhdGgsIGdldEFydGlmYWN0Rm9sZGVyUGF0aCwgZ2V0RXZlbnRzRm9sZGVyUGF0aHMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0QXJ0aWZhY3RzRnJvbUNvcmUgfSBmcm9tIFwiLi9BcnRpZmFjdHNcIjtcbmltcG9ydCB7IGdldFRvcG9sb2d5RnJvbUNvcmUsIFRvcG9sb2d5IH0gZnJvbSBcIi4vVG9wb2xvZ3lcIjtcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuY29uc3QgdnNjb2RlID0gcmVxdWlyZSgndnNjb2RlJyk7XG4vKipcbiAqIExvYWRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnNcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCkge1xuICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9ucycpO1xuICAgIGxldCB1cmlzID0gYXdhaXQgdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2JvdW5kZWQtY29udGV4dC5qc29uJywgJyoqL25vZGVfbW9kdWxlcy8qKicpO1xuICAgIGlmICghdXJpcyB8fCB1cmlzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2JvdW5kZWQtY29udGV4dC5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG4gICAgICAgIHRocm93ICdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2JvdW5kZWQtY29udGV4dC5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICB9XG4gICAgbGV0IGJvdW5kZWRDb250ZXh0Q29uZmlncyA9IFtdO1xuICAgIGZvciAobGV0IHVyaSBvZiB1cmlzKSB7XG4gICAgICAgIGxldCB3b3Jrc3BhY2UgPSB2c2NvZGUud29ya3NwYWNlLmdldFdvcmtzcGFjZUZvbGRlcih1cmkpO1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHVyaS5wYXRoO1xuICAgICAgICBjb25zdCBqc29uT2JqID0gcmVhZEpzb25Gcm9tVXJpU3luYyh1cmkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBqc29uT2JqWydhcHBsaWNhdGlvbiddO1xuICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dCA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0J107XG4gICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0TmFtZSA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0TmFtZSddO1xuICAgICAgICBjb25zdCBjb3JlID0ganNvbk9ialsnY29yZSddO3VyaXNcbiAgICAgICAgY29uc3QgY29yZUxhbmd1YWdlID0gY29yZS5sYW5ndWFnZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXBwbGljYXRpb24gPT09IHVuZGVmaW5lZCB8fMKgYm91bmRlZENvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBib3VuZGVkQ29udGV4dE5hbWUgPT09IHVuZGVmaW5lZCB8fCBjb3JlTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGBGb3VuZCBhbiBpbnZhbGlkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIGF0IHBhdGggJHtmaWxlUGF0aH1gO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgTG9hZGVkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIHdpdGggaWQgJyR7Ym91bmRlZENvbnRleHR9JyBhbmQgbmFtZSAnJHtib3VuZGVkQ29udGV4dE5hbWV9J2ApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvdW5kZWRDb250ZXh0Q29uZmlncy5wdXNoKG5ldyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24oYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0LCBib3VuZGVkQ29udGV4dE5hbWUsIG5ldyBDb3JlKGNvcmVMYW5ndWFnZSksIGZpbGVQYXRoLCB3b3Jrc3BhY2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib3VuZGVkQ29udGV4dENvbmZpZ3M7XG4gICAgICAgICAgICBcbiAgICAgICAgXG59XG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgICogSW5zdGFudGlhdGVzIGFuIGluc3RhbmNlIG9mIEJvdW5kZWRDb250ZXh0XG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbiBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kZWRDb250ZXh0IFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYm91bmRlZENvbnRleHROYW1lIFxuICAgICAgKiBAcGFyYW0ge0NvcmV9IGNvcmUgXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICAqIEBwYXJhbSB7e2luZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZywgdXJpOiBpbXBvcnQoJ3ZzY29kZScpLlVyaX19IHdvcmtzcGFjZSBcbiAgICAgICovXG4gICAgIGNvbnN0cnVjdG9yIChhcHBsaWNhdGlvbiwgYm91bmRlZENvbnRleHQsIGJvdW5kZWRDb250ZXh0TmFtZSwgY29yZSwgcGF0aCwgd29ya3NwYWNlKSB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuX2JvdW5kZWRDb250ZXh0ID0gYm91bmRlZENvbnRleHQ7XG4gICAgICAgIHRoaXMuX2JvdW5kZWRDb250ZXh0TmFtZSA9IGJvdW5kZWRDb250ZXh0TmFtZTtcbiAgICAgICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl93b3Jrc3BhY2UgPSB3b3Jrc3BhY2U7XG5cbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSBnZXREaXJlY3RvcnlQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLl9kb21haW5Gb2xkZXIgPSBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5fcm9vdFBhdGgsICdkb21haW4nKVswXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3JlYWRGb2xkZXIgPSBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5fcm9vdFBhdGgsICdyZWFkJylbMF0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9jb3JlRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAnY29yZScpWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZXZlbnRGb2xkZXJzID0gZ2V0RXZlbnRzRm9sZGVyUGF0aHModGhpcy5fcm9vdFBhdGgsICdldmVudHMnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FydGlmYWN0cyA9IGdldEFydGlmYWN0c0Zyb21Db3JlKHRoaXMuY29yZUZvbGRlcik7XG4gICAgICAgIHRoaXMuX3RvcG9sb2d5ID0gZ2V0VG9wb2xvZ3lGcm9tQ29yZSh0aGlzLmNvcmVGb2xkZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0IGFydGlmYWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FydGlmYWN0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIEFwcGxpY2F0aW9uXG4gICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGVkQ29udGV4dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIG5hbWUgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBCb3VuZGVkIENvbnRleHQgbmFtZVxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRlZENvbnRleHROYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgY29yZSBjb25maWd1cmF0aW9uIFxuICAgICAgKiBAcmV0dXJucyB7Q29yZX1cbiAgICAgICovXG4gICAgZ2V0IGNvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbidzIHBhdGhcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gICAgfVxuICAgIGdldCB3b3Jrc3BhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBhdGggb2YgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgKiBcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gXG4gICAgICovXG4gICAgZ2V0IHJvb3RQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge1RvcG9sb2d5fVxuICAgICAqL1xuICAgIGdldCB0b3BvbG9neSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvcG9sb2d5O1xuICAgIH1cblxuICAgIGdldCBkb21haW5Gb2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21haW5Gb2xkZXI7XG4gICAgfVxuICAgIGdldCByZWFkUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRGb2xkZXI7XG4gICAgfVxuICAgIGdldCBjb3JlRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUZvbGRlcjtcbiAgICB9XG4gICAgZ2V0IGV2ZW50c0ZvbGRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEZvbGRlcnM7XG4gICAgfVxufSJdfQ==