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
