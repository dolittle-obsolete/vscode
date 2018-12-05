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

var Artifacts = exports.Artifacts = function () {
    /**
     * Creates an instance of Artifacts.
     * @param {any} artifacts 
     * @memberof Artifacts
     */
    function Artifacts(artifacts) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Artifacts);

        this._artifacts = new Map();
        Object.keys(artifacts).forEach(function (key) {
            var artifactsPerFeature = artifacts[key];
            _this._artifacts.set(key, new _ArtifactDefinitionsPerFeature.ArtifactDefinitionsPerFeature(key, artifactsPerFeature.commands, artifactsPerFeature.events, artifactsPerFeature.eventSources, artifactsPerFeature.readModels, artifactsPerFeature.queries));
        });
    }
    /**
     *
     * @returns {Map<string, ArtifactDefinitionsPerFeature>}
     * @readonly
     * @memberof Artifacts
     */


    (0, _createClass3.default)(Artifacts, [{
        key: "artifacts",
        get: function get() {
            return this._artifacts;
        }
    }]);
    return Artifacts;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FydGlmYWN0cy5qcyJdLCJuYW1lcyI6WyJnZXRBcnRpZmFjdHNGcm9tQ29yZSIsImNvcmVQYXRoIiwicGF0aCIsInJlcXVpcmUiLCJhcnRpZmFjdHNQYXRoIiwiam9pbiIsIkFydGlmYWN0cyIsImFydGlmYWN0cyIsIl9hcnRpZmFjdHMiLCJNYXAiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImFydGlmYWN0c1BlckZlYXR1cmUiLCJrZXkiLCJzZXQiLCJBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZSIsImNvbW1hbmRzIiwiZXZlbnRzIiwiZXZlbnRTb3VyY2VzIiwicmVhZE1vZGVscyIsInF1ZXJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztRQVVnQkEsb0IsR0FBQUEsb0I7O0FBVmhCOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLG9CQUFULENBQThCQyxRQUE5QixFQUF3QztBQUMzQyxRQUFNQyxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUNBLFFBQU1DLGdCQUFnQkYsS0FBS0csSUFBTCxDQUFVSixRQUFWLEVBQW9CLFdBQXBCLEVBQWtDLGdCQUFsQyxDQUF0QjtBQUNBLFFBQUksQ0FBRSw2QkFBZUcsYUFBZixDQUFOLEVBQXFDLHVDQUFxQ0EsYUFBckM7O0FBRXJDLFdBQU8sSUFBSUUsU0FBSixDQUFjLG1DQUFxQkYsYUFBckIsRUFBb0NHLFNBQWxELENBQVA7QUFDSDs7SUFDWUQsUyxXQUFBQSxTO0FBQ1Q7Ozs7O0FBS0EsdUJBQWFDLFNBQWIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDcEIsYUFBS0MsVUFBTCxHQUFrQixJQUFJQyxHQUFKLEVBQWxCO0FBQ0FDLGVBQU9DLElBQVAsQ0FBWUosU0FBWixFQUF1QkssT0FBdkIsQ0FBK0IsZUFBTztBQUNsQyxnQkFBSUMsc0JBQXNCTixVQUFVTyxHQUFWLENBQTFCO0FBQ0Esa0JBQUtOLFVBQUwsQ0FBZ0JPLEdBQWhCLENBQW9CRCxHQUFwQixFQUF5QixJQUFJRSw0REFBSixDQUNyQkYsR0FEcUIsRUFFckJELG9CQUFvQkksUUFGQyxFQUdyQkosb0JBQW9CSyxNQUhDLEVBSXJCTCxvQkFBb0JNLFlBSkMsRUFLckJOLG9CQUFvQk8sVUFMQyxFQU1yQlAsb0JBQW9CUSxPQU5DLENBQXpCO0FBT0gsU0FURDtBQVVIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBTWdCO0FBQ1osbUJBQU8sS0FBS2IsVUFBWjtBQUNIIiwiZmlsZSI6IkFydGlmYWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUgfSBmcm9tIFwiLi9BcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZVwiO1xuaW1wb3J0IHsgZmlsZUV4aXN0c1N5bmMsIHJlYWRKc29uRnJvbUZpbGVTeW5jIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcblxuLyoqXG4gKiBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29yZVBhdGhcbiAqIEByZXR1cm5zIHtBcnRpZmFjdHN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcnRpZmFjdHNGcm9tQ29yZShjb3JlUGF0aCkge1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgY29uc3QgYXJ0aWZhY3RzUGF0aCA9IHBhdGguam9pbihjb3JlUGF0aCwgJy5kb2xpdHRsZScsICAnYXJ0aWZhY3RzLmpzb24nKTtcbiAgICBpZiAoISBmaWxlRXhpc3RzU3luYyhhcnRpZmFjdHNQYXRoKSkgdGhyb3cgYENvdWxkbid0IGZpbmQgZmlsZSBhdCBwYXRoICcke2FydGlmYWN0c1BhdGh9J2A7XG5cbiAgICByZXR1cm4gbmV3IEFydGlmYWN0cyhyZWFkSnNvbkZyb21GaWxlU3luYyhhcnRpZmFjdHNQYXRoKS5hcnRpZmFjdHMpO1xufVxuZXhwb3J0IGNsYXNzIEFydGlmYWN0cyB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBcnRpZmFjdHMuXG4gICAgICogQHBhcmFtIHthbnl9IGFydGlmYWN0cyBcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3RzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGFydGlmYWN0cykge1xuICAgICAgICB0aGlzLl9hcnRpZmFjdHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGFydGlmYWN0cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGFydGlmYWN0c1BlckZlYXR1cmUgPSBhcnRpZmFjdHNba2V5XTtcbiAgICAgICAgICAgIHRoaXMuX2FydGlmYWN0cy5zZXQoa2V5LCBuZXcgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUoXG4gICAgICAgICAgICAgICAga2V5LCBcbiAgICAgICAgICAgICAgICBhcnRpZmFjdHNQZXJGZWF0dXJlLmNvbW1hbmRzLCBcbiAgICAgICAgICAgICAgICBhcnRpZmFjdHNQZXJGZWF0dXJlLmV2ZW50cywgXG4gICAgICAgICAgICAgICAgYXJ0aWZhY3RzUGVyRmVhdHVyZS5ldmVudFNvdXJjZXMsIFxuICAgICAgICAgICAgICAgIGFydGlmYWN0c1BlckZlYXR1cmUucmVhZE1vZGVscyxcbiAgICAgICAgICAgICAgICBhcnRpZmFjdHNQZXJGZWF0dXJlLnF1ZXJpZXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge01hcDxzdHJpbmcsIEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlPn1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3RzXG4gICAgICovXG4gICAgZ2V0IGFydGlmYWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FydGlmYWN0cztcbiAgICB9XG59Il19