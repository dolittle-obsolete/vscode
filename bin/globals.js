'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProjectConfiguration = require('./Configuration/ProjectConfiguration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {WeakMap<globals, import('vscode')>}
 */
var _vscode = new WeakMap();
/**
 * @type {WeakMap<globals, import('./Configuration/ProjectConfiguration').ProjectConfiguration>}
 */
var _projectConfiguration = new WeakMap();
/**
 * @type {WeakMap<globals, import('vscode').OutputChannel>}
 */
var _dolittleOutputChannel = new WeakMap();
/**
 * @type {WeakMap<globals, import('vscode').OutputChannel>}
 */
var _dolittleProjectOutputChannel = new WeakMap();
/**
 * @type {WeakMap<globals, import('vscode').OutputChannel>}
 */
var _dolittleCliOutputChannel = new WeakMap();

var dolittleOutputChannelName = 'Dolittle';
var dolittleProjectOutputChannelName = 'Dolittle Project';
var dolittleCliPutputChannelName = 'Dolittle CLI';

var globals = function () {
  function globals() {
    (0, _classCallCheck3.default)(this, globals);

    _vscode.set(this, require('vscode'));
    _projectConfiguration.set(this, null);
    _dolittleOutputChannel.set(this, this.vscode.window.createOutputChannel(dolittleOutputChannelName));
    _dolittleProjectOutputChannel.set(this, this.vscode.window.createOutputChannel(dolittleProjectOutputChannelName));
    _dolittleCliOutputChannel.set(this, this.vscode.window.createOutputChannel(dolittleCliPutputChannelName));
  }
  /**
   *
   *
   * @readonly
   * @memberof globals
   */


  (0, _createClass3.default)(globals, [{
    key: 'setProjectConfiguration',

    /**
     *
     *
     * @memberof globals
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var config;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _ProjectConfiguration.loadProjectConfiguration)();

              case 2:
                config = _context.sent;

                if (!(config === undefined)) {
                  _context.next = 5;
                  break;
                }

                throw 'Project configuration was undefined';

              case 5:
                _projectConfiguration.set(this, config);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setProjectConfiguration() {
        return _ref.apply(this, arguments);
      }

      return setProjectConfiguration;
    }()
  }, {
    key: 'vscode',
    get: function get() {
      return _vscode.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */

  }, {
    key: 'projectConfiguration',
    get: function get() {
      return _projectConfiguration.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */

  }, {
    key: 'dolittleOutputChannel',
    get: function get() {
      return _dolittleOutputChannel.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */

  }, {
    key: 'dolittleProjectOutputChannel',
    get: function get() {
      return _dolittleProjectOutputChannel.get(this);
    }

    /**
     *
     *
     * @readonly
     * @memberof globals
     */

  }, {
    key: 'dolittleCliOutputChannel',
    get: function get() {
      return _dolittleCliOutputChannel.get(this);
    }
  }]);
  return globals;
}();

exports.default = new globals();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9nbG9iYWxzLmpzIl0sIm5hbWVzIjpbIl92c2NvZGUiLCJXZWFrTWFwIiwiX3Byb2plY3RDb25maWd1cmF0aW9uIiwiX2RvbGl0dGxlT3V0cHV0Q2hhbm5lbCIsIl9kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsIiwiX2RvbGl0dGxlQ2xpT3V0cHV0Q2hhbm5lbCIsImRvbGl0dGxlT3V0cHV0Q2hhbm5lbE5hbWUiLCJkb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsTmFtZSIsImRvbGl0dGxlQ2xpUHV0cHV0Q2hhbm5lbE5hbWUiLCJnbG9iYWxzIiwic2V0IiwicmVxdWlyZSIsInZzY29kZSIsIndpbmRvdyIsImNyZWF0ZU91dHB1dENoYW5uZWwiLCJjb25maWciLCJ1bmRlZmluZWQiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7QUFHQSxJQUFNQSxVQUFVLElBQUlDLE9BQUosRUFBaEI7QUFDQTs7O0FBR0EsSUFBTUMsd0JBQXdCLElBQUlELE9BQUosRUFBOUI7QUFDQTs7O0FBR0EsSUFBTUUseUJBQXlCLElBQUlGLE9BQUosRUFBL0I7QUFDQTs7O0FBR0EsSUFBTUcsZ0NBQWdDLElBQUlILE9BQUosRUFBdEM7QUFDQTs7O0FBR0EsSUFBTUksNEJBQTRCLElBQUlKLE9BQUosRUFBbEM7O0FBR0EsSUFBTUssNEJBQTRCLFVBQWxDO0FBQ0EsSUFBTUMsbUNBQW1DLGtCQUF6QztBQUNBLElBQU1DLCtCQUErQixjQUFyQzs7SUFFTUMsTztBQUNGLHFCQUFjO0FBQUE7O0FBQ1ZULFlBQVFVLEdBQVIsQ0FBWSxJQUFaLEVBQWtCQyxRQUFRLFFBQVIsQ0FBbEI7QUFDQVQsMEJBQXNCUSxHQUF0QixDQUEwQixJQUExQixFQUFnQyxJQUFoQztBQUNBUCwyQkFBdUJPLEdBQXZCLENBQTJCLElBQTNCLEVBQWlDLEtBQUtFLE1BQUwsQ0FBWUMsTUFBWixDQUFtQkMsbUJBQW5CLENBQXVDUix5QkFBdkMsQ0FBakM7QUFDQUYsa0NBQThCTSxHQUE5QixDQUFrQyxJQUFsQyxFQUF3QyxLQUFLRSxNQUFMLENBQVlDLE1BQVosQ0FBbUJDLG1CQUFuQixDQUF1Q1AsZ0NBQXZDLENBQXhDO0FBQ0FGLDhCQUEwQkssR0FBMUIsQ0FBOEIsSUFBOUIsRUFBb0MsS0FBS0UsTUFBTCxDQUFZQyxNQUFaLENBQW1CQyxtQkFBbkIsQ0FBdUNOLDRCQUF2QyxDQUFwQztBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7O0FBOENBOzs7Ozs7Ozs7Ozs7O3VCQU11QixxRDs7O0FBQWZPLHNCOztzQkFDQUEsV0FBV0MsUzs7Ozs7c0JBQWlCLHFDOzs7QUFDaENkLHNDQUFzQlEsR0FBdEIsQ0FBMEIsSUFBMUIsRUFBZ0NLLE1BQWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBaERTO0FBQ1QsYUFBT2YsUUFBUWlCLEdBQVIsQ0FBWSxJQUFaLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7d0JBTTJCO0FBQ3ZCLGFBQU9mLHNCQUFzQmUsR0FBdEIsQ0FBMEIsSUFBMUIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozt3QkFNNEI7QUFDeEIsYUFBT2QsdUJBQXVCYyxHQUF2QixDQUEyQixJQUEzQixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7O3dCQU1tQztBQUMvQixhQUFPYiw4QkFBOEJhLEdBQTlCLENBQWtDLElBQWxDLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7O3dCQU0rQjtBQUMzQixhQUFPWiwwQkFBMEJZLEdBQTFCLENBQThCLElBQTlCLENBQVA7QUFDSDs7Ozs7a0JBYVUsSUFBSVIsT0FBSixFIiwiZmlsZSI6Imdsb2JhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nO1xuXG4vKipcbiAqIEB0eXBlIHtXZWFrTWFwPGdsb2JhbHMsIGltcG9ydCgndnNjb2RlJyk+fVxuICovXG5jb25zdCBfdnNjb2RlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQHR5cGUge1dlYWtNYXA8Z2xvYmFscywgaW1wb3J0KCcuL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nKS5Qcm9qZWN0Q29uZmlndXJhdGlvbj59XG4gKi9cbmNvbnN0IF9wcm9qZWN0Q29uZmlndXJhdGlvbiA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEB0eXBlIHtXZWFrTWFwPGdsb2JhbHMsIGltcG9ydCgndnNjb2RlJykuT3V0cHV0Q2hhbm5lbD59XG4gKi9cbmNvbnN0IF9kb2xpdHRsZU91dHB1dENoYW5uZWwgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBAdHlwZSB7V2Vha01hcDxnbG9iYWxzLCBpbXBvcnQoJ3ZzY29kZScpLk91dHB1dENoYW5uZWw+fVxuICovXG5jb25zdCBfZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEB0eXBlIHtXZWFrTWFwPGdsb2JhbHMsIGltcG9ydCgndnNjb2RlJykuT3V0cHV0Q2hhbm5lbD59XG4gKi9cbmNvbnN0IF9kb2xpdHRsZUNsaU91dHB1dENoYW5uZWwgPSBuZXcgV2Vha01hcCgpO1xuXG5cbmNvbnN0IGRvbGl0dGxlT3V0cHV0Q2hhbm5lbE5hbWUgPSAnRG9saXR0bGUnO1xuY29uc3QgZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbE5hbWUgPSAnRG9saXR0bGUgUHJvamVjdCc7XG5jb25zdCBkb2xpdHRsZUNsaVB1dHB1dENoYW5uZWxOYW1lID0gJ0RvbGl0dGxlIENMSSc7XG5cbmNsYXNzIGdsb2JhbHMgeyAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX3ZzY29kZS5zZXQodGhpcywgcmVxdWlyZSgndnNjb2RlJykpO1xuICAgICAgICBfcHJvamVjdENvbmZpZ3VyYXRpb24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfZG9saXR0bGVPdXRwdXRDaGFubmVsLnNldCh0aGlzLCB0aGlzLnZzY29kZS53aW5kb3cuY3JlYXRlT3V0cHV0Q2hhbm5lbChkb2xpdHRsZU91dHB1dENoYW5uZWxOYW1lKSk7XG4gICAgICAgIF9kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLnNldCh0aGlzLCB0aGlzLnZzY29kZS53aW5kb3cuY3JlYXRlT3V0cHV0Q2hhbm5lbChkb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsTmFtZSkpO1xuICAgICAgICBfZG9saXR0bGVDbGlPdXRwdXRDaGFubmVsLnNldCh0aGlzLCB0aGlzLnZzY29kZS53aW5kb3cuY3JlYXRlT3V0cHV0Q2hhbm5lbChkb2xpdHRsZUNsaVB1dHB1dENoYW5uZWxOYW1lKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgZ2xvYmFsc1xuICAgICAqL1xuICAgIGdldCB2c2NvZGUoKSB7XG4gICAgICAgIHJldHVybiBfdnNjb2RlLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBnbG9iYWxzXG4gICAgICovXG4gICAgZ2V0IHByb2plY3RDb25maWd1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RDb25maWd1cmF0aW9uLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBnbG9iYWxzXG4gICAgICovXG4gICAgZ2V0IGRvbGl0dGxlT3V0cHV0Q2hhbm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIF9kb2xpdHRsZU91dHB1dENoYW5uZWwuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIGdsb2JhbHNcbiAgICAgKi9cbiAgICBnZXQgZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIF9kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsLmdldCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIGdsb2JhbHNcbiAgICAgKi9cbiAgICBnZXQgZG9saXR0bGVDbGlPdXRwdXRDaGFubmVsKCkge1xuICAgICAgICByZXR1cm4gX2RvbGl0dGxlQ2xpT3V0cHV0Q2hhbm5lbC5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZ2xvYmFsc1xuICAgICAqL1xuICAgIGFzeW5jIHNldFByb2plY3RDb25maWd1cmF0aW9uKCkge1xuICAgICAgICBsZXQgY29uZmlnID0gYXdhaXQgbG9hZFByb2plY3RDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkgdGhyb3cgJ1Byb2plY3QgY29uZmlndXJhdGlvbiB3YXMgdW5kZWZpbmVkJztcbiAgICAgICAgX3Byb2plY3RDb25maWd1cmF0aW9uLnNldCh0aGlzLCBjb25maWcpO1xuICAgICAgICBcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgZ2xvYmFscygpOyJdfQ==