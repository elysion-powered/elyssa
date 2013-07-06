(function() {
  define('elyssa/scene', function() {
    'use strict';
    var Scene;
    return Scene = (function() {
      var entityList;

      entityList = [];

      function Scene(_arg) {
        this.constructor.name = _arg.this;
        entityList = [];
      }

      Scene.prototype.add = function(entity) {
        return entityList.push(entity);
      };

      Scene.prototype.render = function() {
        var e, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = entityList.length; _i < _len; _i++) {
          e = entityList[_i];
          _results.push(typeof e.render === "function" ? e.render() : void 0);
        }
        return _results;
      };

      Scene.prototype.update = function(dt) {
        var e, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = entityList.length; _i < _len; _i++) {
          e = entityList[_i];
          _results.push(typeof e.update === "function" ? e.update(dt) : void 0);
        }
        return _results;
      };

      return Scene;

    })();
  });

}).call(this);
