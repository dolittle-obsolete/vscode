'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArtifactNode = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _set2 = require('babel-runtime/helpers/set');

var _set3 = _interopRequireDefault(_set2);

var _vscode = require('vscode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtifactNode = exports.ArtifactNode = function (_TreeItem) {
    (0, _inherits3.default)(ArtifactNode, _TreeItem);

    /**
     *Creates an instance of ArtifactNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id
     * @param {string} artifactType
     * @memberof ArtifactNode
     */
    function ArtifactNode(label, collapsibleState, id, artifactType) {
        (0, _classCallCheck3.default)(this, ArtifactNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ArtifactNode.__proto__ || Object.getPrototypeOf(ArtifactNode)).call(this, label + ' - ' + artifactType, collapsibleState));

        (0, _set3.default)(ArtifactNode.prototype.__proto__ || Object.getPrototypeOf(ArtifactNode.prototype), 'tooltip', 'Artifact id: \'' + id + '\'', _this);

        return _this;
    }

    return ArtifactNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9BcnRpZmFjdE5vZGUuanMiXSwibmFtZXMiOlsiQXJ0aWZhY3ROb2RlIiwibGFiZWwiLCJjb2xsYXBzaWJsZVN0YXRlIiwiaWQiLCJhcnRpZmFjdFR5cGUiLCJUcmVlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztJQUdhQSxZLFdBQUFBLFk7OztBQUNUOzs7Ozs7OztBQVFBLDBCQUFhQyxLQUFiLEVBQW9CQyxnQkFBcEIsRUFBc0NDLEVBQXRDLEVBQTBDQyxZQUExQyxFQUF3RDtBQUFBOztBQUFBLDhJQUMzQ0gsS0FEMkMsV0FDaENHLFlBRGdDLEVBQ2hCRixnQkFEZ0I7O0FBRXBELDZJQUFpQ0MsRUFBakM7O0FBRm9EO0FBSXZEOzs7RUFiNkJFLGdCIiwiZmlsZSI6IkFydGlmYWN0Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUcmVlSXRlbSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlfSBmcm9tICd2c2NvZGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBBcnRpZmFjdE5vZGUgZXh0ZW5kcyBUcmVlSXRlbSB7XG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEFydGlmYWN0Tm9kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtQ29sbGFwc2libGVTdGF0ZX0gY29sbGFwc2libGVTdGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpZmFjdFR5cGVcbiAgICAgKiBAbWVtYmVyb2YgQXJ0aWZhY3ROb2RlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGxhYmVsLCBjb2xsYXBzaWJsZVN0YXRlLCBpZCwgYXJ0aWZhY3RUeXBlKSB7XG4gICAgICAgIHN1cGVyKGAke2xhYmVsfSAtICR7YXJ0aWZhY3RUeXBlfWAsIGNvbGxhcHNpYmxlU3RhdGUpO1xuICAgICAgICBzdXBlci50b29sdGlwID0gYEFydGlmYWN0IGlkOiAnJHtpZH0nYDtcbiAgICAgICAgXG4gICAgfSAgICBcbn0iXX0=