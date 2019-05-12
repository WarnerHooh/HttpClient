"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FetchHttp = _interopRequireDefault(require("./FetchHttp"));

var _AxiosHttp = _interopRequireDefault(require("./AxiosHttp"));

var _RequestHttp = _interopRequireDefault(require("./RequestHttp"));

var _IHttp = _interopRequireWildcard(require("./IHttp"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance = null;

var HttpFactory =
/*#__PURE__*/
function () {
  function HttpFactory() {
    _classCallCheck(this, HttpFactory);
  }

  _createClass(HttpFactory, null, [{
    key: "resolve",
    value: function resolve(http) {
      if (!instance) {
        if (typeof http !== 'function') {
          throw _IHttp.invalidError;
        }

        var name = http.name;

        switch (name) {
          case 'fetch':
            instance = new _FetchHttp["default"](http);
            break;

          case 'wrap':
            instance = new _AxiosHttp["default"](http);
            break;

          case 'request':
            instance = new _RequestHttp["default"](http);
            break;

          default:
            instance = new _IHttp["default"](http);
        }
      }

      return instance;
    }
  }]);

  return HttpFactory;
}();

exports["default"] = HttpFactory;