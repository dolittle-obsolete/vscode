"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModuleDefinition = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Feature = require("./Feature");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleDefinition = exports.ModuleDefinition = function () {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} module
     * @param {string} name
     * @param {{feature: string, name: string, subFeatures: any[]}[]} features
     * @memberof ArtifactDefinition
     */
    function ModuleDefinition(module, name, features) {
        (0, _classCallCheck3.default)(this, ModuleDefinition);

        this.module = module;
        this.name = name;
        this.features = features.map(function (feature) {
            return new _Feature.Feature(feature.feature, feature.name, feature.subFeatures);
        });
    }
    /**
     *
     *
     * @param {string} feature The feature id
     * @returns {Feature}
     * @memberof ModuleDefinition
     */


    (0, _createClass3.default)(ModuleDefinition, [{
        key: "findFeature",
        value: function findFeature(feature) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.features[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var featureToSearch = _step.value;

                    var res = featureToSearch.findFeature(feature);
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
    return ModuleDefinition;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL01vZHVsZURlZmluaXRpb24uanMiXSwibmFtZXMiOlsiTW9kdWxlRGVmaW5pdGlvbiIsIm1vZHVsZSIsIm5hbWUiLCJmZWF0dXJlcyIsIm1hcCIsIkZlYXR1cmUiLCJmZWF0dXJlIiwic3ViRmVhdHVyZXMiLCJmZWF0dXJlVG9TZWFyY2giLCJyZXMiLCJmaW5kRmVhdHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFHYUEsZ0IsV0FBQUEsZ0I7QUFDVDs7Ozs7OztBQU9BLDhCQUFhQyxNQUFiLEVBQXFCQyxJQUFyQixFQUEyQkMsUUFBM0IsRUFBcUM7QUFBQTs7QUFDakMsYUFBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQkEsU0FBU0MsR0FBVCxDQUFhO0FBQUEsbUJBQVcsSUFBSUMsZ0JBQUosQ0FBWUMsUUFBUUEsT0FBcEIsRUFBNkJBLFFBQVFKLElBQXJDLEVBQTJDSSxRQUFRQyxXQUFuRCxDQUFYO0FBQUEsU0FBYixDQUFoQjtBQUVIO0FBQ0Q7Ozs7Ozs7Ozs7O29DQU9ZRCxPLEVBQVM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDakIscUNBQTRCLEtBQUtILFFBQWpDLDhIQUEyQztBQUFBLHdCQUFsQ0ssZUFBa0M7O0FBQ3ZDLHdCQUFJQyxNQUFNRCxnQkFBZ0JFLFdBQWhCLENBQTRCSixPQUE1QixDQUFWO0FBQ0Esd0JBQUlHLFFBQVEsSUFBWixFQUFrQixPQUFPQSxHQUFQO0FBQ3JCO0FBSmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2pCLG1CQUFPLElBQVA7QUFDSCIsImZpbGUiOiJNb2R1bGVEZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gXCIuL0ZlYXR1cmVcIjtcblxuXG5leHBvcnQgY2xhc3MgTW9kdWxlRGVmaW5pdGlvbiB7XG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEFydGlmYWN0RGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3tmZWF0dXJlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc3ViRmVhdHVyZXM6IGFueVtdfVtdfSBmZWF0dXJlc1xuICAgICAqIEBtZW1iZXJvZiBBcnRpZmFjdERlZmluaXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobW9kdWxlLCBuYW1lLCBmZWF0dXJlcykge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IG5ldyBGZWF0dXJlKGZlYXR1cmUuZmVhdHVyZSwgZmVhdHVyZS5uYW1lLCBmZWF0dXJlLnN1YkZlYXR1cmVzKSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmUgVGhlIGZlYXR1cmUgaWRcbiAgICAgKiBAcmV0dXJucyB7RmVhdHVyZX1cbiAgICAgKiBAbWVtYmVyb2YgTW9kdWxlRGVmaW5pdGlvblxuICAgICAqL1xuICAgIGZpbmRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgZm9yIChsZXQgZmVhdHVyZVRvU2VhcmNoIG9mIHRoaXMuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBmZWF0dXJlVG9TZWFyY2guZmluZEZlYXR1cmUoZmVhdHVyZSk7IFxuICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19