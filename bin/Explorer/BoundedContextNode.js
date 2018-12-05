'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundedContextNode = undefined;

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

var _FeatureNode = require('./FeatureNode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoundedContextNode = exports.BoundedContextNode = function (_TreeItem) {
    (0, _inherits3.default)(BoundedContextNode, _TreeItem);

    /**
     *Creates an instance of BoundedContextNode.
     * @param {string} label Bounded context name
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id The Bounded context id
     * @memberof BoundedContextNode
     */
    function BoundedContextNode(label, collapsibleState, id) {
        (0, _classCallCheck3.default)(this, BoundedContextNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BoundedContextNode.__proto__ || Object.getPrototypeOf(BoundedContextNode)).call(this, label, collapsibleState));

        _this._features = [];
        (0, _set3.default)(BoundedContextNode.prototype.__proto__ || Object.getPrototypeOf(BoundedContextNode.prototype), 'tooltip', 'id: \'' + id + '\'', _this);
        return _this;
    }
    /**
     * Gets the features of this bounded context
     *
     * @readonly
     * @memberof BoundedContextNode
     * @returns {FeatureNode[]}
     */


    (0, _createClass3.default)(BoundedContextNode, [{
        key: 'addFeature',

        /**
         * Adds a feature to the bounded context
         *
         * @param {FeatureNode} feature
         * @memberof BoundedContextNode
         */
        value: function addFeature(feature) {
            this._features.push(feature);
        }
    }, {
        key: 'children',
        get: function get() {
            return this._features;
        }
    }]);
    return BoundedContextNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGUuanMiXSwibmFtZXMiOlsiQm91bmRlZENvbnRleHROb2RlIiwibGFiZWwiLCJjb2xsYXBzaWJsZVN0YXRlIiwiaWQiLCJfZmVhdHVyZXMiLCJmZWF0dXJlIiwicHVzaCIsIlRyZWVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztJQUVhQSxrQixXQUFBQSxrQjs7O0FBRVQ7Ozs7Ozs7QUFPQSxnQ0FBYUMsS0FBYixFQUFvQkMsZ0JBQXBCLEVBQXNDQyxFQUF0QyxFQUEwQztBQUFBOztBQUFBLDBKQUNoQ0YsS0FEZ0MsRUFDekJDLGdCQUR5Qjs7QUFFdEMsY0FBS0UsU0FBTCxHQUFpQixFQUFqQjtBQUNBLGdKQUF3QkQsRUFBeEI7QUFIc0M7QUFJekM7QUFDRDs7Ozs7Ozs7Ozs7O0FBVUE7Ozs7OzttQ0FNV0UsTyxFQUFTO0FBQ2hCLGlCQUFLRCxTQUFMLENBQWVFLElBQWYsQ0FBb0JELE9BQXBCO0FBQ0g7Ozs0QkFYYztBQUNYLG1CQUFPLEtBQUtELFNBQVo7QUFDSDs7O0VBdkJtQ0csZ0IiLCJmaWxlIjoiQm91bmRlZENvbnRleHROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1RyZWVJdGVtLCBUcmVlSXRlbUNvbGxhcHNpYmxlU3RhdGV9IGZyb20gJ3ZzY29kZSc7XG5pbXBvcnQgeyBGZWF0dXJlTm9kZSB9IGZyb20gJy4vRmVhdHVyZU5vZGUnO1xuXG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHROb2RlIGV4dGVuZHMgVHJlZUl0ZW0ge1xuXG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEJvdW5kZWRDb250ZXh0Tm9kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgQm91bmRlZCBjb250ZXh0IG5hbWVcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtQ29sbGFwc2libGVTdGF0ZX0gY29sbGFwc2libGVTdGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgQm91bmRlZCBjb250ZXh0IGlkXG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChsYWJlbCwgY29sbGFwc2libGVTdGF0ZSwgaWQpIHtcbiAgICAgICAgc3VwZXIobGFiZWwsIGNvbGxhcHNpYmxlU3RhdGUpO1xuICAgICAgICB0aGlzLl9mZWF0dXJlcyA9IFtdO1xuICAgICAgICBzdXBlci50b29sdGlwID0gYGlkOiAnJHtpZH0nYDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZmVhdHVyZXMgb2YgdGhpcyBib3VuZGVkIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dE5vZGVcbiAgICAgKiBAcmV0dXJucyB7RmVhdHVyZU5vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mZWF0dXJlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZlYXR1cmUgdG8gdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZWF0dXJlTm9kZX0gZmVhdHVyZVxuICAgICAqIEBtZW1iZXJvZiBCb3VuZGVkQ29udGV4dE5vZGVcbiAgICAgKi9cbiAgICBhZGRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5fZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICB9XG4gICAgXG59Il19