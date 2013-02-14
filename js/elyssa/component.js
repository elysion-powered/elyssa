(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Behaviour = (function() {

      function Behaviour() {}

      Behaviour.prototype.update = function(dt) {};

      return Behaviour;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Entity = (function() {

      function Entity() {}

      return Entity;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
