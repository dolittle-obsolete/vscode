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

var _subFeatures = new WeakMap();
var _artifacts = new WeakMap();

var FeatureNode = exports.FeatureNode = function (_TreeItem) {
    (0, _inherits3.default)(FeatureNode, _TreeItem);

    /**
     *Creates an instance of FeatureNode.
     * @param {string} featureId
     * @memberof FeatureNode
     */
    function FeatureNode(label, collapsibleState, featureId) {
        (0, _classCallCheck3.default)(this, FeatureNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FeatureNode.__proto__ || Object.getPrototypeOf(FeatureNode)).call(this, label + ' - Feature', collapsibleState));

        _subFeatures.set(_this, []);
        _artifacts.set(_this, []);
        (0, _set3.default)(FeatureNode.prototype.__proto__ || Object.getPrototypeOf(FeatureNode.prototype), 'tooltip', 'Feature id: \'' + featureId + '\'', _this);
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
            _subFeatures.get(this).push(feature);
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
            _artifacts.get(this).push(artifact);
        }
    }, {
        key: 'children',
        get: function get() {
            return _subFeatures.get(this).concat(_artifacts.get(this));
        }
    }]);
    return FeatureNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9GZWF0dXJlTm9kZS5qcyJdLCJuYW1lcyI6WyJfc3ViRmVhdHVyZXMiLCJXZWFrTWFwIiwiX2FydGlmYWN0cyIsIkZlYXR1cmVOb2RlIiwibGFiZWwiLCJjb2xsYXBzaWJsZVN0YXRlIiwiZmVhdHVyZUlkIiwic2V0IiwiZmVhdHVyZSIsImdldCIsInB1c2giLCJhcnRpZmFjdCIsImNvbmNhdCIsIlRyZWVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsSUFBSUMsT0FBSixFQUFyQjtBQUNBLElBQU1DLGFBQWEsSUFBSUQsT0FBSixFQUFuQjs7SUFDYUUsVyxXQUFBQSxXOzs7QUFDVDs7Ozs7QUFLQSx5QkFBYUMsS0FBYixFQUFvQkMsZ0JBQXBCLEVBQXNDQyxTQUF0QyxFQUFpRDtBQUFBOztBQUFBLDRJQUNwQ0YsS0FEb0MsaUJBQ2pCQyxnQkFEaUI7O0FBRTdDTCxxQkFBYU8sR0FBYixRQUF1QixFQUF2QjtBQUNBTCxtQkFBV0ssR0FBWCxRQUFxQixFQUFyQjtBQUNELDBJQUFnQ0QsU0FBaEM7QUFKOEM7QUFLaEQ7Ozs7O0FBSUQ7Ozs7OztzQ0FNY0UsTyxFQUFTO0FBQ25CUix5QkFBYVMsR0FBYixDQUFpQixJQUFqQixFQUF1QkMsSUFBdkIsQ0FBNEJGLE9BQTVCO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztvQ0FNWUcsUSxFQUFVO0FBQ2xCVCx1QkFBV08sR0FBWCxDQUFlLElBQWYsRUFBcUJDLElBQXJCLENBQTBCQyxRQUExQjtBQUNIOzs7NEJBckJjO0FBQ1gsbUJBQU9YLGFBQWFTLEdBQWIsQ0FBaUIsSUFBakIsRUFBdUJHLE1BQXZCLENBQThCVixXQUFXTyxHQUFYLENBQWUsSUFBZixDQUE5QixDQUFQO0FBQ0g7OztFQWQ0QkksZ0IiLCJmaWxlIjoiRmVhdHVyZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7VHJlZUl0ZW0sIFRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZX0gZnJvbSAndnNjb2RlJztcbmltcG9ydCB7IEFydGlmYWN0RGVmaW5pdGlvbnNQZXJGZWF0dXJlIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9BcnRpZmFjdERlZmluaXRpb25zUGVyRmVhdHVyZSc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9GZWF0dXJlJztcbmltcG9ydCB7IEFydGlmYWN0Tm9kZSB9IGZyb20gJy4vQXJ0aWZhY3ROb2RlJztcblxuY29uc3QgX3N1YkZlYXR1cmVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IF9hcnRpZmFjdHMgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNsYXNzIEZlYXR1cmVOb2RlIGV4dGVuZHMgVHJlZUl0ZW0ge1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGZWF0dXJlTm9kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZUlkXG4gICAgICogQG1lbWJlcm9mIEZlYXR1cmVOb2RlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGxhYmVsLCBjb2xsYXBzaWJsZVN0YXRlLCBmZWF0dXJlSWQpIHtcbiAgICAgICAgc3VwZXIoYCR7bGFiZWx9IC0gRmVhdHVyZWAsIGNvbGxhcHNpYmxlU3RhdGUpO1xuICAgICAgICBfc3ViRmVhdHVyZXMuc2V0KHRoaXMsIFtdKTtcbiAgICAgICAgX2FydGlmYWN0cy5zZXQodGhpcywgW10pO1xuICAgICAgIHN1cGVyLnRvb2x0aXAgPSBgRmVhdHVyZSBpZDogJyR7ZmVhdHVyZUlkfSdgO1xuICAgIH1cbiAgICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiBfc3ViRmVhdHVyZXMuZ2V0KHRoaXMpLmNvbmNhdChfYXJ0aWZhY3RzLmdldCh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZWF0dXJlTm9kZX0gZmVhdHVyZVxuICAgICAqIEBtZW1iZXJvZiBGZWF0dXJlTm9kZVxuICAgICAqL1xuICAgIGFkZFN1YkZlYXR1cmUoZmVhdHVyZSkge1xuICAgICAgICBfc3ViRmVhdHVyZXMuZ2V0KHRoaXMpLnB1c2goZmVhdHVyZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FydGlmYWN0Tm9kZX0gYXJ0aWZhY3RcbiAgICAgKiBAbWVtYmVyb2YgRmVhdHVyZU5vZGVcbiAgICAgKi9cbiAgICBhZGRBcnRpZmFjdChhcnRpZmFjdCkge1xuICAgICAgICBfYXJ0aWZhY3RzLmdldCh0aGlzKS5wdXNoKGFydGlmYWN0KTtcbiAgICB9XG59Il19