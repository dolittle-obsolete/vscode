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
                                console.log(filePath);
                                var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                                var application = jsonObj['application'];
                                var boundedContext = jsonObj['boundedContext'];
                                var boundedContextName = jsonObj['boundedContextName'];
                                var core = jsonObj['core'];
                                var coreLanguage = core || core.language || undefined;
                                if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                                    vscode.window.showErrorMessage("Found an invalid bounded context configuration at path " + filePath);
                                } else {
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
        this._domainFolder = (0, _helpers.getArtifactFolderPath)(this._rootPath, 'domain');
        this._readFolder = (0, _helpers.getArtifactFolderPath)(this._rootPath, 'read');
        this._eventFolders = (0, _helpers.getEventsFolderPaths)(this._rootPath, 'events');
    }
    /**
      * Gets the application GUID
      * @returns {string} The GUID of the Application
      */


    (0, _createClass3.default)(BoundedContextConfiguration, [{
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
         * @returns {string} 
         * @readonly
         * @memberof BoundedContextConfiguration
         */

    }, {
        key: "rootPath",
        get: function get() {
            return this._rootPath;
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
        key: "eventsFolders",
        get: function get() {
            return this._eventFolders;
        }
    }]);
    return BoundedContextConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwiZm9yRWFjaCIsImZpbGVQYXRoIiwidXJpIiwicGF0aCIsImpzb25PYmoiLCJhcHBsaWNhdGlvbiIsImJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHROYW1lIiwiY29yZSIsImNvcmVMYW5ndWFnZSIsImxhbmd1YWdlIiwidW5kZWZpbmVkIiwicHVzaCIsIkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiIsIkNvcmUiLCJsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucyIsIl9hcHBsaWNhdGlvbiIsIl9ib3VuZGVkQ29udGV4dCIsIl9ib3VuZGVkQ29udGV4dE5hbWUiLCJfY29yZSIsIl9wYXRoIiwiX3Jvb3RQYXRoIiwiX2RvbWFpbkZvbGRlciIsIl9yZWFkRm9sZGVyIiwiX2V2ZW50Rm9sZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7Ozs7QUFQQTs7Ozs7d0ZBWU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dBLDhCQURILEdBQ1lDLFFBQVEsUUFBUixDQURaOztBQUVIQyxnQ0FBUUMsR0FBUixDQUFZLHdDQUFaO0FBQ0FILCtCQUFPSSxNQUFQLENBQWNDLHNCQUFkLENBQXFDLHVDQUFyQzs7QUFIRyx5REFLSUwsT0FBT00sU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkIseUJBQTNCLEVBQXNELG9CQUF0RCxFQUE0RSxDQUE1RSxFQUNGQyxJQURFLENBQ0csa0JBQVU7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QUFLQyxhQUFaO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL0NvcmVcIjtcbmltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMsIGdldERpcmVjdG9yeVBhdGgsIGdldEFydGlmYWN0Rm9sZGVyUGF0aCwgZ2V0RXZlbnRzRm9sZGVyUGF0aHMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG4vKipcbiAqIExvYWRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnNcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCkge1xuICAgIGNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9ucycpO1xuICAgIHZzY29kZS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZSgnTG9hZGluZyBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbicpO1xuXG4gICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9ib3VuZGVkLWNvbnRleHQuanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBsb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGRuXFwndCBmaW5kIGFueSBcXCdib3VuZGVkLWNvbnRleHQuanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYm91bmRlZC1jb250ZXh0Lmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJvdW5kZWRDb250ZXh0Q29uZmlncyA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goIHVyaSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSB1cmkucGF0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbk9iaiA9IHJlYWRKc29uRnJvbVVyaVN5bmModXJpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IGpzb25PYmpbJ2FwcGxpY2F0aW9uJ107XG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRlZENvbnRleHQgPSBqc29uT2JqWydib3VuZGVkQ29udGV4dCddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0TmFtZSA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0TmFtZSddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcmUgPSBqc29uT2JqWydjb3JlJ107XG4gICAgICAgICAgICAgICAgY29uc3QgY29yZUxhbmd1YWdlID0gY29yZSB8fCBjb3JlLmxhbmd1YWdlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb24gPT09IHVuZGVmaW5lZCB8fMKgYm91bmRlZENvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBib3VuZGVkQ29udGV4dE5hbWUgPT09IHVuZGVmaW5lZCB8fCBjb3JlTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoYEZvdW5kIGFuIGludmFsaWQgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kZWRDb250ZXh0Q29uZmlncy5wdXNoKG5ldyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24oYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0LCBib3VuZGVkQ29udGV4dE5hbWUsIG5ldyBDb3JlKGNvcmVMYW5ndWFnZSksIGZpbGVQYXRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZGVkQ29udGV4dENvbmZpZ3M7XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xufVxuZXhwb3J0IGNsYXNzIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICAqIEluc3RhbnRpYXRlcyBhbiBpbnN0YW5jZSBvZiBCb3VuZGVkQ29udGV4dFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwbGljYXRpb24gXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGVkQ29udGV4dCBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kZWRDb250ZXh0TmFtZSBcbiAgICAgICogQHBhcmFtIHtDb3JlfSBjb3JlIFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICAgICovXG4gICAgIGNvbnN0cnVjdG9yIChhcHBsaWNhdGlvbiwgYm91bmRlZENvbnRleHQsIGJvdW5kZWRDb250ZXh0TmFtZSwgY29yZSwgcGF0aCkge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLl9ib3VuZGVkQ29udGV4dCA9IGJvdW5kZWRDb250ZXh0O1xuICAgICAgICB0aGlzLl9ib3VuZGVkQ29udGV4dE5hbWUgPSBib3VuZGVkQ29udGV4dE5hbWU7XG4gICAgICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcblxuICAgICAgICB0aGlzLl9yb290UGF0aCA9IGdldERpcmVjdG9yeVBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMuX2RvbWFpbkZvbGRlciA9IGdldEFydGlmYWN0Rm9sZGVyUGF0aCh0aGlzLl9yb290UGF0aCwgJ2RvbWFpbicpO1xuICAgICAgICB0aGlzLl9yZWFkRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAncmVhZCcpO1xuICAgICAgICB0aGlzLl9ldmVudEZvbGRlcnMgPSBnZXRFdmVudHNGb2xkZXJQYXRocyh0aGlzLl9yb290UGF0aCwgJ2V2ZW50cycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgYXBwbGljYXRpb24gR1VJRFxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgR1VJRCBvZiB0aGUgQXBwbGljYXRpb25cbiAgICAgICovXG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBib3VuZGVkIGNvbnRleHQgR1VJRFxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgR1VJRCBvZiB0aGUgYm91bmRlZCBjb250ZXh0XG4gICAgICAqL1xuICAgIGdldCBib3VuZGVkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kZWRDb250ZXh0O1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgbmFtZSBvZiB0aGUgYm91bmRlZCBjb250ZXh0XG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEJvdW5kZWQgQ29udGV4dCBuYW1lXG4gICAgICAqL1xuICAgIGdldCBib3VuZGVkQ29udGV4dE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGVkQ29udGV4dE5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBjb3JlIGNvbmZpZ3VyYXRpb24gXG4gICAgICAqIEByZXR1cm5zIHtDb3JlfVxuICAgICAgKi9cbiAgICBnZXQgY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uJ3MgcGF0aFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcGF0aCBvZiB0aGUgcm9vdCBmb2xkZXIgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgcm9vdFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb290UGF0aDtcbiAgICB9XG5cbiAgICBnZXQgZG9tYWluRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tYWluRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgcmVhZFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgZXZlbnRzRm9sZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50Rm9sZGVycztcbiAgICB9XG59Il19