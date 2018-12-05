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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwiZm9yRWFjaCIsImZpbGVQYXRoIiwidXJpIiwicGF0aCIsImpzb25PYmoiLCJhcHBsaWNhdGlvbiIsImJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHROYW1lIiwiY29yZSIsImNvcmVMYW5ndWFnZSIsImxhbmd1YWdlIiwidW5kZWZpbmVkIiwicHVzaCIsIkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiIsIkNvcmUiLCJsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucyIsIl9hcHBsaWNhdGlvbiIsIl9ib3VuZGVkQ29udGV4dCIsIl9ib3VuZGVkQ29udGV4dE5hbWUiLCJfY29yZSIsIl9wYXRoIiwiX3Jvb3RQYXRoIiwiX2RvbWFpbkZvbGRlciIsIl9yZWFkRm9sZGVyIiwiX2NvcmVGb2xkZXIiLCJfZXZlbnRGb2xkZXJzIiwiX2FydGlmYWN0cyIsImNvcmVGb2xkZXIiLCJfdG9wb2xvZ3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7O0FBVEE7Ozs7O3dGQWNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjs7QUFFSEMsZ0NBQVFDLEdBQVIsQ0FBWSx3Q0FBWjtBQUNBSCwrQkFBT0ksTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyx1Q0FBckM7O0FBSEcseURBS0lMLE9BQU9NLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCLHlC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O0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJa0I7QUFDZCxtQkFBTyxLQUFLVixZQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJcUI7QUFDakIsbUJBQU8sS0FBS0MsZUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSXlCO0FBQ3JCLG1CQUFPLEtBQUtDLG1CQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJVztBQUNQLG1CQUFPLEtBQUtDLEtBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTVc7QUFDUCxtQkFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPZTtBQUNYLG1CQUFPLEtBQUtDLFNBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9lO0FBQ1gsbUJBQU8sS0FBS08sU0FBWjtBQUNIOzs7NEJBRWtCO0FBQ2YsbUJBQU8sS0FBS04sYUFBWjtBQUNIOzs7NEJBQ2M7QUFDWCxtQkFBTyxLQUFLQyxXQUFaO0FBQ0g7Ozs0QkFDZ0I7QUFDYixtQkFBTyxLQUFLQyxXQUFaO0FBQ0g7Ozs0QkFDbUI7QUFDaEIsbUJBQU8sS0FBS0MsYUFBWjtBQUNIIiwiZmlsZSI6IkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9Db3JlXCI7XG5pbXBvcnQgeyByZWFkSnNvbkZyb21VcmlTeW5jLCBnZXREaXJlY3RvcnlQYXRoLCBnZXRBcnRpZmFjdEZvbGRlclBhdGgsIGdldEV2ZW50c0ZvbGRlclBhdGhzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IGdldEFydGlmYWN0c0Zyb21Db3JlIH0gZnJvbSBcIi4vQXJ0aWZhY3RzXCI7XG5pbXBvcnQgeyBnZXRUb3BvbG9neUZyb21Db3JlLCBUb3BvbG9neSB9IGZyb20gXCIuL1RvcG9sb2d5XCI7XG5cbi8qKlxuICogTG9hZHMgdGhlIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uc1xuICogQGV4cG9ydFxuICogQHJldHVybnMge1Byb21pc2U8Qm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uW10+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgY29uc3QgdnNjb2RlID0gcmVxdWlyZSgndnNjb2RlJyk7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb25zJyk7XG4gICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uJyk7XG5cbiAgICByZXR1cm4gdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2JvdW5kZWQtY29udGV4dC5qc29uJywgJyoqL25vZGVfbW9kdWxlcy8qKicsIDIpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCByZXN1bHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIGxvYWRpbmcgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2JvdW5kZWQtY29udGV4dC5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGRuXFwndCBmaW5kIGFueSBcXCdib3VuZGVkLWNvbnRleHQuanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYm91bmRlZENvbnRleHRDb25maWdzID0gW107XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaCggdXJpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHVyaS5wYXRoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbiBhdCBwYXRoICR7ZmlsZVBhdGh9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbk9iaiA9IHJlYWRKc29uRnJvbVVyaVN5bmModXJpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IGpzb25PYmpbJ2FwcGxpY2F0aW9uJ107XG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRlZENvbnRleHQgPSBqc29uT2JqWydib3VuZGVkQ29udGV4dCddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0TmFtZSA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0TmFtZSddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcmUgPSBqc29uT2JqWydjb3JlJ107XG4gICAgICAgICAgICAgICAgY29uc3QgY29yZUxhbmd1YWdlID0gY29yZSB8fCBjb3JlLmxhbmd1YWdlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYXBwbGljYXRpb24gPT09IHVuZGVmaW5lZCB8fMKgYm91bmRlZENvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBib3VuZGVkQ29udGV4dE5hbWUgPT09IHVuZGVmaW5lZCB8fCBjb3JlTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoYEZvdW5kIGFuIGludmFsaWQgYm91bmRlZCBjb250ZXh0IGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRlZCBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbiB3aXRoIGlkICcke2JvdW5kZWRDb250ZXh0fScgYW5kIG5hbWUgJyR7Ym91bmRlZENvbnRleHROYW1lfSdgKVxuICAgICAgICAgICAgICAgICAgICBib3VuZGVkQ29udGV4dENvbmZpZ3MucHVzaChuZXcgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dCwgYm91bmRlZENvbnRleHROYW1lLCBuZXcgQ29yZShjb3JlTGFuZ3VhZ2UpLCBmaWxlUGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRlZENvbnRleHRDb25maWdzO1xuICAgICAgICAgICAgXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAgKiBJbnN0YW50aWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQm91bmRlZENvbnRleHRcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uIFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYm91bmRlZENvbnRleHQgXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGVkQ29udGV4dE5hbWUgXG4gICAgICAqIEBwYXJhbSB7Q29yZX0gY29yZSBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gICAgICAqL1xuICAgICBjb25zdHJ1Y3RvciAoYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0LCBib3VuZGVkQ29udGV4dE5hbWUsIGNvcmUsIHBhdGgpIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5fYm91bmRlZENvbnRleHQgPSBib3VuZGVkQ29udGV4dDtcbiAgICAgICAgdGhpcy5fYm91bmRlZENvbnRleHROYW1lID0gYm91bmRlZENvbnRleHROYW1lO1xuICAgICAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG5cbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSBnZXREaXJlY3RvcnlQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLl9kb21haW5Gb2xkZXIgPSBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5fcm9vdFBhdGgsICdkb21haW4nKVswXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3JlYWRGb2xkZXIgPSBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5fcm9vdFBhdGgsICdyZWFkJylbMF0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9jb3JlRm9sZGVyID0gZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoKHRoaXMuX3Jvb3RQYXRoLCAnY29yZScpWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZXZlbnRGb2xkZXJzID0gZ2V0RXZlbnRzRm9sZGVyUGF0aHModGhpcy5fcm9vdFBhdGgsICdldmVudHMnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FydGlmYWN0cyA9IGdldEFydGlmYWN0c0Zyb21Db3JlKHRoaXMuY29yZUZvbGRlcik7XG4gICAgICAgIHRoaXMuX3RvcG9sb2d5ID0gZ2V0VG9wb2xvZ3lGcm9tQ29yZSh0aGlzLmNvcmVGb2xkZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0IGFydGlmYWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FydGlmYWN0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIEFwcGxpY2F0aW9uXG4gICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGVkQ29udGV4dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIG5hbWUgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBCb3VuZGVkIENvbnRleHQgbmFtZVxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRlZENvbnRleHROYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgY29yZSBjb25maWd1cmF0aW9uIFxuICAgICAgKiBAcmV0dXJucyB7Q29yZX1cbiAgICAgICovXG4gICAgZ2V0IGNvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbidzIHBhdGhcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBhdGggb2YgdGhlIHJvb3QgZm9sZGVyIG9mIHRoZSBib3VuZGVkIGNvbnRleHRcbiAgICAgKiBcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gXG4gICAgICovXG4gICAgZ2V0IHJvb3RQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge1RvcG9sb2d5fVxuICAgICAqL1xuICAgIGdldCB0b3BvbG9neSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvcG9sb2d5O1xuICAgIH1cblxuICAgIGdldCBkb21haW5Gb2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21haW5Gb2xkZXI7XG4gICAgfVxuICAgIGdldCByZWFkUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRGb2xkZXI7XG4gICAgfVxuICAgIGdldCBjb3JlRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29yZUZvbGRlcjtcbiAgICB9XG4gICAgZ2V0IGV2ZW50c0ZvbGRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEZvbGRlcnM7XG4gICAgfVxufSJdfQ==