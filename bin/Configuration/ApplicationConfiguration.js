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


                        _globals2.default.dolittleProjectOutputChannel.appendLine('Loading application configuration');
                        vscode.window.showInformationMessage('Loading application configuration');

                        return _context.abrupt('return', vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2).then(function (result) {
                            if (!result || result.length == 0) {
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Couldn\'t find any \'application.json\' file in the current workspace');

                                throw 'Couldn\'t find any \'application.json\' file in the current workspace';
                            }
                            if (result.length > 1) {
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Found more than one \'application.json\' file in the current workspace');

                                throw 'Found more than one \'application.json\' file in the current workspace';
                            }

                            var uri = result[0];
                            var filePath = uri.path;

                            var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                            var applicationId = jsonObj['id'];
                            var applicationName = jsonObj['name'];
                            if (applicationId === undefined || applicationName === undefined) {
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Found an invalid application configuration at path ' + filePath);
                            } else {
                                _globals2.default.dolittleProjectOutputChannel.appendLine('Loaded application configuration with id \'' + applicationId + '\' and name \'' + applicationName + '\'');
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

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiZ2xvYmFscyIsImRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwiLCJhcHBlbmRMaW5lIiwid2luZG93Iiwic2hvd0luZm9ybWF0aW9uTWVzc2FnZSIsIndvcmtzcGFjZSIsImZpbmRGaWxlcyIsInRoZW4iLCJyZXN1bHQiLCJsZW5ndGgiLCJ1cmkiLCJmaWxlUGF0aCIsInBhdGgiLCJqc29uT2JqIiwiYXBwbGljYXRpb25JZCIsImFwcGxpY2F0aW9uTmFtZSIsInVuZGVmaW5lZCIsIkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiIsImlkIiwibmFtZSIsImVycm9yIiwibG9hZEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiIsImFwcGxpY2F0aW9uIiwiX2FwcGxpY2F0aW9uIiwiX3BhdGgiLCJfcm9vdFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7O0FBS0E7Ozs7Ozt3RkFLTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0EsOEJBREgsR0FDWUMsUUFBUSxRQUFSLENBRFo7OztBQUdIQywwQ0FBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLENBQWdELG1DQUFoRDtBQUNBSiwrQkFBT0ssTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyxtQ0FBckM7O0FBSkcseURBTUlOLE9BQU9PLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCLHFCQUEzQixFQUFrRCxvQkFBbEQsRUFBd0UsQ0FBeEUsRUFDRkMsSUFERSxDQUNHLGtCQUFVO0FBQ1osZ0NBQUksQ0FBQ0MsTUFBRCxJQUFXQSxPQUFPQyxNQUFQLElBQWlCLENBQWhDLEVBQW1DO0FBQy9CVCxrREFBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLENBQWdELHVFQUFoRDs7QUFFQSxzQ0FBTSx1RUFBTjtBQUNIO0FBQ0QsZ0NBQUlNLE9BQU9DLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJULGtEQUFRQyw0QkFBUixDQUFxQ0MsVUFBckMsQ0FBZ0Qsd0VBQWhEOztBQUVBLHNDQUFNLHdFQUFOO0FBQ0g7O0FBRUQsZ0NBQU1RLE1BQU1GLE9BQU8sQ0FBUCxDQUFaO0FBQ0EsZ0NBQU1HLFdBQVdELElBQUlFLElBQXJCOztBQUVBLGdDQUFNQyxVQUFVLGtDQUFvQkgsR0FBcEIsQ0FBaEI7O0FBRUEsZ0NBQU1JLGdCQUFnQkQsUUFBUSxJQUFSLENBQXRCO0FBQ0EsZ0NBQU1FLGtCQUFrQkYsUUFBUSxNQUFSLENBQXhCO0FBQ0EsZ0NBQUlDLGtCQUFrQkUsU0FBbEIsSUFBK0JELG9CQUFvQkMsU0FBdkQsRUFBa0U7QUFDOURoQixrREFBUUMsNEJBQVIsQ0FBcUNDLFVBQXJDLHlEQUFzR1MsUUFBdEc7QUFDSCw2QkFGRCxNQUVPO0FBQ0hYLGtEQUFRQyw0QkFBUixDQUFxQ0MsVUFBckMsaURBQTZGWSxhQUE3RixzQkFBeUhDLGVBQXpIO0FBQ0EsdUNBQU8sSUFBSUUsd0JBQUosQ0FBNkIsRUFBQ0MsSUFBSUosYUFBTCxFQUFvQkssTUFBTUosZUFBMUIsRUFBN0IsRUFBeUVKLFFBQXpFLENBQVA7QUFDSDtBQUNKLHlCQTFCRSxFQTBCQSxpQkFBUztBQUNSLGtDQUFNUyxLQUFOO0FBQ0gseUJBNUJFLENBTko7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7b0JBQWVDLDRCOzs7OztBQWJ0Qjs7QUFDQTs7Ozs7O0lBaURhSix3QixXQUFBQSx3Qjs7QUFFVDs7Ozs7O0FBTUEsc0NBQWFLLFdBQWIsRUFBMEJWLElBQTFCLEVBQWdDO0FBQUE7O0FBQzVCLGFBQUtXLFlBQUwsR0FBb0JELFdBQXBCO0FBQ0EsYUFBS0UsS0FBTCxHQUFhWixJQUFiO0FBQ0EsYUFBS2EsU0FBTCxHQUFpQiwrQkFBaUJiLElBQWpCLENBQWpCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7NEJBTWlCO0FBQ2IsbUJBQU8sS0FBS1csWUFBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs0QkFNVztBQUNQLG1CQUFPLEtBQUtDLEtBQVo7QUFDSDtBQUNEOzs7Ozs7Ozs7NEJBTWM7QUFDVixtQkFBTyxLQUFLQyxTQUFaO0FBQ0giLCJmaWxlIjoiQXBwbGljYXRpb25Db25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEpzb25Gcm9tVXJpU3luYywgZ2V0RGlyZWN0b3J5UGF0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBMb2FkcyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9ucyBmcm9tIHRoZSBjdXJyZW50IHdvcmtzcGFjZVxuICogQHJldHVybnMge1Byb21pc2U8QXBwbGljYXRpb25Db25maWd1cmF0aW9uPn1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgY29uc3QgdnNjb2RlID0gcmVxdWlyZSgndnNjb2RlJyk7XG5cbiAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnTG9hZGluZyBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJyk7XG4gICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdMb2FkaW5nIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24nKTtcblxuICAgIHJldHVybiB2c2NvZGUud29ya3NwYWNlLmZpbmRGaWxlcygnKiovYXBwbGljYXRpb24uanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnRm91bmQgbW9yZSB0aGFuIG9uZSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJyk7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyAnRm91bmQgbW9yZSB0aGFuIG9uZSBcXCdhcHBsaWNhdGlvbi5qc29uXFwnIGZpbGUgaW4gdGhlIGN1cnJlbnQgd29ya3NwYWNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdXJpID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSB1cmkucGF0aDtcblxuICAgICAgICAgICAgY29uc3QganNvbk9iaiA9IHJlYWRKc29uRnJvbVVyaVN5bmModXJpKTtcblxuICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb25JZCA9IGpzb25PYmpbJ2lkJ107XG4gICAgICAgICAgICBjb25zdCBhcHBsaWNhdGlvbk5hbWUgPSBqc29uT2JqWyduYW1lJ107XG4gICAgICAgICAgICBpZiAoYXBwbGljYXRpb25JZCA9PT0gdW5kZWZpbmVkIHx8wqBhcHBsaWNhdGlvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBGb3VuZCBhbiBpbnZhbGlkIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gYXQgcGF0aCAke2ZpbGVQYXRofWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShgTG9hZGVkIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gd2l0aCBpZCAnJHthcHBsaWNhdGlvbklkfScgYW5kIG5hbWUgJyR7YXBwbGljYXRpb25OYW1lfSdgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih7aWQ6IGFwcGxpY2F0aW9uSWQsIG5hbWU6IGFwcGxpY2F0aW9uTmFtZX0sIGZpbGVQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcblxufVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSB7e2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ319IGFwcGxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggcGF0aFxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoYXBwbGljYXRpb24sIHBhdGgpIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuX3Jvb3RQYXRoID0gZ2V0RGlyZWN0b3J5UGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHt7aWQ6c3RyaW5nLCBuYW1lOnN0cmluZ319IFRoZSBwYXRoIHRvIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGZpbGVcbiAgICAgKi9cbiAgICBnZXQgYXBwbGljYXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uJ3MgcGF0aFxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIGdldCByb290UGF0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XG4gICAgfVxufSJdfQ==