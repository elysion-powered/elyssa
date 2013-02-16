(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Assets = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Preloader = (function() {

      function Preloader() {}

      Preloader.prototype.on = function(name, eventFunction) {};

      Preloader.prototype.off = function(name) {};

      return Preloader;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
