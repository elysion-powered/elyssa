(function() {
  (function(window, Elyssa) {
    return Elyssa.Vector2 = (function() {
      var defaultValue, get;

      get = window.ClassHelper(Vector2).get;

      defaultValue = {
        x: 0,
        y: 0
      };

      function Vector2(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : defaultValue, this.x = _ref.x, this.y = _ref.y;
        if (this.x == null) {
          this.x = defaultValue.x;
        }
        if (this.y == null) {
          this.y = defaultValue.y;
        }
      }

      Vector2.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: this.x,
          y: this.y
        });
      };

      Vector2.prototype.normalize = function() {
        return new Elyssa.Vector({
          x: this.x / this.length,
          y: this.y / this.length
        });
      };

      get({
        length: function() {
          return window.Math.sqrt(this.x * this.x + this.y * this.y);
        }
      });

      Vector2.dotProduct = function(a, b) {
        if (!(a && b)) {
          return;
        }
        return a.x * b.x + a.y * b.y;
      };

      Vector2.normalize = function(vec) {
        return new Elyssa.Vector2({
          x: vec.x / vec.length,
          y: vec.y / vec.length
        });
      };

      Vector2.prototype.toVector3 = function() {
        return Elyssa.Vector3({
          x: this.x,
          y: this.y
        });
      };

      Vector2.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          z: this.z
        }, defaultValue);
      };

      Vector2.fromString = function(string) {
        return Elyssa.deserialize(string, this.name);
      };

      return Vector2;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
