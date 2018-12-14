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

var _feature = new WeakMap();
var _name = new WeakMap();
var _subFeatures = new WeakMap();

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

        _feature.set(this, feature);
        _name.set(this, name);
        _subFeatures.set(this, subFeatures.map(function (subFeature) {
            return new Feature(subFeature.feature, subFeature.name, subFeature.subFeatures);
        }));
    }
    /**
     *
     *
     * @readonly
     * @memberof Feature
     * @returns {string}
     */


    (0, _createClass3.default)(Feature, [{
        key: "findFeature",

        /**
         * 
         *
         * @param {string} feature The feature id
         * @returns {Feature}
         * @memberof Feature
         */
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
    }, {
        key: "feature",
        get: function get() {
            return _feature.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof Feature
         * @returns {string}
         */

    }, {
        key: "name",
        get: function get() {
            return _name.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof Feature
         * @returns {Feature[]}
         */

    }, {
        key: "subFeatures",
        get: function get() {
            return _subFeatures.get(this);
        }
    }]);
    return Feature;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0ZlYXR1cmUuanMiXSwibmFtZXMiOlsiX2ZlYXR1cmUiLCJXZWFrTWFwIiwiX25hbWUiLCJfc3ViRmVhdHVyZXMiLCJGZWF0dXJlIiwiZmVhdHVyZSIsIm5hbWUiLCJzdWJGZWF0dXJlcyIsInNldCIsIm1hcCIsInN1YkZlYXR1cmUiLCJyZXMiLCJmaW5kRmVhdHVyZSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxXQUFXLElBQUlDLE9BQUosRUFBakI7QUFDQSxJQUFNQyxRQUFRLElBQUlELE9BQUosRUFBZDtBQUNBLElBQU1FLGVBQWUsSUFBSUYsT0FBSixFQUFyQjs7SUFDYUcsTyxXQUFBQSxPO0FBQ1Q7Ozs7Ozs7QUFPQSxxQkFBYUMsT0FBYixFQUFzQkMsSUFBdEIsRUFBNEJDLFdBQTVCLEVBQXlDO0FBQUE7O0FBQ3JDUCxpQkFBU1EsR0FBVCxDQUFhLElBQWIsRUFBbUJILE9BQW5CO0FBQ0FILGNBQU1NLEdBQU4sQ0FBVSxJQUFWLEVBQWdCRixJQUFoQjtBQUNBSCxxQkFBYUssR0FBYixDQUFpQixJQUFqQixFQUF1QkQsWUFBWUUsR0FBWixDQUFnQjtBQUFBLG1CQUFjLElBQUlMLE9BQUosQ0FBWU0sV0FBV0wsT0FBdkIsRUFBZ0NLLFdBQVdKLElBQTNDLEVBQWlESSxXQUFXSCxXQUE1RCxDQUFkO0FBQUEsU0FBaEIsQ0FBdkI7QUFFSDtBQUNEOzs7Ozs7Ozs7Ozs7QUE4QkE7Ozs7Ozs7b0NBT1lGLE8sRUFBUztBQUNqQixnQkFBSUEsWUFBWSxLQUFLQSxPQUFyQixFQUE4QjtBQUMxQix1QkFBTyxJQUFQO0FBQ0g7QUFIZ0I7QUFBQTtBQUFBOztBQUFBO0FBSWpCLHFDQUF1QixLQUFLRSxXQUE1Qiw4SEFBeUM7QUFBQSx3QkFBaENHLFVBQWdDOztBQUNyQyx3QkFBSUMsTUFBTUQsV0FBV0UsV0FBWCxDQUF1QlAsT0FBdkIsQ0FBVjtBQUNBLHdCQUFJTSxRQUFRLElBQVosRUFBa0IsT0FBT0EsR0FBUDtBQUNyQjtBQVBnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFqQixtQkFBTyxJQUFQO0FBQ0g7Ozs0QkF2Q2E7QUFDVixtQkFBT1gsU0FBU2EsR0FBVCxDQUFhLElBQWIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT1c7QUFDUCxtQkFBT1gsTUFBTVcsR0FBTixDQUFVLElBQVYsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2tCO0FBQ2QsbUJBQU9WLGFBQWFVLEdBQWIsQ0FBaUIsSUFBakIsQ0FBUDtBQUNIIiwiZmlsZSI6IkZlYXR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IF9mZWF0dXJlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9uYW1lID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9zdWJGZWF0dXJlcyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgY2xhc3MgRmVhdHVyZSB7XG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEFydGlmYWN0RGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHt7ZmVhdHVyZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN1YkZlYXR1cmVzOiBhbnlbXX1bXX0gc3ViRmVhdHVyZXNcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3REZWZpbml0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGZlYXR1cmUsIG5hbWUsIHN1YkZlYXR1cmVzKSB7XG4gICAgICAgIF9mZWF0dXJlLnNldCh0aGlzLCBmZWF0dXJlKTtcbiAgICAgICAgX25hbWUuc2V0KHRoaXMsIG5hbWUpO1xuICAgICAgICBfc3ViRmVhdHVyZXMuc2V0KHRoaXMsIHN1YkZlYXR1cmVzLm1hcChzdWJGZWF0dXJlID0+IG5ldyBGZWF0dXJlKHN1YkZlYXR1cmUuZmVhdHVyZSwgc3ViRmVhdHVyZS5uYW1lLCBzdWJGZWF0dXJlLnN1YkZlYXR1cmVzKSkpO1xuICAgICAgICBcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBGZWF0dXJlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZmVhdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIF9mZWF0dXJlLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBGZWF0dXJlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIF9uYW1lLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBGZWF0dXJlXG4gICAgICogQHJldHVybnMge0ZlYXR1cmVbXX1cbiAgICAgKi9cbiAgICBnZXQgc3ViRmVhdHVyZXMoKSB7XG4gICAgICAgIHJldHVybiBfc3ViRmVhdHVyZXMuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlIFRoZSBmZWF0dXJlIGlkXG4gICAgICogQHJldHVybnMge0ZlYXR1cmV9XG4gICAgICogQG1lbWJlcm9mIEZlYXR1cmVcbiAgICAgKi9cbiAgICBmaW5kRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIGlmIChmZWF0dXJlID09PSB0aGlzLmZlYXR1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHN1YkZlYXR1cmUgb2YgdGhpcy5zdWJGZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IHN1YkZlYXR1cmUuZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICBpZiAocmVzICE9PSBudWxsKSByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=