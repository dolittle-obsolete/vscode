"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Topology = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getTopologyFromCore = getTopologyFromCore;

var _helpers = require("../helpers");

var _ModuleDefinition = require("./ModuleDefinition");

var _Feature = require("./Feature");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 *
 * @param {string} corePath
 * @returns {Topology}
 */
function getTopologyFromCore(corePath) {
    var path = require('path');
    var topologyPath = path.join(corePath, '.dolittle', 'topology.json');
    if (!(0, _helpers.fileExistsSync)(topologyPath)) throw "Couldn't find file at path '" + topologyPath + "'";

    return new Topology((0, _helpers.readJsonFromFileSync)(topologyPath));
}

var Topology = exports.Topology = function () {
    /**
     * Creates an instance of Artifacts.
     * @param {{modules: {module: string, name: string, features: any[]}[], features: {feature: string, name: string, subFeatures: any[]}[]}} topology
     * @memberof Artifacts
     */
    function Topology(topology) {
        (0, _classCallCheck3.default)(this, Topology);

        this.modules = topology.modules.map(function (module) {
            return new _ModuleDefinition.ModuleDefinition(module.module, module.name, module.features);
        });
        this.features = topology.features.map(function (feature) {
            return new _Feature.Feature(feature.feature, feature.name, feature.subFeatures);
        });
        console.log(this.modules);
        console.log(this.features);
    }

    (0, _createClass3.default)(Topology, [{
        key: "hasModules",
        value: function hasModules() {
            return this.modules.length > 0;
        }
        /**
         *
         *
         * @param {string} feature The feature id
         * @returns {Feature}
         * @memberof Topology
         */

    }, {
        key: "findFeature",
        value: function findFeature(feature) {
            if (this.hasModules()) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.modules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var module = _step.value;

                        var res = module.findFeature(feature);
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

                ;
            } else {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.features[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var featureToSearch = _step2.value;

                        var _res = featureToSearch.findFeature(feature);
                        if (_res !== null) return _res;
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            return null;
        }
    }]);
    return Topology;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL1RvcG9sb2d5LmpzIl0sIm5hbWVzIjpbImdldFRvcG9sb2d5RnJvbUNvcmUiLCJjb3JlUGF0aCIsInBhdGgiLCJyZXF1aXJlIiwidG9wb2xvZ3lQYXRoIiwiam9pbiIsIlRvcG9sb2d5IiwidG9wb2xvZ3kiLCJtb2R1bGVzIiwibWFwIiwiTW9kdWxlRGVmaW5pdGlvbiIsIm1vZHVsZSIsIm5hbWUiLCJmZWF0dXJlcyIsIkZlYXR1cmUiLCJmZWF0dXJlIiwic3ViRmVhdHVyZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaGFzTW9kdWxlcyIsInJlcyIsImZpbmRGZWF0dXJlIiwiZmVhdHVyZVRvU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUFVZ0JBLG1CLEdBQUFBLG1COztBQVZoQjs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7QUFDMUMsUUFBTUMsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFDQSxRQUFNQyxlQUFlRixLQUFLRyxJQUFMLENBQVVKLFFBQVYsRUFBb0IsV0FBcEIsRUFBa0MsZUFBbEMsQ0FBckI7QUFDQSxRQUFJLENBQUUsNkJBQWVHLFlBQWYsQ0FBTixFQUFvQyx1Q0FBcUNBLFlBQXJDOztBQUVwQyxXQUFPLElBQUlFLFFBQUosQ0FBYSxtQ0FBcUJGLFlBQXJCLENBQWIsQ0FBUDtBQUNIOztJQUNZRSxRLFdBQUFBLFE7QUFDVDs7Ozs7QUFLQSxzQkFBYUMsUUFBYixFQUF1QjtBQUFBOztBQUNuQixhQUFLQyxPQUFMLEdBQWVELFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCO0FBQUEsbUJBQVUsSUFBSUMsa0NBQUosQ0FBcUJDLE9BQU9BLE1BQTVCLEVBQW9DQSxPQUFPQyxJQUEzQyxFQUFpREQsT0FBT0UsUUFBeEQsQ0FBVjtBQUFBLFNBQXJCLENBQWY7QUFDQSxhQUFLQSxRQUFMLEdBQWdCTixTQUFTTSxRQUFULENBQWtCSixHQUFsQixDQUFzQjtBQUFBLG1CQUFXLElBQUlLLGdCQUFKLENBQVlDLFFBQVFBLE9BQXBCLEVBQTZCQSxRQUFRSCxJQUFyQyxFQUEyQ0csUUFBUUMsV0FBbkQsQ0FBWDtBQUFBLFNBQXRCLENBQWhCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksS0FBS1YsT0FBakI7QUFDQVMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLTCxRQUFqQjtBQUNIOzs7O3FDQUVZO0FBQ1QsbUJBQU8sS0FBS0wsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLENBQTdCO0FBQ0g7QUFDRDs7Ozs7Ozs7OztvQ0FPWUosTyxFQUFTO0FBQ2pCLGdCQUFJLEtBQUtLLFVBQUwsRUFBSixFQUF1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNuQix5Q0FBb0IsS0FBS1osT0FBekIsOEhBQWtDO0FBQUEsNEJBQXhCRyxNQUF3Qjs7QUFDOUIsNEJBQUlVLE1BQU1WLE9BQU9XLFdBQVAsQ0FBbUJQLE9BQW5CLENBQVY7QUFDQSw0QkFBSU0sUUFBUSxJQUFaLEVBQWtCLE9BQU9BLEdBQVA7QUFDckI7QUFKa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJbEI7QUFDSixhQUxELE1BTUs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDRCwwQ0FBNEIsS0FBS1IsUUFBakMsbUlBQTJDO0FBQUEsNEJBQWxDVSxlQUFrQzs7QUFDdkMsNEJBQUlGLE9BQU1FLGdCQUFnQkQsV0FBaEIsQ0FBNEJQLE9BQTVCLENBQVY7QUFDQSw0QkFBSU0sU0FBUSxJQUFaLEVBQWtCLE9BQU9BLElBQVA7QUFDckI7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0o7QUFDRCxtQkFBTyxJQUFQO0FBQ0giLCJmaWxlIjoiVG9wb2xvZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWxlRXhpc3RzU3luYywgcmVhZEpzb25Gcm9tRmlsZVN5bmMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgTW9kdWxlRGVmaW5pdGlvbiB9IGZyb20gXCIuL01vZHVsZURlZmluaXRpb25cIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi9GZWF0dXJlXCI7XG5cbi8qKlxuICogXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvcmVQYXRoXG4gKiBAcmV0dXJucyB7VG9wb2xvZ3l9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BvbG9neUZyb21Db3JlKGNvcmVQYXRoKSB7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgICBjb25zdCB0b3BvbG9neVBhdGggPSBwYXRoLmpvaW4oY29yZVBhdGgsICcuZG9saXR0bGUnLCAgJ3RvcG9sb2d5Lmpzb24nKTtcbiAgICBpZiAoISBmaWxlRXhpc3RzU3luYyh0b3BvbG9neVBhdGgpKSB0aHJvdyBgQ291bGRuJ3QgZmluZCBmaWxlIGF0IHBhdGggJyR7dG9wb2xvZ3lQYXRofSdgO1xuXG4gICAgcmV0dXJuIG5ldyBUb3BvbG9neShyZWFkSnNvbkZyb21GaWxlU3luYyh0b3BvbG9neVBhdGgpKTtcbn1cbmV4cG9ydCBjbGFzcyBUb3BvbG9neSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBcnRpZmFjdHMuXG4gICAgICogQHBhcmFtIHt7bW9kdWxlczoge21vZHVsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGZlYXR1cmVzOiBhbnlbXX1bXSwgZmVhdHVyZXM6IHtmZWF0dXJlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc3ViRmVhdHVyZXM6IGFueVtdfVtdfX0gdG9wb2xvZ3lcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3RzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHRvcG9sb2d5KSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IHRvcG9sb2d5Lm1vZHVsZXMubWFwKG1vZHVsZSA9PiBuZXcgTW9kdWxlRGVmaW5pdGlvbihtb2R1bGUubW9kdWxlLCBtb2R1bGUubmFtZSwgbW9kdWxlLmZlYXR1cmVzKSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSB0b3BvbG9neS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBuZXcgRmVhdHVyZShmZWF0dXJlLmZlYXR1cmUsIGZlYXR1cmUubmFtZSwgZmVhdHVyZS5zdWJGZWF0dXJlcykpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZHVsZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZlYXR1cmVzKTtcbiAgICB9XG5cbiAgICBoYXNNb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZSBUaGUgZmVhdHVyZSBpZFxuICAgICAqIEByZXR1cm5zIHtGZWF0dXJlfVxuICAgICAqIEBtZW1iZXJvZiBUb3BvbG9neVxuICAgICAqL1xuICAgIGZpbmRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzTW9kdWxlcygpKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgbW9kdWxlIG9mIHRoaXMubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBtb2R1bGUuZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBmZWF0dXJlVG9TZWFyY2ggb2YgdGhpcy5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBmZWF0dXJlVG9TZWFyY2guZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn0iXX0=