(function() {
  define('elyssa/storage', ['root', 'serialize'], function(root, serialize) {
    'use strict';
    var Storage;
    return Storage = (function(localStorage) {
      var clear, item, load, save, storageMap, toString;
      storageMap = {};
      toString = function() {
        return serialize(storageMap);
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
