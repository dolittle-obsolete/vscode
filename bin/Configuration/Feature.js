"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Feature = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feature = exports.Feature = function () {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} feature
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} subFeatures
     * @memberof ArtifactDefinition
     */
    function Feature(feature, name, subFeatures) {
        (0, _classCallCheck3.default)(this, Feature);

        this.feature = feature;
        this.name = name;
        this.subFeatures = subFeatures.map(function (subFeature) {
            return new Feature(subFeature.feature, subFeature.name, subFeature.subFeatures);
        });
    }
    /**
     * 
     *
     * @param {string} feature The feature id
     * @returns {Feature}
     * @memberof Feature
     */


    (0, _createClass3.default)(Feature, [{
        key: "findFeature",
        value: function findFeature(feature) {
            if (feature === this.feature) {
                return this;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.subFeatures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var subFeature = _step.value;

                    var res = subFeature.findFeature(feature);
                    if (res !== null) return res;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return null;
        }
    }]);
    return Feature;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0ZlYXR1cmUuanMiXSwibmFtZXMiOlsiRmVhdHVyZSIsImZlYXR1cmUiLCJuYW1lIiwic3ViRmVhdHVyZXMiLCJtYXAiLCJzdWJGZWF0dXJlIiwicmVzIiwiZmluZEZlYXR1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLE8sV0FBQUEsTztBQUNUOzs7Ozs7O0FBT0EscUJBQWFDLE9BQWIsRUFBc0JDLElBQXRCLEVBQTRCQyxXQUE1QixFQUF5QztBQUFBOztBQUNyQyxhQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxhQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLQyxXQUFMLEdBQW1CQSxZQUFZQyxHQUFaLENBQWdCO0FBQUEsbUJBQWMsSUFBSUosT0FBSixDQUFZSyxXQUFXSixPQUF2QixFQUFnQ0ksV0FBV0gsSUFBM0MsRUFBaURHLFdBQVdGLFdBQTVELENBQWQ7QUFBQSxTQUFoQixDQUFuQjtBQUVIO0FBQ0Q7Ozs7Ozs7Ozs7O29DQU9ZRixPLEVBQVM7QUFDakIsZ0JBQUlBLFlBQVksS0FBS0EsT0FBckIsRUFBOEI7QUFDMUIsdUJBQU8sSUFBUDtBQUNIO0FBSGdCO0FBQUE7QUFBQTs7QUFBQTtBQUlqQixxQ0FBdUIsS0FBS0UsV0FBNUIsOEhBQXlDO0FBQUEsd0JBQWhDRSxVQUFnQzs7QUFDckMsd0JBQUlDLE1BQU1ELFdBQVdFLFdBQVgsQ0FBdUJOLE9BQXZCLENBQVY7QUFDQSx3QkFBSUssUUFBUSxJQUFaLEVBQWtCLE9BQU9BLEdBQVA7QUFDckI7QUFQZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRakIsbUJBQU8sSUFBUDtBQUNIIiwiZmlsZSI6IkZlYXR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmUge1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBcnRpZmFjdERlZmluaXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7e2ZlYXR1cmU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzdWJGZWF0dXJlczogYW55W119W119IHN1YkZlYXR1cmVzXG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0RGVmaW5pdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChmZWF0dXJlLCBuYW1lLCBzdWJGZWF0dXJlcykge1xuICAgICAgICB0aGlzLmZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1YkZlYXR1cmVzID0gc3ViRmVhdHVyZXMubWFwKHN1YkZlYXR1cmUgPT4gbmV3IEZlYXR1cmUoc3ViRmVhdHVyZS5mZWF0dXJlLCBzdWJGZWF0dXJlLm5hbWUsIHN1YkZlYXR1cmUuc3ViRmVhdHVyZXMpKTtcbiAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUgVGhlIGZlYXR1cmUgaWRcbiAgICAgKiBAcmV0dXJucyB7RmVhdHVyZX1cbiAgICAgKiBAbWVtYmVyb2YgRmVhdHVyZVxuICAgICAqL1xuICAgIGZpbmRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKGZlYXR1cmUgPT09IHRoaXMuZmVhdHVyZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgc3ViRmVhdHVyZSBvZiB0aGlzLnN1YkZlYXR1cmVzKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gc3ViRmVhdHVyZS5maW5kRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICAgIGlmIChyZXMgIT09IG51bGwpIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==