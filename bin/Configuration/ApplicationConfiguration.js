'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationConfiguration = exports.loadApplicationConfiguration = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Loads application configurations from the current workspace
 * @returns {Promise<ApplicationConfiguration>}
 * @export
 */
var loadApplicationConfiguration = exports.loadApplicationConfiguration = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var uris, applicationUri, filePath, jsonObj, applicationId, applicationName;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _globals2.default.dolittleProjectOutputChannel.appendLine('Loading application configuration');

                        _context.next = 3;
                        return vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2);

                    case 3:
                        uris = _context.sent;

                        if (!(!uris || uris.length == 0)) {
                            _context.next = 7;
                            break;
                        }

                        _globals2.default.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'application.json\' file in the current workspace');
                        throw 'Couldn\'t find any \'application.json\' file in the current workspace';

                    case 7:
                        if (!(uris.length > 1)) {
                            _context.next = 10;
                            break;
                        }

                        _globals2.default.dolittleProjectOutputChannel.appendLine('Found more than one \'application.json\' file in the current workspace');
                        throw 'Found more than one \'application.json\' file in the current workspace';

                    case 10:
                        applicationUri = uris[0];
                        filePath = applicationUri.path;
                        jsonObj = (0, _helpers.readJsonFromUriSync)(applicationUri);
                        applicationId = jsonObj['id'];
                        applicationName = jsonObj['name'];

                        if (!(applicationId === undefined || applicationName === undefined)) {
                            _context.next = 19;
                            break;
                        }

                        _globals2.default.dolittleProjectOutputChannel.appendLine('Found an invalid application configuration at path ' + filePath);
                        _context.next = 21;
                        break;

                    case 19:
                        _globals2.default.dolittleProjectOutputChannel.appendLine('Loaded application configuration with id \'' + applicationId + '\' and name \'' + applicationName + '\'');
                        return _context.abrupt('return', new ApplicationConfiguration({ id: applicationId, name: applicationName }, filePath));

                    case 21:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadApplicationConfiguration() {
        return _ref.apply(this, arguments);
    };
}();

var _helpers = require('../helpers');

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vscode = require('vscode');
var _application = new WeakMap();
var _path = new WeakMap();
var _rootPath = new WeakMap();

var ApplicationConfiguration = exports.ApplicationConfiguration = function () {

    /**
     *Creates an instance of ApplicationConfiguration.
     * @param {{id: string, name: string}} application
     * @param {string} path path
     * @memberof ApplicationConfiguration
     */
    function ApplicationConfiguration(application, path) {
        (0, _classCallCheck3.default)(this, ApplicationConfiguration);

        _application.set(this, application);
        _path.set(this, path);
        _rootPath.set(this, (0, _helpers.getDirectoryPath)(path));
    }

    /**
     * Gets the application configuration
     * @readonly
     * @memberof ApplicationConfiguration
     * @returns {{id:string, name:string}} The path to the application configuration file
     */


    (0, _createClass3.default)(ApplicationConfiguration, [{
        key: 'application',
        get: function get() {
            return _application.get(this);
        }
        /**
         * Gets the application configuration's path
         * @readonly
         * @memberof ApplicationConfiguration
         * @returns {string}
         */

    }, {
        key: 'path',
        get: function get() {
            return _path.get(this);
        }
        /**
         * Get the root directory of the application
         * @readonly
         * @memberof ApplicationConfiguration
         * @returns {string} The path to the application configuration file
         */

    }, {
        key: 'rootPath',
        get: function get() {
            return _rootPath.get(this);
        }
    }]);
    return ApplicationConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJnbG9iYWxzIiwiZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJ2c2NvZGUiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ1cmlzIiwibGVuZ3RoIiwiYXBwbGljYXRpb25VcmkiLCJmaWxlUGF0aCIsInBhdGgiLCJqc29uT2JqIiwiYXBwbGljYXRpb25JZCIsImFwcGxpY2F0aW9uTmFtZSIsInVuZGVmaW5lZCIsIkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiIsImlkIiwibmFtZSIsImxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiX2FwcGxpY2F0aW9uIiwiV2Vha01hcCIsIl9wYXRoIiwiX3Jvb3RQYXRoIiwiYXBwbGljYXRpb24iLCJzZXQiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7O0FBS0E7Ozs7Ozt3RkFLTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEEsMENBQVFDLDRCQUFSLENBQXFDQyxVQUFyQyxDQUFnRCxtQ0FBaEQ7O0FBREc7QUFBQSwrQkFHY0MsT0FBT0MsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkIscUJBQTNCLEVBQWtELG9CQUFsRCxFQUF3RSxDQUF4RSxDQUhkOztBQUFBO0FBR0NDLDRCQUhEOztBQUFBLDhCQUlDLENBQUNBLElBQUQsSUFBU0EsS0FBS0MsTUFBTCxJQUFlLENBSnpCO0FBQUE7QUFBQTtBQUFBOztBQUtDUCwwQ0FBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLENBQWdELHVFQUFoRDtBQUxELDhCQU1PLHVFQU5QOztBQUFBO0FBQUEsOEJBUUNJLEtBQUtDLE1BQUwsR0FBYyxDQVJmO0FBQUE7QUFBQTtBQUFBOztBQVNDUCwwQ0FBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLENBQWdELHdFQUFoRDtBQVRELDhCQVVPLHdFQVZQOztBQUFBO0FBYUdNLHNDQWJILEdBYW9CRixLQUFLLENBQUwsQ0FicEI7QUFjR0csZ0NBZEgsR0FjY0QsZUFBZUUsSUFkN0I7QUFnQkdDLCtCQWhCSCxHQWdCYSxrQ0FBb0JILGNBQXBCLENBaEJiO0FBa0JHSSxxQ0FsQkgsR0FrQm1CRCxRQUFRLElBQVIsQ0FsQm5CO0FBbUJHRSx1Q0FuQkgsR0FtQnFCRixRQUFRLE1BQVIsQ0FuQnJCOztBQUFBLDhCQW9CQ0Msa0JBQWtCRSxTQUFsQixJQUErQkQsb0JBQW9CQyxTQXBCcEQ7QUFBQTtBQUFBO0FBQUE7O0FBcUJDZCwwQ0FBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLHlEQUFzR08sUUFBdEc7QUFyQkQ7QUFBQTs7QUFBQTtBQXVCQ1QsMENBQVFDLDRCQUFSLENBQXFDQyxVQUFyQyxpREFBNkZVLGFBQTdGLHNCQUF5SEMsZUFBekg7QUF2QkQseURBd0JRLElBQUlFLHdCQUFKLENBQTZCLEVBQUNDLElBQUlKLGFBQUwsRUFBb0JLLE1BQU1KLGVBQTFCLEVBQTdCLEVBQXlFSixRQUF6RSxDQXhCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztvQkFBZVMsNEI7Ozs7O0FBZHRCOztBQUNBOzs7Ozs7QUFFQSxJQUFNZixTQUFTZ0IsUUFBUSxRQUFSLENBQWY7QUF1Q0EsSUFBTUMsZUFBZSxJQUFJQyxPQUFKLEVBQXJCO0FBQ0EsSUFBTUMsUUFBUSxJQUFJRCxPQUFKLEVBQWQ7QUFDQSxJQUFNRSxZQUFZLElBQUlGLE9BQUosRUFBbEI7O0lBQ2FOLHdCLFdBQUFBLHdCOztBQUVUOzs7Ozs7QUFNQSxzQ0FBYVMsV0FBYixFQUEwQmQsSUFBMUIsRUFBZ0M7QUFBQTs7QUFDNUJVLHFCQUFhSyxHQUFiLENBQWlCLElBQWpCLEVBQXNCRCxXQUF0QjtBQUNBRixjQUFNRyxHQUFOLENBQVUsSUFBVixFQUFnQmYsSUFBaEI7QUFDQWEsa0JBQVVFLEdBQVYsQ0FBYyxJQUFkLEVBQW9CLCtCQUFpQmYsSUFBakIsQ0FBcEI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs0QkFNaUI7QUFDYixtQkFBT1UsYUFBYU0sR0FBYixDQUFpQixJQUFqQixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1XO0FBQ1AsbUJBQU9KLE1BQU1JLEdBQU4sQ0FBVSxJQUFWLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTWM7QUFDVixtQkFBT0gsVUFBVUcsR0FBVixDQUFjLElBQWQsQ0FBUDtBQUNIIiwiZmlsZSI6IkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMsIGdldERpcmVjdG9yeVBhdGggfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuXG5jb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBMb2FkcyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9ucyBmcm9tIHRoZSBjdXJyZW50IHdvcmtzcGFjZVxuICogQHJldHVybnMge1Byb21pc2U8QXBwbGljYXRpb25Db25maWd1cmF0aW9uPn1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0xvYWRpbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuICAgIFxuICAgIGxldCB1cmlzID0gYXdhaXQgdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2FwcGxpY2F0aW9uLmpzb24nLCAnKiovbm9kZV9tb2R1bGVzLyoqJywgMik7XG4gICAgaWYgKCF1cmlzIHx8IHVyaXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuICAgICAgICB0aHJvdyAnQ291bGRuXFwndCBmaW5kIGFueSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICB9XG4gICAgaWYgKHVyaXMubGVuZ3RoID4gMSkge1xuICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnRm91bmQgbW9yZSB0aGFuIG9uZSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG4gICAgICAgIHRocm93ICdGb3VuZCBtb3JlIHRoYW4gb25lIFxcJ2FwcGxpY2F0aW9uLmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhcHBsaWNhdGlvblVyaSA9IHVyaXNbMF07XG4gICAgY29uc3QgZmlsZVBhdGggPSBhcHBsaWNhdGlvblVyaS5wYXRoO1xuXG4gICAgY29uc3QganNvbk9iaiA9IHJlYWRKc29uRnJvbVVyaVN5bmMoYXBwbGljYXRpb25VcmkpO1xuXG4gICAgY29uc3QgYXBwbGljYXRpb25JZCA9IGpzb25PYmpbJ2lkJ107XG4gICAgY29uc3QgYXBwbGljYXRpb25OYW1lID0ganNvbk9ialsnbmFtZSddO1xuICAgIGlmIChhcHBsaWNhdGlvbklkID09PSB1bmRlZmluZWQgfHzCoGFwcGxpY2F0aW9uTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBGb3VuZCBhbiBpbnZhbGlkIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBMb2FkZWQgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiB3aXRoIGlkICcke2FwcGxpY2F0aW9uSWR9JyBhbmQgbmFtZSAnJHthcHBsaWNhdGlvbk5hbWV9J2ApO1xuICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih7aWQ6IGFwcGxpY2F0aW9uSWQsIG5hbWU6IGFwcGxpY2F0aW9uTmFtZX0sIGZpbGVQYXRoKTtcbiAgICB9XG5cbn1cbmNvbnN0IF9hcHBsaWNhdGlvbiA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfcGF0aCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfcm9vdFBhdGggPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSB7e2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ319IGFwcGxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggcGF0aFxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoYXBwbGljYXRpb24sIHBhdGgpIHtcbiAgICAgICAgX2FwcGxpY2F0aW9uLnNldCh0aGlzLGFwcGxpY2F0aW9uKTtcbiAgICAgICAgX3BhdGguc2V0KHRoaXMsIHBhdGgpO1xuICAgICAgICBfcm9vdFBhdGguc2V0KHRoaXMsIGdldERpcmVjdG9yeVBhdGgocGF0aCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3tpZDpzdHJpbmcsIG5hbWU6c3RyaW5nfX0gVGhlIHBhdGggdG8gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpe1xuICAgICAgICByZXR1cm4gX2FwcGxpY2F0aW9uLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbidzIHBhdGhcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIF9wYXRoLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIGdldCByb290UGF0aCgpe1xuICAgICAgICByZXR1cm4gX3Jvb3RQYXRoLmdldCh0aGlzKTtcbiAgICB9XG59Il19