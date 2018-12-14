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
var _modules = new WeakMap();
var _features = new WeakMap();

var Topology = exports.Topology = function () {
    /**
     * Creates an instance of Artifacts.
     * @param {{modules: {module: string, name: string, features: any[]}[], features: {feature: string, name: string, subFeatures: any[]}[]}} topology
     * @memberof Artifacts
     */
    function Topology(topology) {
        (0, _classCallCheck3.default)(this, Topology);

        _modules.set(this, topology.modules.map(function (module) {
            return new _ModuleDefinition.ModuleDefinition(module.module, module.name, module.features);
        }));
        _features.set(this, topology.features.map(function (feature) {
            return new _Feature.Feature(feature.feature, feature.name, feature.subFeatures);
        }));
    }
    /**
     *
     *
     * @readonly
     * @memberof Topology
     * @returns {ModuleDefinition[]}
     */


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
    }, {
        key: "modules",
        get: function get() {
            return _modules.get(this);
        }
        /**
         *
         *
         * @readonly 
         * @memberof Topology
         * @returns {Feature[]}
         */

    }, {
        key: "features",
        get: function get() {
            return _features.get(this);
        }
    }]);
    return Topology;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL1RvcG9sb2d5LmpzIl0sIm5hbWVzIjpbImdldFRvcG9sb2d5RnJvbUNvcmUiLCJjb3JlUGF0aCIsInBhdGgiLCJyZXF1aXJlIiwidG9wb2xvZ3lQYXRoIiwiam9pbiIsIlRvcG9sb2d5IiwiX21vZHVsZXMiLCJXZWFrTWFwIiwiX2ZlYXR1cmVzIiwidG9wb2xvZ3kiLCJzZXQiLCJtb2R1bGVzIiwibWFwIiwiTW9kdWxlRGVmaW5pdGlvbiIsIm1vZHVsZSIsIm5hbWUiLCJmZWF0dXJlcyIsIkZlYXR1cmUiLCJmZWF0dXJlIiwic3ViRmVhdHVyZXMiLCJsZW5ndGgiLCJoYXNNb2R1bGVzIiwicmVzIiwiZmluZEZlYXR1cmUiLCJmZWF0dXJlVG9TZWFyY2giLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztRQVVnQkEsbUIsR0FBQUEsbUI7O0FBVmhCOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLG1CQUFULENBQTZCQyxRQUE3QixFQUF1QztBQUMxQyxRQUFNQyxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUNBLFFBQU1DLGVBQWVGLEtBQUtHLElBQUwsQ0FBVUosUUFBVixFQUFvQixXQUFwQixFQUFrQyxlQUFsQyxDQUFyQjtBQUNBLFFBQUksQ0FBRSw2QkFBZUcsWUFBZixDQUFOLEVBQW9DLHVDQUFxQ0EsWUFBckM7O0FBRXBDLFdBQU8sSUFBSUUsUUFBSixDQUFhLG1DQUFxQkYsWUFBckIsQ0FBYixDQUFQO0FBQ0g7QUFDRCxJQUFNRyxXQUFXLElBQUlDLE9BQUosRUFBakI7QUFDQSxJQUFNQyxZQUFZLElBQUlELE9BQUosRUFBbEI7O0lBQ2FGLFEsV0FBQUEsUTtBQUNUOzs7OztBQUtBLHNCQUFhSSxRQUFiLEVBQXVCO0FBQUE7O0FBQ25CSCxpQkFBU0ksR0FBVCxDQUFhLElBQWIsRUFBbUJELFNBQVNFLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCO0FBQUEsbUJBQVUsSUFBSUMsa0NBQUosQ0FBcUJDLE9BQU9BLE1BQTVCLEVBQW9DQSxPQUFPQyxJQUEzQyxFQUFpREQsT0FBT0UsUUFBeEQsQ0FBVjtBQUFBLFNBQXJCLENBQW5CO0FBQ0FSLGtCQUFVRSxHQUFWLENBQWMsSUFBZCxFQUFvQkQsU0FBU08sUUFBVCxDQUFrQkosR0FBbEIsQ0FBc0I7QUFBQSxtQkFBVyxJQUFJSyxnQkFBSixDQUFZQyxRQUFRQSxPQUFwQixFQUE2QkEsUUFBUUgsSUFBckMsRUFBMkNHLFFBQVFDLFdBQW5ELENBQVg7QUFBQSxTQUF0QixDQUFwQjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7O3FDQXFCYTtBQUNULG1CQUFPLEtBQUtSLE9BQUwsQ0FBYVMsTUFBYixHQUFzQixDQUE3QjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7b0NBT1lGLE8sRUFBUztBQUNqQixnQkFBSSxLQUFLRyxVQUFMLEVBQUosRUFBdUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkIseUNBQW9CLEtBQUtWLE9BQXpCLDhIQUFrQztBQUFBLDRCQUF4QkcsTUFBd0I7O0FBQzlCLDRCQUFJUSxNQUFNUixPQUFPUyxXQUFQLENBQW1CTCxPQUFuQixDQUFWO0FBQ0EsNEJBQUlJLFFBQVEsSUFBWixFQUFrQixPQUFPQSxHQUFQO0FBQ3JCO0FBSmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWxCO0FBQ0osYUFMRCxNQU1LO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0QsMENBQTRCLEtBQUtOLFFBQWpDLG1JQUEyQztBQUFBLDRCQUFsQ1EsZUFBa0M7O0FBQ3ZDLDRCQUFJRixPQUFNRSxnQkFBZ0JELFdBQWhCLENBQTRCTCxPQUE1QixDQUFWO0FBQ0EsNEJBQUlJLFNBQVEsSUFBWixFQUFrQixPQUFPQSxJQUFQO0FBQ3JCO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtKO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7NEJBdENhO0FBQ1YsbUJBQU9oQixTQUFTbUIsR0FBVCxDQUFhLElBQWIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBT2pCLFVBQVVpQixHQUFWLENBQWMsSUFBZCxDQUFQO0FBQ0giLCJmaWxlIjoiVG9wb2xvZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWxlRXhpc3RzU3luYywgcmVhZEpzb25Gcm9tRmlsZVN5bmMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgTW9kdWxlRGVmaW5pdGlvbiB9IGZyb20gXCIuL01vZHVsZURlZmluaXRpb25cIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwiLi9GZWF0dXJlXCI7XG5cbi8qKlxuICogXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvcmVQYXRoXG4gKiBAcmV0dXJucyB7VG9wb2xvZ3l9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BvbG9neUZyb21Db3JlKGNvcmVQYXRoKSB7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgICBjb25zdCB0b3BvbG9neVBhdGggPSBwYXRoLmpvaW4oY29yZVBhdGgsICcuZG9saXR0bGUnLCAgJ3RvcG9sb2d5Lmpzb24nKTtcbiAgICBpZiAoISBmaWxlRXhpc3RzU3luYyh0b3BvbG9neVBhdGgpKSB0aHJvdyBgQ291bGRuJ3QgZmluZCBmaWxlIGF0IHBhdGggJyR7dG9wb2xvZ3lQYXRofSdgO1xuXG4gICAgcmV0dXJuIG5ldyBUb3BvbG9neShyZWFkSnNvbkZyb21GaWxlU3luYyh0b3BvbG9neVBhdGgpKTtcbn1cbmNvbnN0IF9tb2R1bGVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9mZWF0dXJlcyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgY2xhc3MgVG9wb2xvZ3kge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3RzLlxuICAgICAqIEBwYXJhbSB7e21vZHVsZXM6IHttb2R1bGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBmZWF0dXJlczogYW55W119W10sIGZlYXR1cmVzOiB7ZmVhdHVyZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN1YkZlYXR1cmVzOiBhbnlbXX1bXX19IHRvcG9sb2d5XG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh0b3BvbG9neSkge1xuICAgICAgICBfbW9kdWxlcy5zZXQodGhpcywgdG9wb2xvZ3kubW9kdWxlcy5tYXAobW9kdWxlID0+IG5ldyBNb2R1bGVEZWZpbml0aW9uKG1vZHVsZS5tb2R1bGUsIG1vZHVsZS5uYW1lLCBtb2R1bGUuZmVhdHVyZXMpKSk7XG4gICAgICAgIF9mZWF0dXJlcy5zZXQodGhpcywgdG9wb2xvZ3kuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gbmV3IEZlYXR1cmUoZmVhdHVyZS5mZWF0dXJlLCBmZWF0dXJlLm5hbWUsIGZlYXR1cmUuc3ViRmVhdHVyZXMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgVG9wb2xvZ3lcbiAgICAgKiBAcmV0dXJucyB7TW9kdWxlRGVmaW5pdGlvbltdfVxuICAgICAqL1xuICAgIGdldCBtb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gX21vZHVsZXMuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5IFxuICAgICAqIEBtZW1iZXJvZiBUb3BvbG9neVxuICAgICAqIEByZXR1cm5zIHtGZWF0dXJlW119XG4gICAgICovXG4gICAgZ2V0IGZlYXR1cmVzKCkge1xuICAgICAgICByZXR1cm4gX2ZlYXR1cmVzLmdldCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYXNNb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZSBUaGUgZmVhdHVyZSBpZFxuICAgICAqIEByZXR1cm5zIHtGZWF0dXJlfVxuICAgICAqIEBtZW1iZXJvZiBUb3BvbG9neVxuICAgICAqL1xuICAgIGZpbmRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzTW9kdWxlcygpKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgbW9kdWxlIG9mIHRoaXMubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBtb2R1bGUuZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBmZWF0dXJlVG9TZWFyY2ggb2YgdGhpcy5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBmZWF0dXJlVG9TZWFyY2guZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn0iXX0=