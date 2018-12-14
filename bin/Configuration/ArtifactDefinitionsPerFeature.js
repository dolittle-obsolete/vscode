"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArtifactDefinitionsPerFeature = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ArtifactDefinition = require("./ArtifactDefinition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _featureId = new WeakMap();
var _commands = new WeakMap();
var _events = new WeakMap();
var _eventSources = new WeakMap();
var _readModels = new WeakMap();
var _queries = new WeakMap();

var ArtifactDefinitionsPerFeature = exports.ArtifactDefinitionsPerFeature = function () {
    /**
     *Creates an instance of ArtifactDefinitionsPerFeature.
     * @param {string} featureId
     * @param {{artifact: string, generation: number, type: string}[]} commands
     * @param {{artifact: string, generation: number, type: string}[]} events
     * @param {{artifact: string, generation: number, type: string}[]} eventSources
     * @param {{artifact: string, generation: number, type: string}[]} readModels
     * @param {{artifact: string, generation: number, type: string}[]} queries
     * @memberof ArtifactDefinitionsPerFeature
     */
    function ArtifactDefinitionsPerFeature(featureId, commands, events, eventSources, readModels, queries) {
        (0, _classCallCheck3.default)(this, ArtifactDefinitionsPerFeature);

        _featureId.set(this, featureId);
        _commands.set(this, commands.map(function (artifact) {
            return new _ArtifactDefinition.ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type);
        }));
        _events.set(this, events.map(function (artifact) {
            return new _ArtifactDefinition.ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type);
        }));
        _eventSources.set(this, eventSources.map(function (artifact) {
            return new _ArtifactDefinition.ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type);
        }));
        _readModels.set(this, readModels.map(function (artifact) {
            return new _ArtifactDefinition.ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type);
        }));
        _queries.set(this, queries.map(function (artifact) {
            return new _ArtifactDefinition.ArtifactDefinition(artifact.artifact, artifact.generation, artifact.type);
        }));
    }
    /**
     *
     *
     * @readonly
     * @memberof ArtifactDefinitionsPerFeature
     * @returns {string}
     */


    (0, _createClass3.default)(ArtifactDefinitionsPerFeature, [{
        key: "featureId",
        get: function get() {
            return _featureId.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof ArtifactDefinitionsPerFeature
         * @returns {ArtifactDefinition[]}
         */

    }, {
        key: "commands",
        get: function get() {
            return _commands.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof ArtifactDefinitionsPerFeature
         * @returns {ArtifactDefinition[]}
         */

    }, {
        key: "events",
        get: function get() {
            return _events.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof ArtifactDefinitionsPerFeature
         * @returns {ArtifactDefinition[]}
         */

    }, {
        key: "eventSources",
        get: function get() {
            return _eventSources.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof ArtifactDefinitionsPerFeature
         * @returns {ArtifactDefinition[]}
         */

    }, {
        key: "readModels",
        get: function get() {
            return _readModels.get(this);
        }
        /**
         *
         *
         * @readonly
         * @memberof ArtifactDefinitionsPerFeature
         * @returns {ArtifactDefinition[]}
         */

    }, {
        key: "queries",
        get: function get() {
            return _queries.get(this);
        }
    }]);
    return ArtifactDefinitionsPerFeature;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlLmpzIl0sIm5hbWVzIjpbIl9mZWF0dXJlSWQiLCJXZWFrTWFwIiwiX2NvbW1hbmRzIiwiX2V2ZW50cyIsIl9ldmVudFNvdXJjZXMiLCJfcmVhZE1vZGVscyIsIl9xdWVyaWVzIiwiQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUiLCJmZWF0dXJlSWQiLCJjb21tYW5kcyIsImV2ZW50cyIsImV2ZW50U291cmNlcyIsInJlYWRNb2RlbHMiLCJxdWVyaWVzIiwic2V0IiwibWFwIiwiQXJ0aWZhY3REZWZpbml0aW9uIiwiYXJ0aWZhY3QiLCJnZW5lcmF0aW9uIiwidHlwZSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxhQUFhLElBQUlDLE9BQUosRUFBbkI7QUFDQSxJQUFNQyxZQUFZLElBQUlELE9BQUosRUFBbEI7QUFDQSxJQUFNRSxVQUFVLElBQUlGLE9BQUosRUFBaEI7QUFDQSxJQUFNRyxnQkFBZ0IsSUFBSUgsT0FBSixFQUF0QjtBQUNBLElBQU1JLGNBQWMsSUFBSUosT0FBSixFQUFwQjtBQUNBLElBQU1LLFdBQVcsSUFBSUwsT0FBSixFQUFqQjs7SUFDYU0sNkIsV0FBQUEsNkI7QUFDVDs7Ozs7Ozs7OztBQVVBLDJDQUFhQyxTQUFiLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsRUFBMENDLFlBQTFDLEVBQXdEQyxVQUF4RCxFQUFvRUMsT0FBcEUsRUFBNkU7QUFBQTs7QUFDekViLG1CQUFXYyxHQUFYLENBQWUsSUFBZixFQUFxQk4sU0FBckI7QUFDQU4sa0JBQVVZLEdBQVYsQ0FBYyxJQUFkLEVBQW9CTCxTQUFTTSxHQUFULENBQWE7QUFBQSxtQkFBWSxJQUFJQyxzQ0FBSixDQUF1QkMsU0FBU0EsUUFBaEMsRUFBMENBLFNBQVNDLFVBQW5ELEVBQStERCxTQUFTRSxJQUF4RSxDQUFaO0FBQUEsU0FBYixDQUFwQjtBQUNBaEIsZ0JBQVFXLEdBQVIsQ0FBWSxJQUFaLEVBQWtCSixPQUFPSyxHQUFQLENBQVc7QUFBQSxtQkFBWSxJQUFJQyxzQ0FBSixDQUF1QkMsU0FBU0EsUUFBaEMsRUFBMENBLFNBQVNDLFVBQW5ELEVBQStERCxTQUFTRSxJQUF4RSxDQUFaO0FBQUEsU0FBWCxDQUFsQjtBQUNBZixzQkFBY1UsR0FBZCxDQUFrQixJQUFsQixFQUF3QkgsYUFBYUksR0FBYixDQUFpQjtBQUFBLG1CQUFZLElBQUlDLHNDQUFKLENBQXVCQyxTQUFTQSxRQUFoQyxFQUEwQ0EsU0FBU0MsVUFBbkQsRUFBK0RELFNBQVNFLElBQXhFLENBQVo7QUFBQSxTQUFqQixDQUF4QjtBQUNBZCxvQkFBWVMsR0FBWixDQUFnQixJQUFoQixFQUFzQkYsV0FBV0csR0FBWCxDQUFlO0FBQUEsbUJBQVksSUFBSUMsc0NBQUosQ0FBdUJDLFNBQVNBLFFBQWhDLEVBQTBDQSxTQUFTQyxVQUFuRCxFQUErREQsU0FBU0UsSUFBeEUsQ0FBWjtBQUFBLFNBQWYsQ0FBdEI7QUFDQWIsaUJBQVNRLEdBQVQsQ0FBYSxJQUFiLEVBQW1CRCxRQUFRRSxHQUFSLENBQVk7QUFBQSxtQkFBWSxJQUFJQyxzQ0FBSixDQUF1QkMsU0FBU0EsUUFBaEMsRUFBMENBLFNBQVNDLFVBQW5ELEVBQStERCxTQUFTRSxJQUF4RSxDQUFaO0FBQUEsU0FBWixDQUFuQjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7OzRCQU9nQjtBQUNaLG1CQUFPbkIsV0FBV29CLEdBQVgsQ0FBZSxJQUFmLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9lO0FBQ1gsbUJBQU9sQixVQUFVa0IsR0FBVixDQUFjLElBQWQsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2E7QUFDVCxtQkFBT2pCLFFBQVFpQixHQUFSLENBQVksSUFBWixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPbUI7QUFDZixtQkFBT2hCLGNBQWNnQixHQUFkLENBQWtCLElBQWxCLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9pQjtBQUNiLG1CQUFPZixZQUFZZSxHQUFaLENBQWdCLElBQWhCLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7OzRCQU9jO0FBQ1YsbUJBQU9kLFNBQVNjLEdBQVQsQ0FBYSxJQUFiLENBQVA7QUFDSCIsImZpbGUiOiJBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFydGlmYWN0RGVmaW5pdGlvbiB9IGZyb20gXCIuL0FydGlmYWN0RGVmaW5pdGlvblwiO1xuXG5jb25zdCBfZmVhdHVyZUlkID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9jb21tYW5kcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBfZXZlbnRzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9ldmVudFNvdXJjZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX3JlYWRNb2RlbHMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgX3F1ZXJpZXMgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNsYXNzIEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlIHtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmVJZFxuICAgICAqIEBwYXJhbSB7e2FydGlmYWN0OiBzdHJpbmcsIGdlbmVyYXRpb246IG51bWJlciwgdHlwZTogc3RyaW5nfVtdfSBjb21tYW5kc1xuICAgICAqIEBwYXJhbSB7e2FydGlmYWN0OiBzdHJpbmcsIGdlbmVyYXRpb246IG51bWJlciwgdHlwZTogc3RyaW5nfVtdfSBldmVudHNcbiAgICAgKiBAcGFyYW0ge3thcnRpZmFjdDogc3RyaW5nLCBnZW5lcmF0aW9uOiBudW1iZXIsIHR5cGU6IHN0cmluZ31bXX0gZXZlbnRTb3VyY2VzXG4gICAgICogQHBhcmFtIHt7YXJ0aWZhY3Q6IHN0cmluZywgZ2VuZXJhdGlvbjogbnVtYmVyLCB0eXBlOiBzdHJpbmd9W119IHJlYWRNb2RlbHNcbiAgICAgKiBAcGFyYW0ge3thcnRpZmFjdDogc3RyaW5nLCBnZW5lcmF0aW9uOiBudW1iZXIsIHR5cGU6IHN0cmluZ31bXX0gcXVlcmllc1xuICAgICAqIEBtZW1iZXJvZiBBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChmZWF0dXJlSWQsIGNvbW1hbmRzLCBldmVudHMsIGV2ZW50U291cmNlcywgcmVhZE1vZGVscywgcXVlcmllcykge1xuICAgICAgICBfZmVhdHVyZUlkLnNldCh0aGlzLCBmZWF0dXJlSWQpO1xuICAgICAgICBfY29tbWFuZHMuc2V0KHRoaXMsIGNvbW1hbmRzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3REZWZpbml0aW9uKGFydGlmYWN0LmFydGlmYWN0LCBhcnRpZmFjdC5nZW5lcmF0aW9uLCBhcnRpZmFjdC50eXBlKSkpO1xuICAgICAgICBfZXZlbnRzLnNldCh0aGlzLCBldmVudHMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdERlZmluaXRpb24oYXJ0aWZhY3QuYXJ0aWZhY3QsIGFydGlmYWN0LmdlbmVyYXRpb24sIGFydGlmYWN0LnR5cGUpKSk7XG4gICAgICAgIF9ldmVudFNvdXJjZXMuc2V0KHRoaXMsIGV2ZW50U291cmNlcy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0RGVmaW5pdGlvbihhcnRpZmFjdC5hcnRpZmFjdCwgYXJ0aWZhY3QuZ2VuZXJhdGlvbiwgYXJ0aWZhY3QudHlwZSkpKTtcbiAgICAgICAgX3JlYWRNb2RlbHMuc2V0KHRoaXMsIHJlYWRNb2RlbHMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdERlZmluaXRpb24oYXJ0aWZhY3QuYXJ0aWZhY3QsIGFydGlmYWN0LmdlbmVyYXRpb24sIGFydGlmYWN0LnR5cGUpKSk7XG4gICAgICAgIF9xdWVyaWVzLnNldCh0aGlzLCBxdWVyaWVzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3REZWZpbml0aW9uKGFydGlmYWN0LmFydGlmYWN0LCBhcnRpZmFjdC5nZW5lcmF0aW9uLCBhcnRpZmFjdC50eXBlKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZmVhdHVyZUlkKCkge1xuICAgICAgICByZXR1cm4gX2ZlYXR1cmVJZC5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmVcbiAgICAgKiBAcmV0dXJucyB7QXJ0aWZhY3REZWZpbml0aW9uW119XG4gICAgICovXG4gICAgZ2V0IGNvbW1hbmRzKCkge1xuICAgICAgICByZXR1cm4gX2NvbW1hbmRzLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZVxuICAgICAqIEByZXR1cm5zIHtBcnRpZmFjdERlZmluaXRpb25bXX1cbiAgICAgKi9cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gX2V2ZW50cy5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmVcbiAgICAgKiBAcmV0dXJucyB7QXJ0aWZhY3REZWZpbml0aW9uW119XG4gICAgICovXG4gICAgZ2V0IGV2ZW50U291cmNlcygpIHtcbiAgICAgICAgcmV0dXJuIF9ldmVudFNvdXJjZXMuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlXG4gICAgICogQHJldHVybnMge0FydGlmYWN0RGVmaW5pdGlvbltdfVxuICAgICAqL1xuICAgIGdldCByZWFkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gX3JlYWRNb2RlbHMuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlXG4gICAgICogQHJldHVybnMge0FydGlmYWN0RGVmaW5pdGlvbltdfVxuICAgICAqL1xuICAgIGdldCBxdWVyaWVzKCkge1xuICAgICAgICByZXR1cm4gX3F1ZXJpZXMuZ2V0KHRoaXMpO1xuICAgIH1cbn0iXX0=