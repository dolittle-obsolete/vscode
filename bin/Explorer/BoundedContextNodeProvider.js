'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundedContextNodeProvider = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProjectConfiguration = require('../Configuration/ProjectConfiguration');

var _BoundedContextNode = require('./BoundedContextNode');

var _FeatureNode = require('./FeatureNode');

var _Feature = require('../Configuration/Feature');

var _BoundedContextConfiguration = require('../Configuration/BoundedContextConfiguration');

var _vscode = require('vscode');

var _ArtifactDefinitionsPerFeature = require('../Configuration/ArtifactDefinitionsPerFeature');

var _ArtifactNode = require('./ArtifactNode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vscode = require('vscode');

var BoundedContextNodeProvider = exports.BoundedContextNodeProvider = function () {
    /**
     *Creates an instance of BoundedContextNodeProvider.
     * @param {ProjectConfiguration} config
     * @memberof BoundedContextNodeProvider
     */
    function BoundedContextNodeProvider(config) {
        (0, _classCallCheck3.default)(this, BoundedContextNodeProvider);

        this._onDidChangeTreeData = new vscode.EventEmitter();
        this._config = config;
    }
    /**
     * 
     *
     * @readonly
     * @memberof BoundedContextNodeProvider
     */


    (0, _createClass3.default)(BoundedContextNodeProvider, [{
        key: 'refresh',
        value: function refresh() {
            this._onDidChangeTreeData.fire();
        }
    }, {
        key: 'getTreeItem',
        value: function getTreeItem(element) {
            return element;
        }

        /**
         *
         *
         * @param {BoundedContextNode} element
         * @memberof BoundedContextNodeProvider
         * @returns {Promise<FeatureNode[] | BoundedContextNode[]>}
         */

    }, {
        key: 'getChildren',
        value: function getChildren(element) {
            if (this._config.boundedContexts.length === 0) {
                vscode.window.showInformationMessage('No bounded contexts in this project');
                return Promise.resolve([]);
            }
            if (element === undefined) {
                var boundedContextNodes = [];
                console.log('Creating bounded context nodes');
                this._config.boundedContexts.forEach(function (boundedContext) {
                    boundedContextNodes.push(createBoundedContextNode(boundedContext));
                });
                return Promise.resolve(boundedContextNodes);
            } else {
                return Promise.resolve(element.features);
            }
        }
    }, {
        key: 'onDidChangeTreeData',
        get: function get() {
            return this._onDidChangeTreeData.event;
        }
    }]);
    return BoundedContextNodeProvider;
}();
/**
 * Creates a bounded context node
 *
 * @param {BoundedContextConfiguration} boundedContext
 * @returns {BoundedContextNode}
 */


function createBoundedContextNode(boundedContext) {
    var node = new _BoundedContextNode.BoundedContextNode(boundedContext.boundedContextName, _vscode.TreeItemCollapsibleState.Collapsed, boundedContext.boundedContext);

    findAllFeatures(boundedContext).forEach(function (item) {
        return node.addFeature(item);
    });
    return node;
}

/**
 * Creates all the features for a BoundedContextNode
 *
 * @param {BoundedContextConfiguration} boundedContext
 * @returns {FeatureNode[]}
 */
function findAllFeatures(boundedContext) {
    var artifacts = boundedContext.artifacts;
    var featureNodes = [];
    artifacts.artifacts.forEach(function (artifactsPerFeature) {
        var feature = boundedContext.topology.findFeature(artifactsPerFeature.featureId);
        if (feature === null) {
            var errMsg = 'Found feature with id: \'' + artifactsPerFeature.featureId + '\' that doesn\'t exist in the topology';
            console.error(errMsg);
            vscode.window.showErrorMessage(errMsg);
        } else {
            var featureNode = new _FeatureNode.FeatureNode(feature.name, _vscode.TreeItemCollapsibleState.Collapsed, feature);
            buildArtifactNodes(artifactsPerFeature).forEach(function (artifact) {
                featureNode.addArtifact(artifact);
            });
            featureNodes.push(feature);
        }
    });
    return featureNodes;
}
/**
 *
 *
 * @param {ArtifactDefinitionsPerFeature} artifactsPerFeature
 * @returns {ArtifactNode[]}
 */
function buildArtifactNodes(artifactsPerFeature) {
    var artifacts = new (Function.prototype.bind.apply(Array, [null].concat((0, _toConsumableArray3.default)(artifactsPerFeature.commands.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, 'command', artifact.area, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.eventSources.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, 'eventSource', artifact.area, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.events.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, 'event', artifact.area, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.queries.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, 'query', artifact.area, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.readModels.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, 'readModel', artifact.area, artifact.artifact);
    })))))();
    return artifacts;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIiLCJjb25maWciLCJfb25EaWRDaGFuZ2VUcmVlRGF0YSIsIkV2ZW50RW1pdHRlciIsIl9jb25maWciLCJmaXJlIiwiZWxlbWVudCIsImJvdW5kZWRDb250ZXh0cyIsImxlbmd0aCIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuZGVmaW5lZCIsImJvdW5kZWRDb250ZXh0Tm9kZXMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInB1c2giLCJjcmVhdGVCb3VuZGVkQ29udGV4dE5vZGUiLCJib3VuZGVkQ29udGV4dCIsImZlYXR1cmVzIiwiZXZlbnQiLCJub2RlIiwiQm91bmRlZENvbnRleHROb2RlIiwiYm91bmRlZENvbnRleHROYW1lIiwiVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlIiwiQ29sbGFwc2VkIiwiZmluZEFsbEZlYXR1cmVzIiwiYWRkRmVhdHVyZSIsIml0ZW0iLCJhcnRpZmFjdHMiLCJmZWF0dXJlTm9kZXMiLCJmZWF0dXJlIiwidG9wb2xvZ3kiLCJmaW5kRmVhdHVyZSIsImFydGlmYWN0c1BlckZlYXR1cmUiLCJmZWF0dXJlSWQiLCJlcnJNc2ciLCJlcnJvciIsInNob3dFcnJvck1lc3NhZ2UiLCJmZWF0dXJlTm9kZSIsIkZlYXR1cmVOb2RlIiwibmFtZSIsImJ1aWxkQXJ0aWZhY3ROb2RlcyIsImFkZEFydGlmYWN0IiwiYXJ0aWZhY3QiLCJBcnJheSIsImNvbW1hbmRzIiwibWFwIiwiQXJ0aWZhY3ROb2RlIiwiYXJlYSIsImV2ZW50U291cmNlcyIsImV2ZW50cyIsInF1ZXJpZXMiLCJyZWFkTW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FB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R1gsb0JBQW9CWSxRQUFwQixDQUE2QkMsR0FBN0IsQ0FBaUM7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQyxTQUFoQyxFQUEyQ0csU0FBU0ssSUFBcEQsRUFBMERMLFNBQVNBLFFBQW5FLENBQVo7QUFBQSxLQUFqQyxDQURILG9DQUVHVixvQkFBb0JnQixZQUFwQixDQUFpQ0gsR0FBakMsQ0FBcUM7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQyxhQUFoQyxFQUErQ0csU0FBU0ssSUFBeEQsRUFBOERMLFNBQVNBLFFBQXZFLENBQVo7QUFBQSxLQUFyQyxDQUZILG9DQUdHVixvQkFBb0JpQixNQUFwQixDQUEyQkosR0FBM0IsQ0FBK0I7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQyxPQUFoQyxFQUF5Q0csU0FBU0ssSUFBbEQsRUFBd0RMLFNBQVNBLFFBQWpFLENBQVo7QUFBQSxLQUEvQixDQUhILG9DQUlHVixvQkFBb0JrQixPQUFwQixDQUE0QkwsR0FBNUIsQ0FBZ0M7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQyxPQUFoQyxFQUF5Q0csU0FBU0ssSUFBbEQsRUFBd0RMLFNBQVNBLFFBQWpFLENBQVo7QUFBQSxLQUFoQyxDQUpILG9DQUtHVixvQkFBb0JtQixVQUFwQixDQUErQk4sR0FBL0IsQ0FBbUM7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQyxXQUFoQyxFQUE2Q0csU0FBU0ssSUFBdEQsRUFBNERMLFNBQVNBLFFBQXJFLENBQVo7QUFBQSxLQUFuQyxDQUxILE1BQUo7QUFPQSxXQUFPZixTQUFQO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHROb2RlIH0gZnJvbSAnLi9Cb3VuZGVkQ29udGV4dE5vZGUnO1xuaW1wb3J0IHsgRmVhdHVyZU5vZGUgfSBmcm9tICcuL0ZlYXR1cmVOb2RlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0ZlYXR1cmUnO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9Cb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlIH0gZnJvbSAndnNjb2RlJztcbmltcG9ydCB7IEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9BcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZSc7XG5pbXBvcnQgeyBBcnRpZmFjdE5vZGUgfSBmcm9tICcuL0FydGlmYWN0Tm9kZSc7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuXG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5cbiAgICAgKiBAcGFyYW0ge1Byb2plY3RDb25maWd1cmF0aW9ufSBjb25maWdcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHsgICAgXG4gICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlVHJlZURhdGEgPSBuZXcgdnNjb2RlLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyXG4gICAgICovXG4gICAgZ2V0IG9uRGlkQ2hhbmdlVHJlZURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkRpZENoYW5nZVRyZWVEYXRhLmV2ZW50O1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlVHJlZURhdGEuZmlyZSgpO1xuICAgIH1cblxuICAgIGdldFRyZWVJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm91bmRlZENvbnRleHROb2RlfSBlbGVtZW50XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8RmVhdHVyZU5vZGVbXSB8IEJvdW5kZWRDb250ZXh0Tm9kZVtdPn1cbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRlZENvbnRleHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdObyBib3VuZGVkIGNvbnRleHRzIGluIHRoaXMgcHJvamVjdCcpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGJvdW5kZWRDb250ZXh0Tm9kZXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBib3VuZGVkIGNvbnRleHQgbm9kZXMnKVxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmJvdW5kZWRDb250ZXh0cy5mb3JFYWNoKCBib3VuZGVkQ29udGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgYm91bmRlZENvbnRleHROb2Rlcy5wdXNoKGNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZShib3VuZGVkQ29udGV4dCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGJvdW5kZWRDb250ZXh0Tm9kZXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuZmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLyoqXG4gKiBDcmVhdGVzIGEgYm91bmRlZCBjb250ZXh0IG5vZGVcbiAqXG4gKiBAcGFyYW0ge0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbn0gYm91bmRlZENvbnRleHRcbiAqIEByZXR1cm5zIHtCb3VuZGVkQ29udGV4dE5vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZShib3VuZGVkQ29udGV4dCkge1xuICAgIGxldCBub2RlID0gbmV3IEJvdW5kZWRDb250ZXh0Tm9kZShib3VuZGVkQ29udGV4dC5ib3VuZGVkQ29udGV4dE5hbWUsIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Db2xsYXBzZWQsIGJvdW5kZWRDb250ZXh0LmJvdW5kZWRDb250ZXh0KTtcbiAgICBcbiAgICBmaW5kQWxsRmVhdHVyZXMoYm91bmRlZENvbnRleHQpLmZvckVhY2goaXRlbSA9PiBub2RlLmFkZEZlYXR1cmUoaXRlbSkpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYWxsIHRoZSBmZWF0dXJlcyBmb3IgYSBCb3VuZGVkQ29udGV4dE5vZGVcbiAqXG4gKiBAcGFyYW0ge0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbn0gYm91bmRlZENvbnRleHRcbiAqIEByZXR1cm5zIHtGZWF0dXJlTm9kZVtdfVxuICovXG5mdW5jdGlvbiBmaW5kQWxsRmVhdHVyZXMoYm91bmRlZENvbnRleHQpIHtcbiAgICBsZXQgYXJ0aWZhY3RzID0gYm91bmRlZENvbnRleHQuYXJ0aWZhY3RzO1xuICAgIGxldCBmZWF0dXJlTm9kZXMgPSBbXTtcbiAgICBhcnRpZmFjdHMuYXJ0aWZhY3RzLmZvckVhY2goYXJ0aWZhY3RzUGVyRmVhdHVyZSA9PiB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gYm91bmRlZENvbnRleHQudG9wb2xvZ3kuZmluZEZlYXR1cmUoYXJ0aWZhY3RzUGVyRmVhdHVyZS5mZWF0dXJlSWQpO1xuICAgICAgICBpZiAoZmVhdHVyZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZXJyTXNnID0gYEZvdW5kIGZlYXR1cmUgd2l0aCBpZDogJyR7YXJ0aWZhY3RzUGVyRmVhdHVyZS5mZWF0dXJlSWR9JyB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHRvcG9sb2d5YDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShlcnJNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZlYXR1cmVOb2RlID0gbmV3IEZlYXR1cmVOb2RlKGZlYXR1cmUubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLkNvbGxhcHNlZCwgZmVhdHVyZSk7XG4gICAgICAgICAgICBidWlsZEFydGlmYWN0Tm9kZXMoYXJ0aWZhY3RzUGVyRmVhdHVyZSkuZm9yRWFjaChhcnRpZmFjdCA9PiB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuYWRkQXJ0aWZhY3QoYXJ0aWZhY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmZWF0dXJlTm9kZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmZWF0dXJlTm9kZXM7XG59XG4vKipcbiAqXG4gKlxuICogQHBhcmFtIHtBcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZX0gYXJ0aWZhY3RzUGVyRmVhdHVyZVxuICogQHJldHVybnMge0FydGlmYWN0Tm9kZVtdfVxuICovXG5mdW5jdGlvbiBidWlsZEFydGlmYWN0Tm9kZXMoYXJ0aWZhY3RzUGVyRmVhdHVyZSkge1xuICAgIGxldCBhcnRpZmFjdHMgPSBuZXcgQXJyYXkgKFxuICAgICAgICAuLi5hcnRpZmFjdHNQZXJGZWF0dXJlLmNvbW1hbmRzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3ROb2RlKGFydGlmYWN0Lm5hbWUsICdjb21tYW5kJywgYXJ0aWZhY3QuYXJlYSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5ldmVudFNvdXJjZXMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSwgJ2V2ZW50U291cmNlJywgYXJ0aWZhY3QuYXJlYSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5ldmVudHMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSwgJ2V2ZW50JywgYXJ0aWZhY3QuYXJlYSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5xdWVyaWVzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3ROb2RlKGFydGlmYWN0Lm5hbWUsICdxdWVyeScsIGFydGlmYWN0LmFyZWEsIGFydGlmYWN0LmFydGlmYWN0KSksXG4gICAgICAgIC4uLmFydGlmYWN0c1BlckZlYXR1cmUucmVhZE1vZGVscy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lLCAncmVhZE1vZGVsJywgYXJ0aWZhY3QuYXJlYSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICApO1xuICAgIHJldHVybiBhcnRpZmFjdHM7XG59XG4iXX0=