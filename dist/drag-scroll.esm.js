function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var DragScroll =
/*#__PURE__*/
function () {
  function DragScroll(_ref) {
    var el = _ref.el;

    _classCallCheck(this, DragScroll);

    if (!el) return false;
    this._window = window;
    this._document = document;
    this.mouseDown = false;
    this.lastClientX = 0;
    this.lastClientY = 0;
    this.newScrollX = 0;
    this.newScrollY = 0;
    this.el = el;
    this.destroy();
    this.init();
  }

  _createClass(DragScroll, [{
    key: "init",
    value: function init(el, lastClientX, lastClientY, mouseDown, cont, scroller) {
      var _this = this;

      this.el.addEventListener('mousedown', this.el.md = function (e) {
        if (e.target.closest('[nodrag]')) {
          return false;
        }

        if (!_this.el.hasAttribute('nodrag') || _this._document.elementFromPoint(e.pageX, e.pageY) === _this.el) {
          _this.mouseDown = true;
          _this.lastClientX = e.clientX;
          _this.lastClientY = e.clientY;
          e.preventDefault();
        }
      });

      this._window.addEventListener('mousemove', this.el.mm = function (e) {
        if (_this.mouseDown) {
          (scroller = _this.el.scroller || _this.el).scrollLeft -= _this.newScrollX = -_this.lastClientX + (_this.lastClientX = e.clientX);
          scroller.scrollTop -= _this.newScrollY = -_this.lastClientY + (_this.lastClientY = e.clientY);
        }
      }, 0);

      this._window.addEventListener('mouseup', this.el.mu = function () {
        _this.mouseDown = false;
      }, 0);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.el.removeEventListener('mousedown', this.el.md, 0);

      this._window.removeEventListener('mousemove', this.el.mm, 0);

      this._window.removeEventListener('mouseup', this.el.mu, 0);
    }
  }]);

  return DragScroll;
}();

export default DragScroll;
