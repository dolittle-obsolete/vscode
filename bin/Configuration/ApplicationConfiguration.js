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
var ApplicationConfiguration = exports.ApplicationConfiguration = function () {

    /**
     *Creates an instance of ApplicationConfiguration.
     * @param {{id: string, name: string}} application
     * @param {string} path path
     * @memberof ApplicationConfiguration
     */
    function ApplicationConfiguration(application, path) {
        (0, _classCallCheck3.default)(this, ApplicationConfiguration);

        this._application = application;
        this._path = path;
        this._rootPath = (0, _helpers.getDirectoryPath)(path);
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
            return this._application;
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
            return this._path;
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
            return this._rootPath;
        }
    }]);
    return ApplicationConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJnbG9iYWxzIiwiZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJ2c2NvZGUiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ1cmlzIiwibGVuZ3RoIiwiYXBwbGljYXRpb25VcmkiLCJmaWxlUGF0aCIsInBhdGgiLCJqc29uT2JqIiwiYXBwbGljYXRpb25JZCIsImFwcGxpY2F0aW9uTmFtZSIsInVuZGVmaW5lZCIsIkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiIsImlkIiwibmFtZSIsImxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXBwbGljYXRpb24iLCJfYXBwbGljYXRpb24iLCJfcGF0aCIsIl9yb290UGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7QUFLQTs7Ozs7O3dGQUtPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQSwwQ0FBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLENBQWdELG1DQUFoRDs7QUFERztBQUFBLCtCQUdjQyxPQUFPQyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQixxQkFBM0IsRUFBa0Qsb0JBQWxELEVBQXdFLENBQXhFLENBSGQ7O0FBQUE7QUFHQ0MsNEJBSEQ7O0FBQUEsOEJBSUMsQ0FBQ0EsSUFBRCxJQUFTQSxLQUFLQyxNQUFMLElBQWUsQ0FKekI7QUFBQTtBQUFBO0FBQUE7O0FBS0NQLDBDQUFRQyw0QkFBUixDQUFxQ0MsVUFBckMsQ0FBZ0QsdUVBQWhEO0FBTEQsOEJBTU8sdUVBTlA7O0FBQUE7QUFBQSw4QkFRQ0ksS0FBS0MsTUFBTCxHQUFjLENBUmY7QUFBQTtBQUFBO0FBQUE7O0FBU0NQLDBDQUFRQyw0QkFBUixDQUFxQ0MsVUFBckMsQ0FBZ0Qsd0VBQWhEO0FBVEQsOEJBVU8sd0VBVlA7O0FBQUE7QUFhR00sc0NBYkgsR0Fhb0JGLEtBQUssQ0FBTCxDQWJwQjtBQWNHRyxnQ0FkSCxHQWNjRCxlQUFlRSxJQWQ3QjtBQWdCR0MsK0JBaEJILEdBZ0JhLGtDQUFvQkgsY0FBcEIsQ0FoQmI7QUFrQkdJLHFDQWxCSCxHQWtCbUJELFFBQVEsSUFBUixDQWxCbkI7QUFtQkdFLHVDQW5CSCxHQW1CcUJGLFFBQVEsTUFBUixDQW5CckI7O0FBQUEsOEJBb0JDQyxrQkFBa0JFLFNBQWxCLElBQStCRCxvQkFBb0JDLFNBcEJwRDtBQUFBO0FBQUE7QUFBQTs7QUFxQkNkLDBDQUFRQyw0QkFBUixDQUFxQ0MsVUFBckMseURBQXNHTyxRQUF0RztBQXJCRDtBQUFBOztBQUFBO0FBdUJDVCwwQ0FBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLGlEQUE2RlUsYUFBN0Ysc0JBQXlIQyxlQUF6SDtBQXZCRCx5REF3QlEsSUFBSUUsd0JBQUosQ0FBNkIsRUFBQ0MsSUFBSUosYUFBTCxFQUFvQkssTUFBTUosZUFBMUIsRUFBN0IsRUFBeUVKLFFBQXpFLENBeEJSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7O29CQUFlUyw0Qjs7Ozs7QUFkdEI7O0FBQ0E7Ozs7OztBQUVBLElBQU1mLFNBQVNnQixRQUFRLFFBQVIsQ0FBZjtJQXVDYUosd0IsV0FBQUEsd0I7O0FBRVQ7Ozs7OztBQU1BLHNDQUFhSyxXQUFiLEVBQTBCVixJQUExQixFQUFnQztBQUFBOztBQUM1QixhQUFLVyxZQUFMLEdBQW9CRCxXQUFwQjtBQUNBLGFBQUtFLEtBQUwsR0FBYVosSUFBYjtBQUNBLGFBQUthLFNBQUwsR0FBaUIsK0JBQWlCYixJQUFqQixDQUFqQjtBQUNIOztBQUVEOzs7Ozs7Ozs7OzRCQU1pQjtBQUNiLG1CQUFPLEtBQUtXLFlBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTVc7QUFDUCxtQkFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1jO0FBQ1YsbUJBQU8sS0FBS0MsU0FBWjtBQUNIIiwiZmlsZSI6IkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMsIGdldERpcmVjdG9yeVBhdGggfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuXG5jb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBMb2FkcyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9ucyBmcm9tIHRoZSBjdXJyZW50IHdvcmtzcGFjZVxuICogQHJldHVybnMge1Byb21pc2U8QXBwbGljYXRpb25Db25maWd1cmF0aW9uPn1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0xvYWRpbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuICAgIFxuICAgIGxldCB1cmlzID0gYXdhaXQgdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2FwcGxpY2F0aW9uLmpzb24nLCAnKiovbm9kZV9tb2R1bGVzLyoqJywgMik7XG4gICAgaWYgKCF1cmlzIHx8IHVyaXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuICAgICAgICB0aHJvdyAnQ291bGRuXFwndCBmaW5kIGFueSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICB9XG4gICAgaWYgKHVyaXMubGVuZ3RoID4gMSkge1xuICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnRm91bmQgbW9yZSB0aGFuIG9uZSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG4gICAgICAgIHRocm93ICdGb3VuZCBtb3JlIHRoYW4gb25lIFxcJ2FwcGxpY2F0aW9uLmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhcHBsaWNhdGlvblVyaSA9IHVyaXNbMF07XG4gICAgY29uc3QgZmlsZVBhdGggPSBhcHBsaWNhdGlvblVyaS5wYXRoO1xuXG4gICAgY29uc3QganNvbk9iaiA9IHJlYWRKc29uRnJvbVVyaVN5bmMoYXBwbGljYXRpb25VcmkpO1xuXG4gICAgY29uc3QgYXBwbGljYXRpb25JZCA9IGpzb25PYmpbJ2lkJ107XG4gICAgY29uc3QgYXBwbGljYXRpb25OYW1lID0ganNvbk9ialsnbmFtZSddO1xuICAgIGlmIChhcHBsaWNhdGlvbklkID09PSB1bmRlZmluZWQgfHzCoGFwcGxpY2F0aW9uTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBGb3VuZCBhbiBpbnZhbGlkIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBMb2FkZWQgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiB3aXRoIGlkICcke2FwcGxpY2F0aW9uSWR9JyBhbmQgbmFtZSAnJHthcHBsaWNhdGlvbk5hbWV9J2ApO1xuICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih7aWQ6IGFwcGxpY2F0aW9uSWQsIG5hbWU6IGFwcGxpY2F0aW9uTmFtZX0sIGZpbGVQYXRoKTtcbiAgICB9XG5cbn1cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24ge1xuXG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3tpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmd9fSBhcHBsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHBhdGhcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGFwcGxpY2F0aW9uLCBwYXRoKSB7XG4gICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9yb290UGF0aCA9IGdldERpcmVjdG9yeVBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvblxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7e2lkOnN0cmluZywgbmFtZTpzdHJpbmd9fSBUaGUgcGF0aCB0byB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBmaWxlXG4gICAgICovXG4gICAgZ2V0IGFwcGxpY2F0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbidzIHBhdGhcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGFwcGxpY2F0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGZpbGVcbiAgICAgKi9cbiAgICBnZXQgcm9vdFBhdGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3RQYXRoO1xuICAgIH1cbn0iXX0=