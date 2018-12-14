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

var _Artifacts = require('../Configuration/Artifacts');

var _ModuleNode = require('./ModuleNode');

var _ModuleDefinition = require('../Configuration/ModuleDefinition');

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
         * @returns {Promise<any[]>}
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

    findNodes(boundedContext).forEach(function (item) {
        return node.addChildNode(item);
    });
    return node;
}

/**
 * Creates all the features for a BoundedContextNode
 *
 * @param {BoundedContextConfiguration} boundedContext
 * @returns {FeatureNode[] | ModuleNode[]}
 */
function findNodes(boundedContext) {
    var artifacts = boundedContext.artifacts;
    var nodes = [];
    if (!boundedContext.topology.hasModules()) {
        boundedContext.topology.features.forEach(function (feature) {
            nodes.push(createFeatureNode(feature, artifacts));
        });
    } else {
        boundedContext.topology.modules.forEach(function (module) {
            nodes.push(createModuleNode(module, artifacts));
        });
    }
    return nodes;
}
/**
 *
 *
 * @param {ModuleDefinition} module
 * @param {Artifacts} artifacts
 * @returns {ModuleNode}
 */
function createModuleNode(module, artifacts) {
    var moduleNode = new _ModuleNode.ModuleNode(module.name, _vscode.TreeItemCollapsibleState.Collapsed, module.module);
    module.features.forEach(function (feature) {
        moduleNode.addFeature(createFeatureNode(feature, artifacts));
    });
    return moduleNode;
}
/**
 *
 *
 * @param {Feature} feature
 * @param {Artifacts} artifacts
 * @returns {FeatureNode}
 */
function createFeatureNode(feature, artifacts) {
    var featureNode = new _FeatureNode.FeatureNode(feature.name, _vscode.TreeItemCollapsibleState.Collapsed, feature.feature);
    buildArtifactNodes(artifacts.artifacts.get(feature.feature)).forEach(function (artifact) {
        featureNode.addArtifact(artifact);
    });
    feature.subFeatures.forEach(function (subFeature) {
        featureNode.addSubFeature(createFeatureNode(subFeature, artifacts));
    });

    return featureNode;
}
/**
 *
 *
 * @param {ArtifactDefinitionsPerFeature} artifactsPerFeature
 * @returns {ArtifactNode[]}
 */
function buildArtifactNodes(artifactsPerFeature) {
    var artifacts = new (Function.prototype.bind.apply(Array, [null].concat((0, _toConsumableArray3.default)(artifactsPerFeature.commands.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name(), _vscode.TreeItemCollapsibleState.None, artifact.artifact, 'Command');
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.events.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name(), _vscode.TreeItemCollapsibleState.None, artifact.artifact, 'Event');
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.eventSources.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name(), _vscode.TreeItemCollapsibleState.None, artifact.artifact, 'Event Source');
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.readModels.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name(), _vscode.TreeItemCollapsibleState.None, artifact.artifact, 'Read Model');
    })), (0, _toConsumableArray3.default)(artifactsPerFeature.queries.map(function (artifact) {
        return new _ArtifactNode.ArtifactNode(artifact.name(), _vscode.TreeItemCollapsibleState.None, artifact.artifact, 'Query');
    })))))();
    return artifacts;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIiLCJjb25maWciLCJfb25EaWRDaGFuZ2VUcmVlRGF0YSIsIkV2ZW50RW1pdHRlciIsIl9jb25maWciLCJmaXJlIiwiZWxlbWVudCIsImJvdW5kZWRDb250ZXh0cyIsImxlbmd0aCIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuZGVmaW5lZCIsImJvdW5kZWRDb250ZXh0Tm9kZXMiLCJmb3JFYWNoIiwicHVzaCIsImNyZWF0ZUJvdW5kZWRDb250ZXh0Tm9kZSIsImJvdW5kZWRDb250ZXh0IiwiY2hpbGRyZW4iLCJldmVudCIsIm5vZGUiLCJCb3VuZGVkQ29udGV4dE5vZGUiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUiLCJDb2xsYXBzZWQiLCJmaW5kTm9kZXMiLCJhZGRDaGlsZE5vZGUiLCJpdGVtIiwiYXJ0aWZhY3RzIiwibm9kZXMiLCJ0b3BvbG9neSIsImhhc01vZHVsZXMiLCJmZWF0dXJlcyIsImNyZWF0ZUZlYXR1cmVOb2RlIiwiZmVhdHVyZSIsIm1vZHVsZXMiLCJjcmVhdGVNb2R1bGVOb2RlIiwibW9kdWxlIiwibW9kdWxlTm9kZSIsIk1vZHVsZU5vZGUiLCJuYW1lIiwiYWRkRmVhdHVyZSIsImZlYXR1cmVOb2RlIiwiRmVhdHVyZU5vZGUiLCJidWlsZEFydGlmYWN0Tm9kZXMiLCJnZXQiLCJhZGRBcnRpZmFjdCIsImFydGlmYWN0Iiwic3ViRmVhdHVyZXMiLCJhZGRTdWJGZWF0dXJlIiwic3ViRmVhdHVyZSIsImFydGlmYWN0c1BlckZlYXR1cmUiLCJBcnJheSIsImNvbW1hbmRzIiwibWFwIiwiQXJ0aWZhY3ROb2RlIiwiTm9uZSIsImV2ZW50cyIsImV2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RUFBb0YsT0FBcEYsQ0FBWjtBQUFBLEtBQS9CLENBRkgsb0NBR0dJLG9CQUFvQk8sWUFBcEIsQ0FBaUNKLEdBQWpDLENBQXFDO0FBQUEsZUFBWSxJQUFJQywwQkFBSixDQUFpQlIsU0FBU1AsSUFBVCxFQUFqQixFQUFrQ2pCLGlDQUF5QmlDLElBQTNELEVBQWlFVCxTQUFTQSxRQUExRSxFQUFvRixjQUFwRixDQUFaO0FBQUEsS0FBckMsQ0FISCxvQ0FJR0ksb0JBQW9CUSxVQUFwQixDQUErQkwsR0FBL0IsQ0FBbUM7QUFBQSxlQUFZLElBQUlDLDBCQUFKLENBQWlCUixTQUFTUCxJQUFULEVBQWpCLEVBQWtDakIsaUNBQXlCaUMsSUFBM0QsRUFBaUVULFNBQVNBLFFBQTFFLEVBQW9GLFlBQXBGLENBQVo7QUFBQSxLQUFuQyxDQUpILG9DQUtHSSxvQkFBb0JTLE9BQXBCLENBQTRCTixHQUE1QixDQUFnQztBQUFBLGVBQVksSUFBSUMsMEJBQUosQ0FBaUJSLFNBQVNQLElBQVQsRUFBakIsRUFBa0NqQixpQ0FBeUJpQyxJQUEzRCxFQUFpRVQsU0FBU0EsUUFBMUUsRUFBb0YsT0FBcEYsQ0FBWjtBQUFBLEtBQWhDLENBTEgsTUFBSjtBQU9BLFdBQU9uQixTQUFQO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHROb2RlIH0gZnJvbSAnLi9Cb3VuZGVkQ29udGV4dE5vZGUnO1xuaW1wb3J0IHsgRmVhdHVyZU5vZGUgfSBmcm9tICcuL0ZlYXR1cmVOb2RlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0ZlYXR1cmUnO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9Cb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlIH0gZnJvbSAndnNjb2RlJztcbmltcG9ydCB7IEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9BcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZSc7XG5pbXBvcnQgeyBBcnRpZmFjdE5vZGUgfSBmcm9tICcuL0FydGlmYWN0Tm9kZSc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcbmltcG9ydCB7IEFydGlmYWN0cyB9IGZyb20gJy4uL0NvbmZpZ3VyYXRpb24vQXJ0aWZhY3RzJztcbmltcG9ydCB7IE1vZHVsZU5vZGUgfSBmcm9tICcuL01vZHVsZU5vZGUnO1xuaW1wb3J0IHsgTW9kdWxlRGVmaW5pdGlvbiB9IGZyb20gJy4uL0NvbmZpZ3VyYXRpb24vTW9kdWxlRGVmaW5pdGlvbic7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuXG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlci5cbiAgICAgKiBAcGFyYW0ge1Byb2plY3RDb25maWd1cmF0aW9ufSBjb25maWdcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHsgICAgXG4gICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlVHJlZURhdGEgPSBuZXcgdnNjb2RlLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVByb3ZpZGVyXG4gICAgICovXG4gICAgZ2V0IG9uRGlkQ2hhbmdlVHJlZURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkRpZENoYW5nZVRyZWVEYXRhLmV2ZW50O1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlVHJlZURhdGEuZmlyZSgpO1xuICAgIH1cblxuICAgIGdldFRyZWVJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm91bmRlZENvbnRleHROb2RlIHwgRmVhdHVyZU5vZGV9IGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnlbXT59XG4gICAgICovXG4gICAgZ2V0Q2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJvdW5kZWRDb250ZXh0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZSgnTm8gYm91bmRlZCBjb250ZXh0cyBpbiB0aGlzIHByb2plY3QnKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBib3VuZGVkQ29udGV4dE5vZGVzID0gW107XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuYm91bmRlZENvbnRleHRzLmZvckVhY2goIGJvdW5kZWRDb250ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBib3VuZGVkQ29udGV4dE5vZGVzLnB1c2goY3JlYXRlQm91bmRlZENvbnRleHROb2RlKGJvdW5kZWRDb250ZXh0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYm91bmRlZENvbnRleHROb2Rlcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4vKipcbiAqIENyZWF0ZXMgYSBib3VuZGVkIGNvbnRleHQgbm9kZVxuICpcbiAqIEBwYXJhbSB7Qm91bmRlZENvbnRleHRDb25maWd1cmF0aW9ufSBib3VuZGVkQ29udGV4dFxuICogQHJldHVybnMge0JvdW5kZWRDb250ZXh0Tm9kZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQm91bmRlZENvbnRleHROb2RlKGJvdW5kZWRDb250ZXh0KSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgQm91bmRlZENvbnRleHROb2RlKGJvdW5kZWRDb250ZXh0LmJvdW5kZWRDb250ZXh0TmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLkNvbGxhcHNlZCwgYm91bmRlZENvbnRleHQuYm91bmRlZENvbnRleHQpO1xuICAgIFxuICAgIGZpbmROb2Rlcyhib3VuZGVkQ29udGV4dCkuZm9yRWFjaChpdGVtID0+IG5vZGUuYWRkQ2hpbGROb2RlKGl0ZW0pKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFsbCB0aGUgZmVhdHVyZXMgZm9yIGEgQm91bmRlZENvbnRleHROb2RlXG4gKlxuICogQHBhcmFtIHtCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb259IGJvdW5kZWRDb250ZXh0XG4gKiBAcmV0dXJucyB7RmVhdHVyZU5vZGVbXSB8IE1vZHVsZU5vZGVbXX1cbiAqL1xuZnVuY3Rpb24gZmluZE5vZGVzKGJvdW5kZWRDb250ZXh0KSB7XG4gICAgbGV0IGFydGlmYWN0cyA9IGJvdW5kZWRDb250ZXh0LmFydGlmYWN0cztcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBpZiAoIWJvdW5kZWRDb250ZXh0LnRvcG9sb2d5Lmhhc01vZHVsZXMoKSkge1xuICAgICAgICBib3VuZGVkQ29udGV4dC50b3BvbG9neS5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgbm9kZXMucHVzaChjcmVhdGVGZWF0dXJlTm9kZShmZWF0dXJlLCBhcnRpZmFjdHMpKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm91bmRlZENvbnRleHQudG9wb2xvZ3kubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGNyZWF0ZU1vZHVsZU5vZGUobW9kdWxlLCBhcnRpZmFjdHMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBub2Rlcztcbn1cbi8qKlxuICpcbiAqXG4gKiBAcGFyYW0ge01vZHVsZURlZmluaXRpb259IG1vZHVsZVxuICogQHBhcmFtIHtBcnRpZmFjdHN9IGFydGlmYWN0c1xuICogQHJldHVybnMge01vZHVsZU5vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZU5vZGUobW9kdWxlLCBhcnRpZmFjdHMpIHtcbiAgICBsZXQgbW9kdWxlTm9kZSA9IG5ldyBNb2R1bGVOb2RlKG1vZHVsZS5uYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuQ29sbGFwc2VkLCBtb2R1bGUubW9kdWxlKTtcbiAgICBtb2R1bGUuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgbW9kdWxlTm9kZS5hZGRGZWF0dXJlKGNyZWF0ZUZlYXR1cmVOb2RlKGZlYXR1cmUsIGFydGlmYWN0cykpO1xuICAgIH0pO1xuICAgIHJldHVybiBtb2R1bGVOb2RlO1xufVxuLyoqXG4gKlxuICpcbiAqIEBwYXJhbSB7RmVhdHVyZX0gZmVhdHVyZVxuICogQHBhcmFtIHtBcnRpZmFjdHN9IGFydGlmYWN0c1xuICogQHJldHVybnMge0ZlYXR1cmVOb2RlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVGZWF0dXJlTm9kZShmZWF0dXJlLCBhcnRpZmFjdHMpIHtcbiAgICBsZXQgZmVhdHVyZU5vZGUgPSBuZXcgRmVhdHVyZU5vZGUoZmVhdHVyZS5uYW1lLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuQ29sbGFwc2VkLCBmZWF0dXJlLmZlYXR1cmUpO1xuICAgIGJ1aWxkQXJ0aWZhY3ROb2RlcyhhcnRpZmFjdHMuYXJ0aWZhY3RzLmdldChmZWF0dXJlLmZlYXR1cmUpKS5mb3JFYWNoKGFydGlmYWN0ID0+IHtcbiAgICAgICAgZmVhdHVyZU5vZGUuYWRkQXJ0aWZhY3QoYXJ0aWZhY3QpO1xuICAgIH0pO1xuICAgIGZlYXR1cmUuc3ViRmVhdHVyZXMuZm9yRWFjaChzdWJGZWF0dXJlID0+IHtcbiAgICAgICAgZmVhdHVyZU5vZGUuYWRkU3ViRmVhdHVyZShjcmVhdGVGZWF0dXJlTm9kZShzdWJGZWF0dXJlLCBhcnRpZmFjdHMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmZWF0dXJlTm9kZTtcbn1cbi8qKlxuICpcbiAqXG4gKiBAcGFyYW0ge0FydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlfSBhcnRpZmFjdHNQZXJGZWF0dXJlXG4gKiBAcmV0dXJucyB7QXJ0aWZhY3ROb2RlW119XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkQXJ0aWZhY3ROb2RlcyhhcnRpZmFjdHNQZXJGZWF0dXJlKSB7XG4gICAgbGV0IGFydGlmYWN0cyA9IG5ldyBBcnJheSAoXG4gICAgICAgIC4uLmFydGlmYWN0c1BlckZlYXR1cmUuY29tbWFuZHMubWFwKGFydGlmYWN0ID0+IG5ldyBBcnRpZmFjdE5vZGUoYXJ0aWZhY3QubmFtZSgpLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGUuTm9uZSwgYXJ0aWZhY3QuYXJ0aWZhY3QsICdDb21tYW5kJykpLFxuICAgICAgICAuLi5hcnRpZmFjdHNQZXJGZWF0dXJlLmV2ZW50cy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lKCksIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Ob25lLCBhcnRpZmFjdC5hcnRpZmFjdCwgJ0V2ZW50JykpLFxuICAgICAgICAuLi5hcnRpZmFjdHNQZXJGZWF0dXJlLmV2ZW50U291cmNlcy5tYXAoYXJ0aWZhY3QgPT4gbmV3IEFydGlmYWN0Tm9kZShhcnRpZmFjdC5uYW1lKCksIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Ob25lLCBhcnRpZmFjdC5hcnRpZmFjdCwgJ0V2ZW50IFNvdXJjZScpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5yZWFkTW9kZWxzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3ROb2RlKGFydGlmYWN0Lm5hbWUoKSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUsIGFydGlmYWN0LmFydGlmYWN0LCAnUmVhZCBNb2RlbCcpKSxcbiAgICAgICAgLi4uYXJ0aWZhY3RzUGVyRmVhdHVyZS5xdWVyaWVzLm1hcChhcnRpZmFjdCA9PiBuZXcgQXJ0aWZhY3ROb2RlKGFydGlmYWN0Lm5hbWUoKSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUsIGFydGlmYWN0LmFydGlmYWN0LCAnUXVlcnknKSksXG4gICAgKTtcbiAgICByZXR1cm4gYXJ0aWZhY3RzO1xufVxuIl19