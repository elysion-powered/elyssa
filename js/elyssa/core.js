(function() {
  var __slice = [].slice;

  (function(window, document) {
    'use strict';
    /*
      Console object fixes
    */

    var console, i, lastTime, method, methods, noop, vendors, x, _i, _j, _len, _len1;
    noop = function() {};
    methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    console = (window.console || (window.console = {}));
    for (_i = 0, _len = methods.length; _i < _len; _i++) {
      i = methods[_i];
      method = methods[i];
      console[method] || (console[method] = noop);
    }
    /*
     Extending objects
    */

    window.extend = function() {
      var key, obj, objects, target, value, _j, _len1;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_j = 0, _len1 = objects.length; _j < _len1; _j++) {
        obj = objects[_j];
        for (key in obj) {
          value = obj[key];
          target[key] = value;
        }
      }
      return target;
    };
    /*
      Cloning objects
    */

    window.clone = function(obj) {
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
    /*
     requestAnim shim layer by Paul Irish
    */

    lastTime = 0;
    vendors = ['ms', 'moz', 'webkit', 'o'];
    for (_j = 0, _len1 = vendors.length; _j < _len1; _j++) {
      x = vendors[_j];
      window.requestAnimationFrame = window["" + x + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window["" + x + "CancelAnimationFrame"] || window["" + x + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime, id, timeToCall;
        currTime = Date.now();
        timeToCall = Math.max(0, 16 - (currTime - lastTime));
        id = window.setTimeout(function() {
          return callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
        return window.clearTimeout(id);
      };
    }
    return null;
  })(this, document);

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

  (function(root) {
    'use strict';    root.check = function(variable, checkObject) {
      var checkType, k, key, keyArray, result, stringedVar, typeFuncs, typeName, types, value, _i, _len;
      stringedVar = {}.toString.call(variable);
      typeName = stringedVar.slice(8, stringedVar.length - 1).toLowerCase();
      checkType = function(typeString, cb, inverse) {
        if (inverse) {
          if (typeName !== typeString) {
            if (typeof cb === "function") {
              cb(variable);
            }
          }
        } else {
          if (typeName === typeString) {
            if (typeof cb === "function") {
              cb(variable);
            }
          }
        }
        /*
          Else is a reserved keyword, while CoffeeScript interpolates it correctly,
          it can only be written as check(...).['else']...
          check(...).otherwise(...) is a better choice if using plain JavaScript
        */

        if (!checkObject) {
          result["else"] = result.otherwise = function(cb) {
            return checkType(typeString, cb, !inverse);
          };
          return result;
        }
      };
      types = function(inverse) {
        return {
          valid: function(cb) {
            if (inverse) {
              if (variable == null) {
                cb(variable);
              }
            } else {
              if (variable != null) {
                cb(variable);
              }
            }
            return this;
          },
          undefined: function(cb) {
            return checkType("undefined", cb, inverse);
          },
          "null": function(cb) {
            return checkType("null", cb, inverse);
          },
          string: function(cb) {
            return checkType("string", cb, inverse);
          },
          number: function(cb) {
            return checkType("number", cb, inverse);
          },
          object: function(cb) {
            return checkType("object", cb, inverse);
          },
          array: function(cb) {
            return checkType("array", cb, inverse);
          },
          "function": function(cb) {
            return checkType("function", cb, inverse);
          }
        };
      };
      if (checkObject) {
        typeFuncs = types(false);
        for (key in checkObject) {
          value = checkObject[key];
          if (key.indexOf(',') > -1) {
            keyArray = key.split(',');
            for (_i = 0, _len = keyArray.length; _i < _len; _i++) {
              k = keyArray[_i];
              typeFuncs[k.trim()](value);
            }
          } else {
            typeFuncs[key](value);
          }
        }
        result = void 0;
      } else {
        result = types(false);
        result.not = types(true);
      }
      return result;
    };
    if (typeof exports === "undefined" || exports === null) {
      return typeof root.define === "function" ? root.define('check', [], function() {
        return root.check;
      }) : void 0;
    }
  })(typeof exports !== "undefined" && exports !== null ? exports : this);

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
  var __slice = [].slice;

  (function(window, Elyssa) {
    'use strict';    Elyssa.EventMap = (function() {
      var eventFunctions, eventMap;

      eventMap = {};

      eventFunctions = {};

      function EventMap(sender) {
        this.sender = sender;
        eventMap = {};
        eventFunctions = {};
      }

      EventMap.prototype.validEvents = [];

      EventMap.prototype.on = function(eventName, eventFunction) {
        var eventDesc;
        if (!eventFunction) {
          return;
        }
        if (this.validEvents.length > 0) {
          if (validEvents.indexOf(eventName) === -1) {
            return;
          }
        }
        eventDesc = {
          event: eventFunction,
          id: -1,
          type: '',
          sender: this.sender
        };
        if (!eventMap[eventName]) {
          eventMap[eventName] = [eventDesc];
        } else {
          eventMap[eventName].push(eventDesc);
        }
        return this;
      };

      EventMap.prototype.off = function(eventName) {
        if (!eventName) {
          return;
        }
        if (eventMap[eventName].type === 'once' || eventMap[eventName].type === 'repeat') {
          if (eventMap[eventName].type === 'repeat') {
            window.clearInterval(eventMap[eventName].id);
          }
          if (eventMap[eventName].type === 'once') {
            window.clearTimeout(eventMap[eventName].id);
          }
        }
        if (eventMap[eventName]) {
          delete eventMap[eventName];
        }
        return this;
      };

      EventMap.prototype.trigger = function() {
        var args, context, eventName, i, interval, name, repeat, triggerFunction, _i, _len, _ref;
        eventName = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (eventName == null) {
          return;
        }
        if (typeof eventName === 'object') {
          name = eventName.name, interval = eventName.interval, repeat = eventName.repeat, context = eventName.context;
        } else {
          name = eventName;
        }
        if (interval == null) {
          interval = 0;
        }
        if (repeat == null) {
          repeat = false;
        }
        if (context == null) {
          context = this;
        }
        _ref = eventMap[name];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          triggerFunction = function(evObject) {
            return i.event.apply(context, [[i.sender], args].reduce(function(a, b) {
              return a.concat(b);
            }));
          };
          if (interval) {
            if (repeat) {
              i.type = 'repeat';
              i.id = window.setInterval(triggerFunction, interval);
            } else {
              i.type = 'once';
              i.id = window.setTimeout(triggerFunction, interval);
            }
          } else {
            i.type = 'direct';
            triggerFunction.call(this);
          }
        }
        return this;
      };

      return EventMap;

    })();
    return Elyssa.Events = new Elyssa.EventMap('Elyssa.Events');
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Log = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Loop = (function() {
      var isRunning, staticProperty, taskList;

      function Loop() {}

      taskList = {};

      isRunning = true;

      staticProperty = window.ClassHelper(Loop).staticProperty;

      staticProperty({
        tasks: {
          get: function() {
            return Object.keys(taskList);
          }
        }
      });

      Loop.run = function() {
        var animLoop, time;
        time = 0;
        animLoop = function() {
          var dt, key, now, value;
          window.requestAnimationFrame(animLoop);
          now = Date.now();
          dt = now - (time || now);
          time = now;
          if (!isRunning) {
            return;
          }
          for (key in taskList) {
            value = taskList[key];
            if (!value.paused) {
              if (typeof value.value === "function") {
                value.value(dt);
              }
            }
          }
          return null;
        };
        return animLoop();
      };

      Loop.pause = function() {
        isRunning = false;
        return this;
      };

      Loop.resume = function() {
        isRunning = true;
        return this;
      };

      Loop.clear = function() {
        taskList = {};
        return this;
      };

      Loop.addTask = function(taskName, taskFunction) {
        if (taskList[taskName]) {
          return;
        }
        taskList[taskName] = {
          paused: false,
          value: taskFunction
        };
        return this;
      };

      Loop.pauseTask = function(taskName) {
        taskList[taskName].paused = true;
        return this;
      };

      Loop.resumeTask = function(taskName) {
        taskList[taskName].paused = false;
        return this;
      };

      Loop.removeTask = function(taskName) {
        if (taskList[taskName]) {
          delete taskList[taskName];
        }
        return this;
      };

      return Loop;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';    return Elyssa.Math = {
      clamp: function(value, min, max) {
        var _ref;
        if (min == null) {
          min = 0.0;
        }
        if (max == null) {
          max = 1.0;
        }
        if (min > max) {
          _ref = [max, min], min = _ref[0], max = _ref[1];
        }
        if ((min <= value && value <= max)) {
          return value;
        } else {
          if (value > max) {
            return max;
          } else {
            return min;
          }
        }
      }
    };
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
