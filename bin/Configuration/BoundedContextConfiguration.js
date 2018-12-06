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
                                    boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new _Core.Core(coreLanguage), filePath));
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
      */
    function BoundedContextConfiguration(application, boundedContext, boundedContextName, core, path) {
        (0, _classCallCheck3.default)(this, BoundedContextConfiguration);

        this._application = application;
        this._boundedContext = boundedContext;
        this._boundedContextName = boundedContextName;
        this._core = core;
        this._path = path;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwiZm9yRWFjaCIsImZpbGVQYXRoIiwidXJpIiwicGF0aCIsImpzb25PYmoiLCJhcHBsaWNhdGlvbiIsImJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHROYW1lIiwiY29yZSIsImNvcmVMYW5ndWFnZSIsImxhbmd1YWdlIiwidW5kZWZpbmVkIiwicHVzaCIsIkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiIsIkNvcmUiLCJsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucyIsIl9hcHBsaWNhdGlvbiIsIl9ib3VuZGVkQ29udGV4dCIsIl9ib3VuZGVkQ29udGV4dE5hbWUiLCJfY29yZSIsIl9wYXRoIiwiX3Jvb3RQYXRoIiwiX2RvbWFpbkZvbGRlciIsIl9yZWFkRm9sZGVyIiwiX2NvcmVGb2xkZXIiLCJfZXZlbnRGb2xkZXJzIiwiX2FydGlmYWN0cyIsImNvcmVGb2xkZXIiLCJfdG9wb2xvZ3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7O0FBVEE7Ozs7O3dGQWNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjs7QUFFSEMsZ0NBQVFDLEdBQVIsQ0FBWSx3Q0FBWjtBQUNBSCwrQkFBT0ksTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyx1Q0FBckM7O0FBSEcseURBS0lMLE9BQU9NLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCLHlC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WjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSWtCO0FBQ2QsbUJBQU8sS0FBS1YsWUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSXFCO0FBQ2pCLG1CQUFPLEtBQUtDLGVBQVo7QUFDSDtBQUNEOzs7Ozs7OzRCQUl5QjtBQUNyQixtQkFBTyxLQUFLQyxtQkFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSVc7QUFDUCxtQkFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1XO0FBQ1AsbUJBQU8sS0FBS0MsS0FBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBTyxLQUFLQyxTQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPZTtBQUNYLG1CQUFPLEtBQUtPLFNBQVo7QUFDSDs7OzRCQUVrQjtBQUNmLG1CQUFPLEtBQUtOLGFBQVo7QUFDSDs7OzRCQUNjO0FBQ1gsbUJBQU8sS0FBS0MsV0FBWjtBQUNIOzs7NEJBQ2dCO0FBQ2IsbUJBQU8sS0FBS0MsV0FBWjtBQUNIOzs7NEJBQ21CO0FBQ2hCLG1CQUFPLEtBQUtDLGFBQVo7QUFDSCIsImZpbGUiOiJCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIi4vQ29yZVwiO1xuaW1wb3J0IHsgcmVhZEpzb25Gcm9tVXJpU3luYywgZ2V0RGlyZWN0b3J5UGF0aCwgZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoLCBnZXRFdmVudHNGb2xkZXJQYXRocyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBnZXRBcnRpZmFjdHNGcm9tQ29yZSB9IGZyb20gXCIuL0FydGlmYWN0c1wiO1xuaW1wb3J0IHsgZ2V0VG9wb2xvZ3lGcm9tQ29yZSwgVG9wb2xvZ3kgfSBmcm9tIFwiLi9Ub3BvbG9neVwiO1xuXG4vKipcbiAqIExvYWRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnNcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCkge1xuICAgIGNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9ucycpO1xuICAgIHZzY29kZS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZSgnTG9hZGluZyBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbicpO1xuXG4gICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9ib3VuZGVkLWNvbnRleHQuanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBsb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGRuXFwndCBmaW5kIGFueSBcXCdib3VuZGVkLWNvbnRleHQuanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYm91bmRlZC1jb250ZXh0Lmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJvdW5kZWRDb250ZXh0Q29uZmlncyA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goIHVyaSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSB1cmkucGF0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25PYmogPSByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBqc29uT2JqWydhcHBsaWNhdGlvbiddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0ganNvbk9ialsnYm91bmRlZENvbnRleHQnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dE5hbWUgPSBqc29uT2JqWydib3VuZGVkQ29udGV4dE5hbWUnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JlID0ganNvbk9ialsnY29yZSddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcmVMYW5ndWFnZSA9IGNvcmUgfHwgY29yZS5sYW5ndWFnZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uID09PSB1bmRlZmluZWQgfHzCoGJvdW5kZWRDb250ZXh0ID09PSB1bmRlZmluZWQgfHwgYm91bmRlZENvbnRleHROYW1lID09PSB1bmRlZmluZWQgfHwgY29yZUxhbmd1YWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKGBGb3VuZCBhbiBpbnZhbGlkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIGF0IHBhdGggJHtmaWxlUGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24gd2l0aCBpZCAnJHtib3VuZGVkQ29udGV4dH0nIGFuZCBuYW1lICcke2JvdW5kZWRDb250ZXh0TmFtZX0nYClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRlZENvbnRleHRDb25maWdzLnB1c2gobmV3IEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbihhcHBsaWNhdGlvbiwgYm91bmRlZENvbnRleHQsIGJvdW5kZWRDb250ZXh0TmFtZSwgbmV3IENvcmUoY29yZUxhbmd1YWdlKSwgZmlsZVBhdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kZWRDb250ZXh0Q29uZmlncztcbiAgICAgICAgICAgIFxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG59XG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgICogSW5zdGFudGlhdGVzIGFuIGluc3RhbmNlIG9mIEJvdW5kZWRDb250ZXh0XG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBsaWNhdGlvbiBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kZWRDb250ZXh0IFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYm91bmRlZENvbnRleHROYW1lIFxuICAgICAgKiBAcGFyYW0ge0NvcmV9IGNvcmUgXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICAgICAgKi9cbiAgICAgY29uc3RydWN0b3IgKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dCwgYm91bmRlZENvbnRleHROYW1lLCBjb3JlLCBwYXRoKSB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuX2JvdW5kZWRDb250ZXh0ID0gYm91bmRlZENvbnRleHQ7XG4gICAgICAgIHRoaXMuX2JvdW5kZWRDb250ZXh0TmFtZSA9IGJvdW5kZWRDb250ZXh0TmFtZTtcbiAgICAgICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgICAgIHRoaXMuX3Jvb3RQYXRoID0gZ2V0RGlyZWN0b3J5UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5fZG9tYWluRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAnZG9tYWluJylbMF0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9yZWFkRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAncmVhZCcpWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fY29yZUZvbGRlciA9IGdldEFydGlmYWN0Rm9sZGVyUGF0aCh0aGlzLl9yb290UGF0aCwgJ2NvcmUnKVswXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2V2ZW50Rm9sZGVycyA9IGdldEV2ZW50c0ZvbGRlclBhdGhzKHRoaXMuX3Jvb3RQYXRoLCAnZXZlbnRzJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9hcnRpZmFjdHMgPSBnZXRBcnRpZmFjdHNGcm9tQ29yZSh0aGlzLmNvcmVGb2xkZXIpO1xuICAgICAgICB0aGlzLl90b3BvbG9neSA9IGdldFRvcG9sb2d5RnJvbUNvcmUodGhpcy5jb3JlRm9sZGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqL1xuICAgIGdldCBhcnRpZmFjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnRpZmFjdHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBHVUlEXG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBHVUlEIG9mIHRoZSBBcHBsaWNhdGlvblxuICAgICAgKi9cbiAgICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGJvdW5kZWQgY29udGV4dCBHVUlEXG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBHVUlEIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgICovXG4gICAgZ2V0IGJvdW5kZWRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRlZENvbnRleHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBuYW1lIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gQm91bmRlZCBDb250ZXh0IG5hbWVcbiAgICAgICovXG4gICAgZ2V0IGJvdW5kZWRDb250ZXh0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kZWRDb250ZXh0TmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGNvcmUgY29uZmlndXJhdGlvbiBcbiAgICAgICogQHJldHVybnMge0NvcmV9XG4gICAgICAqL1xuICAgIGdldCBjb3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24ncyBwYXRoXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwYXRoIG9mIHRoZSByb290IGZvbGRlciBvZiB0aGUgYm91bmRlZCBjb250ZXh0XG4gICAgICogXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFxuICAgICAqL1xuICAgIGdldCByb290UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3RQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtUb3BvbG9neX1cbiAgICAgKi9cbiAgICBnZXQgdG9wb2xvZ3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3BvbG9neTtcbiAgICB9XG5cbiAgICBnZXQgZG9tYWluRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tYWluRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgcmVhZFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgY29yZUZvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmVGb2xkZXI7XG4gICAgfVxuICAgIGdldCBldmVudHNGb2xkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRGb2xkZXJzO1xuICAgIH1cbn0iXX0=