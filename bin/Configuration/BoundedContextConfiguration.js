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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var loadBoundedContextConfigurations = exports.loadBoundedContextConfigurations = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var vscode;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vscode = require('vscode');

                        console.log('Loading bounded context configurations');
                        vscode.window.showInformationMessage('Loading bounded context configuration');

                        return _context.abrupt("return", vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**', 2).then(function (result) {
                            if (!result || result.length == 0) {
                                vscode.window.showErrorMessage('Error loading bounded context configuration');
                                console.error('Couldn\'t find any \'bounded-context.json\' file in the current workspace');

                                throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';
                            }
                            var boundedContextConfigs = [];
                            result.forEach(function (uri) {
                                var workspace = vscode.workspace.getWorkspaceFolder(uri);
                                var filePath = uri.path;
                                console.log("Found bounded context configuration at path " + filePath);
                                var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                                var application = jsonObj['application'];
                                var boundedContext = jsonObj['boundedContext'];
                                var boundedContextName = jsonObj['boundedContextName'];
                                var core = jsonObj['core'];
                                var coreLanguage = core || core.language || undefined;

                                if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                                    vscode.window.showErrorMessage("Found an invalid bounded context configuration at path " + filePath);
                                } else {

                                    console.log("Loaded bounded context configuration with id '" + boundedContext + "' and name '" + boundedContextName + "'");
                                    boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new _Core.Core(coreLanguage), filePath, workspace));
                                }
                            });

                            return boundedContextConfigs;
                        }, function (error) {
                            throw error;
                        }));

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadBoundedContextConfigurations() {
        return _ref.apply(this, arguments);
    };
}();

var _Core = require("./Core");

var _helpers = require("../helpers");

var _Artifacts = require("./Artifacts");

var _Topology = require("./Topology");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwiZm9yRWFjaCIsImdldFdvcmtzcGFjZUZvbGRlciIsInVyaSIsImZpbGVQYXRoIiwicGF0aCIsImpzb25PYmoiLCJhcHBsaWNhdGlvbiIsImJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHROYW1lIiwiY29yZSIsImNvcmVMYW5ndWFnZSIsImxhbmd1YWdlIiwidW5kZWZpbmVkIiwicHVzaCIsIkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiIsIkNvcmUiLCJsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucyIsIl9hcHBsaWNhdGlvbiIsIl9ib3VuZGVkQ29udGV4dCIsIl9ib3VuZGVkQ29udGV4dE5hbWUiLCJfY29yZSIsIl9wYXRoIiwiX3dvcmtzcGFjZSIsIl9yb290UGF0aCIsIl9kb21haW5Gb2xkZXIiLCJfcmVhZEZvbGRlciIsIl9jb3JlRm9sZGVyIiwiX2V2ZW50Rm9sZGVycyIsIl9hcnRpZmFjdHMiLCJjb3JlRm9sZGVyIiwiX3RvcG9sb2d5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7OztBQVRBOzs7Ozt3RkFjTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0EsOEJBREgsR0FDWUMsUUFBUSxRQUFSLENBRFo7O0FBRUhDLGdDQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDQUgsK0JBQU9JLE1BQVAsQ0FBY0Msc0JBQWQsQ0FBcUMsdUNBQXJDOztBQUhHLHlEQUtJ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QXFDLFFBQXJDLENBQXJCOztBQUVBLGFBQUtLLFVBQUwsR0FBa0IscUNBQXFCLEtBQUtDLFVBQTFCLENBQWxCO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixtQ0FBb0IsS0FBS0QsVUFBekIsQ0FBakI7QUFDSDtBQUNEOzs7Ozs7Ozs0QkFJZ0I7QUFDWixtQkFBTyxLQUFLRCxVQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJa0I7QUFDZCxtQkFBTyxLQUFLWCxZQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJcUI7QUFDakIsbUJBQU8sS0FBS0MsZUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSXlCO0FBQ3JCLG1CQUFPLEtBQUtDLG1CQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJVztBQUNQLG1CQUFPLEtBQUtDLEtBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTVc7QUFDUCxtQkFBTyxLQUFLQyxLQUFaO0FBQ0g7Ozs0QkFDZTtBQUNaLG1CQUFPLEtBQUtDLFVBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9lO0FBQ1gsbUJBQU8sS0FBS0MsU0FBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBTyxLQUFLTyxTQUFaO0FBQ0g7Ozs0QkFFa0I7QUFDZixtQkFBTyxLQUFLTixhQUFaO0FBQ0g7Ozs0QkFDYztBQUNYLG1CQUFPLEtBQUtDLFdBQVo7QUFDSDs7OzRCQUNnQjtBQUNiLG1CQUFPLEtBQUtDLFdBQVo7QUFDSDs7OzRCQUNtQjtBQUNoQixtQkFBTyxLQUFLQyxhQUFaO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL0NvcmVcIjtcbmltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMsIGdldERpcmVjdG9yeVBhdGgsIGdldEFydGlmYWN0Rm9sZGVyUGF0aCwgZ2V0RXZlbnRzRm9sZGVyUGF0aHMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0QXJ0aWZhY3RzRnJvbUNvcmUgfSBmcm9tIFwiLi9BcnRpZmFjdHNcIjtcbmltcG9ydCB7IGdldFRvcG9sb2d5RnJvbUNvcmUsIFRvcG9sb2d5IH0gZnJvbSBcIi4vVG9wb2xvZ3lcIjtcblxuLyoqXG4gKiBMb2FkcyB0aGUgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb25zXG4gKiBAZXhwb3J0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25bXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucygpIHtcbiAgICBjb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnMnKTtcbiAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoJ0xvYWRpbmcgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24nKTtcblxuICAgIHJldHVybiB2c2NvZGUud29ya3NwYWNlLmZpbmRGaWxlcygnKiovYm91bmRlZC1jb250ZXh0Lmpzb24nLCAnKiovbm9kZV9tb2R1bGVzLyoqJywgMilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnRXJyb3IgbG9hZGluZyBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYm91bmRlZC1jb250ZXh0Lmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnKTtcblxuICAgICAgICAgICAgICAgIHRocm93ICdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2JvdW5kZWQtY29udGV4dC5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBib3VuZGVkQ29udGV4dENvbmZpZ3MgPSBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKCB1cmkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3b3Jrc3BhY2UgPSB2c2NvZGUud29ya3NwYWNlLmdldFdvcmtzcGFjZUZvbGRlcih1cmkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gdXJpLnBhdGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIGF0IHBhdGggJHtmaWxlUGF0aH1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uT2JqID0gcmVhZEpzb25Gcm9tVXJpU3luYyh1cmkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uID0ganNvbk9ialsnYXBwbGljYXRpb24nXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dCA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0J107XG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRlZENvbnRleHROYW1lID0ganNvbk9ialsnYm91bmRlZENvbnRleHROYW1lJ107XG4gICAgICAgICAgICAgICAgY29uc3QgY29yZSA9IGpzb25PYmpbJ2NvcmUnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JlTGFuZ3VhZ2UgPSBjb3JlIHx8IGNvcmUubGFuZ3VhZ2UgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbiA9PT0gdW5kZWZpbmVkIHx8wqBib3VuZGVkQ29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGJvdW5kZWRDb250ZXh0TmFtZSA9PT0gdW5kZWZpbmVkIHx8IGNvcmVMYW5ndWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShgRm91bmQgYW4gaW52YWxpZCBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbiBhdCBwYXRoICR7ZmlsZVBhdGh9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGVkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIHdpdGggaWQgJyR7Ym91bmRlZENvbnRleHR9JyBhbmQgbmFtZSAnJHtib3VuZGVkQ29udGV4dE5hbWV9J2ApXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kZWRDb250ZXh0Q29uZmlncy5wdXNoKG5ldyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24oYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0LCBib3VuZGVkQ29udGV4dE5hbWUsIG5ldyBDb3JlKGNvcmVMYW5ndWFnZSksIGZpbGVQYXRoLCB3b3Jrc3BhY2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kZWRDb250ZXh0Q29uZmlncztcbiAgICAgICAgICAgIFxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG59XG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgICogSW5zdGFudGlhdGVzIGFuIGluc3RhbmNlIG9mIEJvdW5kZWRDb250ZXh0XG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbiBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kZWRDb250ZXh0IFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYm91bmRlZENvbnRleHROYW1lIFxuICAgICAgKiBAcGFyYW0ge0NvcmV9IGNvcmUgXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICAqIEBwYXJhbSB7e2luZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZywgdXJpOiBpbXBvcnQoJ3ZzY29kZScpLlVyaX19IHdvcmtzcGFjZSBcbiAgICAgICovXG4gICAgIGNvbnN0cnVjdG9yIChhcHBsaWNhdGlvbiwgYm91bmRlZENvbnRleHQsIGJvdW5kZWRDb250ZXh0TmFtZSwgY29yZSwgcGF0aCwgd29ya3NwYWNlKSB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuX2JvdW5kZWRDb250ZXh0ID0gYm91bmRlZENvbnRleHQ7XG4gICAgICAgIHRoaXMuX2JvdW5kZWRDb250ZXh0TmFtZSA9IGJvdW5kZWRDb250ZXh0TmFtZTtcbiAgICAgICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl93b3Jrc3BhY2UgPSB3b3Jrc3BhY2U7XG5cbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSBnZXREaXJlY3RvcnlQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLl9kb21haW5Gb2xkZXIgPSBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5fcm9vdFBhdGgsICdkb21haW4nKVswXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3JlYWRGb2xkZXIgPSBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5fcm9vdFBhdGgsICdyZWFkJylbMF0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9jb3JlRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAnY29yZScpWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZXZlbnRGb2xkZXJzID0gZ2V0RXZlbnRzRm9sZGVyUGF0aHModGhpcy5fcm9vdFBhdGgsICdldmVudHMnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FydGlmYWN0cyA9IGdldEFydGlmYWN0c0Zyb21Db3JlKHRoaXMuY29yZUZvbGRlcik7XG4gICAgICAgIHRoaXMuX3RvcG9sb2d5ID0gZ2V0VG9wb2xvZ3lGcm9tQ29yZSh0aGlzLmNvcmVGb2xkZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0IGFydGlmYWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FydGlmYWN0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIEFwcGxpY2F0aW9uXG4gICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGVkQ29udGV4dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIG5hbWUgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBCb3VuZGVkIENvbnRleHQgbmFtZVxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRlZENvbnRleHROYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgY29yZSBjb25maWd1cmF0aW9uIFxuICAgICAgKiBAcmV0dXJucyB7Q29yZX1cbiAgICAgICovXG4gICAgZ2V0IGNvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbidzIHBhdGhcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gICAgfVxuICAgIGdldCB3b3Jrc3BhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBhdGggb2YgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgKiBcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gXG4gICAgICovXG4gICAgZ2V0IHJvb3RQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge1RvcG9sb2d5fVxuICAgICAqL1xuICAgIGdldCB0b3BvbG9neSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvcG9sb2d5O1xuICAgIH1cblxuICAgIGdldCBkb21haW5Gb2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21haW5Gb2xkZXI7XG4gICAgfVxuICAgIGdldCByZWFkUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRGb2xkZXI7XG4gICAgfVxuICAgIGdldCBjb3JlRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUZvbGRlcjtcbiAgICB9XG4gICAgZ2V0IGV2ZW50c0ZvbGRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEZvbGRlcnM7XG4gICAgfVxufSJdfQ==