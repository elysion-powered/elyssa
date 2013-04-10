(function() {

  define('elyssa/assets', function() {
    'use strict';    return Elyssa.Assets = {};
  });

}).call(this);

(function() {

  define('elyssa/preloader', function() {
    'use strict';
    var Preloader;
    return Preloader = (function() {

      function Preloader() {}

      Preloader.prototype.on = function(name, eventFunction) {};

      Preloader.prototype.off = function(name) {};

      return Preloader;

    })();
  });

}).call(this);

(function() {

  define('elyssa/storage', ['root'], function(root) {
    'use strict';
    var Storage;
    return Storage = (function(localStorage) {
      var clear, item, load, save, storageMap, toString;
      storageMap = {};
      toString = function() {
        return Elyssa.serialize(storageMap);
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
    })(root.localStorage);
  });

}).call(this);
