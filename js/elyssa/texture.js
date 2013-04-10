(function() {

  define('elyssa/texture', ['elyssa/types/rect'], function(Rect) {
    'use strict';
    var Texture;
    return Texture = (function() {

      function Texture(source) {}

      Texture.prototype.loadFromFile = function(filename) {};

      Texture.prototype.loadFromData = function(data) {};

      Texture.prototype.textureRect = new Rect();

      Texture.prototype.toString = function() {
        return {
          filename: ''
        };
      };

      return Texture;

    })();
  });

}).call(this);

(function() {

  define('elyssa/texture/manager', function() {
    'use strict';
    var TextureManager, textureCache;
    textureCache = {};
    return TextureManager = {
      add: function(texture) {},
      remove: function(index) {}
    };
  });

}).call(this);
