(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('elyssa/node', ['elyssa/entity'], function(Entity) {
    'use strict';
    var Node;
    return Node = (function(_super) {

      __extends(Node, _super);

      function Node() {}

      Node.prototype.position = new Elyssa.Vector3();

      Node.prototype.color = new Elyssa.Color();

      Node.prototype.scale = new Elyssa.Vector2();

      Node.prototype.texture = new Elyssa.Texture();

      Node.prototype.draw = function() {};

      Node.prototype.toString = function() {
        return Elyssa.serialize({
          position: this.position.toString(),
          color: this.color.toString(),
          scale: this.scale.toString(),
          texture: this.texture.toString()
        });
      };

      return Node;

    })(Entity);
  });

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('elyssa/sprite', ['elyssa/node'], function(Node) {
    var Sprite;
    return Sprite = (function(_super) {

      __extends(Sprite, _super);

      function Sprite() {}

      return Sprite;

    })(Node);
  });

}).call(this);
