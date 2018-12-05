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

                            console.log('Found application configuration at path: ' + filePath);
                            var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                            var applicationId = jsonObj['id'];
                            var applicationName = jsonObj['name'];
                            if (applicationId === undefined || applicationName === undefined) {
                                vscode.window.showErrorMessage('Found an invalid application configuration at path ' + filePath);
                            } else {
                                console.log('Loaded application configuration with id \'' + applicationId + '\' and name \'' + applicationName + '\'');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwidXJpIiwiZmlsZVBhdGgiLCJwYXRoIiwianNvbk9iaiIsImFwcGxpY2F0aW9uSWQiLCJhcHBsaWNhdGlvbk5hbWUiLCJ1bmRlZmluZWQiLCJBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJpZCIsIm5hbWUiLCJsb2FkQXBwbGljYXRpb25Db25maWd1cmF0aW9uIiwiYXBwbGljYXRpb24iLCJfYXBwbGljYXRpb24iLCJfcGF0aCIsIl9yb290UGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFLQTs7Ozs7O3dGQUtPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjs7O0FBR0hDLGdDQUFRQyxHQUFSLENBQVksbUNBQVo7QUFDQUgsK0JBQU9JLE1BQVAsQ0FBY0Msc0JBQWQsQ0FBcUMsbUNBQXJDOztBQUpHLHlEQU1JTCxPQUFPTSxTQUFQLENBQWlCQyxTQUFqQixDQUEyQixxQkFBM0IsRUFBa0Qsb0JBQWxELEVBQXdFLENBQXhFLEVBQ0ZDLElBREUsQ0FDRyxrQkFBVTtBQUNaLGdDQUFJLENBQUNDLE1BQUQsSUFBV0EsT0FBT0MsTUFBUCxJQUFpQixDQUFoQyxFQUFtQztBQUMvQlYsdUNBQU9JLE1BQVAsQ0FBY08sZ0JBQWQsQ0FBK0IseUNBQS9CO0FBQ0FULHdDQUFRVSxLQUFSLENBQWMsdUVBQWQ7O0FBRUEsc0NBQU0sdUVBQU47QUFDSDtBQUNELGdDQUFJSCxPQUFPQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CVix1Q0FBT0ksTUFBUCxDQUFjTyxnQkFBZCxDQUErQix5Q0FBL0I7QUFDQVQsd0NBQVFVLEtBQVIsQ0FBYyx3RUFBZDs7QUFFQSxzQ0FBTSx3RUFBTjtBQUNIOztBQUVELGdDQUFNQyxNQUFNSixPQUFPLENBQVAsQ0FBWjtBQUNBLGdDQUFNSyxXQUFXRCxJQUFJRSxJQUFyQjs7QUFFQWIsb0NBQVFDLEdBQVIsK0NBQXdEVyxRQUF4RDtBQUNBLGdDQUFNRSxVQUFVLGtDQUFvQkgsR0FBcEIsQ0FBaEI7O0FBRUEsZ0NBQU1JLGdCQUFnQkQsUUFBUSxJQUFSLENBQXRCO0FBQ0EsZ0NBQU1FLGtCQUFrQkYsUUFBUSxNQUFSLENBQXhCO0FBQ0EsZ0NBQUlDLGtCQUFrQkUsU0FBbEIsSUFBK0JELG9CQUFvQkMsU0FBdkQsRUFBa0U7QUFDOURuQix1Q0FBT0ksTUFBUCxDQUFjTyxnQkFBZCx5REFBcUZHLFFBQXJGO0FBQ0gsNkJBRkQsTUFFTztBQUNIWix3Q0FBUUMsR0FBUixpREFBeURjLGFBQXpELHNCQUFxRkMsZUFBckY7QUFDQSx1Q0FBTyxJQUFJRSx3QkFBSixDQUE2QixFQUFDQyxJQUFJSixhQUFMLEVBQW9CSyxNQUFNSixlQUExQixFQUE3QixFQUF5RUosUUFBekUsQ0FBUDtBQUNIO0FBQ0oseUJBN0JFLEVBNkJBLGlCQUFTO0FBQ1Isa0NBQU1GLEtBQU47QUFDSCx5QkEvQkUsQ0FOSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztvQkFBZVcsNEI7Ozs7O0FBWnRCOzs7O0lBb0RhSCx3QixXQUFBQSx3Qjs7QUFFVDs7Ozs7O0FBTUEsc0NBQWFJLFdBQWIsRUFBMEJULElBQTFCLEVBQWdDO0FBQUE7O0FBQzVCLGFBQUtVLFlBQUwsR0FBb0JELFdBQXBCO0FBQ0EsYUFBS0UsS0FBTCxHQUFhWCxJQUFiO0FBQ0EsYUFBS1ksU0FBTCxHQUFpQiwrQkFBaUJaLElBQWpCLENBQWpCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7NEJBTWlCO0FBQ2IsbUJBQU8sS0FBS1UsWUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs0QkFNVztBQUNQLG1CQUFPLEtBQUtDLEtBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTWM7QUFDVixtQkFBTyxLQUFLQyxTQUFaO0FBQ0giLCJmaWxlIjoiQXBwbGljYXRpb25Db25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEpzb25Gcm9tVXJpU3luYywgZ2V0RGlyZWN0b3J5UGF0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKlxuICogTG9hZHMgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbnMgZnJvbSB0aGUgY3VycmVudCB3b3Jrc3BhY2VcbiAqIEByZXR1cm5zIHtQcm9taXNlPEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbj59XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQXBwbGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuXG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuICAgIHZzY29kZS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZSgnTG9hZGluZyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJyk7XG5cbiAgICByZXR1cm4gdnNjb2RlLndvcmtzcGFjZS5maW5kRmlsZXMoJyoqL2FwcGxpY2F0aW9uLmpzb24nLCAnKiovbm9kZV9tb2R1bGVzLyoqJywgMilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnRXJyb3IgbG9hZGluZyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGRuXFwndCBmaW5kIGFueSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGRuXFwndCBmaW5kIGFueSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnRXJyb3IgbG9hZGluZyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm91bmQgbW9yZSB0aGFuIG9uZSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyAnRm91bmQgbW9yZSB0aGFuIG9uZSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdXJpID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSB1cmkucGF0aDtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gYXQgcGF0aDogJHtmaWxlUGF0aH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25PYmogPSByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uSWQgPSBqc29uT2JqWydpZCddO1xuICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb25OYW1lID0ganNvbk9ialsnbmFtZSddO1xuICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uSWQgPT09IHVuZGVmaW5lZCB8fMKgYXBwbGljYXRpb25OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoYEZvdW5kIGFuIGludmFsaWQgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBhdCBwYXRoICR7ZmlsZVBhdGh9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRlZCBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIHdpdGggaWQgJyR7YXBwbGljYXRpb25JZH0nIGFuZCBuYW1lICcke2FwcGxpY2F0aW9uTmFtZX0nYClcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih7aWQ6IGFwcGxpY2F0aW9uSWQsIG5hbWU6IGFwcGxpY2F0aW9uTmFtZX0sIGZpbGVQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcblxufVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSB7e2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ319IGFwcGxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggcGF0aFxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoYXBwbGljYXRpb24sIHBhdGgpIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuX3Jvb3RQYXRoID0gZ2V0RGlyZWN0b3J5UGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHt7aWQ6c3RyaW5nLCBuYW1lOnN0cmluZ319IFRoZSBwYXRoIHRvIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGZpbGVcbiAgICAgKi9cbiAgICBnZXQgYXBwbGljYXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJ3MgcGF0aFxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIGdldCByb290UGF0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XG4gICAgfVxufSJdfQ==