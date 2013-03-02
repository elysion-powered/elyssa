(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Scene = (function() {
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
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.SceneDirector = (function() {
      var currentScene, sceneList;

      sceneList = {};

      currentScene = null;

      function SceneDirector() {}

      SceneDirector.prototype.add = function(scene) {
        if (scene == null) {
          return;
        }
        return sceneList[scene.name] = scene;
      };

      SceneDirector.prototype["delete"] = function(sceneName) {
        return delete sceneList[sceneName];
      };

      SceneDirector.prototype.switchTo = function(sceneName) {
        if (sceneList[sceneName]) {
          return currentScene = sceneList[sceneName];
        }
      };

      SceneDirector.prototype.render = function() {
        return currentScene != null ? typeof currentScene.render === "function" ? currentScene.render() : void 0 : void 0;
      };

      SceneDirector.prototype.update = function(dt) {
        return currentScene != null ? typeof currentScene.update === "function" ? currentScene.update(dt) : void 0 : void 0;
      };

      return SceneDirector;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
