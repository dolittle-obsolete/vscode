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
        var vscode;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vscode = require('vscode');


                        console.log('Loading application configuration');
                        vscode.window.showInformationMessage('Loading application configuration');

                        return _context.abrupt('return', vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2).then(function (result) {
                            if (!result || result.length == 0) {
                                vscode.window.showErrorMessage('Error loading application configuration');
                                console.error('Couldn\'t find any \'application.json\' file in the current workspace');

                                throw 'Couldn\'t find any \'application.json\' file in the current workspace';
                            }
                            if (result.length > 1) {
                                vscode.window.showErrorMessage('Error loading application configuration');
                                console.error('Found more than one \'application.json\' file in the current workspace');

                                throw 'Found more than one \'application.json\' file in the current workspace';
                            }

                            var uri = result[0];
                            var filePath = uri.path;

                            console.log(filePath);
                            var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                            var applicationId = jsonObj['id'];
                            var applicationName = jsonObj['name'];
                            if (applicationId === undefined || applicationName === undefined) {
                                vscode.window.showErrorMessage('Found an invalid application configuration at path ' + filePath);
                            } else {
                                return new ApplicationConfiguration({ id: applicationId, name: applicationName }, filePath);
                            };
                        }, function (error) {
                            throw error;
                        }));

                    case 4:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwidXJpIiwiZmlsZVBhdGgiLCJwYXRoIiwianNvbk9iaiIsImFwcGxpY2F0aW9uSWQiLCJhcHBsaWNhdGlvbk5hbWUiLCJ1bmRlZmluZWQiLCJBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJpZCIsIm5hbWUiLCJsb2FkQXBwbGljYXRpb25Db25maWd1cmF0aW9uIiwiYXBwbGljYXRpb24iLCJfYXBwbGljYXRpb24iLCJfcGF0aCIsIl9yb290UGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFLQTs7Ozs7O3dGQUtPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjs7O0FBR0hDLGdDQUFRQyxHQUFSLENBQVksbUNBQVo7QUFDQUgsK0JBQU9JLE1BQVAsQ0FBY0Msc0JBQWQsQ0FBcUMsbUNBQXJDOztBQUpHLHlEQU1JTCxPQUFPTSxTQUFQLENBQWlCQyxTQUFqQixDQUEyQixxQkFBM0IsRUFBa0Qsb0JBQWxELEVBQXdFLENBQXhFLEVBQ0ZDLElBREUsQ0FDRyxrQkFBVTtBQUNaLGdDQUFJLENBQUNDLE1BQUQsSUFBV0EsT0FBT0MsTUFBUCxJQUFpQixDQUFoQyxFQUFtQztBQUMvQlYsdUNBQU9JLE1BQVAsQ0FBY08sZ0JBQWQsQ0FBK0IseUNBQS9CO0FBQ0FULHdDQUFRVSxLQUFSLENBQWMsdUVBQWQ7O0FBRUEsc0NBQU0sdUVBQU47QUFDSDtBQUNELGdDQUFJSCxPQUFPQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CVix1Q0FBT0ksTUFBUCxDQUFjTyxnQkFBZCxDQUErQix5Q0FBL0I7QUFDQVQsd0NBQVFVLEtBQVIsQ0FBYyx3RUFBZDs7QUFFQSxzQ0FBTSx3RUFBTjtBQUNIOztBQUVELGdDQUFNQyxNQUFNSixPQUFPLENBQVAsQ0FBWjtBQUNBLGdDQUFNSyxXQUFXRCxJQUFJRSxJQUFyQjs7QUFFQWIsb0NBQVFDLEdBQVIsQ0FBWVcsUUFBWjtBQUNBLGdDQUFNRSxVQUFVLGtDQUFvQkgsR0FBcEIsQ0FBaEI7O0FBRUEsZ0NBQU1JLGdCQUFnQkQsUUFBUSxJQUFSLENBQXRCO0FBQ0EsZ0NBQU1FLGtCQUFrQkYsUUFBUSxNQUFSLENBQXhCO0FBQ0EsZ0NBQUlDLGtCQUFrQkUsU0FBbEIsSUFBK0JELG9CQUFvQkMsU0FBdkQsRUFBa0U7QUFDOURuQix1Q0FBT0ksTUFBUCxDQUFjTyxnQkFBZCx5REFBcUZHLFFBQXJGO0FBQ0gsNkJBRkQsTUFFTztBQUNILHVDQUFPLElBQUlNLHdCQUFKLENBQTZCLEVBQUNDLElBQUlKLGFBQUwsRUFBb0JLLE1BQU1KLGVBQTFCLEVBQTdCLEVBQXlFSixRQUF6RSxDQUFQO0FBQ0g7QUFDSix5QkE1QkUsRUE0QkEsaUJBQVM7QUFDUixrQ0FBTUYsS0FBTjtBQUNILHlCQTlCRSxDQU5KOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7O29CQUFlVyw0Qjs7Ozs7QUFadEI7Ozs7SUFtRGFILHdCLFdBQUFBLHdCOztBQUVUOzs7Ozs7QUFNQSxzQ0FBYUksV0FBYixFQUEwQlQsSUFBMUIsRUFBZ0M7QUFBQTs7QUFDNUIsYUFBS1UsWUFBTCxHQUFvQkQsV0FBcEI7QUFDQSxhQUFLRSxLQUFMLEdBQWFYLElBQWI7QUFDQSxhQUFLWSxTQUFMLEdBQWlCLCtCQUFpQlosSUFBakIsQ0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs0QkFNaUI7QUFDYixtQkFBTyxLQUFLVSxZQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1XO0FBQ1AsbUJBQU8sS0FBS0MsS0FBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs0QkFNYztBQUNWLG1CQUFPLEtBQUtDLFNBQVo7QUFDSCIsImZpbGUiOiJBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkSnNvbkZyb21VcmlTeW5jLCBnZXREaXJlY3RvcnlQYXRoIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBMb2FkcyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9ucyBmcm9tIHRoZSBjdXJyZW50IHdvcmtzcGFjZVxuICogQHJldHVybnMge1Byb21pc2U8QXBwbGljYXRpb25Db25maWd1cmF0aW9uPn1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgY29uc3QgdnNjb2RlID0gcmVxdWlyZSgndnNjb2RlJyk7XG5cbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJyk7XG4gICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdMb2FkaW5nIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24nKTtcblxuICAgIHJldHVybiB2c2NvZGUud29ya3NwYWNlLmZpbmRGaWxlcygnKiovYXBwbGljYXRpb24uanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBsb2FkaW5nIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2FwcGxpY2F0aW9uLmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnKTtcblxuICAgICAgICAgICAgICAgIHRocm93ICdDb3VsZG5cXCd0IGZpbmQgYW55IFxcJ2FwcGxpY2F0aW9uLmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBsb2FkaW5nIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3VuZCBtb3JlIHRoYW4gb25lIFxcJ2FwcGxpY2F0aW9uLmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnKTtcblxuICAgICAgICAgICAgICAgIHRocm93ICdGb3VuZCBtb3JlIHRoYW4gb25lIFxcJ2FwcGxpY2F0aW9uLmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB1cmkgPSByZXN1bHRbMF07XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHVyaS5wYXRoO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlUGF0aCk7XG4gICAgICAgICAgICBjb25zdCBqc29uT2JqID0gcmVhZEpzb25Gcm9tVXJpU3luYyh1cmkpO1xuXG4gICAgICAgICAgICBjb25zdCBhcHBsaWNhdGlvbklkID0ganNvbk9ialsnaWQnXTtcbiAgICAgICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uTmFtZSA9IGpzb25PYmpbJ25hbWUnXTtcbiAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbklkID09PSB1bmRlZmluZWQgfHzCoGFwcGxpY2F0aW9uTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKGBGb3VuZCBhbiBpbnZhbGlkIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXBwbGljYXRpb25Db25maWd1cmF0aW9uKHtpZDogYXBwbGljYXRpb25JZCwgbmFtZTogYXBwbGljYXRpb25OYW1lfSwgZmlsZVBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuXG59XG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uXG4gICAgICogQHBhcmFtIHt7aWQ6IHN0cmluZywgbmFtZTogc3RyaW5nfX0gYXBwbGljYXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBwYXRoXG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChhcHBsaWNhdGlvbiwgcGF0aCkge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSBnZXREaXJlY3RvcnlQYXRoKHBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3tpZDpzdHJpbmcsIG5hbWU6c3RyaW5nfX0gVGhlIHBhdGggdG8gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24ncyBwYXRoXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhcHBsaWNhdGlvblxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCB0byB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBmaWxlXG4gICAgICovXG4gICAgZ2V0IHJvb3RQYXRoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb290UGF0aDtcbiAgICB9XG59Il19