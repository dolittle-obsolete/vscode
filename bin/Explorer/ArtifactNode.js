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

    function ArtifactNode(label, collapsibleState, id) {
        (0, _classCallCheck3.default)(this, ArtifactNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ArtifactNode.__proto__ || Object.getPrototypeOf(ArtifactNode)).call(this, label, collapsibleState));

        (0, _set3.default)(ArtifactNode.prototype.__proto__ || Object.getPrototypeOf(ArtifactNode.prototype), 'tooltip', 'Artifact id: \'' + id + '\'', _this);

        return _this;
    }

    return ArtifactNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9BcnRpZmFjdE5vZGUuanMiXSwibmFtZXMiOlsiQXJ0aWZhY3ROb2RlIiwibGFiZWwiLCJjb2xsYXBzaWJsZVN0YXRlIiwiaWQiLCJUcmVlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztJQUdhQSxZLFdBQUFBLFk7OztBQUdULDBCQUFhQyxLQUFiLEVBQW9CQyxnQkFBcEIsRUFBc0NDLEVBQXRDLEVBQTBDO0FBQUE7O0FBQUEsOElBQ2hDRixLQURnQyxFQUN6QkMsZ0JBRHlCOztBQUV0Qyw2SUFBaUNDLEVBQWpDOztBQUZzQztBQUl6Qzs7O0VBUDZCQyxnQiIsImZpbGUiOiJBcnRpZmFjdE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7VHJlZUl0ZW19IGZyb20gJ3ZzY29kZSc7XG5cblxuZXhwb3J0IGNsYXNzIEFydGlmYWN0Tm9kZSBleHRlbmRzIFRyZWVJdGVtIHtcblxuXG4gICAgY29uc3RydWN0b3IgKGxhYmVsLCBjb2xsYXBzaWJsZVN0YXRlLCBpZCkge1xuICAgICAgICBzdXBlcihsYWJlbCwgY29sbGFwc2libGVTdGF0ZSk7XG4gICAgICAgIHN1cGVyLnRvb2x0aXAgPSBgQXJ0aWZhY3QgaWQ6ICcke2lkfSdgO1xuICAgICAgICBcbiAgICB9ICAgIFxufSJdfQ==