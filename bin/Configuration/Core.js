"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
  * Represents a Bounded Context's core configuration
  */

var _language = new WeakMap();

var Core = exports.Core = function () {
  /**
    * Instantiates an instance of Core
    * @param {string} language 
    */
  function Core(language) {
    (0, _classCallCheck3.default)(this, Core);

    _language.set(this, language);
  }
  /**
    * Gets the programming language
    * @returns {string} The string representing the programming language
    */


  (0, _createClass3.default)(Core, [{
    key: "language",
    get: function get() {
      return _language.get(this);
    }
  }]);
  return Core;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0NvcmUuanMiXSwibmFtZXMiOlsiX2xhbmd1YWdlIiwiV2Vha01hcCIsIkNvcmUiLCJsYW5ndWFnZSIsInNldCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQTs7OztBQUlBLElBQU1BLFlBQVksSUFBSUMsT0FBSixFQUFsQjs7SUFDYUMsSSxXQUFBQSxJO0FBRVQ7Ozs7QUFJQSxnQkFBYUMsUUFBYixFQUF1QjtBQUFBOztBQUNuQkgsY0FBVUksR0FBVixDQUFjLElBQWQsRUFBb0JELFFBQXBCO0FBQ0g7QUFDRDs7Ozs7Ozs7d0JBSWU7QUFDWCxhQUFPSCxVQUFVSyxHQUFWLENBQWMsSUFBZCxDQUFQO0FBQ0giLCJmaWxlIjoiQ29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gICogUmVwcmVzZW50cyBhIEJvdW5kZWQgQ29udGV4dCdzIGNvcmUgY29uZmlndXJhdGlvblxuICAqL1xuXG5jb25zdCBfbGFuZ3VhZ2UgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNsYXNzIENvcmVcbntcbiAgICAvKipcbiAgICAgICogSW5zdGFudGlhdGVzIGFuIGluc3RhbmNlIG9mIENvcmVcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFxuICAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobGFuZ3VhZ2UpIHtcbiAgICAgICAgX2xhbmd1YWdlLnNldCh0aGlzLCBsYW5ndWFnZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBHZXRzIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZVxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcbiAgICAgICovXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gX2xhbmd1YWdlLmdldCh0aGlzKTtcbiAgICB9XG4gICAgXG59Il19