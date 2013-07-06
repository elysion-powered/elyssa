(function() {
  define('elyssa/types/size', ['elyssa/types/rect', 'serialize', 'deserialize'], function(Rect, serialize, deserialize) {
    var Size;
    return Size = (function() {
      function Size(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : {
          w: 0,
          h: 0
        }, this.w = _ref.w, this.h = _ref.h;
        if (this.w == null) {
          this.w = 0;
        }
        if (this.h == null) {
          this.h = 0;
        }
      }

      Size.prototype.toRect = function() {
        return new Rect({
          x: 0,
          y: 0,
          w: this.w,
          h: this.h
        });
      };

      Size.prototype.center = function() {
        return {
          x: this.w / 2,
          y: this.h / 2
        };
      };

      Size.prototype.toString = function() {
        return serialize({
          x: this.x,
          y: this.y,
          w: this.w,
          h: this.h
        }, defaultValue);
      };

      Size.fromString = function(rectString) {
        return deserialize(rectString, this.name);
      };

      return Size;

    })();
  });

}).call(this);
