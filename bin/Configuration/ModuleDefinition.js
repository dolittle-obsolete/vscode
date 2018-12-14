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

var _module = new WeakMap();
var _name = new WeakMap();
var _features = new WeakMap();

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

        _module.set(this, module);
        _name.set(this, name);
        _features.set(this, features.map(function (feature) {
            return new _Feature.Feature(feature.feature, feature.name, feature.subFeatures);
        }));
    }
    /**
     * 
     *
     * @readonly
     * @memberof ModuleDefinition
     * @returns {string}
     */


    (0, _createClass3.default)(ModuleDefinition, [{
        key: "findFeature",

        /**
         *
         *
         * @param {string} feature The feature id
         * @returns {Feature}
         * @memberof ModuleDefinition
         */
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
    }, {
        key: "module",
        get: function get() {
            return _module.get(this);
        }
        /**
         * 
         *
         * @readonly
         * @memberof ModuleDefinition
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
         * @memberof ModuleDefinition
         * @returns {Feature[]}
         */

    }, {
        key: "features",
        get: function get() {
            return _features.get(this);
        }
    }]);
    return ModuleDefinition;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL01vZHVsZURlZmluaXRpb24uanMiXSwibmFtZXMiOlsiX21vZHVsZSIsIldlYWtNYXAiLCJfbmFtZSIsIl9mZWF0dXJlcyIsIk1vZHVsZURlZmluaXRpb24iLCJtb2R1bGUiLCJuYW1lIiwiZmVhdHVyZXMiLCJzZXQiLCJtYXAiLCJGZWF0dXJlIiwiZmVhdHVyZSIsInN1YkZlYXR1cmVzIiwiZmVhdHVyZVRvU2VhcmNoIiwicmVzIiwiZmluZEZlYXR1cmUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0EsSUFBTUMsUUFBUSxJQUFJRCxPQUFKLEVBQWQ7QUFDQSxJQUFNRSxZQUFZLElBQUlGLE9BQUosRUFBbEI7O0lBQ2FHLGdCLFdBQUFBLGdCO0FBQ1Q7Ozs7Ozs7QUFPQSw4QkFBYUMsTUFBYixFQUFxQkMsSUFBckIsRUFBMkJDLFFBQTNCLEVBQXFDO0FBQUE7O0FBQ2pDUCxnQkFBUVEsR0FBUixDQUFZLElBQVosRUFBa0JILE1BQWxCO0FBQ0FILGNBQU1NLEdBQU4sQ0FBVSxJQUFWLEVBQWdCRixJQUFoQjtBQUNBSCxrQkFBVUssR0FBVixDQUFjLElBQWQsRUFBb0JELFNBQVNFLEdBQVQsQ0FBYTtBQUFBLG1CQUFXLElBQUlDLGdCQUFKLENBQVlDLFFBQVFBLE9BQXBCLEVBQTZCQSxRQUFRTCxJQUFyQyxFQUEyQ0ssUUFBUUMsV0FBbkQsQ0FBWDtBQUFBLFNBQWIsQ0FBcEI7QUFFSDtBQUNEOzs7Ozs7Ozs7Ozs7QUE4QkE7Ozs7Ozs7b0NBT1lELE8sRUFBUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNqQixxQ0FBNEIsS0FBS0osUUFBakMsOEhBQTJDO0FBQUEsd0JBQWxDTSxlQUFrQzs7QUFDdkMsd0JBQUlDLE1BQU1ELGdCQUFnQkUsV0FBaEIsQ0FBNEJKLE9BQTVCLENBQVY7QUFDQSx3QkFBSUcsUUFBUSxJQUFaLEVBQWtCLE9BQU9BLEdBQVA7QUFDckI7QUFKZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLakIsbUJBQU8sSUFBUDtBQUNIOzs7NEJBcENZO0FBQ1QsbUJBQU9kLFFBQVFnQixHQUFSLENBQVksSUFBWixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPVztBQUNQLG1CQUFPZCxNQUFNYyxHQUFOLENBQVUsSUFBVixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPZTtBQUNYLG1CQUFPYixVQUFVYSxHQUFWLENBQWMsSUFBZCxDQUFQO0FBQ0giLCJmaWxlIjoiTW9kdWxlRGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi9GZWF0dXJlXCI7XG5cbmNvbnN0IF9tb2R1bGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX25hbWUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX2ZlYXR1cmVzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjbGFzcyBNb2R1bGVEZWZpbml0aW9uIHtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3REZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7e2ZlYXR1cmU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzdWJGZWF0dXJlczogYW55W119W119IGZlYXR1cmVzXG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0RGVmaW5pdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtb2R1bGUsIG5hbWUsIGZlYXR1cmVzKSB7XG4gICAgICAgIF9tb2R1bGUuc2V0KHRoaXMsIG1vZHVsZSk7XG4gICAgICAgIF9uYW1lLnNldCh0aGlzLCBuYW1lKTtcbiAgICAgICAgX2ZlYXR1cmVzLnNldCh0aGlzLCBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBuZXcgRmVhdHVyZShmZWF0dXJlLmZlYXR1cmUsIGZlYXR1cmUubmFtZSwgZmVhdHVyZS5zdWJGZWF0dXJlcykpKTtcbiAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIE1vZHVsZURlZmluaXRpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBtb2R1bGUoKSB7XG4gICAgICAgIHJldHVybiBfbW9kdWxlLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgTW9kdWxlRGVmaW5pdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfbmFtZS5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgTW9kdWxlRGVmaW5pdGlvblxuICAgICAqIEByZXR1cm5zIHtGZWF0dXJlW119XG4gICAgICovXG4gICAgZ2V0IGZlYXR1cmVzKCkge1xuICAgICAgICByZXR1cm4gX2ZlYXR1cmVzLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlIFRoZSBmZWF0dXJlIGlkXG4gICAgICogQHJldHVybnMge0ZlYXR1cmV9XG4gICAgICogQG1lbWJlcm9mIE1vZHVsZURlZmluaXRpb25cbiAgICAgKi9cbiAgICBmaW5kRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIGZvciAobGV0IGZlYXR1cmVUb1NlYXJjaCBvZiB0aGlzLmZlYXR1cmVzKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gZmVhdHVyZVRvU2VhcmNoLmZpbmRGZWF0dXJlKGZlYXR1cmUpOyBcbiAgICAgICAgICAgIGlmIChyZXMgIT09IG51bGwpIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==