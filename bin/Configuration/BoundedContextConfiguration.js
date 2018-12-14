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

var _application = new WeakMap();
var _boundedContext = new WeakMap();
var _boundedContextName = new WeakMap();
var _core = new WeakMap();
var _path = new WeakMap();
var _workspace = new WeakMap();
var _rootPath = new WeakMap();
var _domainFolder = new WeakMap();
var _readFolder = new WeakMap();
var _coreFolder = new WeakMap();
var _eventFolders = new WeakMap();
var _artifacts = new WeakMap();
var _topology = new WeakMap();

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

        _application.set(this, application);
        _boundedContext.set(this, boundedContext);
        _boundedContextName.set(this, boundedContextName);
        _core.set(this, core);
        _path.set(this, path);
        _workspace.set(this, workspace);

        _rootPath.set(this, (0, _helpers.getDirectoryPath)(path));
        _domainFolder.set(this, (0, _helpers.getArtifactFolderPath)(this.rootPath, 'domain')[0] || undefined);
        _readFolder.set(this, (0, _helpers.getArtifactFolderPath)(this.rootPath, 'read')[0] || undefined);
        _coreFolder.set(this, (0, _helpers.getArtifactFolderPath)(this.rootPath, 'core')[0] || undefined);
        _eventFolders.set(this, (0, _helpers.getEventsFolderPaths)(this.rootPath, 'events'));

        _artifacts.set(this, (0, _Artifacts.getArtifactsFromCore)(this.coreFolder));
        _topology.set(this, (0, _Topology.getTopologyFromCore)(this.coreFolder));
    }
    /**
     * 
     * @returns {Artifacts}
     */


    (0, _createClass3.default)(BoundedContextConfiguration, [{
        key: "artifacts",
        get: function get() {
            return _artifacts.get(this);
        }
        /**
          * Gets the application GUID
          * @returns {string} The GUID of the Application
          */

    }, {
        key: "application",
        get: function get() {
            return _application.get(this);
        }
        /**
          * Gets the bounded context GUID
          * @returns {string} The GUID of the bounded context
          */

    }, {
        key: "boundedContext",
        get: function get() {
            return _boundedContext.get(this);
        }
        /**
          * Gets the name of the bounded context
          * @returns {string} Bounded Context name
          */

    }, {
        key: "boundedContextName",
        get: function get() {
            return _boundedContextName.get(this);
        }
        /**
          * Gets the core configuration 
          * @returns {Core}
          */

    }, {
        key: "core",
        get: function get() {
            return _core.get(this);
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
            return _path.get(this);
        }
    }, {
        key: "workspace",
        get: function get() {
            return _workspace.get(this);
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
            return _rootPath.get(this);
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
            return _topology.get(this);
        }
    }, {
        key: "domainFolder",
        get: function get() {
            return _domainFolder.get(this);
        }
    }, {
        key: "readPath",
        get: function get() {
            return _readFolder.get(this);
        }
    }, {
        key: "coreFolder",
        get: function get() {
            return _coreFolder.get(this);
        }
    }, {
        key: "eventsFolders",
        get: function get() {
            return _eventFolders.get(this);
        }
    }]);
    return BoundedContextConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJnbG9iYWxzIiwiZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJ2c2NvZGUiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ1cmlzIiwibGVuZ3RoIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwidXJpIiwiZ2V0V29ya3NwYWNlRm9sZGVyIiwiZmlsZVBhdGgiLCJwYXRoIiwianNvbk9iaiIsImFwcGxpY2F0aW9uIiwiYm91bmRlZENvbnRleHQiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJjb3JlIiwiY29yZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJ1bmRlZmluZWQiLCJtc2ciLCJ3aW5kb3ciLCJzaG93RXJyb3JNZXNzYWdlIiwicHVzaCIsIkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiIsIkNvcmUiLCJsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucyIsInJlcXVpcmUiLCJfYXBwbGljYXRpb24iLCJXZWFrTWFwIiwiX2JvdW5kZWRDb250ZXh0IiwiX2JvdW5kZWRDb250ZXh0TmFtZSIsIl9jb3JlIiwiX3BhdGgiLCJfd29ya3NwYWNlIiwiX3Jvb3RQYXRoIiwiX2RvbWFpbkZvbGRlciIsIl9yZWFkRm9sZGVyIiwiX2NvcmVGb2xkZXIiLCJfZXZlbnRGb2xkZXJzIiwiX2FydGlmYWN0cyIsIl90b3BvbG9neSIsInNldCIsInJvb3RQYXRoIiwiY29yZUZvbGRlciIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7O3dGQUtPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEEsMENBQVFDLDRCQUFSLENBQXFDQyxVQUFyQyxDQUFnRCx3Q0FBaEQ7QUFERztBQUFBLCtCQUVjQyxPQUFPQyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQix5QkFBM0Is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QkFBT0osV0FBV0ssR0FBWCxDQUFlLElBQWYsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSWtCO0FBQ2QsbUJBQU9qQixhQUFhaUIsR0FBYixDQUFpQixJQUFqQixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJcUI7QUFDakIsbUJBQU9mLGdCQUFnQmUsR0FBaEIsQ0FBb0IsSUFBcEIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7NEJBSXlCO0FBQ3JCLG1CQUFPZCxvQkFBb0JjLEdBQXBCLENBQXdCLElBQXhCLENBQVA7QUFDSDtBQUNEOzs7Ozs7OzRCQUlXO0FBQ1AsbUJBQU9iLE1BQU1hLEdBQU4sQ0FBVSxJQUFWLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTVc7QUFDUCxtQkFBT1osTUFBTVksR0FBTixDQUFVLElBQVYsQ0FBUDtBQUNIOzs7NEJBQ2U7QUFDWixtQkFBT1gsV0FBV1csR0FBWCxDQUFlLElBQWYsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBT1YsVUFBVVUsR0FBVixDQUFjLElBQWQsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBT0osVUFBVUksR0FBVixDQUFjLElBQWQsQ0FBUDtBQUNIOzs7NEJBRWtCO0FBQ2YsbUJBQU9ULGNBQWNTLEdBQWQsQ0FBa0IsSUFBbEIsQ0FBUDtBQUNIOzs7NEJBQ2M7QUFDWCxtQkFBT1IsWUFBWVEsR0FBWixDQUFnQixJQUFoQixDQUFQO0FBQ0g7Ozs0QkFDZ0I7QUFDYixtQkFBT1AsWUFBWU8sR0FBWixDQUFnQixJQUFoQixDQUFQO0FBQ0g7Ozs0QkFDbUI7QUFDaEIsbUJBQU9OLGNBQWNNLEdBQWQsQ0FBa0IsSUFBbEIsQ0FBUDtBQUNIIiwiZmlsZSI6IkJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IENvcmUgfSBmcm9tIFwiLi9Db3JlXCI7XG5pbXBvcnQgeyByZWFkSnNvbkZyb21VcmlTeW5jLCBnZXREaXJlY3RvcnlQYXRoLCBnZXRBcnRpZmFjdEZvbGRlclBhdGgsIGdldEV2ZW50c0ZvbGRlclBhdGhzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IGdldEFydGlmYWN0c0Zyb21Db3JlLCBBcnRpZmFjdHMgfSBmcm9tIFwiLi9BcnRpZmFjdHNcIjtcbmltcG9ydCB7IGdldFRvcG9sb2d5RnJvbUNvcmUsIFRvcG9sb2d5IH0gZnJvbSBcIi4vVG9wb2xvZ3lcIjtcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuY29uc3QgdnNjb2RlID0gcmVxdWlyZSgndnNjb2RlJyk7XG4vKipcbiAqIExvYWRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnNcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCkge1xuICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9ucycpO1xuICAgIGxldCB1cmlzID0gYXdhaXQgdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2JvdW5kZWQtY29udGV4dC5qc29uJywgJyoqL25vZGVfbW9kdWxlcy8qKicpO1xuICAgIGlmICghdXJpcyB8fCB1cmlzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2JvdW5kZWQtY29udGV4dC5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG4gICAgICAgIHRocm93ICdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2JvdW5kZWQtY29udGV4dC5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICB9XG4gICAgbGV0IGJvdW5kZWRDb250ZXh0Q29uZmlncyA9IFtdO1xuICAgIGZvciAobGV0IHVyaSBvZiB1cmlzKSB7XG4gICAgICAgIGxldCB3b3Jrc3BhY2UgPSB2c2NvZGUud29ya3NwYWNlLmdldFdvcmtzcGFjZUZvbGRlcih1cmkpO1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHVyaS5wYXRoO1xuICAgICAgICBjb25zdCBqc29uT2JqID0gcmVhZEpzb25Gcm9tVXJpU3luYyh1cmkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBqc29uT2JqWydhcHBsaWNhdGlvbiddO1xuICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dCA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0J107XG4gICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0TmFtZSA9IGpzb25PYmpbJ2JvdW5kZWRDb250ZXh0TmFtZSddO1xuICAgICAgICBjb25zdCBjb3JlID0ganNvbk9ialsnY29yZSddO3VyaXNcbiAgICAgICAgY29uc3QgY29yZUxhbmd1YWdlID0gY29yZS5sYW5ndWFnZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXBwbGljYXRpb24gPT09IHVuZGVmaW5lZCB8fMKgYm91bmRlZENvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBib3VuZGVkQ29udGV4dE5hbWUgPT09IHVuZGVmaW5lZCB8fCBjb3JlTGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGBGb3VuZCBhbiBpbnZhbGlkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIGF0IHBhdGggJHtmaWxlUGF0aH1gO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgTG9hZGVkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIHdpdGggaWQgJyR7Ym91bmRlZENvbnRleHR9JyBhbmQgbmFtZSAnJHtib3VuZGVkQ29udGV4dE5hbWV9J2ApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvdW5kZWRDb250ZXh0Q29uZmlncy5wdXNoKG5ldyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24oYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0LCBib3VuZGVkQ29udGV4dE5hbWUsIG5ldyBDb3JlKGNvcmVMYW5ndWFnZSksIGZpbGVQYXRoLCB3b3Jrc3BhY2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib3VuZGVkQ29udGV4dENvbmZpZ3M7XG4gICAgICAgICAgICBcbiAgICAgICAgXG59XG5jb25zdCBfYXBwbGljYXRpb24gPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX2JvdW5kZWRDb250ZXh0ID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9ib3VuZGVkQ29udGV4dE5hbWUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX2NvcmUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX3BhdGggPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX3dvcmtzcGFjZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfcm9vdFBhdGggPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX2RvbWFpbkZvbGRlciA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfcmVhZEZvbGRlciA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfY29yZUZvbGRlciA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfZXZlbnRGb2xkZXJzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9hcnRpZmFjdHMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX3RvcG9sb2d5ID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjbGFzcyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAgKiBJbnN0YW50aWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQm91bmRlZENvbnRleHRcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uIFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYm91bmRlZENvbnRleHQgXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGVkQ29udGV4dE5hbWUgXG4gICAgICAqIEBwYXJhbSB7Q29yZX0gY29yZSBcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgICogQHBhcmFtIHt7aW5kZXg6IG51bWJlciwgbmFtZTogc3RyaW5nLCB1cmk6IGltcG9ydCgndnNjb2RlJykuVXJpfX0gd29ya3NwYWNlIFxuICAgICAgKi9cbiAgICAgY29uc3RydWN0b3IgKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dCwgYm91bmRlZENvbnRleHROYW1lLCBjb3JlLCBwYXRoLCB3b3Jrc3BhY2UpIHtcbiAgICAgICAgX2FwcGxpY2F0aW9uLnNldCh0aGlzLCBhcHBsaWNhdGlvbik7XG4gICAgICAgIF9ib3VuZGVkQ29udGV4dC5zZXQodGhpcywgYm91bmRlZENvbnRleHQpO1xuICAgICAgICBfYm91bmRlZENvbnRleHROYW1lLnNldCh0aGlzLCBib3VuZGVkQ29udGV4dE5hbWUpO1xuICAgICAgICBfY29yZS5zZXQodGhpcywgY29yZSk7XG4gICAgICAgIF9wYXRoLnNldCh0aGlzLCBwYXRoKTtcbiAgICAgICAgX3dvcmtzcGFjZS5zZXQodGhpcywgd29ya3NwYWNlKTtcblxuICAgICAgICBfcm9vdFBhdGguc2V0KHRoaXMsIGdldERpcmVjdG9yeVBhdGgocGF0aCkpO1xuICAgICAgICBfZG9tYWluRm9sZGVyLnNldCh0aGlzLCBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5yb290UGF0aCwgJ2RvbWFpbicpWzBdIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIF9yZWFkRm9sZGVyLnNldCh0aGlzLCBnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5yb290UGF0aCwgJ3JlYWQnKVswXSB8fCB1bmRlZmluZWQpO1xuICAgICAgICBfY29yZUZvbGRlci5zZXQodGhpcyxnZXRBcnRpZmFjdEZvbGRlclBhdGgodGhpcy5yb290UGF0aCwgJ2NvcmUnKVswXSB8fCB1bmRlZmluZWQpO1xuICAgICAgICBfZXZlbnRGb2xkZXJzLnNldCh0aGlzLCBnZXRFdmVudHNGb2xkZXJQYXRocyh0aGlzLnJvb3RQYXRoLCAnZXZlbnRzJykpO1xuICAgICAgICBcbiAgICAgICAgX2FydGlmYWN0cy5zZXQodGhpcywgZ2V0QXJ0aWZhY3RzRnJvbUNvcmUodGhpcy5jb3JlRm9sZGVyKSk7XG4gICAgICAgIF90b3BvbG9neS5zZXQodGhpcywgZ2V0VG9wb2xvZ3lGcm9tQ29yZSh0aGlzLmNvcmVGb2xkZXIpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHJldHVybnMge0FydGlmYWN0c31cbiAgICAgKi9cbiAgICBnZXQgYXJ0aWZhY3RzKCkge1xuICAgICAgICByZXR1cm4gX2FydGlmYWN0cy5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBHVUlEXG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBHVUlEIG9mIHRoZSBBcHBsaWNhdGlvblxuICAgICAgKi9cbiAgICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBfYXBwbGljYXRpb24uZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiBfYm91bmRlZENvbnRleHQuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgbmFtZSBvZiB0aGUgYm91bmRlZCBjb250ZXh0XG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEJvdW5kZWQgQ29udGV4dCBuYW1lXG4gICAgICAqL1xuICAgIGdldCBib3VuZGVkQ29udGV4dE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfYm91bmRlZENvbnRleHROYW1lLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGNvcmUgY29uZmlndXJhdGlvbiBcbiAgICAgICogQHJldHVybnMge0NvcmV9XG4gICAgICAqL1xuICAgIGdldCBjb3JlKCkge1xuICAgICAgICByZXR1cm4gX2NvcmUuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbidzIHBhdGhcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIF9wYXRoLmdldCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHdvcmtzcGFjZSgpIHtcbiAgICAgICAgcmV0dXJuIF93b3Jrc3BhY2UuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwYXRoIG9mIHRoZSByb290IGZvbGRlciBvZiB0aGUgYm91bmRlZCBjb250ZXh0XG4gICAgICogXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFxuICAgICAqL1xuICAgIGdldCByb290UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIF9yb290UGF0aC5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge1RvcG9sb2d5fVxuICAgICAqL1xuICAgIGdldCB0b3BvbG9neSgpIHtcbiAgICAgICAgcmV0dXJuIF90b3BvbG9neS5nZXQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRvbWFpbkZvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9kb21haW5Gb2xkZXIuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICBnZXQgcmVhZFBhdGgoKSB7XG4gICAgICAgIHJldHVybiBfcmVhZEZvbGRlci5nZXQodGhpcyk7XG4gICAgfVxuICAgIGdldCBjb3JlRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gX2NvcmVGb2xkZXIuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICBnZXQgZXZlbnRzRm9sZGVycygpIHtcbiAgICAgICAgcmV0dXJuIF9ldmVudEZvbGRlcnMuZ2V0KHRoaXMpO1xuICAgIH1cbn0iXX0=