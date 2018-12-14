"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Artifacts = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getArtifactsFromCore = getArtifactsFromCore;

var _BoundedContextConfiguration = require("./BoundedContextConfiguration");

var _ArtifactDefinitionsPerFeature = require("./ArtifactDefinitionsPerFeature");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 *
 * @param {string} corePath
 * @returns {Artifacts}
 */
function getArtifactsFromCore(corePath) {
    var path = require('path');
    var artifactsPath = path.join(corePath, '.dolittle', 'artifacts.json');
    if (!(0, _helpers.fileExistsSync)(artifactsPath)) throw "Couldn't find file at path '" + artifactsPath + "'";

    return new Artifacts((0, _helpers.readJsonFromFileSync)(artifactsPath).artifacts);
}
var _artifacts = new WeakMap();

var Artifacts = exports.Artifacts = function () {
    /**
     * Creates an instance of Artifacts.
     * @param {any} artifacts 
     * @memberof Artifacts
     */
    function Artifacts(artifacts) {
        (0, _classCallCheck3.default)(this, Artifacts);

        var artifactsMap = new Map();
        Object.keys(artifacts).forEach(function (key) {
            var artifactsPerFeature = artifacts[key];
            artifactsMap.set(key, new _ArtifactDefinitionsPerFeature.ArtifactDefinitionsPerFeature(key, artifactsPerFeature.commands, artifactsPerFeature.events, artifactsPerFeature.eventSources, artifactsPerFeature.readModels, artifactsPerFeature.queries));
        });
        _artifacts.set(this, artifactsMap);
    }
    /**
     *
     * @readonly
     * @memberof Artifacts
     * @returns {Map<string, ArtifactDefinitionsPerFeature>}
     */


    (0, _createClass3.default)(Artifacts, [{
        key: "artifacts",
        get: function get() {
            return _artifacts.get(this);
        }
    }]);
    return Artifacts;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FydGlmYWN0cy5qcyJdLCJuYW1lcyI6WyJnZXRBcnRpZmFjdHNGcm9tQ29yZSIsImNvcmVQYXRoIiwicGF0aCIsInJlcXVpcmUiLCJhcnRpZmFjdHNQYXRoIiwiam9pbiIsIkFydGlmYWN0cyIsImFydGlmYWN0cyIsIl9hcnRpZmFjdHMiLCJXZWFrTWFwIiwiYXJ0aWZhY3RzTWFwIiwiTWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJhcnRpZmFjdHNQZXJGZWF0dXJlIiwia2V5Iiwic2V0IiwiQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUiLCJjb21tYW5kcyIsImV2ZW50cyIsImV2ZW50U291cmNlcyIsInJlYWRNb2RlbHMiLCJxdWVyaWVzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUFVZ0JBLG9CLEdBQUFBLG9COztBQVZoQjs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxvQkFBVCxDQUE4QkMsUUFBOUIsRUFBd0M7QUFDM0MsUUFBTUMsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFDQSxRQUFNQyxnQkFBZ0JGLEtBQUtHLElBQUwsQ0FBVUosUUFBVixFQUFvQixXQUFwQixFQUFrQyxnQkFBbEMsQ0FBdEI7QUFDQSxRQUFJLENBQUUsNkJBQWVHLGFBQWYsQ0FBTixFQUFxQyx1Q0FBcUNBLGFBQXJDOztBQUVyQyxXQUFPLElBQUlFLFNBQUosQ0FBYyxtQ0FBcUJGLGFBQXJCLEVBQW9DRyxTQUFsRCxDQUFQO0FBQ0g7QUFDRCxJQUFNQyxhQUFhLElBQUlDLE9BQUosRUFBbkI7O0lBQ2FILFMsV0FBQUEsUztBQUNUOzs7OztBQUtBLHVCQUFhQyxTQUFiLEVBQXdCO0FBQUE7O0FBQ3BCLFlBQUlHLGVBQWUsSUFBSUMsR0FBSixFQUFuQjtBQUNBQyxlQUFPQyxJQUFQLENBQVlOLFNBQVosRUFBdUJPLE9BQXZCLENBQStCLGVBQU87QUFDbEMsZ0JBQUlDLHNCQUFzQlIsVUFBVVMsR0FBVixDQUExQjtBQUNBTix5QkFBYU8sR0FBYixDQUFpQkQsR0FBakIsRUFBc0IsSUFBSUUsNERBQUosQ0FDbEJGLEdBRGtCLEVBRWxCRCxvQkFBb0JJLFFBRkYsRUFHbEJKLG9CQUFvQkssTUFIRixFQUlsQkwsb0JBQW9CTSxZQUpGLEVBS2xCTixvQkFBb0JPLFVBTEYsRUFNbEJQLG9CQUFvQlEsT0FORixDQUF0QjtBQU9ILFNBVEQ7QUFVQWYsbUJBQVdTLEdBQVgsQ0FBZSxJQUFmLEVBQXFCUCxZQUFyQjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBTWdCO0FBQ1osbUJBQU9GLFdBQVdnQixHQUFYLENBQWUsSUFBZixDQUFQO0FBQ0giLCJmaWxlIjoiQXJ0aWZhY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZSB9IGZyb20gXCIuL0FydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlXCI7XG5pbXBvcnQgeyBmaWxlRXhpc3RzU3luYywgcmVhZEpzb25Gcm9tRmlsZVN5bmMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG4vKipcbiAqIFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb3JlUGF0aFxuICogQHJldHVybnMge0FydGlmYWN0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFydGlmYWN0c0Zyb21Db3JlKGNvcmVQYXRoKSB7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgICBjb25zdCBhcnRpZmFjdHNQYXRoID0gcGF0aC5qb2luKGNvcmVQYXRoLCAnLmRvbGl0dGxlJywgICdhcnRpZmFjdHMuanNvbicpO1xuICAgIGlmICghIGZpbGVFeGlzdHNTeW5jKGFydGlmYWN0c1BhdGgpKSB0aHJvdyBgQ291bGRuJ3QgZmluZCBmaWxlIGF0IHBhdGggJyR7YXJ0aWZhY3RzUGF0aH0nYDtcblxuICAgIHJldHVybiBuZXcgQXJ0aWZhY3RzKHJlYWRKc29uRnJvbUZpbGVTeW5jKGFydGlmYWN0c1BhdGgpLmFydGlmYWN0cyk7XG59XG5jb25zdCBfYXJ0aWZhY3RzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjbGFzcyBBcnRpZmFjdHMge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3RzLlxuICAgICAqIEBwYXJhbSB7YW55fSBhcnRpZmFjdHMgXG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChhcnRpZmFjdHMpIHtcbiAgICAgICAgbGV0IGFydGlmYWN0c01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJ0aWZhY3RzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgYXJ0aWZhY3RzUGVyRmVhdHVyZSA9IGFydGlmYWN0c1trZXldO1xuICAgICAgICAgICAgYXJ0aWZhY3RzTWFwLnNldChrZXksIG5ldyBBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZShcbiAgICAgICAgICAgICAgICBrZXksIFxuICAgICAgICAgICAgICAgIGFydGlmYWN0c1BlckZlYXR1cmUuY29tbWFuZHMsIFxuICAgICAgICAgICAgICAgIGFydGlmYWN0c1BlckZlYXR1cmUuZXZlbnRzLCBcbiAgICAgICAgICAgICAgICBhcnRpZmFjdHNQZXJGZWF0dXJlLmV2ZW50U291cmNlcywgXG4gICAgICAgICAgICAgICAgYXJ0aWZhY3RzUGVyRmVhdHVyZS5yZWFkTW9kZWxzLFxuICAgICAgICAgICAgICAgIGFydGlmYWN0c1BlckZlYXR1cmUucXVlcmllcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgX2FydGlmYWN0cy5zZXQodGhpcywgYXJ0aWZhY3RzTWFwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3RzXG4gICAgICogQHJldHVybnMge01hcDxzdHJpbmcsIEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlPn1cbiAgICAgKi9cbiAgICBnZXQgYXJ0aWZhY3RzKCkge1xuICAgICAgICByZXR1cm4gX2FydGlmYWN0cy5nZXQodGhpcyk7XG4gICAgfVxufSJdfQ==