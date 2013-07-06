(function() {
  (function(window, Elyssa) {
    return Elyssa.Rect = (function() {
      var defaultValue;

      defaultValue = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };

      function Rect(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : defaultValue, this.x = _ref.x, this.y = _ref.y, this.w = _ref.w, this.h = _ref.h;
        if (this.x == null) {
          this.x = defaultValue.x;
        }
        if (this.y == null) {
          this.y = defaultValue.y;
        }
        if (this.w == null) {
          this.w = defaultValue.w;
        }
        if (this.h == null) {
          this.h = defaultValue.h;
        }
      }

      Rect.prototype.contains = function(_arg) {
        var h, w, x, y, _ref, _ref1;
        x = _arg.x, y = _arg.y, w = _arg.w, h = _arg.h;
        if ((w != null) && (h != null)) {
          return (this.x <= (_ref = x + h) && _ref <= this.x + this.w) && (this.y <= (_ref1 = y + w) && _ref1 <= this.y + this.h);
        } else {
          return (this.x <= x && x <= this.x + this.w) && (this.y <= y && y <= this.y + this.h);
        }
      };

      Rect.prototype.center = function() {
        return {
          x: this.w / 2 + this.x,
          y: this.h / 2 + this.y
        };
      };

      Rect.prototype.add = function(_arg) {
        var h, w, x, y;
        x = _arg.x, y = _arg.y, w = _arg.w, h = _arg.h;
        return {
          x: this.x += x,
          y: this.y += y,
          w: this.w += w,
          h: this.h += h
        };
      };

      Rect.prototype.toSize = function() {
        return new Elyssa.Size({
          w: this.w,
          h: this.h
        });
      };

      Rect.prototype.toVector2 = function() {
        return new Elyssa.Vector2({
          x: this.x,
          y: this.y
        });
      };

      Rect.prototype.toVector3 = function() {
        return new Elyssa.Vector3({
          x: this.x,
          y: this.y
        });
      };

      Rect.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          w: this.w,
          h: this.h
        }, defaultValue);
      };

      Rect.fromString = function(rectString) {
        return Elyssa.deserialize(rectString, this.name);
      };

      return Rect;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
