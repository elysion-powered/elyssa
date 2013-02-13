(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.GraphicsDevice = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(window, Elyssa) {
    return Elyssa.Layer = (function(_super) {

      __extends(Layer, _super);

      function Layer() {}

      return Layer;

    })(Elyssa.Node);
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Node = (function() {

      function Node() {}

      Node.prototype.position = new Elyssa.Vector();

      Node.prototype.color = new Elyssa.Color();

      Node.prototype.draw = function() {};

      Node.prototype.toString = function() {};

      return Node;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.RenderTarget = (function() {

      function RenderTarget() {}

      return RenderTarget;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(window, Elyssa) {
    return Elyssa.Sprite = (function(_super) {

      __extends(Sprite, _super);

      function Sprite() {}

      return Sprite;

    })(Elyssa.Node);
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Texture = (function() {

      function Texture(source) {}

      Texture.prototype.loadFromFile = function(filename) {};

      return Texture;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
