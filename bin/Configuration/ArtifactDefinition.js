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

        this.artifact = artifact;
        this.generation = generation;
        this.type = type;
    }

    (0, _createClass3.default)(ArtifactDefinition, [{
        key: 'name',
        get: function get() {
            return this.type.split(',')[0].split('.').pop();
        }
    }, {
        key: 'area',
        get: function get() {
            return this.type.split(',')[1].trim();
        }
    }]);
    return ArtifactDefinition;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FydGlmYWN0RGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJBcnRpZmFjdERlZmluaXRpb24iLCJhcnRpZmFjdCIsImdlbmVyYXRpb24iLCJ0eXBlIiwic3BsaXQiLCJwb3AiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxrQixXQUFBQSxrQjtBQUNUOzs7Ozs7O0FBT0EsZ0NBQWFDLFFBQWIsRUFBdUJDLFVBQXZCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUFBOztBQUNyQyxhQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsYUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBRUg7Ozs7NEJBRVU7QUFDUCxtQkFBTyxLQUFLQSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsRUFBd0JBLEtBQXhCLENBQThCLEdBQTlCLEVBQW1DQyxHQUFuQyxFQUFQO0FBQ0g7Ozs0QkFDVTtBQUNQLG1CQUFPLEtBQUtGLElBQUwsQ0FBVUMsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixFQUF3QkUsSUFBeEIsRUFBUDtBQUNIIiwiZmlsZSI6IkFydGlmYWN0RGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY2xhc3MgQXJ0aWZhY3REZWZpbml0aW9uIHtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3REZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpZmFjdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBnZW5lcmF0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3REZWZpbml0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGFydGlmYWN0LCBnZW5lcmF0aW9uLCB0eXBlKSB7XG4gICAgICAgIHRoaXMuYXJ0aWZhY3QgPSBhcnRpZmFjdDtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gZ2VuZXJhdGlvbjtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUuc3BsaXQoJywnKVswXS5zcGxpdCgnLicpLnBvcCgpO1xuICAgIH1cbiAgICBnZXQgYXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZS5zcGxpdCgnLCcpWzFdLnRyaW0oKTtcbiAgICB9XG59Il19