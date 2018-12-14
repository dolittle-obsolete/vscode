'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArtifactDefinition = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _artifact = new WeakMap();
var _generation = new WeakMap();
var _type = new WeakMap();

var ArtifactDefinition = exports.ArtifactDefinition = function () {
    /**
     *Creates an instance of ArtifactDefinition.
     * @param {string} artifact
     * @param {number} generation
     * @param {string} type
     * @memberof ArtifactDefinition
     */
    function ArtifactDefinition(artifact, generation, type) {
        (0, _classCallCheck3.default)(this, ArtifactDefinition);

        _artifact.set(this, artifact);
        _generation.set(this, generation);
        _type.set(this, type);
    }

    (0, _createClass3.default)(ArtifactDefinition, [{
        key: 'name',
        value: function name() {
            return this.type.split(',')[0].split('.').pop();
        }
    }, {
        key: 'area',
        value: function area() {
            return this.type.split(',')[1].trim();
        }
    }, {
        key: 'artifact',
        get: function get() {
            return _artifact.get(this);
        }
    }, {
        key: 'generation',
        get: function get() {
            return _generation.get(this);
        }
    }, {
        key: 'type',
        get: function get() {
            return _type.get(this);
        }
    }]);
    return ArtifactDefinition;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FydGlmYWN0RGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJfYXJ0aWZhY3QiLCJXZWFrTWFwIiwiX2dlbmVyYXRpb24iLCJfdHlwZSIsIkFydGlmYWN0RGVmaW5pdGlvbiIsImFydGlmYWN0IiwiZ2VuZXJhdGlvbiIsInR5cGUiLCJzZXQiLCJzcGxpdCIsInBvcCIsInRyaW0iLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsWUFBWSxJQUFJQyxPQUFKLEVBQWxCO0FBQ0EsSUFBTUMsY0FBYyxJQUFJRCxPQUFKLEVBQXBCO0FBQ0EsSUFBTUUsUUFBUSxJQUFJRixPQUFKLEVBQWQ7O0lBRWFHLGtCLFdBQUFBLGtCO0FBQ1Q7Ozs7Ozs7QUFPQSxnQ0FBYUMsUUFBYixFQUF1QkMsVUFBdkIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQUE7O0FBQ3JDUCxrQkFBVVEsR0FBVixDQUFjLElBQWQsRUFBb0JILFFBQXBCO0FBQ0FILG9CQUFZTSxHQUFaLENBQWdCLElBQWhCLEVBQXNCRixVQUF0QjtBQUNBSCxjQUFNSyxHQUFOLENBQVUsSUFBVixFQUFnQkQsSUFBaEI7QUFFSDs7OzsrQkFXTTtBQUNILG1CQUFPLEtBQUtBLElBQUwsQ0FBVUUsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixFQUF3QkEsS0FBeEIsQ0FBOEIsR0FBOUIsRUFBbUNDLEdBQW5DLEVBQVA7QUFDSDs7OytCQUNNO0FBQ0gsbUJBQU8sS0FBS0gsSUFBTCxDQUFVRSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLEVBQXdCRSxJQUF4QixFQUFQO0FBQ0g7Ozs0QkFmYztBQUNYLG1CQUFPWCxVQUFVWSxHQUFWLENBQWMsSUFBZCxDQUFQO0FBQ0g7Ozs0QkFDZ0I7QUFDYixtQkFBT1YsWUFBWVUsR0FBWixDQUFnQixJQUFoQixDQUFQO0FBQ0g7Ozs0QkFDVTtBQUNQLG1CQUFPVCxNQUFNUyxHQUFOLENBQVUsSUFBVixDQUFQO0FBQ0giLCJmaWxlIjoiQXJ0aWZhY3REZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBfYXJ0aWZhY3QgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX2dlbmVyYXRpb24gPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX3R5cGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgY2xhc3MgQXJ0aWZhY3REZWZpbml0aW9uIHtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3REZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpZmFjdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBnZW5lcmF0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3REZWZpbml0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGFydGlmYWN0LCBnZW5lcmF0aW9uLCB0eXBlKSB7XG4gICAgICAgIF9hcnRpZmFjdC5zZXQodGhpcywgYXJ0aWZhY3QpO1xuICAgICAgICBfZ2VuZXJhdGlvbi5zZXQodGhpcywgZ2VuZXJhdGlvbik7XG4gICAgICAgIF90eXBlLnNldCh0aGlzLCB0eXBlKTtcbiAgICAgICAgXG4gICAgfVxuICAgIGdldCBhcnRpZmFjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9hcnRpZmFjdC5nZXQodGhpcyk7XG4gICAgfVxuICAgIGdldCBnZW5lcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dlbmVyYXRpb24uZ2V0KHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIF90eXBlLmdldCh0aGlzKTtcbiAgICB9XG5cbiAgICBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlLnNwbGl0KCcsJylbMF0uc3BsaXQoJy4nKS5wb3AoKTtcbiAgICB9XG4gICAgYXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZS5zcGxpdCgnLCcpWzFdLnRyaW0oKTtcbiAgICB9XG59Il19