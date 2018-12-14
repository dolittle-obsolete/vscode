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

var _ModuleNode = require('./ModuleNode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _childrenNodes = new WeakMap();

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

        var _this = (0, _possibleConstructorReturn3.default)(this, (BoundedContextNode.__proto__ || Object.getPrototypeOf(BoundedContextNode)).call(this, label + ' - Bounded Context', collapsibleState));

        _childrenNodes.set(_this, []);
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
        key: 'addChildNode',

        /**
         * Adds a feature to the bounded context
         *
         * @param {FeatureNode | ModuleNode} feature
         * @memberof BoundedContextNode
         */
        value: function addChildNode(feature) {
            _childrenNodes.get(this).push(feature);
        }
    }, {
        key: 'children',
        get: function get() {
            return _childrenNodes.get(this);
        }
    }]);
    return BoundedContextNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGUuanMiXSwibmFtZXMiOlsiX2NoaWxkcmVuTm9kZXMiLCJXZWFrTWFwIiwiQm91bmRlZENvbnRleHROb2RlIiwibGFiZWwiLCJjb2xsYXBzaWJsZVN0YXRlIiwiaWQiLCJzZXQiLCJmZWF0dXJlIiwiZ2V0IiwicHVzaCIsIlRyZWVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGlCQUFpQixJQUFJQyxPQUFKLEVBQXZCOztJQUNhQyxrQixXQUFBQSxrQjs7O0FBRVQ7Ozs7Ozs7QUFPQSxnQ0FBYUMsS0FBYixFQUFvQkMsZ0JBQXBCLEVBQXNDQyxFQUF0QyxFQUEwQztBQUFBOztBQUFBLDBKQUM3QkYsS0FENkIseUJBQ0ZDLGdCQURFOztBQUV0Q0osdUJBQWVNLEdBQWYsUUFBeUIsRUFBekI7QUFDQSxnSkFBd0JELEVBQXhCO0FBSHNDO0FBSXpDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQVVBOzs7Ozs7cUNBTWFFLE8sRUFBUztBQUNsQlAsMkJBQWVRLEdBQWYsQ0FBbUIsSUFBbkIsRUFBeUJDLElBQXpCLENBQThCRixPQUE5QjtBQUNIOzs7NEJBWGM7QUFDWCxtQkFBT1AsZUFBZVEsR0FBZixDQUFtQixJQUFuQixDQUFQO0FBQ0g7OztFQXZCbUNFLGdCIiwiZmlsZSI6IkJvdW5kZWRDb250ZXh0Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUcmVlSXRlbSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlfSBmcm9tICd2c2NvZGUnO1xuaW1wb3J0IHsgRmVhdHVyZU5vZGUgfSBmcm9tICcuL0ZlYXR1cmVOb2RlJztcbmltcG9ydCB7IE1vZHVsZU5vZGUgfSBmcm9tICcuL01vZHVsZU5vZGUnO1xuXG5jb25zdCBfY2hpbGRyZW5Ob2RlcyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgY2xhc3MgQm91bmRlZENvbnRleHROb2RlIGV4dGVuZHMgVHJlZUl0ZW0ge1xuXG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEJvdW5kZWRDb250ZXh0Tm9kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgQm91bmRlZCBjb250ZXh0IG5hbWVcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtQ29sbGFwc2libGVTdGF0ZX0gY29sbGFwc2libGVTdGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgQm91bmRlZCBjb250ZXh0IGlkXG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChsYWJlbCwgY29sbGFwc2libGVTdGF0ZSwgaWQpIHtcbiAgICAgICAgc3VwZXIoYCR7bGFiZWx9IC0gQm91bmRlZCBDb250ZXh0YCwgY29sbGFwc2libGVTdGF0ZSk7XG4gICAgICAgIF9jaGlsZHJlbk5vZGVzLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIHN1cGVyLnRvb2x0aXAgPSBgaWQ6ICcke2lkfSdgO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBmZWF0dXJlcyBvZiB0aGlzIGJvdW5kZWQgY29udGV4dFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEJvdW5kZWRDb250ZXh0Tm9kZVxuICAgICAqIEByZXR1cm5zIHtGZWF0dXJlTm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIF9jaGlsZHJlbk5vZGVzLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZlYXR1cmUgdG8gdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZWF0dXJlTm9kZSB8IE1vZHVsZU5vZGV9IGZlYXR1cmVcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHROb2RlXG4gICAgICovXG4gICAgYWRkQ2hpbGROb2RlKGZlYXR1cmUpIHtcbiAgICAgICAgX2NoaWxkcmVuTm9kZXMuZ2V0KHRoaXMpLnB1c2goZmVhdHVyZSk7XG4gICAgfVxuICAgIFxufSJdfQ==