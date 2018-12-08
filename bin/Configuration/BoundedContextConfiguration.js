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
        var vscode;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vscode = require('vscode');

                        _globals2.default.dolittleProjectOutputChannel.appendLine('Loading bounded context configurations');

                        return _context.abrupt("return", vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**', 2).then(function (result) {
                            if (!result || result.length == 0) {
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'bounded-context.json\' file in the current workspace');
                                throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';
                            }
                            var boundedContextConfigs = [];
                            result.forEach(function (uri) {
                                var workspace = vscode.workspace.getWorkspaceFolder(uri);
                                var filePath = uri.path;
                                var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                                var application = jsonObj['application'];
                                var boundedContext = jsonObj['boundedContext'];
                                var boundedContextName = jsonObj['boundedContextName'];
                                var core = jsonObj['core'];
                                var coreLanguage = core.language || undefined;

                                if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                                    var msg = "Found an invalid bounded context configuration at path " + filePath;
                                    _globals2.default.dolittleProjectOutputChannel.appendLine(msg);
                                    vscode.window.showErrorMessage(msg);
                                } else {

                                    _globals2.default.dolittleProjectOutputChannel.appendLine("Loaded bounded context configuration with id '" + boundedContext + "' and name '" + boundedContextName + "'");

                                    boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new _Core.Core(coreLanguage), filePath, workspace));
                                }
                            });

                            return boundedContextConfigs;
                        }, function (error) {
                            throw error;
                        }));

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadBoundedContextConfigurations() {
        return _ref.apply(this, arguments);
    };
}(); /*---------------------------------------------------------------------------------------------
      *  Copyright (c) Dolittle. All rights reserved.
      *  Licensed under the MIT License. See LICENSE in the project root for license information.
      *--------------------------------------------------------------------------------------------*/


var _Core = require("./Core");

var _helpers = require("../helpers");

var _Artifacts = require("./Artifacts");

var _Topology = require("./Topology");

var _globals = require("../globals");

var _globals2 = _interopRequireDefault(_globals);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiZ2xvYmFscyIsImRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwiLCJhcHBlbmRMaW5lIiwid29ya3NwYWNlIiwiZmluZEZpbGVzIiwidGhlbiIsInJlc3VsdCIsImxlbmd0aCIsImJvdW5kZWRDb250ZXh0Q29uZmlncyIsImZvckVhY2giLCJnZXRXb3Jrc3BhY2VGb2xkZXIiLCJ1cmkiLCJmaWxlUGF0aCIsInBhdGgiLCJqc29uT2JqIiwiYXBwbGljYXRpb24iLCJib3VuZGVkQ29udGV4dCIsImJvdW5kZWRDb250ZXh0TmFtZSIsImNvcmUiLCJjb3JlTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInVuZGVmaW5lZCIsIm1zZyIsIndpbmRvdyIsInNob3dFcnJvck1lc3NhZ2UiLCJwdXNoIiwiQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIiwiQ29yZSIsImVycm9yIiwibG9hZEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbnMiLCJfYXBwbGljYXRpb24iLCJfYm91bmRlZENvbnRleHQiLCJfYm91bmRlZENvbnRleHROYW1lIiwiX2NvcmUiLCJfcGF0aCIsIl93b3Jrc3BhY2UiLCJfcm9vdFBhdGgiLCJfZG9tYWluRm9sZGVyIiwiX3JlYWRGb2xkZXIiLCJfY29yZUZvbGRlciIsIl9ldmVudEZvbGRlcnMiLCJfYXJ0aWZhY3RzIiwiY29yZUZvbGRlciIsIl90b3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7O3dGQUtPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjs7QUFFSEMsMENBQVFDLDRCQUFSLENBQXFDQyxVQUFyQyxDQUFnRCx3Q0FBaEQ7O0FBRkcseURBSUlKLE9BQU9LLFNBQVAsQ0FB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LEdBQXFCLG1DQUFxQixLQUFLSixTQUExQixFQUFxQyxRQUFyQyxDQUFyQjs7QUFFQSxhQUFLSyxVQUFMLEdBQWtCLHFDQUFxQixLQUFLQyxVQUExQixDQUFsQjtBQUNBLGFBQUtDLFNBQUwsR0FBaUIsbUNBQW9CLEtBQUtELFVBQXpCLENBQWpCO0FBQ0g7QUFDRDs7Ozs7Ozs7NEJBSWdCO0FBQ1osbUJBQU8sS0FBS0QsVUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSWtCO0FBQ2QsbUJBQU8sS0FBS1gsWUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSXFCO0FBQ2pCLG1CQUFPLEtBQUtDLGVBQVo7QUFDSDtBQUNEOzs7Ozs7OzRCQUl5QjtBQUNyQixtQkFBTyxLQUFLQyxtQkFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSVc7QUFDUCxtQkFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1XO0FBQ1AsbUJBQU8sS0FBS0MsS0FBWjtBQUNIOzs7NEJBQ2U7QUFDWixtQkFBTyxLQUFLQyxVQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPZTtBQUNYLG1CQUFPLEtBQUtDLFNBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9lO0FBQ1gsbUJBQU8sS0FBS08sU0FBWjtBQUNIOzs7NEJBRWtCO0FBQ2YsbUJBQU8sS0FBS04sYUFBWjtBQUNIOzs7NEJBQ2M7QUFDWCxtQkFBTyxLQUFLQyxXQUFaO0FBQ0g7Ozs0QkFDZ0I7QUFDYixtQkFBTyxLQUFLQyxXQUFaO0FBQ0g7Ozs0QkFDbUI7QUFDaEIsbUJBQU8sS0FBS0MsYUFBWjtBQUNIIiwiZmlsZSI6IkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9Db3JlXCI7XG5pbXBvcnQgeyByZWFkSnNvbkZyb21VcmlTeW5jLCBnZXREaXJlY3RvcnlQYXRoLCBnZXRBcnRpZmFjdEZvbGRlclBhdGgsIGdldEV2ZW50c0ZvbGRlclBhdGhzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IGdldEFydGlmYWN0c0Zyb21Db3JlIH0gZnJvbSBcIi4vQXJ0aWZhY3RzXCI7XG5pbXBvcnQgeyBnZXRUb3BvbG9neUZyb21Db3JlLCBUb3BvbG9neSB9IGZyb20gXCIuL1RvcG9sb2d5XCI7XG5pbXBvcnQgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xuXG4vKipcbiAqIExvYWRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnNcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCkge1xuICAgIGNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9ucycpO1xuXG4gICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9ib3VuZGVkLWNvbnRleHQuanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYm91bmRlZC1jb250ZXh0Lmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnKTtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGRuXFwndCBmaW5kIGFueSBcXCdib3VuZGVkLWNvbnRleHQuanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYm91bmRlZENvbnRleHRDb25maWdzID0gW107XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaCggdXJpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgd29ya3NwYWNlID0gdnNjb2RlLndvcmtzcGFjZS5nZXRXb3Jrc3BhY2VGb2xkZXIodXJpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHVyaS5wYXRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25PYmogPSByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBqc29uT2JqWydhcHBsaWNhdGlvbiddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0ganNvbk9ialsnYm91bmRlZENvbnRleHQnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dE5hbWUgPSBqc29uT2JqWydib3VuZGVkQ29udGV4dE5hbWUnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JlID0ganNvbk9ialsnY29yZSddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcmVMYW5ndWFnZSA9IGNvcmUubGFuZ3VhZ2UgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbiA9PT0gdW5kZWZpbmVkIHx8wqBib3VuZGVkQ29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGJvdW5kZWRDb250ZXh0TmFtZSA9PT0gdW5kZWZpbmVkIHx8IGNvcmVMYW5ndWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBgRm91bmQgYW4gaW52YWxpZCBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbiBhdCBwYXRoICR7ZmlsZVBhdGh9YDtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgTG9hZGVkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIHdpdGggaWQgJyR7Ym91bmRlZENvbnRleHR9JyBhbmQgbmFtZSAnJHtib3VuZGVkQ29udGV4dE5hbWV9J2ApXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBib3VuZGVkQ29udGV4dENvbmZpZ3MucHVzaChuZXcgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dCwgYm91bmRlZENvbnRleHROYW1lLCBuZXcgQ29yZShjb3JlTGFuZ3VhZ2UpLCBmaWxlUGF0aCwgd29ya3NwYWNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZGVkQ29udGV4dENvbmZpZ3M7XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xufVxuZXhwb3J0IGNsYXNzIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICAqIEluc3RhbnRpYXRlcyBhbiBpbnN0YW5jZSBvZiBCb3VuZGVkQ29udGV4dFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb24gXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGVkQ29udGV4dCBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kZWRDb250ZXh0TmFtZSBcbiAgICAgICogQHBhcmFtIHtDb3JlfSBjb3JlIFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAgKiBAcGFyYW0ge3tpbmRleDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHVyaTogaW1wb3J0KCd2c2NvZGUnKS5Vcml9fSB3b3Jrc3BhY2UgXG4gICAgICAqL1xuICAgICBjb25zdHJ1Y3RvciAoYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0LCBib3VuZGVkQ29udGV4dE5hbWUsIGNvcmUsIHBhdGgsIHdvcmtzcGFjZSkge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLl9ib3VuZGVkQ29udGV4dCA9IGJvdW5kZWRDb250ZXh0O1xuICAgICAgICB0aGlzLl9ib3VuZGVkQ29udGV4dE5hbWUgPSBib3VuZGVkQ29udGV4dE5hbWU7XG4gICAgICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fd29ya3NwYWNlID0gd29ya3NwYWNlO1xuXG4gICAgICAgIHRoaXMuX3Jvb3RQYXRoID0gZ2V0RGlyZWN0b3J5UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5fZG9tYWluRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAnZG9tYWluJylbMF0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9yZWFkRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAncmVhZCcpWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fY29yZUZvbGRlciA9IGdldEFydGlmYWN0Rm9sZGVyUGF0aCh0aGlzLl9yb290UGF0aCwgJ2NvcmUnKVswXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2V2ZW50Rm9sZGVycyA9IGdldEV2ZW50c0ZvbGRlclBhdGhzKHRoaXMuX3Jvb3RQYXRoLCAnZXZlbnRzJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9hcnRpZmFjdHMgPSBnZXRBcnRpZmFjdHNGcm9tQ29yZSh0aGlzLmNvcmVGb2xkZXIpO1xuICAgICAgICB0aGlzLl90b3BvbG9neSA9IGdldFRvcG9sb2d5RnJvbUNvcmUodGhpcy5jb3JlRm9sZGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqL1xuICAgIGdldCBhcnRpZmFjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnRpZmFjdHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBHVUlEXG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBHVUlEIG9mIHRoZSBBcHBsaWNhdGlvblxuICAgICAgKi9cbiAgICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGJvdW5kZWQgY29udGV4dCBHVUlEXG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBHVUlEIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgICovXG4gICAgZ2V0IGJvdW5kZWRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRlZENvbnRleHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBuYW1lIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gQm91bmRlZCBDb250ZXh0IG5hbWVcbiAgICAgICovXG4gICAgZ2V0IGJvdW5kZWRDb250ZXh0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kZWRDb250ZXh0TmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGNvcmUgY29uZmlndXJhdGlvbiBcbiAgICAgICogQHJldHVybnMge0NvcmV9XG4gICAgICAqL1xuICAgIGdldCBjb3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24ncyBwYXRoXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICBnZXQgd29ya3NwYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwYXRoIG9mIHRoZSByb290IGZvbGRlciBvZiB0aGUgYm91bmRlZCBjb250ZXh0XG4gICAgICogXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFxuICAgICAqL1xuICAgIGdldCByb290UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3RQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtUb3BvbG9neX1cbiAgICAgKi9cbiAgICBnZXQgdG9wb2xvZ3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3BvbG9neTtcbiAgICB9XG5cbiAgICBnZXQgZG9tYWluRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tYWluRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgcmVhZFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgY29yZUZvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmVGb2xkZXI7XG4gICAgfVxuICAgIGdldCBldmVudHNGb2xkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRGb2xkZXJzO1xuICAgIH1cbn0iXX0=