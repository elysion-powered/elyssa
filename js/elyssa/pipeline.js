(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Assets = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Preloader = (function() {

      function Preloader() {}

      Preloader.prototype.on = function(name, eventFunction) {};

      Preloader.prototype.off = function(name) {};

      return Preloader;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Storage = (function(localStorage) {
      var clear, item, load, save, storageMap, toString;
      storageMap = {};
      toString = function() {
        return JSON.stringify(storageMap);
      };
      clear = function() {
        return storageMap = {};
      };
      load = function() {};
      save = function() {};
      item = function(key, value) {};
      return {
        toString: toString,
        item: item,
        load: load,
        save: save,
        clear: clear
      };
    })(window.localStorage);
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
