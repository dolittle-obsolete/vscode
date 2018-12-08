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

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

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
            _globals2.default.dolittleProjectOutputChannel.appendLine(errMsg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIiLCJjb25maWciLCJfb25EaWRDaGFuZ2VUcmVlRGF0YSIsIkV2ZW50RW1pdHRlciIsIl9jb25maWciLCJmaXJlIiwiZWxlbWVudCIsImJvdW5kZWRDb250ZXh0cyIsImxlbmd0aCIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuZGVmaW5lZCIsImJvdW5kZWRDb250ZXh0Tm9kZXMiLCJmb3JFYWNoIiwicHVzaCIsImNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZSIsImJvdW5kZWRDb250ZXh0IiwiY2hpbGRyZW4iLCJldmVudCIsIm5vZGUiLCJCb3VuZGVkQ29udGV4dE5vZGUiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUiLCJDb2xsYXBzZWQiLCJmaW5kQWxsRmVhdHVyZXMiLCJhZGRGZWF0dXJlIiwiaXRlbSIsImFydGlmYWN0cyIsImZlYXR1cmVOb2RlcyIsImZlYXR1cmUiLCJ0b3BvbG9neSIsImZpbmRGZWF0dXJlIiwiYXJ0aWZhY3RzUGVyRmVhdHVyZSIsImZlYXR1cmVJZCIsImVyck1zZyIsImdsb2JhbHMiLCJkb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsIiwiYXBwZW5kTGluZSIsImZlYXR1cmVOb2RlIiwiRmVhdHVyZU5vZGUiLCJuYW1lIiwiYnVpbGRBcnRpZmFjdE5vZGVzIiwiYWRkQXJ0aWZhY3QiLCJhcnRpZmFjdCIsIkFycmF5IiwiY29tbWFuZHMiLCJtYXAiLCJBcnRpZmFjdE5vZGUiLCJOb25lIiwiZXZlbnRTb3VyY2VzIiwiZXZlbnRzIiwicXVlcmllcyIsInJlYWRNb2RlbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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LGVBQVksSUFBSUMsMEJBQUosQ0FBaUJKLFNBQVNILElBQTFCLEVBQWdDbEIsaUNBQXlCMEIsSUFBekQsRUFBK0RMLFNBQVNBLFFBQXhFLENBQVo7QUFBQSxLQUFqQyxDQURILG9DQUVHWCxvQkFBb0JpQixZQUFwQixDQUFpQ0gsR0FBakMsQ0FBcUM7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQ2xCLGlDQUF5QjBCLElBQXpELEVBQStETCxTQUFTQSxRQUF4RSxDQUFaO0FBQUEsS0FBckMsQ0FGSCxvQ0FHR1gsb0JBQW9Ca0IsTUFBcEIsQ0FBMkJKLEdBQTNCLENBQStCO0FBQUEsZUFBWSxJQUFJQywwQkFBSixDQUFpQkosU0FBU0gsSUFBMUIsRUFBZ0NsQixpQ0FBeUIwQixJQUF6RCxFQUErREwsU0FBU0EsUUFBeEUsQ0FBWjtBQUFBLEtBQS9CLENBSEgsb0NBSUdYLG9CQUFvQm1CLE9BQXBCLENBQTRCTCxHQUE1QixDQUFnQztBQUFBLGVBQVksSUFBSUMsMEJBQUosQ0FBaUJKLFNBQVNILElBQTFCLEVBQWdDbEIsaUNBQXlCMEIsSUFBekQsRUFBK0RMLFNBQVNBLFFBQXhFLENBQVo7QUFBQSxLQUFoQyxDQUpILG9DQUtHWCxvQkFBb0JvQixVQUFwQixDQUErQk4sR0FBL0IsQ0FBbUM7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCSixTQUFTSCxJQUExQixFQUFnQ2xCLGlDQUF5QjBCLElBQXpELEVBQStETCxTQUFTQSxRQUF4RSxDQUFaO0FBQUEsS0FBbkMsQ0FMSCxNQUFKO0FBT0EsV0FBT2hCLFNBQVA7QUFDSCIsImZpbGUiOiJCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9Qcm9qZWN0Q29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBCb3VuZGVkQ29udGV4dE5vZGUgfSBmcm9tICcuL0JvdW5kZWRDb250ZXh0Tm9kZSc7XG5pbXBvcnQgeyBGZWF0dXJlTm9kZSB9IGZyb20gJy4vRmVhdHVyZU5vZGUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uL0NvbmZpZ3VyYXRpb24vRmVhdHVyZSc7XG5pbXBvcnQgeyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUgfSBmcm9tICd2c2NvZGUnO1xuaW1wb3J0IHsgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0FydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlJztcbmltcG9ydCB7IEFydGlmYWN0Tm9kZSB9IGZyb20gJy4vQXJ0aWZhY3ROb2RlJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xuXG5jb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcblxuZXhwb3J0IGNsYXNzIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyIHtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIuXG4gICAgICogQHBhcmFtIHtQcm9qZWN0Q29uZmlndXJhdGlvbn0gY29uZmlnXG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7ICAgIFxuICAgICAgICB0aGlzLl9vbkRpZENoYW5nZVRyZWVEYXRhID0gbmV3IHZzY29kZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlclxuICAgICAqL1xuICAgIGdldCBvbkRpZENoYW5nZVRyZWVEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25EaWRDaGFuZ2VUcmVlRGF0YS5ldmVudDtcbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLl9vbkRpZENoYW5nZVRyZWVEYXRhLmZpcmUoKTtcbiAgICB9XG5cbiAgICBnZXRUcmVlSXRlbShlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0JvdW5kZWRDb250ZXh0Tm9kZSB8IEZlYXR1cmVOb2RlfSBlbGVtZW50XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8RmVhdHVyZU5vZGVbXSB8IEJvdW5kZWRDb250ZXh0Tm9kZVtdPn1cbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRlZENvbnRleHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdObyBib3VuZGVkIGNvbnRleHRzIGluIHRoaXMgcHJvamVjdCcpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGJvdW5kZWRDb250ZXh0Tm9kZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5ib3VuZGVkQ29udGV4dHMuZm9yRWFjaCggYm91bmRlZENvbnRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGJvdW5kZWRDb250ZXh0Tm9kZXMucHVzaChjcmVhdGVCb3VuZGVkQ29udGV4dE5vZGUoYm91bmRlZENvbnRleHQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShib3VuZGVkQ29udGV4dE5vZGVzKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGJvdW5kZWQgY29udGV4dCBub2RlXG4gKlxuICogQHBhcmFtIHtCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb259IGJvdW5kZWRDb250ZXh0XG4gKiBAcmV0dXJucyB7Qm91bmRlZENvbnRleHROb2RlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVCb3VuZGVkQ29udGV4dE5vZGUoYm91bmRlZENvbnRleHQpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBCb3VuZGVkQ29udGV4dE5vZGUoYm91bmRlZENvbnRleHQuYm91bmRlZENvbnRleHROYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuQ29sbGFwc2VkLCBib3VuZGVkQ29udGV4dC5ib3VuZGVkQ29udGV4dCk7XG4gICAgXG4gICAgZmluZEFsbEZlYXR1cmVzKGJvdW5kZWRDb250ZXh0KS5mb3JFYWNoKGl0ZW0gPT4gbm9kZS5hZGRGZWF0dXJlKGl0ZW0pKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFsbCB0aGUgZmVhdHVyZXMgZm9yIGEgQm91bmRlZENvbnRleHROb2RlXG4gKlxuICogQHBhcmFtIHtCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb259IGJvdW5kZWRDb250ZXh0XG4gKiBAcmV0dXJucyB7RmVhdHVyZU5vZGVbXX1cbiAqL1xuZnVuY3Rpb24gZmluZEFsbEZlYXR1cmVzKGJvdW5kZWRDb250ZXh0KSB7XG4gICAgbGV0IGFydGlmYWN0cyA9IGJvdW5kZWRDb250ZXh0LmFydGlmYWN0cztcbiAgICBsZXQgZmVhdHVyZU5vZGVzID0gW107XG4gICAgYXJ0aWZhY3RzLmFydGlmYWN0cy5mb3JFYWNoKGFydGlmYWN0c1BlckZlYXR1cmUgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZSA9IGJvdW5kZWRDb250ZXh0LnRvcG9sb2d5LmZpbmRGZWF0dXJlKGFydGlmYWN0c1BlckZlYXR1cmUuZmVhdHVyZUlkKTtcbiAgICAgICAgaWYgKGZlYXR1cmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyck1zZyA9IGBGb3VuZCBmZWF0dXJlIHdpdGggaWQ6ICcke2FydGlmYWN0c1BlckZlYXR1cmUuZmVhdHVyZUlkfScgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSB0b3BvbG9neWA7XG4gICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwuYXBwZW5kTGluZShlcnJNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZlYXR1cmVOb2RlID0gbmV3IEZlYXR1cmVOb2RlKGZlYXR1cmUubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLkNvbGxhcHNlZCwgZmVhdHVyZSk7XG4gICAgICAgICAgICBidWlsZEFydGlmYWN0Tm9kZXMoYXJ0aWZhY3RzUGVyRmVhdHVyZSkuZm9yRWFjaChhcnRpZmFjdCA9PiB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuYWRkQXJ0aWZhY3QoYXJ0aWZhY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmZWF0dXJlTm9kZXMucHVzaChmZWF0dXJlTm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmVhdHVyZU5vZGVzO1xufVxuLyoqXG4gKlxuICpcbiAqIEBwYXJhbSB7QXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmV9IGFydGlmYWN0c1BlckZlYXR1cmVcbiAqIEByZXR1cm5zIHtBcnRpZmFjdE5vZGVbXX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRBcnRpZmFjdE5vZGVzKGFydGlmYWN0c1BlckZlYXR1cmUpIHtcbiAgICBsZXQgYXJ0aWZhY3RzID0gbmV3IEFycmF5IChcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5jb21tYW5kcy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuTm9uZSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5ldmVudFNvdXJjZXMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUsIGFydGlmYWN0LmFydGlmYWN0KSksXG4gICAgICAgIC4uLmFydGlmYWN0c1BlckZlYXR1cmUuZXZlbnRzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3ROb2RlKGFydGlmYWN0Lm5hbWUsIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Ob25lLCBhcnRpZmFjdC5hcnRpZmFjdCkpLFxuICAgICAgICAuLi5hcnRpZmFjdHNQZXJGZWF0dXJlLnF1ZXJpZXMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUsIGFydGlmYWN0LmFydGlmYWN0KSksXG4gICAgICAgIC4uLmFydGlmYWN0c1BlckZlYXR1cmUucmVhZE1vZGVscy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuTm9uZSwgYXJ0aWZhY3QuYXJ0aWZhY3QpKSxcbiAgICApO1xuICAgIHJldHVybiBhcnRpZmFjdHM7XG59XG4iXX0=