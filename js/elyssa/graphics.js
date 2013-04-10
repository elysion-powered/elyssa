(function() {

  define('elyssa/graphics/device', function() {
    'use strict';
    var GraphicsDevice;
    return GraphicsDevice = {};
  });

}).call(this);

(function() {

  define('elyssa/graphics/rendertarget', function() {
    'use strict';
    var RenderTarget;
    return RenderTarget = (function() {

      function RenderTarget() {}

      return RenderTarget;

    })();
  });

}).call(this);

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

  define('elyssa/texturemanager', function() {
    'use strict';
    var textureCache;
    textureCache = {};
    return Elyssa.TextureManager = {
      add: function(texture) {},
      remove: function(index) {}
    };
  });

}).call(this);
