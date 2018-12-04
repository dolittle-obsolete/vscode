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
var Core = exports.Core = function () {
  /**
    * Instantiates an instance of Core
    * @param {string} language 
    */
  function Core(language) {
    (0, _classCallCheck3.default)(this, Core);

    this._language = language;
  }
  /**
    * Gets the programming language
    * @returns {string} The string representing the programming language
    */


  (0, _createClass3.default)(Core, [{
    key: "language",
    get: function get() {
      return this._language;
    }
  }]);
  return Core;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0NvcmUuanMiXSwibmFtZXMiOlsiQ29yZSIsImxhbmd1YWdlIiwiX2xhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBOzs7SUFHYUEsSSxXQUFBQSxJO0FBRVQ7Ozs7QUFJQSxnQkFBYUMsUUFBYixFQUF1QjtBQUFBOztBQUNuQixTQUFLQyxTQUFMLEdBQWlCRCxRQUFqQjtBQUNIO0FBQ0Q7Ozs7Ozs7O3dCQUllO0FBQ1gsYUFBTyxLQUFLQyxTQUFaO0FBQ0giLCJmaWxlIjoiQ29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gICogUmVwcmVzZW50cyBhIEJvdW5kZWQgQ29udGV4dCdzIGNvcmUgY29uZmlndXJhdGlvblxuICAqL1xuZXhwb3J0IGNsYXNzIENvcmVcbntcbiAgICAvKipcbiAgICAgICogSW5zdGFudGlhdGVzIGFuIGluc3RhbmNlIG9mIENvcmVcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFxuICAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIHByb2dyYW1taW5nIGxhbmd1YWdlXG4gICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBwcm9ncmFtbWluZyBsYW5ndWFnZVxuICAgICAgKi9cbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgICB9XG4gICAgXG59Il19