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
        var application, boundedContexts;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _ApplicationConfiguration.loadApplicationConfiguration)();

                    case 2:
                        application = _context.sent;
                        _context.next = 5;
                        return (0, _BoundedContextConfiguration.loadBoundedContextConfigurations)();

                    case 5:
                        boundedContexts = _context.sent;
                        return _context.abrupt("return", new ProjectConfiguration(application, boundedContexts));

                    case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uIiwiYm91bmRlZENvbnRleHRzIiwiUHJvamVjdENvbmZpZ3VyYXRpb24iLCJsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24iLCJfYXBwbGljYXRpb24iLCJXZWFrTWFwIiwiX2JvdW5kZWRDb250ZXh0cyIsInNldCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7Ozs7QUFSQTs7Ozs7O3dGQWFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ3FCLDZEQURyQjs7QUFBQTtBQUNDQSxtQ0FERDtBQUFBO0FBQUEsK0JBRXlCLG9FQUZ6Qjs7QUFBQTtBQUVDQyx1Q0FGRDtBQUFBLHlEQUdJLElBQUlDLG9CQUFKLENBQXlCRixXQUF6QixFQUFzQ0MsZUFBdEMsQ0FISjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztvQkFBZUUsd0I7Ozs7O0FBUnRCOztBQUNBOzs7O0FBY0EsSUFBTUMsZUFBZSxJQUFJQyxPQUFKLEVBQXJCO0FBQ0EsSUFBTUMsbUJBQW1CLElBQUlELE9BQUosRUFBekI7O0lBQ2FILG9CLFdBQUFBLG9COztBQUVUOzs7Ozs7QUFNQSxrQ0FBWUYsV0FBWixFQUF5QkMsZUFBekIsRUFBMEM7QUFBQTs7QUFDdENHLHFCQUFhRyxHQUFiLENBQWlCLElBQWpCLEVBQXVCUCxXQUF2QjtBQUNBTSx5QkFBaUJDLEdBQWpCLENBQXFCLElBQXJCLEVBQTJCTixlQUEzQjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBTWtCO0FBQ2QsbUJBQU9HLGFBQWFJLEdBQWIsQ0FBaUIsSUFBakIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs0QkFNc0I7QUFDbEIsbUJBQU9GLGlCQUFpQkUsR0FBakIsQ0FBcUIsSUFBckIsQ0FBUDtBQUNIIiwiZmlsZSI6IlByb2plY3RDb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQgeyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24sIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zIH0gZnJvbSBcIi4vQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBsb2FkQXBwbGljYXRpb25Db25maWd1cmF0aW9uLCBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cIjtcblxuLyoqXG4gKiBMb2FkcyB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uXG4gKiBAZXhwb3J0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxQcm9qZWN0Q29uZmlndXJhdGlvbj59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgbGV0IGFwcGxpY2F0aW9uID0gYXdhaXQgbG9hZEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpO1xuICAgIGxldCBib3VuZGVkQ29udGV4dHMgPSBhd2FpdCBsb2FkQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ucygpO1xuICAgIHJldHVybiBuZXcgUHJvamVjdENvbmZpZ3VyYXRpb24oYXBwbGljYXRpb24sIGJvdW5kZWRDb250ZXh0cyk7XG4gICAgXG59XG5cbmNvbnN0IF9hcHBsaWNhdGlvbiA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfYm91bmRlZENvbnRleHRzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29uZmlndXJhdGlvbiB7XG4gICAgXG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFByb2plY3RDb25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSB7QXBwbGljYXRpb25Db25maWd1cmF0aW9ufSBhcHBsaWNhdGlvblxuICAgICAqIEBwYXJhbSB7Qm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uW119IGJvdW5kZWRDb250ZXh0c1xuICAgICAqIEBtZW1iZXJvZiBQcm9qZWN0Q29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dHMpIHtcbiAgICAgICAgX2FwcGxpY2F0aW9uLnNldCh0aGlzLCBhcHBsaWNhdGlvbik7XG4gICAgICAgIF9ib3VuZGVkQ29udGV4dHMuc2V0KHRoaXMsIGJvdW5kZWRDb250ZXh0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgcHJvamVjdFxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBQcm9qZWN0Q29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb259XG4gICAgICovXG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2FwcGxpY2F0aW9uLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0cyBvZiB0aGlzIHByb2plY3RcbiAgICAgKiBAcmV0dXJucyB7Qm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uW119XG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIFByb2plY3RDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IGJvdW5kZWRDb250ZXh0cygpIHtcbiAgICAgICAgcmV0dXJuIF9ib3VuZGVkQ29udGV4dHMuZ2V0KHRoaXMpO1xuICAgIH1cbn0iXX0=