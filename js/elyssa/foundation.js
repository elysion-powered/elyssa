(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Node = (function(_super) {

      __extends(Node, _super);

      function Node() {}

      Node.prototype.position = new Elyssa.Vector();

      Node.prototype.color = new Elyssa.Color();

      Node.prototype.scale = new Elyssa.Vector();

      Node.prototype.texture = new Elyssa.Texture();

      Node.prototype.draw = function() {};

      Node.prototype.toString = function() {
        return {
          position: position.toString(),
          color: color.toString(),
          scale: scale.toString(),
          texture: texture.toString()
        };
      };

      return Node;

    })(Elyssa.Entity);
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
