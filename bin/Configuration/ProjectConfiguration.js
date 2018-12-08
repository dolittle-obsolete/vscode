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
}(); /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Dolittle. All rights reserved.
     *  Licensed under the MIT License. See LICENSE in the project root for license information.
     *--------------------------------------------------------------------------------------------*/

var _BoundedContextConfiguration = require("./BoundedContextConfiguration");

var _ApplicationConfiguration = require("./ApplicationConfiguration");

var _globals = require("../globals");

var _globals2 = _interopRequireDefault(_globals);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbInZzY29kZSIsInJlcXVpcmUiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsIlByb2plY3RDb25maWd1cmF0aW9uIiwidmFsdWVzIiwiY2F0Y2giLCJlcnIiLCJsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24iLCJfYXBwbGljYXRpb24iLCJXZWFrTWFwIiwiX2JvdW5kZWRDb250ZXh0cyIsImFwcGxpY2F0aW9uIiwiYm91bmRlZENvbnRleHRzIiwic2V0IiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7d0ZBS087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dBLDhCQURILEdBQ1lDLFFBQVEsUUFBUixDQURaO0FBQUEseURBR0lDLFFBQVFDLEdBQVIsQ0FBWSxDQUFDLDZEQUFELEVBQWlDLG9FQUFqQyxDQUFaLEVBQ0ZDLElBREUsQ0FDSTtBQUFBLG1DQUFVLElBQUlDLG9CQUFKLENBQXlCQyxPQUFPLENBQVAsQ0FBekIsRUFBb0NBLE9BQU8sQ0FBUCxDQUFwQyxDQUFWO0FBQUEseUJBREosRUFFRkMsS0FGRSxDQUVLLGVBQU87QUFDWCxrQ0FBTUMsR0FBTjtBQUNILHlCQUpFLENBSEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7b0JBQWVDLHdCOzs7S0FkdEI7Ozs7O0FBS0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQWlCQSxJQUFNQyxlQUFlLElBQUlDLE9BQUosRUFBckI7QUFDQSxJQUFNQyxtQkFBbUIsSUFBSUQsT0FBSixFQUF6Qjs7SUFDYU4sb0IsV0FBQUEsb0I7O0FBRVQ7Ozs7OztBQU1BLGtDQUFZUSxXQUFaLEVBQXlCQyxlQUF6QixFQUEwQztBQUFBOztBQUN0Q0oscUJBQWFLLEdBQWIsQ0FBaUIsSUFBakIsRUFBdUJGLFdBQXZCO0FBQ0FELHlCQUFpQkcsR0FBakIsQ0FBcUIsSUFBckIsRUFBMkJELGVBQTNCO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFNa0I7QUFDZCxtQkFBT0osYUFBYU0sR0FBYixDQUFpQixJQUFqQixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1zQjtBQUNsQixtQkFBT0osaUJBQWlCSSxHQUFqQixDQUFxQixJQUFyQixDQUFQO0FBQ0giLCJmaWxlIjoiUHJvamVjdENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmltcG9ydCB7IEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiwgbG9hZEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbnMgfSBmcm9tIFwiLi9Cb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IGxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24sIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblwiO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcbiBcbi8qKlxuICogTG9hZHMgdGhlIHByb2plY3QgY29uZmlndXJhdGlvblxuICogQGV4cG9ydFxuICogQHJldHVybnMge1Byb21pc2U8UHJvamVjdENvbmZpZ3VyYXRpb24+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFByb2plY3RDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuICAgIFxuICAgIHJldHVybiBQcm9taXNlLmFsbChbbG9hZEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpLCBsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucygpXSlcbiAgICAgICAgLnRoZW4oIHZhbHVlcyA9PiBuZXcgUHJvamVjdENvbmZpZ3VyYXRpb24odmFsdWVzWzBdLCB2YWx1ZXNbMV0pKVxuICAgICAgICAuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfSk7XG59XG5cbmNvbnN0IF9hcHBsaWNhdGlvbiA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfYm91bmRlZENvbnRleHRzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29uZmlndXJhdGlvbiB7XG4gICAgXG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFByb2plY3RDb25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSB7QXBwbGljYXRpb25Db25maWd1cmF0aW9ufSBhcHBsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7Qm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uW119IGJvdW5kZWRDb250ZXh0c1xuICAgICAqIEBtZW1iZXJvZiBQcm9qZWN0Q29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dHMpIHtcbiAgICAgICAgX2FwcGxpY2F0aW9uLnNldCh0aGlzLCBhcHBsaWNhdGlvbik7XG4gICAgICAgIF9ib3VuZGVkQ29udGV4dHMuc2V0KHRoaXMsIGJvdW5kZWRDb250ZXh0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgcHJvamVjdFxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBQcm9qZWN0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb259XG4gICAgICovXG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2FwcGxpY2F0aW9uLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0cyBvZiB0aGlzIHByb2plY3RcbiAgICAgKiBAcmV0dXJucyB7Qm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uW119XG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIFByb2plY3RDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IGJvdW5kZWRDb250ZXh0cygpIHtcbiAgICAgICAgcmV0dXJuIF9ib3VuZGVkQ29udGV4dHMuZ2V0KHRoaXMpO1xuICAgIH1cbn0iXX0=