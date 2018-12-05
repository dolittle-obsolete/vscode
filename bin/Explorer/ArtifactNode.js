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
     * @param {string} artifactName
     * @param {string} artifactType
     * @param {string} artifactArea
     * @param {string} artifactId
     * @memberof ArtifactNode
     */
    function ArtifactNode(artifactName, artifactType, artifactArea, artifactId) {
        (0, _classCallCheck3.default)(this, ArtifactNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ArtifactNode.__proto__ || Object.getPrototypeOf(ArtifactNode)).call(this, artifactName, _vscode.TreeItemCollapsibleState.None));

        (0, _set3.default)(ArtifactNode.prototype.__proto__ || Object.getPrototypeOf(ArtifactNode.prototype), 'tooltip', 'Artifact type: ' + artifactType + ' Artifact id: \'' + artifactId + ' from area: \'' + artifactArea + '\'', _this);

        return _this;
    }

    return ArtifactNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9BcnRpZmFjdE5vZGUuanMiXSwibmFtZXMiOlsiQXJ0aWZhY3ROb2RlIiwiYXJ0aWZhY3ROYW1lIiwiYXJ0aWZhY3RUeXBlIiwiYXJ0aWZhY3RBcmVhIiwiYXJ0aWZhY3RJZCIsIlRyZWVJdGVtQ29sbGFwc2libGVTdGF0ZSIsIk5vbmUiLCJUcmVlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztJQUdhQSxZLFdBQUFBLFk7OztBQUVUOzs7Ozs7OztBQVFBLDBCQUFhQyxZQUFiLEVBQTJCQyxZQUEzQixFQUF5Q0MsWUFBekMsRUFBdURDLFVBQXZELEVBQW1FO0FBQUE7O0FBQUEsOElBQ3pESCxZQUR5RCxFQUMzQ0ksaUNBQXlCQyxJQURrQjs7QUFFL0QsNklBQWtDSixZQUFsQyx3QkFBZ0VFLFVBQWhFLHNCQUEwRkQsWUFBMUY7O0FBRitEO0FBSWxFOzs7RUFkNkJJLGdCIiwiZmlsZSI6IkFydGlmYWN0Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUcmVlSXRlbSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlfSBmcm9tICd2c2NvZGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBBcnRpZmFjdE5vZGUgZXh0ZW5kcyBUcmVlSXRlbSB7XG5cbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXJ0aWZhY3ROb2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpZmFjdE5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aWZhY3RUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlmYWN0QXJlYVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpZmFjdElkXG4gICAgICogQG1lbWJlcm9mIEFydGlmYWN0Tm9kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChhcnRpZmFjdE5hbWUsIGFydGlmYWN0VHlwZSwgYXJ0aWZhY3RBcmVhLCBhcnRpZmFjdElkKSB7XG4gICAgICAgIHN1cGVyKGFydGlmYWN0TmFtZSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlLk5vbmUpO1xuICAgICAgICBzdXBlci50b29sdGlwID0gYEFydGlmYWN0IHR5cGU6ICR7YXJ0aWZhY3RUeXBlfSBBcnRpZmFjdCBpZDogJyR7YXJ0aWZhY3RJZH0gZnJvbSBhcmVhOiAnJHthcnRpZmFjdEFyZWF9J2A7XG4gICAgICAgIFxuICAgIH0gICAgXG59Il19