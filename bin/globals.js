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
                _context.prev = 0;

                this.dolittleOutputChannel.appendLine('Loading dolittle project');
                _context.next = 4;
                return (0, _ProjectConfiguration.loadProjectConfiguration)();

              case 4:
                config = _context.sent;

                if (!(config === undefined)) {
                  _context.next = 7;
                  break;
                }

                throw 'Project configuration was undefined';

              case 7:
                _projectConfiguration.set(this, config);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9nbG9iYWxzLmpzIl0sIm5hbWVzIjpbIl92c2NvZGUiLCJXZWFrTWFwIiwiX3Byb2plY3RDb25maWd1cmF0aW9uIiwiX2RvbGl0dGxlT3V0cHV0Q2hhbm5lbCIsIl9kb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsIiwiX2RvbGl0dGxlQ2xpT3V0cHV0Q2hhbm5lbCIsImRvbGl0dGxlT3V0cHV0Q2hhbm5lbE5hbWUiLCJkb2xpdHRsZVByb2plY3RPdXRwdXRDaGFubmVsTmFtZSIsImRvbGl0dGxlQ2xpUHV0cHV0Q2hhbm5lbE5hbWUiLCJnbG9iYWxzIiwic2V0IiwicmVxdWlyZSIsInZzY29kZSIsIndpbmRvdyIsImNyZWF0ZU91dHB1dENoYW5uZWwiLCJkb2xpdHRsZU91dHB1dENoYW5uZWwiLCJhcHBlbmRMaW5lIiwiY29uZmlnIiwidW5kZWZpbmVkIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7O0FBR0EsSUFBTUEsVUFBVSxJQUFJQyxPQUFKLEVBQWhCO0FBQ0E7OztBQUdBLElBQU1DLHdCQUF3QixJQUFJRCxPQUFKLEVBQTlCO0FBQ0E7OztBQUdBLElBQU1FLHlCQUF5QixJQUFJRixPQUFKLEVBQS9CO0FBQ0E7OztBQUdBLElBQU1HLGdDQUFnQyxJQUFJSCxPQUFKLEVBQXRDO0FBQ0E7OztBQUdBLElBQU1JLDRCQUE0QixJQUFJSixPQUFKLEVBQWxDOztBQUdBLElBQU1LLDRCQUE0QixVQUFsQztBQUNBLElBQU1DLG1DQUFtQyxrQkFBekM7QUFDQSxJQUFNQywrQkFBK0IsY0FBckM7O0lBRU1DLE87QUFDRixxQkFBYztBQUFBOztBQUNWVCxZQUFRVSxHQUFSLENBQVksSUFBWixFQUFrQkMsUUFBUSxRQUFSLENBQWxCO0FBQ0FULDBCQUFzQlEsR0FBdEIsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEM7QUFDQVAsMkJBQXVCTyxHQUF2QixDQUEyQixJQUEzQixFQUFpQyxLQUFLRSxNQUFMLENBQVlDLE1BQVosQ0FBbUJDLG1CQUFuQixDQUF1Q1IseUJBQXZDLENBQWpDO0FBQ0FGLGtDQUE4Qk0sR0FBOUIsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBS0UsTUFBTCxDQUFZQyxNQUFaLENBQW1CQyxtQkFBbkIsQ0FBdUNQLGdDQUF2QyxDQUF4QztBQUNBRiw4QkFBMEJLLEdBQTFCLENBQThCLElBQTlCLEVBQW9DLEtBQUtFLE1BQUwsQ0FBWUMsTUFBWixDQUFtQkMsbUJBQW5CLENBQXVDTiw0QkFBdkMsQ0FBcEM7QUFDSDtBQUNEOzs7Ozs7Ozs7OztBQThDQTs7Ozs7Ozs7Ozs7Ozs7QUFPUSxxQkFBS08scUJBQUwsQ0FBMkJDLFVBQTNCLENBQXNDLDBCQUF0Qzs7dUJBQ21CLHFEOzs7QUFBZkMsc0I7O3NCQUNBQSxXQUFXQyxTOzs7OztzQkFBaUIscUM7OztBQUNoQ2hCLHNDQUFzQlEsR0FBdEIsQ0FBMEIsSUFBMUIsRUFBZ0NPLE1BQWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQWxESztBQUNULGFBQU9qQixRQUFRbUIsR0FBUixDQUFZLElBQVosQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozt3QkFNMkI7QUFDdkIsYUFBT2pCLHNCQUFzQmlCLEdBQXRCLENBQTBCLElBQTFCLENBQVA7QUFDSDtBQUNEOzs7Ozs7Ozs7d0JBTTRCO0FBQ3hCLGFBQU9oQix1QkFBdUJnQixHQUF2QixDQUEyQixJQUEzQixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7O3dCQU1tQztBQUMvQixhQUFPZiw4QkFBOEJlLEdBQTlCLENBQWtDLElBQWxDLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7O3dCQU0rQjtBQUMzQixhQUFPZCwwQkFBMEJjLEdBQTFCLENBQThCLElBQTlCLENBQVA7QUFDSDs7Ozs7a0JBaUJVLElBQUlWLE9BQUosRSIsImZpbGUiOiJnbG9iYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFByb2plY3RDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uJztcblxuLyoqXG4gKiBAdHlwZSB7V2Vha01hcDxnbG9iYWxzLCBpbXBvcnQoJ3ZzY29kZScpPn1cbiAqL1xuY29uc3QgX3ZzY29kZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEB0eXBlIHtXZWFrTWFwPGdsb2JhbHMsIGltcG9ydCgnLi9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uJykuUHJvamVjdENvbmZpZ3VyYXRpb24+fVxuICovXG5jb25zdCBfcHJvamVjdENvbmZpZ3VyYXRpb24gPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBAdHlwZSB7V2Vha01hcDxnbG9iYWxzLCBpbXBvcnQoJ3ZzY29kZScpLk91dHB1dENoYW5uZWw+fVxuICovXG5jb25zdCBfZG9saXR0bGVPdXRwdXRDaGFubmVsID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQHR5cGUge1dlYWtNYXA8Z2xvYmFscywgaW1wb3J0KCd2c2NvZGUnKS5PdXRwdXRDaGFubmVsPn1cbiAqL1xuY29uc3QgX2RvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBAdHlwZSB7V2Vha01hcDxnbG9iYWxzLCBpbXBvcnQoJ3ZzY29kZScpLk91dHB1dENoYW5uZWw+fVxuICovXG5jb25zdCBfZG9saXR0bGVDbGlPdXRwdXRDaGFubmVsID0gbmV3IFdlYWtNYXAoKTtcblxuXG5jb25zdCBkb2xpdHRsZU91dHB1dENoYW5uZWxOYW1lID0gJ0RvbGl0dGxlJztcbmNvbnN0IGRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWxOYW1lID0gJ0RvbGl0dGxlIFByb2plY3QnO1xuY29uc3QgZG9saXR0bGVDbGlQdXRwdXRDaGFubmVsTmFtZSA9ICdEb2xpdHRsZSBDTEknO1xuXG5jbGFzcyBnbG9iYWxzIHsgICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF92c2NvZGUuc2V0KHRoaXMsIHJlcXVpcmUoJ3ZzY29kZScpKTtcbiAgICAgICAgX3Byb2plY3RDb25maWd1cmF0aW9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX2RvbGl0dGxlT3V0cHV0Q2hhbm5lbC5zZXQodGhpcywgdGhpcy52c2NvZGUud2luZG93LmNyZWF0ZU91dHB1dENoYW5uZWwoZG9saXR0bGVPdXRwdXRDaGFubmVsTmFtZSkpO1xuICAgICAgICBfZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5zZXQodGhpcywgdGhpcy52c2NvZGUud2luZG93LmNyZWF0ZU91dHB1dENoYW5uZWwoZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbE5hbWUpKTtcbiAgICAgICAgX2RvbGl0dGxlQ2xpT3V0cHV0Q2hhbm5lbC5zZXQodGhpcywgdGhpcy52c2NvZGUud2luZG93LmNyZWF0ZU91dHB1dENoYW5uZWwoZG9saXR0bGVDbGlQdXRwdXRDaGFubmVsTmFtZSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIGdsb2JhbHNcbiAgICAgKi9cbiAgICBnZXQgdnNjb2RlKCkge1xuICAgICAgICByZXR1cm4gX3ZzY29kZS5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgZ2xvYmFsc1xuICAgICAqL1xuICAgIGdldCBwcm9qZWN0Q29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0Q29uZmlndXJhdGlvbi5nZXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgZ2xvYmFsc1xuICAgICAqL1xuICAgIGdldCBkb2xpdHRsZU91dHB1dENoYW5uZWwoKSB7XG4gICAgICAgIHJldHVybiBfZG9saXR0bGVPdXRwdXRDaGFubmVsLmdldCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBnbG9iYWxzXG4gICAgICovXG4gICAgZ2V0IGRvbGl0dGxlUHJvamVjdE91dHB1dENoYW5uZWwoKSB7XG4gICAgICAgIHJldHVybiBfZG9saXR0bGVQcm9qZWN0T3V0cHV0Q2hhbm5lbC5nZXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBnbG9iYWxzXG4gICAgICovXG4gICAgZ2V0IGRvbGl0dGxlQ2xpT3V0cHV0Q2hhbm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIF9kb2xpdHRsZUNsaU91dHB1dENoYW5uZWwuZ2V0KHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGdsb2JhbHNcbiAgICAgKi9cbiAgICBhc3luYyBzZXRQcm9qZWN0Q29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ0xvYWRpbmcgZG9saXR0bGUgcHJvamVjdCcpO1xuICAgICAgICAgICAgbGV0IGNvbmZpZyA9IGF3YWl0IGxvYWRQcm9qZWN0Q29uZmlndXJhdGlvbigpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB0aHJvdyAnUHJvamVjdCBjb25maWd1cmF0aW9uIHdhcyB1bmRlZmluZWQnO1xuICAgICAgICAgICAgX3Byb2plY3RDb25maWd1cmF0aW9uLnNldCh0aGlzLCBjb25maWcpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgZ2xvYmFscygpOyJdfQ==