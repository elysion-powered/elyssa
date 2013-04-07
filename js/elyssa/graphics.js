(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.GraphicsDevice = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.RenderTarget = (function() {

      function RenderTarget() {}

      return RenderTarget;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Texture = (function() {

      function Texture(source) {}

      Texture.prototype.loadFromFile = function(filename) {};

      Texture.prototype.loadFromData = function(data) {};

      Texture.prototype.textureRect = new Elyssa.Rect();

      Texture.prototype.toString = function() {
        return {
          filename: ''
        };
      };

      return Texture;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    var textureCache;
    textureCache = {};
    return Elyssa.TextureManager = {
      add: function(texture) {},
      remove: function(index) {}
    };
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
