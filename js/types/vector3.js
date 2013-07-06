(function() {
  (function(window, Elyssa) {
    return Elyssa.Vector3 = (function() {
      var defaultValue, get;

      get = window.ClassHelper(Vector3).get;

      defaultValue = {
        x: 0,
        y: 0,
        z: 0
      };

      function Vector3(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : defaultValue, this.x = _ref.x, this.y = _ref.y, this.z = _ref.z;
        if (this.x == null) {
          this.x = defaultValue.x;
        }
        if (this.y == null) {
          this.y = defaultValue.y;
        }
        if (this.z == null) {
          this.z = defaultValue.z;
        }
      }

      Vector3.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: this.x,
          y: this.y
        });
      };

      Vector3.prototype.normalize = function() {
        return new Elyssa.Vector({
          x: this.x / this.length,
          y: this.y / this.length,
          z: this.z / this.length
        });
      };

      get({
        length: function() {
          return window.Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
      });

      Vector3.crossProduct = function(a, b) {
        if (!(a && b)) {
          return;
        }
        return new Elyssa.Vector3({
          x: a.y * b.z - b.y * a.z,
          y: a.z * b.x - b.z * a.x,
          z: a.x * b.y - b.x * a.y
        });
      };

      Vector3.dotProduct = function(a, b) {
        if (!(a && b)) {
          return;
        }
        return a.x * b.x + a.y * b.y + a.z * b.z;
      };

      Vector3.normalize = function(vec) {
        return new Elyssa.Vector3({
          x: vec.x / vec.length,
          y: vec.y / vec.length,
          z: vec.z / vec.length
        });
      };

      Vector3.up = function() {
        return new Elyssa.Vector3({
          x: 0,
          y: 1,
          z: 0
        });
      };

      Vector3.zero = function() {
        return new Elyssa.Vector3({
          x: 0,
          y: 0,
          Z: 0
        });
      };

      Vector3.one = function() {
        return new Elyssa.Vector3({
          x: 1,
          y: 1,
          z: 1
        });
      };

      Vector3.right = function() {
        return new Elyssa.Vector3({
          x: 1,
          y: 0,
          z: 0
        });
      };

      Vector3.prototype.toVector2 = function() {
        return Elyssa.Vector2({
          x: this.x,
          y: this.y
        });
      };

      Vector3.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          z: this.z
        }, defaultValue);
      };

      Vector3.fromString = function(string) {
        return Elyssa.deserialize(string, this.name);
      };

      return Vector3;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
