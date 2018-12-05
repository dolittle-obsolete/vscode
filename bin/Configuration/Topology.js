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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL1RvcG9sb2d5LmpzIl0sIm5hbWVzIjpbImdldFRvcG9sb2d5RnJvbUNvcmUiLCJjb3JlUGF0aCIsInBhdGgiLCJyZXF1aXJlIiwidG9wb2xvZ3lQYXRoIiwiam9pbiIsIlRvcG9sb2d5IiwidG9wb2xvZ3kiLCJtb2R1bGVzIiwibWFwIiwiTW9kdWxlRGVmaW5pdGlvbiIsIm1vZHVsZSIsIm5hbWUiLCJmZWF0dXJlcyIsIkZlYXR1cmUiLCJmZWF0dXJlIiwic3ViRmVhdHVyZXMiLCJsZW5ndGgiLCJoYXNNb2R1bGVzIiwicmVzIiwiZmluZEZlYXR1cmUiLCJmZWF0dXJlVG9TZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztRQVVnQkEsbUIsR0FBQUEsbUI7O0FBVmhCOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLG1CQUFULENBQTZCQyxRQUE3QixFQUF1QztBQUMxQyxRQUFNQyxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUNBLFFBQU1DLGVBQWVGLEtBQUtHLElBQUwsQ0FBVUosUUFBVixFQUFvQixXQUFwQixFQUFrQyxlQUFsQyxDQUFyQjtBQUNBLFFBQUksQ0FBRSw2QkFBZUcsWUFBZixDQUFOLEVBQW9DLHVDQUFxQ0EsWUFBckM7O0FBRXBDLFdBQU8sSUFBSUUsUUFBSixDQUFhLG1DQUFxQkYsWUFBckIsQ0FBYixDQUFQO0FBQ0g7O0lBQ1lFLFEsV0FBQUEsUTtBQUNUOzs7OztBQUtBLHNCQUFhQyxRQUFiLEVBQXVCO0FBQUE7O0FBQ25CLGFBQUtDLE9BQUwsR0FBZUQsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUI7QUFBQSxtQkFBVSxJQUFJQyxrQ0FBSixDQUFxQkMsT0FBT0EsTUFBNUIsRUFBb0NBLE9BQU9DLElBQTNDLEVBQWlERCxPQUFPRSxRQUF4RCxDQUFWO0FBQUEsU0FBckIsQ0FBZjtBQUNBLGFBQUtBLFFBQUwsR0FBZ0JOLFNBQVNNLFFBQVQsQ0FBa0JKLEdBQWxCLENBQXNCO0FBQUEsbUJBQVcsSUFBSUssZ0JBQUosQ0FBWUMsUUFBUUEsT0FBcEIsRUFBNkJBLFFBQVFILElBQXJDLEVBQTJDRyxRQUFRQyxXQUFuRCxDQUFYO0FBQUEsU0FBdEIsQ0FBaEI7QUFDSDs7OztxQ0FFWTtBQUNULG1CQUFPLEtBQUtSLE9BQUwsQ0FBYVMsTUFBYixHQUFzQixDQUE3QjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7b0NBT1lGLE8sRUFBUztBQUNqQixnQkFBSSxLQUFLRyxVQUFMLEVBQUosRUFBdUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkIseUNBQW9CLEtBQUtWLE9BQXpCLDhIQUFrQztBQUFBLDRCQUF4QkcsTUFBd0I7O0FBQzlCLDRCQUFJUSxNQUFNUixPQUFPUyxXQUFQLENBQW1CTCxPQUFuQixDQUFWO0FBQ0EsNEJBQUlJLFFBQVEsSUFBWixFQUFrQixPQUFPQSxHQUFQO0FBQ3JCO0FBSmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWxCO0FBQ0osYUFMRCxNQU1LO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0QsMENBQTRCLEtBQUtOLFFBQWpDLG1JQUEyQztBQUFBLDRCQUFsQ1EsZUFBa0M7O0FBQ3ZDLDRCQUFJRixPQUFNRSxnQkFBZ0JELFdBQWhCLENBQTRCTCxPQUE1QixDQUFWO0FBQ0EsNEJBQUlJLFNBQVEsSUFBWixFQUFrQixPQUFPQSxJQUFQO0FBQ3JCO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtKO0FBQ0QsbUJBQU8sSUFBUDtBQUNIIiwiZmlsZSI6IlRvcG9sb2d5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlsZUV4aXN0c1N5bmMsIHJlYWRKc29uRnJvbUZpbGVTeW5jIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IE1vZHVsZURlZmluaXRpb24gfSBmcm9tIFwiLi9Nb2R1bGVEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4vRmVhdHVyZVwiO1xuXG4vKipcbiAqIFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3JlUGF0aFxuICogQHJldHVybnMge1RvcG9sb2d5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wb2xvZ3lGcm9tQ29yZShjb3JlUGF0aCkge1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgY29uc3QgdG9wb2xvZ3lQYXRoID0gcGF0aC5qb2luKGNvcmVQYXRoLCAnLmRvbGl0dGxlJywgICd0b3BvbG9neS5qc29uJyk7XG4gICAgaWYgKCEgZmlsZUV4aXN0c1N5bmModG9wb2xvZ3lQYXRoKSkgdGhyb3cgYENvdWxkbid0IGZpbmQgZmlsZSBhdCBwYXRoICcke3RvcG9sb2d5UGF0aH0nYDtcblxuICAgIHJldHVybiBuZXcgVG9wb2xvZ3kocmVhZEpzb25Gcm9tRmlsZVN5bmModG9wb2xvZ3lQYXRoKSk7XG59XG5leHBvcnQgY2xhc3MgVG9wb2xvZ3kge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3RzLlxuICAgICAqIEBwYXJhbSB7e21vZHVsZXM6IHttb2R1bGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBmZWF0dXJlczogYW55W119W10sIGZlYXR1cmVzOiB7ZmVhdHVyZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN1YkZlYXR1cmVzOiBhbnlbXX1bXX19IHRvcG9sb2d5XG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh0b3BvbG9neSkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSB0b3BvbG9neS5tb2R1bGVzLm1hcChtb2R1bGUgPT4gbmV3IE1vZHVsZURlZmluaXRpb24obW9kdWxlLm1vZHVsZSwgbW9kdWxlLm5hbWUsIG1vZHVsZS5mZWF0dXJlcykpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzID0gdG9wb2xvZ3kuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gbmV3IEZlYXR1cmUoZmVhdHVyZS5mZWF0dXJlLCBmZWF0dXJlLm5hbWUsIGZlYXR1cmUuc3ViRmVhdHVyZXMpKTtcbiAgICB9XG5cbiAgICBoYXNNb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZSBUaGUgZmVhdHVyZSBpZFxuICAgICAqIEByZXR1cm5zIHtGZWF0dXJlfVxuICAgICAqIEBtZW1iZXJvZiBUb3BvbG9neVxuICAgICAqL1xuICAgIGZpbmRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzTW9kdWxlcygpKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgbW9kdWxlIG9mIHRoaXMubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBtb2R1bGUuZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBmZWF0dXJlVG9TZWFyY2ggb2YgdGhpcy5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBmZWF0dXJlVG9TZWFyY2guZmluZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn0iXX0=