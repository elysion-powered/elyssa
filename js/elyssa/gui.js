(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('elyssa/layer', ['elyssa/node'], function(Node) {
    return Elyssa.Layer = (function(_super) {

      __extends(Layer, _super);

      function Layer() {}

      return Layer;

    })(Node);
  });

}).call(this);
