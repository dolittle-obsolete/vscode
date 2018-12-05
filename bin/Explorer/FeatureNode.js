'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureNode = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _set2 = require('babel-runtime/helpers/set');

var _set3 = _interopRequireDefault(_set2);

var _vscode = require('vscode');

var _ArtifactDefinitionsPerFeature = require('../Configuration/ArtifactDefinitionsPerFeature');

var _Feature = require('../Configuration/Feature');

var _ArtifactNode = require('./ArtifactNode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureNode = exports.FeatureNode = function (_TreeItem) {
    (0, _inherits3.default)(FeatureNode, _TreeItem);

    /**
     *Creates an instance of FeatureNode.
     * @param {Feature} feature
     * @memberof FeatureNode
     */
    function FeatureNode(label, collapsibleState, feature) {
        (0, _classCallCheck3.default)(this, FeatureNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FeatureNode.__proto__ || Object.getPrototypeOf(FeatureNode)).call(this, feature.name, _vscode.TreeItemCollapsibleState.Collapsed));

        _this._features = [];
        _this._artifacts = [];
        feature.subFeatures.forEach(function (subFeature) {
            return _this.addSubFeature(new FeatureNode(subFeature.name, _vscode.TreeItemCollapsibleState.Collapsed, subFeature));
        });
        (0, _set3.default)(FeatureNode.prototype.__proto__ || Object.getPrototypeOf(FeatureNode.prototype), 'tooltip', 'Feature id: \'' + feature.feature + '\'', _this);
        return _this;
    }

    (0, _createClass3.default)(FeatureNode, [{
        key: 'addSubFeature',

        /**
         * 
         *
         * @param {FeatureNode} feature
         * @memberof FeatureNode
         */
        value: function addSubFeature(feature) {
            this._features.push(feature);
        }

        /**
         * 
         *
         * @param {ArtifactNode} artifact
         * @memberof FeatureNode
         */

    }, {
        key: 'addArtifact',
        value: function addArtifact(artifact) {
            this._artifacts.push(artifact);
        }
    }, {
        key: 'children',
        get: function get() {
            return this._artifacts.concat(this._features);
        }
    }]);
    return FeatureNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9GZWF0dXJlTm9kZS5qcyJdLCJuYW1lcyI6WyJGZWF0dXJlTm9kZSIsImxhYmVsIiwiY29sbGFwc2libGVTdGF0ZSIsImZlYXR1cmUiLCJuYW1lIiwiVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlIiwiQ29sbGFwc2VkIiwiX2ZlYXR1cmVzIiwiX2FydGlmYWN0cyIsInN1YkZlYXR1cmVzIiwiZm9yRWFjaCIsImFkZFN1YkZlYXR1cmUiLCJzdWJGZWF0dXJlIiwicHVzaCIsImFydGlmYWN0IiwiY29uY2F0IiwiVHJlZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0lBRWFBLFcsV0FBQUEsVzs7O0FBQ1Q7Ozs7O0FBS0EseUJBQWFDLEtBQWIsRUFBb0JDLGdCQUFwQixFQUFzQ0MsT0FBdEMsRUFBK0M7QUFBQTs7QUFBQSw0SUFDckNBLFFBQVFDLElBRDZCLEVBQ3ZCQyxpQ0FBeUJDLFNBREY7O0FBRTNDLGNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxjQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0FMLGdCQUFRTSxXQUFSLENBQW9CQyxPQUFwQixDQUE0QjtBQUFBLG1CQUFjLE1BQUtDLGFBQUwsQ0FBbUIsSUFBSVgsV0FBSixDQUFnQlksV0FBV1IsSUFBM0IsRUFBaUNDLGlDQUF5QkMsU0FBMUQsRUFBcUVNLFVBQXJFLENBQW5CLENBQWQ7QUFBQSxTQUE1QjtBQUNBLDBJQUFnQ1QsUUFBUUEsT0FBeEM7QUFMMkM7QUFNOUM7Ozs7O0FBSUQ7Ozs7OztzQ0FNY0EsTyxFQUFTO0FBQ25CLGlCQUFLSSxTQUFMLENBQWVNLElBQWYsQ0FBb0JWLE9BQXBCO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztvQ0FNWVcsUSxFQUFVO0FBQ2xCLGlCQUFLTixVQUFMLENBQWdCSyxJQUFoQixDQUFxQkMsUUFBckI7QUFDSDs7OzRCQXJCYztBQUNYLG1CQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLE1BQWhCLENBQXVCLEtBQUtSLFNBQTVCLENBQVA7QUFDSDs7O0VBZjRCUyxnQiIsImZpbGUiOiJGZWF0dXJlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUcmVlSXRlbSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlfSBmcm9tICd2c2NvZGUnO1xuaW1wb3J0IHsgQXJ0aWZhY3REZWZpbml0aW9uc1BlckZlYXR1cmUgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0FydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL0ZlYXR1cmUnO1xuaW1wb3J0IHsgQXJ0aWZhY3ROb2RlIH0gZnJvbSAnLi9BcnRpZmFjdE5vZGUnO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZU5vZGUgZXh0ZW5kcyBUcmVlSXRlbSB7XG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZlYXR1cmVOb2RlLlxuICAgICAqIEBwYXJhbSB7RmVhdHVyZX0gZmVhdHVyZVxuICAgICAqIEBtZW1iZXJvZiBGZWF0dXJlTm9kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChsYWJlbCwgY29sbGFwc2libGVTdGF0ZSwgZmVhdHVyZSkge1xuICAgICAgICBzdXBlcihmZWF0dXJlLm5hbWUsIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Db2xsYXBzZWQpO1xuICAgICAgICB0aGlzLl9mZWF0dXJlcyA9IFtdO1xuICAgICAgICB0aGlzLl9hcnRpZmFjdHMgPSBbXTtcbiAgICAgICAgZmVhdHVyZS5zdWJGZWF0dXJlcy5mb3JFYWNoKHN1YkZlYXR1cmUgPT4gdGhpcy5hZGRTdWJGZWF0dXJlKG5ldyBGZWF0dXJlTm9kZShzdWJGZWF0dXJlLm5hbWUsIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZS5Db2xsYXBzZWQsIHN1YkZlYXR1cmUpKSk7XG4gICAgICAgIHN1cGVyLnRvb2x0aXAgPSBgRmVhdHVyZSBpZDogJyR7ZmVhdHVyZS5mZWF0dXJlfSdgO1xuICAgIH1cbiAgICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnRpZmFjdHMuY29uY2F0KHRoaXMuX2ZlYXR1cmVzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZlYXR1cmVOb2RlfSBmZWF0dXJlXG4gICAgICogQG1lbWJlcm9mIEZlYXR1cmVOb2RlXG4gICAgICovXG4gICAgYWRkU3ViRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuX2ZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FydGlmYWN0Tm9kZX0gYXJ0aWZhY3RcbiAgICAgKiBAbWVtYmVyb2YgRmVhdHVyZU5vZGVcbiAgICAgKi9cbiAgICBhZGRBcnRpZmFjdChhcnRpZmFjdCkge1xuICAgICAgICB0aGlzLl9hcnRpZmFjdHMucHVzaChhcnRpZmFjdCk7XG4gICAgfVxufSJdfQ==