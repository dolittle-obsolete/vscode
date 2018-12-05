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
         * @param {BoundedContextNode | FeatureNode} element
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
                this._config.boundedContexts.forEach(function (boundedContext) {
                    boundedContextNodes.push(createBoundedContextNode(boundedContext));
                });
                return Promise.resolve(boundedContextNodes);
            } else {
                return Promise.resolve(element.children);
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
            featureNodes.push(featureNode);
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
        return new _ArtifactNode.ArtifactNode(artifact.name, _vscode.TreeItemCollapsibleState.None, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.eventSources.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, _vscode.TreeItemCollapsibleState.None, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.events.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, _vscode.TreeItemCollapsibleState.None, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.queries.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, _vscode.TreeItemCollapsibleState.None, artifact.artifact);
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.readModels.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name, _vscode.TreeItemCollapsibleState.None, artifact.artifact);
    })))))();
    return artifacts;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIiLCJjb25maWciLCJfb25EaWRDaGFuZ2VUcmVlRGF0YSIsIkV2ZW50RW1pdHRlciIsIl9jb25maWciLCJmaXJlIiwiZWxlbWVudCIsImJvdW5kZWRDb250ZXh0cyIsImxlbmd0aCIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuZGVmaW5lZCIsImJvdW5kZWRDb250ZXh0Tm9kZXMiLCJmb3JFYWNoIiwicHVzaCIsImNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZSIsImJvdW5kZWRDb250ZXh0IiwiY2hpbGRyZW4iLCJldmVudCIsIm5vZGUiLCJCb3VuZGVkQ29udGV4dE5vZGUiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUiLCJDb2xsYXBzZWQiLCJmaW5kQWxsRmVhdHVyZXMiLCJhZGRGZWF0dXJlIiwiaXRlbSIsImFydGlmYWN0cyIsImZlYXR1cmVOb2RlcyIsImZlYXR1cmUiLCJ0b3BvbG9neSIsImZpbmRGZWF0dXJlIiwiYXJ0aWZhY3RzUGVyRmVhdHVyZSIsImZlYXR1cmVJZCIsImVyck1zZyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dFcnJvck1lc3NhZ2UiLCJmZWF0dXJlTm9kZSIsIkZlYXR1cmVOb2RlIiwibmFtZSIsImJ1aWxkQXJ0aWZhY3ROb2RlcyIsImFkZEFydGlmYWN0IiwiYXJ0aWZhY3QiLCJBcnJheSIsImNvbW1hbmRzIiwibWFwIiwiQXJ0aWZhY3ROb2RlIiwiTm9uZSIsImV2ZW50U291cmNlcyIsImV2ZW50cyIsInF1ZXJpZXMiLCJyZWFkTW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FB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QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQ2xCLGlDQUF5QjBCLElBQXpELEVBQStETCxTQUFTQSxRQUF4RSxDQUFaO0FBQUEsS0FBakMsQ0FESCxvQ0FFR1gsb0JBQW9CaUIsWUFBcEIsQ0FBaUNILEdBQWpDLENBQXFDO0FBQUEsZUFBWSxJQUFJQywwQkFBSixDQUFpQkosU0FBU0gsSUFBMUIsRUFBZ0NsQixpQ0FBeUIwQixJQUF6RCxFQUErREwsU0FBU0EsUUFBeEUsQ0FBWjtBQUFBLEtBQXJDLENBRkgsb0NBR0dYLG9CQUFvQmtCLE1BQXBCLENBQTJCSixHQUEzQixDQUErQjtBQUFBLGVBQVksSUFBSUMsMEJBQUosQ0FBaUJKLFNBQVNILElBQTFCLEVBQWdDbEIsaUNBQXlCMEIsSUFBekQsRUFBK0RMLFNBQVNBLFFBQXhFLENBQVo7QUFBQSxLQUEvQixDQUhILG9DQUlHWCxvQkFBb0JtQixPQUFwQixDQUE0QkwsR0FBNUIsQ0FBZ0M7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQ2xCLGlDQUF5QjBCLElBQXpELEVBQStETCxTQUFTQSxRQUF4RSxDQUFaO0FBQUEsS0FBaEMsQ0FKSCxvQ0FLR1gsb0JBQW9Cb0IsVUFBcEIsQ0FBK0JOLEdBQS9CLENBQW1DO0FBQUEsZUFBWSxJQUFJQywwQkFBSixDQUFpQkosU0FBU0gsSUFBMUIsRUFBZ0NsQixpQ0FBeUIwQixJQUF6RCxFQUErREwsU0FBU0EsUUFBeEUsQ0FBWjtBQUFBLEtBQW5DLENBTEgsTUFBSjtBQU9BLFdBQU9oQixTQUFQO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHROb2RlIH0gZnJvbSAnLi9Cb3VuZGVkQ29udGV4dE5vZGUnO1xuaW1wb3J0IHsgRmVhdHVyZU5vZGUgfSBmcm9tICcuL0ZlYXR1cmVOb2RlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0ZlYXR1cmUnO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9Cb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlIH0gZnJvbSAndnNjb2RlJztcbmltcG9ydCB7IEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9BcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZSc7XG5pbXBvcnQgeyBBcnRpZmFjdE5vZGUgfSBmcm9tICcuL0FydGlmYWN0Tm9kZSc7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuXG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5cbiAgICAgKiBAcGFyYW0ge1Byb2plY3RDb25maWd1cmF0aW9ufSBjb25maWdcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHsgICAgXG4gICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlVHJlZURhdGEgPSBuZXcgdnNjb2RlLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyXG4gICAgICovXG4gICAgZ2V0IG9uRGlkQ2hhbmdlVHJlZURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkRpZENoYW5nZVRyZWVEYXRhLmV2ZW50O1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlVHJlZURhdGEuZmlyZSgpO1xuICAgIH1cblxuICAgIGdldFRyZWVJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm91bmRlZENvbnRleHROb2RlIHwgRmVhdHVyZU5vZGV9IGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGZWF0dXJlTm9kZVtdIHwgQm91bmRlZENvbnRleHROb2RlW10+fVxuICAgICAqL1xuICAgIGdldENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGVkQ29udGV4dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoJ05vIGJvdW5kZWQgY29udGV4dHMgaW4gdGhpcyBwcm9qZWN0Jyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgYm91bmRlZENvbnRleHROb2RlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmJvdW5kZWRDb250ZXh0cy5mb3JFYWNoKCBib3VuZGVkQ29udGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgYm91bmRlZENvbnRleHROb2Rlcy5wdXNoKGNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZShib3VuZGVkQ29udGV4dCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGJvdW5kZWRDb250ZXh0Tm9kZXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLyoqXG4gKiBDcmVhdGVzIGEgYm91bmRlZCBjb250ZXh0IG5vZGVcbiAqXG4gKiBAcGFyYW0ge0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbn0gYm91bmRlZENvbnRleHRcbiAqIEByZXR1cm5zIHtCb3VuZGVkQ29udGV4dE5vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZShib3VuZGVkQ29udGV4dCkge1xuICAgIGxldCBub2RlID0gbmV3IEJvdW5kZWRDb250ZXh0Tm9kZShib3VuZGVkQ29udGV4dC5ib3VuZGVkQ29udGV4dE5hbWUsIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Db2xsYXBzZWQsIGJvdW5kZWRDb250ZXh0LmJvdW5kZWRDb250ZXh0KTtcbiAgICBcbiAgICBmaW5kQWxsRmVhdHVyZXMoYm91bmRlZENvbnRleHQpLmZvckVhY2goaXRlbSA9PiBub2RlLmFkZEZlYXR1cmUoaXRlbSkpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYWxsIHRoZSBmZWF0dXJlcyBmb3IgYSBCb3VuZGVkQ29udGV4dE5vZGVcbiAqXG4gKiBAcGFyYW0ge0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbn0gYm91bmRlZENvbnRleHRcbiAqIEByZXR1cm5zIHtGZWF0dXJlTm9kZVtdfVxuICovXG5mdW5jdGlvbiBmaW5kQWxsRmVhdHVyZXMoYm91bmRlZENvbnRleHQpIHtcbiAgICBsZXQgYXJ0aWZhY3RzID0gYm91bmRlZENvbnRleHQuYXJ0aWZhY3RzO1xuICAgIGxldCBmZWF0dXJlTm9kZXMgPSBbXTtcbiAgICBhcnRpZmFjdHMuYXJ0aWZhY3RzLmZvckVhY2goYXJ0aWZhY3RzUGVyRmVhdHVyZSA9PiB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gYm91bmRlZENvbnRleHQudG9wb2xvZ3kuZmluZEZlYXR1cmUoYXJ0aWZhY3RzUGVyRmVhdHVyZS5mZWF0dXJlSWQpO1xuICAgICAgICBpZiAoZmVhdHVyZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZXJyTXNnID0gYEZvdW5kIGZlYXR1cmUgd2l0aCBpZDogJyR7YXJ0aWZhY3RzUGVyRmVhdHVyZS5mZWF0dXJlSWR9JyB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHRvcG9sb2d5YDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShlcnJNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZlYXR1cmVOb2RlID0gbmV3IEZlYXR1cmVOb2RlKGZlYXR1cmUubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLkNvbGxhcHNlZCwgZmVhdHVyZSk7XG4gICAgICAgICAgICBidWlsZEFydGlmYWN0Tm9kZXMoYXJ0aWZhY3RzUGVyRmVhdHVyZSkuZm9yRWFjaChhcnRpZmFjdCA9PiB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuYWRkQXJ0aWZhY3QoYXJ0aWZhY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmZWF0dXJlTm9kZXMucHVzaChmZWF0dXJlTm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmVhdHVyZU5vZGVzO1xufVxuLyoqXG4gKlxuICpcbiAqIEBwYXJhbSB7QXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmV9IGFydGlmYWN0c1BlckZlYXR1cmVcbiAqIEByZXR1cm5zIHtBcnRpZmFjdE5vZGVbXX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRBcnRpZmFjdE5vZGVzKGFydGlmYWN0c1BlckZlYXR1cmUpIHtcbiAgICBsZXQgYXJ0aWZhY3RzID0gbmV3IEFycmF5IChcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5jb21tYW5kcy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuTm9uZSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5ldmVudFNvdXJjZXMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUsIGFydGlmYWN0LmFydGlmYWN0KSksXG4gICAgICAgIC4uLmFydGlmYWN0c1BlckZlYXR1cmUuZXZlbnRzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3ROb2RlKGFydGlmYWN0Lm5hbWUsIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Ob25lLCBhcnRpZmFjdC5hcnRpZmFjdCkpLFxuICAgICAgICAuLi5hcnRpZmFjdHNQZXJGZWF0dXJlLnF1ZXJpZXMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUsIGFydGlmYWN0LmFydGlmYWN0KSksXG4gICAgICAgIC4uLmFydGlmYWN0c1BlckZlYXR1cmUucmVhZE1vZGVscy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuTm9uZSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICApO1xuICAgIHJldHVybiBhcnRpZmFjdHM7XG59XG4iXX0=