(function() {

  (function() {
    var vendors;
    vendors = ['ms', 'moz', 'webkit', 'o'];
    define('requestAnimationFrame', ['root'], function(root) {
      var lastTime, requestAnimationFrame, x, _i, _len;
      lastTime = 0;
      requestAnimationFrame = root.requestAnimationFrame;
      if (!requestAnimationFrame) {
        for (_i = 0, _len = vendors.length; _i < _len; _i++) {
          x = vendors[_i];
          requestAnimationFrame = root["" + x + "RequestAnimationFrame"];
          if (requestAnimationFrame) {
            break;
          }
        }
      }
      if (!requestAnimationFrame) {
        requestAnimationFrame = function(callback, element) {
          var currTime, id, timeToCall;
          currTime = Date.now();
          timeToCall = Math.max(0, 16 - (currTime - lastTime));
          id = root.setTimeout((function() {
            return callback(currTime + timeToCall);
          }), timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }
      return requestAnimationFrame;
    });
    return define('cancelAnimationFrame', ['root'], function(root) {
      var cancelAnimationFrame, x, _i, _len;
      cancelAnimationFrame = root.cancelAnimationFrame;
      if (!cancelAnimationFrame) {
        for (_i = 0, _len = vendors.length; _i < _len; _i++) {
          x = vendors[_i];
          cancelAnimationFrame = root["" + x + "CancelAnimationFrame"] || root["" + x + "CancelRequestAnimationFrame"];
          if (cancelAnimationFrame) {
            break;
          }
        }
      }
      if (!cancelAnimationFrame) {
        cancelAnimationFrame = function(id) {
          return root.clearTimeout(id);
        };
      }
      return cancelAnimationFrame;
    });
  })();

}).call(this);

(function() {

  (function(root) {
    'use check';    return root.ClassHelper = function(object) {
      var methods, objPrototype;
      objPrototype = object.prototype;
      methods = {
        property: function(prop) {
          var key, propObject, value;
          for (key in prop) {
            value = prop[key];
            propObject = {
              configurable: true,
              enumerable: false
            };
            if (value.get != null) {
              propObject.get = value.get;
            }
            if (value.set != null) {
              propObject.set = value.set;
            }
            Object.defineProperty(objPrototype, key, propObject);
          }
          return null;
        },
        staticProperty: function(prop) {
          var key, value;
          for (key in prop) {
            value = prop[key];
            Object.defineProperty(object, key, value);
          }
          return null;
        },
        get: function(prop) {
          var getter, name, obj;
          for (name in prop) {
            getter = prop[name];
            obj = {};
            obj[name] = {
              get: getter
            };
            methods.property(obj);
          }
          return null;
        },
        set: function(prop) {
          var name, obj, setter;
          for (name in prop) {
            setter = prop[name];
            obj = {};
            obj[name] = {
              set: setter
            };
            methods.property(obj);
          }
          return null;
        }
      };
      return methods;
    };
  })(typeof exports !== "undefined" && exports !== null ? exports : this);

}).call(this);

(function() {

  define('clone', function() {
    /*
      Cloning objects
    */

    var clone;
    return clone = function(obj) {
      var flags, key, newInstance;
      if (!((obj != null) || typeof obj !== 'object')) {
        return obj;
      }
      if (obj instanceof Date) {
        return new Date(obj.getTime());
      }
      if (obj instanceof RegExp) {
        flags = '';
        if (obj.global != null) {
          flags += 'g';
        }
        if (obj.ignoreCase != null) {
          flags += 'i';
        }
        if (obj.multiline != null) {
          flags += 'm';
        }
        if (obj.sticky != null) {
          flags += 'y';
        }
        return new RegExp(obj.source, flags);
      }
      newInstance = new obj.constructor();
      for (key in obj) {
        newInstance[key] = window.clone(obj[key]);
      }
      return newInstance;
    };
  });

}).call(this);

(function() {

  (function(window) {
    'use strict';
    /*
      Console object fixes
    */

    var console, i, method, methods, noop, _i, _len, _results;
    noop = function() {};
    methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    console = (window.console || (window.console = {}));
    _results = [];
    for (_i = 0, _len = methods.length; _i < _len; _i++) {
      i = methods[_i];
      method = methods[i];
      _results.push(console[method] || (console[method] = noop));
    }
    return _results;
  })(this);

}).call(this);

(function() {
  var __slice = [].slice;

  define('debounce', [root], function(root) {
    var debounce;
    return debounce = function(func, threshold, execAsap) {
      var timeout;
      if (threshold == null) {
        threshold = 100;
      }
      timeout = null;
      return function() {
        var args, delayed, obj;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        obj = this;
        delayed = function() {
          if (!execAsap) {
            func.apply(this, args);
          }
          return timeout = null;
        };
        if (timeout) {
          root.clearTimeout(timeout);
        } else {
          if (execAsap) {
            func.apply(obj, args);
          }
        }
        return timeout = root.setTimout(delayed, threshold);
      };
    };
  });

}).call(this);

(function() {

  define('deleteitem', function() {
    var deleteItem;
    return deleteItem = function(obj, item) {
      var i, key, newObject, num, _i, _len, _results;
      if (Array.isArray(obj)) {
        _results = [];
        for (num = _i = 0, _len = obj.length; _i < _len; num = ++_i) {
          i = obj[num];
          if (num !== item) {
            _results.push(i);
          }
        }
        return _results;
      } else {
        newObject = {};
        for (key in obj) {
          if (key !== item) {
            newObject[key] = obj[key];
          }
        }
        return newObject;
      }
    };
  });

}).call(this);

(function() {
  var __slice = [].slice;

  define('extend', function() {
    /*
     Extending objects
    */

    var extend;
    return extend = function() {
      var key, obj, objects, target, value, _i, _len;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        obj = objects[_i];
        for (key in obj) {
          value = obj[key];
          target[key] = value;
        }
      }
      return target;
    };
  });

}).call(this);

(function() {

  (function(String) {
    /*
      Provides a hashcode for strings
    */
    return String.prototype.hashCode = function() {
      var char, hash, i, _i, _len;
      hash = 0;
      if (this.length === 0) {
        return hash;
      }
      for (_i = 0, _len = this.length; _i < _len; _i++) {
        i = this[_i];
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
      return hash;
    };
  })(String);

}).call(this);

(function() {

  define('elyssa', [], function() {
    if (!(typeof module !== "undefined" && module !== null ? module.exports : void 0)) {
      return window.Elyssa = {};
    }
  });

}).call(this);

(function() {

  (function(root) {
    return define('root', function() {
      return root;
    });
  })(this);

}).call(this);
