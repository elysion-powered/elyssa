(function() {

  (function(window, Elyssa) {
    return Elyssa.Behaviour = (function() {

      function Behaviour() {}

      Behaviour.prototype.update = function(dt) {};

      return Behaviour;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
