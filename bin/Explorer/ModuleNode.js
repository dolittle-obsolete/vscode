'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModuleNode = undefined;

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

var _features = new WeakMap();

var ModuleNode = exports.ModuleNode = function (_TreeItem) {
    (0, _inherits3.default)(ModuleNode, _TreeItem);

    /**
     *Creates an instance of ModuleNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} moduleId
     * @memberof FeatureNode
     */
    function ModuleNode(label, collapsibleState, moduleId) {
        (0, _classCallCheck3.default)(this, ModuleNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ModuleNode.__proto__ || Object.getPrototypeOf(ModuleNode)).call(this, label + ' - Module', collapsibleState));

        _features.set(_this, []);
        (0, _set3.default)(ModuleNode.prototype.__proto__ || Object.getPrototypeOf(ModuleNode.prototype), 'tooltip', 'Module id: \'' + moduleId + '\'', _this);
        return _this;
    }

    (0, _createClass3.default)(ModuleNode, [{
        key: 'addFeature',

        /**
         * 
         *
         * @param {FeatureNode} feature
         * @memberof FeatureNode
         */
        value: function addFeature(feature) {
            _features.get(this).push(feature);
        }
    }, {
        key: 'children',
        get: function get() {
            return _features.get(this);
        }
    }]);
    return ModuleNode;
}(_vscode.TreeItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9FeHBsb3Jlci9Nb2R1bGVOb2RlLmpzIl0sIm5hbWVzIjpbIl9mZWF0dXJlcyIsIldlYWtNYXAiLCJNb2R1bGVOb2RlIiwibGFiZWwiLCJjb2xsYXBzaWJsZVN0YXRlIiwibW9kdWxlSWQiLCJzZXQiLCJmZWF0dXJlIiwiZ2V0IiwicHVzaCIsIlRyZWVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksSUFBSUMsT0FBSixFQUFsQjs7SUFDYUMsVSxXQUFBQSxVOzs7QUFDVDs7Ozs7OztBQU9BLHdCQUFhQyxLQUFiLEVBQW9CQyxnQkFBcEIsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQUE7O0FBQUEsMElBQ25DRixLQURtQyxnQkFDakJDLGdCQURpQjs7QUFFNUNKLGtCQUFVTSxHQUFWLFFBQW9CLEVBQXBCO0FBQ0QsdUlBQStCRCxRQUEvQjtBQUg2QztBQUkvQzs7Ozs7QUFJRDs7Ozs7O21DQU1XRSxPLEVBQVM7QUFDaEJQLHNCQUFVUSxHQUFWLENBQWMsSUFBZCxFQUFvQkMsSUFBcEIsQ0FBeUJGLE9BQXpCO0FBQ0g7Ozs0QkFYYztBQUNYLG1CQUFPUCxVQUFVUSxHQUFWLENBQWMsSUFBZCxDQUFQO0FBQ0g7OztFQWYyQkUsZ0IiLCJmaWxlIjoiTW9kdWxlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUcmVlSXRlbSwgVHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlfSBmcm9tICd2c2NvZGUnO1xuaW1wb3J0IHsgRmVhdHVyZU5vZGUgfSBmcm9tICcuL0ZlYXR1cmVOb2RlJztcblxuY29uc3QgX2ZlYXR1cmVzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjbGFzcyBNb2R1bGVOb2RlIGV4dGVuZHMgVHJlZUl0ZW0ge1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNb2R1bGVOb2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1Db2xsYXBzaWJsZVN0YXRlfSBjb2xsYXBzaWJsZVN0YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZUlkXG4gICAgICogQG1lbWJlcm9mIEZlYXR1cmVOb2RlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGxhYmVsLCBjb2xsYXBzaWJsZVN0YXRlLCBtb2R1bGVJZCkge1xuICAgICAgICBzdXBlcihgJHtsYWJlbH0gLSBNb2R1bGVgLCBjb2xsYXBzaWJsZVN0YXRlKTtcbiAgICAgICAgX2ZlYXR1cmVzLnNldCh0aGlzLCBbXSk7XG4gICAgICAgc3VwZXIudG9vbHRpcCA9IGBNb2R1bGUgaWQ6ICcke21vZHVsZUlkfSdgO1xuICAgIH1cbiAgICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiBfZmVhdHVyZXMuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmVhdHVyZU5vZGV9IGZlYXR1cmVcbiAgICAgKiBAbWVtYmVyb2YgRmVhdHVyZU5vZGVcbiAgICAgKi9cbiAgICBhZGRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICAgICAgX2ZlYXR1cmVzLmdldCh0aGlzKS5wdXNoKGZlYXR1cmUpO1xuICAgIH1cblxufSJdfQ==