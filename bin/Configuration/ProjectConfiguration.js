"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProjectConfiguration = exports.loadProjectConfiguration = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Loads the project configuration
 * @export
 * @returns {Promise<ProjectConfiguration>}
 */
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/

var loadProjectConfiguration = exports.loadProjectConfiguration = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var vscode;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vscode = require('vscode');
                        return _context.abrupt("return", Promise.all([(0, _ApplicationConfiguration.loadApplicationConfiguration)(), (0, _BoundedContextConfiguration.loadBoundedContextConfigurations)()]).then(function (values) {
                            return new ProjectConfiguration(values[0], values[1]);
                        }).catch(function (err) {
                            console.error('Could not load project configuration: ', err);
                            vscode.window.showErrorMessage('Could not load the project configuration');

                            throw err;
                        }));

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadProjectConfiguration() {
        return _ref.apply(this, arguments);
    };
}();

var _BoundedContextConfiguration = require("./BoundedContextConfiguration");

var _ApplicationConfiguration = require("./ApplicationConfiguration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _application = new WeakMap();
var _boundedContexts = new WeakMap();

var ProjectConfiguration = exports.ProjectConfiguration = function () {

    /**
     *Creates an instance of ProjectConfiguration.
     * @param {ApplicationConfiguration} application
     * @param {BoundedContextConfiguration[]} boundedContexts
     * @memberof ProjectConfiguration
     */
    function ProjectConfiguration(application, boundedContexts) {
        (0, _classCallCheck3.default)(this, ProjectConfiguration);

        _application.set(this, application);
        _boundedContexts.set(this, boundedContexts);
    }
    /**
     * Gets the application configuration for this project
     * @readonly
     * @memberof ProjectConfiguration
     * @returns {ApplicationConfiguration}
     */


    (0, _createClass3.default)(ProjectConfiguration, [{
        key: "application",
        get: function get() {
            return _application.get(this);
        }
        /**
         * Gets the bounded contexts of this project
         * @returns {BoundedContextConfiguration[]}
         * @readonly
         * @memberof ProjectConfiguration
         */

    }, {
        key: "boundedContexts",
        get: function get() {
            return _boundedContexts.get(this);
        }
    }]);
    return ProjectConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbInZzY29kZSIsInJlcXVpcmUiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsIlByb2plY3RDb25maWd1cmF0aW9uIiwidmFsdWVzIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJ3aW5kb3ciLCJzaG93RXJyb3JNZXNzYWdlIiwibG9hZFByb2plY3RDb25maWd1cmF0aW9uIiwiX2FwcGxpY2F0aW9uIiwiV2Vha01hcCIsIl9ib3VuZGVkQ29udGV4dHMiLCJhcHBsaWNhdGlvbiIsImJvdW5kZWRDb250ZXh0cyIsInNldCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7Ozs7QUFSQTs7Ozs7O3dGQWFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjtBQUFBLHlEQUdJQyxRQUFRQyxHQUFSLENBQVksQ0FBQyw2REFBRCxFQUFpQyxvRUFBakMsQ0FBWixFQUNGQyxJQURFLENBQ0k7QUFBQSxtQ0FBVSxJQUFJQyxvQkFBSixDQUF5QkMsT0FBTyxDQUFQLENBQXpCLEVBQW9DQSxPQUFPLENBQVAsQ0FBcEMsQ0FBVjtBQUFBLHlCQURKLEVBRUZDLEtBRkUsQ0FFSyxlQUFPO0FBQ1hDLG9DQUFRQyxLQUFSLENBQWMsd0NBQWQsRUFBd0RDLEdBQXhEO0FBQ0FWLG1DQUFPVyxNQUFQLENBQWNDLGdCQUFkLENBQStCLDBDQUEvQjs7QUFFQSxrQ0FBTUYsR0FBTjtBQUNILHlCQVBFLENBSEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7b0JBQWVHLHdCOzs7OztBQVJ0Qjs7QUFDQTs7OztBQW9CQSxJQUFNQyxlQUFlLElBQUlDLE9BQUosRUFBckI7QUFDQSxJQUFNQyxtQkFBbUIsSUFBSUQsT0FBSixFQUF6Qjs7SUFDYVYsb0IsV0FBQUEsb0I7O0FBRVQ7Ozs7OztBQU1BLGtDQUFZWSxXQUFaLEVBQXlCQyxlQUF6QixFQUEwQztBQUFBOztBQUN0Q0oscUJBQWFLLEdBQWIsQ0FBaUIsSUFBakIsRUFBdUJGLFdBQXZCO0FBQ0FELHlCQUFpQkcsR0FBakIsQ0FBcUIsSUFBckIsRUFBMkJELGVBQTNCO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFNa0I7QUFDZCxtQkFBT0osYUFBYU0sR0FBYixDQUFpQixJQUFqQixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1zQjtBQUNsQixtQkFBT0osaUJBQWlCSSxHQUFqQixDQUFxQixJQUFyQixDQUFQO0FBQ0giLCJmaWxlIjoiUHJvamVjdENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmltcG9ydCB7IEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiwgbG9hZEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbnMgfSBmcm9tIFwiLi9Cb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IGxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24sIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblwiO1xuIFxuLyoqXG4gKiBMb2FkcyB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uXG4gKiBAZXhwb3J0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxQcm9qZWN0Q29uZmlndXJhdGlvbj59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgY29uc3QgdnNjb2RlID0gcmVxdWlyZSgndnNjb2RlJyk7XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtsb2FkQXBwbGljYXRpb25Db25maWd1cmF0aW9uKCksIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCldKVxuICAgICAgICAudGhlbiggdmFsdWVzID0+IG5ldyBQcm9qZWN0Q29uZmlndXJhdGlvbih2YWx1ZXNbMF0sIHZhbHVlc1sxXSkpXG4gICAgICAgIC5jYXRjaCggZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHByb2plY3QgY29uZmlndXJhdGlvbjogJywgZXJyKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnQ291bGQgbm90IGxvYWQgdGhlIHByb2plY3QgY29uZmlndXJhdGlvbicpO1xuXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xufVxuXG5jb25zdCBfYXBwbGljYXRpb24gPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX2JvdW5kZWRDb250ZXh0cyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgY2xhc3MgUHJvamVjdENvbmZpZ3VyYXRpb24ge1xuICAgIFxuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBQcm9qZWN0Q29uZmlndXJhdGlvbi5cbiAgICAgKiBAcGFyYW0ge0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbn0gYXBwbGljYXRpb25cbiAgICAgKiBAcGFyYW0ge0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdfSBib3VuZGVkQ29udGV4dHNcbiAgICAgKiBAbWVtYmVyb2YgUHJvamVjdENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcHBsaWNhdGlvbiwgYm91bmRlZENvbnRleHRzKSB7XG4gICAgICAgIF9hcHBsaWNhdGlvbi5zZXQodGhpcywgYXBwbGljYXRpb24pO1xuICAgICAgICBfYm91bmRlZENvbnRleHRzLnNldCh0aGlzLCBib3VuZGVkQ29udGV4dHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGZvciB0aGlzIHByb2plY3RcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgUHJvamVjdENvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7QXBwbGljYXRpb25Db25maWd1cmF0aW9ufVxuICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9hcHBsaWNhdGlvbi5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGJvdW5kZWQgY29udGV4dHMgb2YgdGhpcyBwcm9qZWN0XG4gICAgICogQHJldHVybnMge0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdfVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBQcm9qZWN0Q29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBib3VuZGVkQ29udGV4dHMoKSB7XG4gICAgICAgIHJldHVybiBfYm91bmRlZENvbnRleHRzLmdldCh0aGlzKTtcbiAgICB9XG59Il19