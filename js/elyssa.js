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
        'is' is a pretty good function name in my opinion, 
        but already a pre-defined keyword in CoffeeScript, 
        'check' is a better function name if you want to just 
        use the function without the 'window' prefix
    */

    window.is = window.check = function(variable) {
      var checkType, result, stringedVar, typeName, types;
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
                check(...).otherwise(...) is a better choice, if using plain JavaScript
        */

        result["else"] = result.otherwise = function(cb) {
          return checkType(typeString, cb, !inverse);
        };
        return result;
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
            return checkType('undefined', cb, inverse);
          },
          "null": function(cb) {
            return checkType('null', cb, inverse);
          },
          string: function(cb) {
            return checkType('string', cb, inverse);
          },
          number: function(cb) {
            return checkType('number', cb, inverse);
          },
          object: function(cb) {
            return checkType('object', cb, inverse);
          },
          array: function(cb) {
            return checkType('array', cb, inverse);
          },
          "function": function(cb) {
            return checkType('function', cb, inverse);
          }
        };
      };
      result = types(false);
      result.not = types(true);
      return result;
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

  (function(Function, Object) {
    /*
        Syntactic sugar for properties
    */
    Function.prototype.property = function(prop, desc) {
      return Object.defineProperty(this.prototype, prop, desc);
    };
    return Function.prototype.staticProperty = function(prop, desc) {
      return Object.defineProperty(this, prop, desc);
    };
  })(Function, Object);

}).call(this);

(function() {
  var __slice = [].slice;

  (function(window, Elyssa) {
    'use strict';
    Elyssa.EventMap = (function() {
      var eventFunctions, eventMap;

      eventMap = {};

      eventFunctions = {};

      function EventMap() {
        eventMap = {};
        eventFunctions = {};
      }

      EventMap.prototype.validEvents = [];

      EventMap.prototype.on = function(eventName, eventFunction) {
        if (this.validEvents.length > 0) {
          if (validEvents.indexOf(eventName) === -1) {
            return;
          }
        }
        return eventMap[eventName] = eventFunction;
      };

      EventMap.prototype.off = function(eventName) {
        if (eventMap[eventName]) {
          return delete eventMap[eventName];
        }
      };

      EventMap.prototype.trigger = function() {
        var args, eventName;
        eventName = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (eventMap[eventName]) {
          return eventMap[eventName].apply(this, args);
        }
      };

      return EventMap;

    })();
    return Elyssa.Events = new Elyssa.EventMap();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Log = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Loop = (function() {
      var isRunning, taskList;

      function Loop() {}

      taskList = {};

      isRunning = true;

      Loop.staticProperty('tasks', {
        get: function() {
          return Object.keys(taskList);
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
    'use strict';
    return Elyssa.Math = {
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

(function() {

  (function(window, Elyssa) {
    'use strict';
    Elyssa.Color = (function() {
      var colorMax;

      colorMax = 255;

      function Color(param) {
        if (param == null) {
          param = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
          };
        }
        if (typeof param === 'string') {
          if (Elyssa.Color[param]) {
            return Elyssa.Color[param]();
          } else {
            return new Elyssa.Color();
          }
        } else {
          this.r = param.r, this.g = param.g, this.b = param.b, this.a = param.a;
          if (this.r == null) {
            this.r = 0;
          }
          if (this.g == null) {
            this.g = 0;
          }
          if (this.b == null) {
            this.b = 0;
          }
          if (this.a == null) {
            this.a = 255;
          }
          this.r = Elyssa.Math.clamp(this.r, 0, colorMax);
          this.g = Elyssa.Math.clamp(this.g, 0, colorMax);
          this.b = Elyssa.Math.clamp(this.b, 0, colorMax);
          this.a = Elyssa.Math.clamp(this.a, 0, colorMax);
        }
      }

      Color.prototype.toString = function() {
        if (this.a / colorMax === 1.0) {
          return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        } else {
          return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + (this.a / colorMax) + ")";
        }
      };

      Color.prototype.toHex = function() {
        var tmpB, tmpG, tmpR;
        tmpR = (~~this.r).toString(16);
        tmpG = (~~this.g).toString(16);
        tmpB = (~~this.b).toString(16);
        if (tmpR.length === 1) {
          tmpR = "0" + tmpR;
        }
        if (tmpG.length === 1) {
          tmpG = "0" + tmpG;
        }
        if (tmpB.length === 1) {
          tmpB = "0" + tmpB;
        }
        return "#" + tmpR + tmpG + tmpB;
      };

      Color.prototype.lighten = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = ~~(colorMax * factor);
        this.r += delta;
        this.g += delta;
        this.b += delta;
        return this;
      };

      Color.prototype.darken = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = ~~(colorMax * factor);
        this.r -= delta;
        this.g -= delta;
        this.b -= delta;
        return this;
      };

      Color.prototype.fadeIn = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = ~~(colorMax * factor);
        this.a += delta;
        return this;
      };

      Color.prototype.fadeOut = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = ~~(colorMax * factor);
        this.a -= delta;
        return this;
      };

      Color.aqua = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 255
        });
      };

      Color.black = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 0
        });
      };

      Color.blue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 255
        });
      };

      Color.fuchsia = function() {
        return new Elyssa.Color({
          r: 255,
          g: 0,
          b: 255
        });
      };

      Color.gray = function() {
        return new Elyssa.Color({
          r: 128,
          g: 128,
          b: 128
        });
      };

      Color.grey = Color.gray;

      Color.green = function() {
        return new Elyssa.Color({
          r: 0,
          g: 128,
          b: 0
        });
      };

      Color.lime = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 0
        });
      };

      Color.maroon = function() {
        return new Elyssa.Color({
          r: 128,
          g: 0,
          b: 0
        });
      };

      Color.navy = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 128
        });
      };

      Color.olive = function() {
        return new Elyssa.Color({
          r: 128,
          g: 128,
          b: 0
        });
      };

      Color.purple = function() {
        return new Elyssa.Color({
          r: 128,
          g: 0,
          b: 128
        });
      };

      Color.red = function() {
        return new Elyssa.Color({
          r: 255,
          g: 0,
          b: 0
        });
      };

      Color.silver = function() {
        return new Elyssa.Color({
          r: 192,
          g: 192,
          b: 192
        });
      };

      Color.teal = function() {
        return new Elyssa.Color({
          r: 0,
          g: 128,
          b: 128
        });
      };

      Color.white = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 255
        });
      };

      Color.yellow = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 0
        });
      };

      Color.transparent = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 0,
          a: 0
        });
      };

      Color.aliceBlue = function() {
        return new Elyssa.Color({
          r: 240,
          g: 248,
          b: 255
        });
      };

      Color.antiqueWhite = function() {
        return new Elyssa.Color({
          r: 250,
          g: 235,
          b: 215
        });
      };

      Color.aquamarine = function() {
        return new Elyssa.Color({
          r: 127,
          g: 255,
          b: 212
        });
      };

      Color.azure = function() {
        return new Elyssa.Color({
          r: 240,
          g: 255,
          b: 255
        });
      };

      Color.beige = function() {
        return new Elyssa.Color({
          r: 245,
          g: 245,
          b: 220
        });
      };

      Color.bisque = function() {
        return new Elyssa.Color({
          r: 255,
          g: 228,
          b: 196
        });
      };

      Color.blanchedAlmond = function() {
        return new Elyssa.Color({
          r: 255,
          g: 235,
          b: 205
        });
      };

      Color.blueViolet = function() {
        return new Elyssa.Color({
          r: 138,
          g: 43,
          b: 226
        });
      };

      Color.brown = function() {
        return new Elyssa.Color({
          r: 165,
          g: 42,
          b: 42
        });
      };

      Color.burlyWood = function() {
        return new Elyssa.Color({
          r: 222,
          g: 184,
          b: 135
        });
      };

      Color.cadetBlue = function() {
        return new Elyssa.Color({
          r: 95,
          g: 158,
          b: 160
        });
      };

      Color.chartreuse = function() {
        return new Elyssa.Color({
          r: 127,
          g: 255,
          b: 0
        });
      };

      Color.chocolate = function() {
        return new Elyssa.Color({
          r: 210,
          g: 105,
          b: 30
        });
      };

      Color.coral = function() {
        return new Elyssa.Color({
          r: 255,
          g: 127,
          b: 80
        });
      };

      Color.cornflowerBlue = function() {
        return new Elyssa.Color({
          r: 100,
          g: 149,
          b: 237
        });
      };

      Color.cornsilk = function() {
        return new Elyssa.Color({
          r: 255,
          g: 248,
          b: 220
        });
      };

      Color.crimson = function() {
        return new Elyssa.Color({
          r: 220,
          g: 20,
          b: 60
        });
      };

      Color.cyan = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 255
        });
      };

      Color.darkBlue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 139
        });
      };

      Color.darkCyan = function() {
        return new Elyssa.Color({
          r: 0,
          g: 139,
          b: 139
        });
      };

      Color.darkGoldenRod = function() {
        return new Elyssa.Color({
          r: 184,
          g: 134,
          b: 11
        });
      };

      Color.darkGray = function() {
        return new Elyssa.Color({
          r: 169,
          g: 169,
          b: 169
        });
      };

      Color.darkGrey = Color.darkGray;

      Color.darkGreen = function() {
        return new Elyssa.Color({
          r: 0,
          g: 100,
          b: 0
        });
      };

      Color.darkKhaki = function() {
        return new Elyssa.Color({
          r: 189,
          g: 183,
          b: 107
        });
      };

      Color.darkMagenta = function() {
        return new Elyssa.Color({
          r: 139,
          g: 0,
          b: 139
        });
      };

      Color.darkOliveGreen = function() {
        return new Elyssa.Color({
          r: 85,
          g: 107,
          b: 47
        });
      };

      Color.darkOrange = function() {
        return new Elyssa.Color({
          r: 255,
          g: 140,
          b: 0
        });
      };

      Color.darkOrchid = function() {
        return new Elyssa.Color({
          r: 153,
          g: 50,
          b: 204
        });
      };

      Color.darkRed = function() {
        return new Elyssa.Color({
          r: 139,
          g: 0,
          b: 0
        });
      };

      Color.darkSalmon = function() {
        return new Elyssa.Color({
          r: 233,
          g: 150,
          b: 122
        });
      };

      Color.darkSeaGreen = function() {
        return new Elyssa.Color({
          r: 143,
          g: 188,
          b: 143
        });
      };

      Color.darkSlateBlue = function() {
        return new Elyssa.Color({
          r: 72,
          g: 61,
          b: 139
        });
      };

      Color.darkSlateGray = function() {
        return new Elyssa.Color({
          r: 47,
          g: 79,
          b: 79
        });
      };

      Color.darkSlateGrey = Color.darkSlateGray;

      Color.darkTurquoise = function() {
        return new Elyssa.Color({
          r: 0,
          g: 206,
          b: 209
        });
      };

      Color.darkViolet = function() {
        return new Elyssa.Color({
          r: 148,
          g: 0,
          b: 211
        });
      };

      Color.deepPink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 20,
          b: 147
        });
      };

      Color.deepSkyBlue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 191,
          b: 255
        });
      };

      Color.dimGray = function() {
        return new Elyssa.Color({
          r: 105,
          g: 105,
          b: 105
        });
      };

      Color.dimGrey = Color.dimGray;

      Color.dodgerBlue = function() {
        return new Elyssa.Color({
          r: 30,
          g: 144,
          b: 255
        });
      };

      Color.fireBrick = function() {
        return new Elyssa.Color({
          r: 178,
          g: 34,
          b: 34
        });
      };

      Color.floralWhite = function() {
        return new Elyssa.Color({
          r: 255,
          g: 250,
          b: 240
        });
      };

      Color.forestGreen = function() {
        return new Elyssa.Color({
          r: 34,
          g: 139,
          b: 34
        });
      };

      Color.gainsboro = function() {
        return new Elyssa.Color({
          r: 220,
          g: 220,
          b: 220
        });
      };

      Color.ghostWhite = function() {
        return new Elyssa.Color({
          r: 248,
          g: 248,
          b: 255
        });
      };

      Color.gold = function() {
        return new Elyssa.Color({
          r: 255,
          g: 215,
          b: 0
        });
      };

      Color.goldenRod = function() {
        return new Elyssa.Color({
          r: 218,
          g: 165,
          b: 32
        });
      };

      Color.greenYellow = function() {
        return new Elyssa.Color({
          r: 173,
          g: 255,
          b: 47
        });
      };

      Color.honeyDew = function() {
        return new Elyssa.Color({
          r: 240,
          g: 255,
          b: 240
        });
      };

      Color.hotPink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 105,
          b: 180
        });
      };

      Color.indianRed = function() {
        return new Elyssa.Color({
          r: 205,
          g: 92,
          b: 92
        });
      };

      Color.indigo = function() {
        return new Elyssa.Color({
          r: 75,
          g: 0,
          b: 130
        });
      };

      Color.ivory = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 240
        });
      };

      Color.khaki = function() {
        return new Elyssa.Color({
          r: 240,
          g: 230,
          b: 140
        });
      };

      Color.lavender = function() {
        return new Elyssa.Color({
          r: 230,
          g: 230,
          b: 250
        });
      };

      Color.lavenderBlush = function() {
        return new Elyssa.Color({
          r: 255,
          g: 240,
          b: 245
        });
      };

      Color.lawnGreen = function() {
        return new Elyssa.Color({
          r: 124,
          g: 252,
          b: 0
        });
      };

      Color.lemonChiffon = function() {
        return new Elyssa.Color({
          r: 255,
          g: 250,
          b: 205
        });
      };

      Color.lightBlue = function() {
        return new Elyssa.Color({
          r: 173,
          g: 216,
          b: 230
        });
      };

      Color.lightCoral = function() {
        return new Elyssa.Color({
          r: 240,
          g: 128,
          b: 128
        });
      };

      Color.lightCyan = function() {
        return new Elyssa.Color({
          r: 224,
          g: 255,
          b: 255
        });
      };

      Color.lightGoldenRodYellow = function() {
        return new Elyssa.Color({
          r: 250,
          g: 250,
          b: 210
        });
      };

      Color.lightGray = function() {
        return new Elyssa.Color({
          r: 211,
          g: 211,
          b: 211
        });
      };

      Color.lightGrey = Color.lightGray;

      Color.lightGreen = function() {
        return new Elyssa.Color({
          r: 144,
          g: 238,
          b: 144
        });
      };

      Color.lightPink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 182,
          b: 193
        });
      };

      Color.lightSalmon = function() {
        return new Elyssa.Color({
          r: 255,
          g: 160,
          b: 122
        });
      };

      Color.lightSeaGreen = function() {
        return new Elyssa.Color({
          r: 32,
          g: 178,
          b: 170
        });
      };

      Color.lightSkyBlue = function() {
        return new Elyssa.Color({
          r: 135,
          g: 206,
          b: 250
        });
      };

      Color.lightSlateGray = function() {
        return new Elyssa.Color({
          r: 119,
          g: 136,
          b: 153
        });
      };

      Color.lightSlateGrey = Color.lightSlateGray;

      Color.lightSteelBlue = function() {
        return new Elyssa.Color({
          r: 176,
          g: 196,
          b: 222
        });
      };

      Color.lightYellow = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 224
        });
      };

      Color.limeGreen = function() {
        return new Elyssa.Color({
          r: 50,
          g: 205,
          b: 50
        });
      };

      Color.linen = function() {
        return new Elyssa.Color({
          r: 250,
          g: 240,
          b: 230
        });
      };

      Color.magenta = Color.fuchsia;

      Color.mediumAquaMarine = function() {
        return new Elyssa.Color({
          r: 102,
          g: 205,
          b: 170
        });
      };

      Color.mediumBlue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 205
        });
      };

      Color.mediumOrchid = function() {
        return new Elyssa.Color({
          r: 186,
          g: 85,
          b: 211
        });
      };

      Color.mediumPurple = function() {
        return new Elyssa.Color({
          r: 157,
          g: 112,
          b: 219
        });
      };

      Color.mediumSeaGreen = function() {
        return new Elyssa.Color({
          r: 60,
          g: 179,
          b: 113
        });
      };

      Color.mediumSlateBlue = function() {
        return new Elyssa.Color({
          r: 123,
          g: 104,
          b: 238
        });
      };

      Color.mediumSpringGreen = function() {
        return new Elyssa.Color({
          r: 0,
          g: 250,
          b: 154
        });
      };

      Color.mediumTurquoise = function() {
        return new Elyssa.Color({
          r: 72,
          g: 209,
          b: 204
        });
      };

      Color.mediumVioletRed = function() {
        return new Elyssa.Color({
          r: 199,
          g: 21,
          b: 133
        });
      };

      Color.midnightBlue = function() {
        return new Elyssa.Color({
          r: 25,
          g: 25,
          b: 112
        });
      };

      Color.mintCream = function() {
        return new Elyssa.Color({
          r: 245,
          g: 255,
          b: 250
        });
      };

      Color.mistyRose = function() {
        return new Elyssa.Color({
          r: 255,
          g: 228,
          b: 225
        });
      };

      Color.moccasin = function() {
        return new Elyssa.Color({
          r: 255,
          g: 228,
          b: 181
        });
      };

      Color.navajoWhite = function() {
        return new Elyssa.Color({
          r: 255,
          g: 222,
          b: 173
        });
      };

      Color.oldLace = function() {
        return new Elyssa.Color({
          r: 253,
          g: 245,
          b: 230
        });
      };

      Color.oliveDrab = function() {
        return new Elyssa.Color({
          r: 107,
          g: 142,
          b: 35
        });
      };

      Color.orange = function() {
        return new Elyssa.Color({
          r: 255,
          g: 165,
          b: 0
        });
      };

      Color.orangeRed = function() {
        return new Elyssa.Color({
          r: 255,
          g: 69,
          b: 0
        });
      };

      Color.orchid = function() {
        return new Elyssa.Color({
          r: 218,
          g: 112,
          b: 214
        });
      };

      Color.paleGoldenRod = function() {
        return new Elyssa.Color({
          r: 238,
          g: 232,
          b: 170
        });
      };

      Color.paleGreen = function() {
        return new Elyssa.Color({
          r: 152,
          g: 251,
          b: 152
        });
      };

      Color.paleTurquoise = function() {
        return new Elyssa.Color({
          r: 175,
          g: 238,
          b: 238
        });
      };

      Color.paleVioletRed = function() {
        return new Elyssa.Color({
          r: 219,
          g: 112,
          b: 147
        });
      };

      Color.papayaWhip = function() {
        return new Elyssa.Color({
          r: 255,
          g: 239,
          b: 213
        });
      };

      Color.peachPuff = function() {
        return new Elyssa.Color({
          r: 255,
          g: 218,
          b: 185
        });
      };

      Color.peru = function() {
        return new Elyssa.Color({
          r: 205,
          g: 133,
          b: 63
        });
      };

      Color.pink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 192,
          b: 203
        });
      };

      Color.plum = function() {
        return new Elyssa.Color({
          r: 221,
          g: 160,
          b: 221
        });
      };

      Color.powderBlue = function() {
        return new Elyssa.Color({
          r: 176,
          g: 224,
          b: 230
        });
      };

      Color.rosyBrown = function() {
        return new Elyssa.Color({
          r: 188,
          g: 143,
          b: 143
        });
      };

      Color.royalBlue = function() {
        return new Elyssa.Color({
          r: 65,
          g: 105,
          b: 225
        });
      };

      Color.saddleBrown = function() {
        return new Elyssa.Color({
          r: 139,
          g: 69,
          b: 19
        });
      };

      Color.salmon = function() {
        return new Elyssa.Color({
          r: 250,
          g: 128,
          b: 114
        });
      };

      Color.sandyBrown = function() {
        return new Elyssa.Color({
          r: 244,
          g: 164,
          b: 96
        });
      };

      Color.seaGreen = function() {
        return new Elyssa.Color({
          r: 46,
          g: 139,
          b: 87
        });
      };

      Color.seaShell = function() {
        return new Elyssa.Color({
          r: 255,
          g: 245,
          b: 238
        });
      };

      Color.sienna = function() {
        return new Elyssa.Color({
          r: 160,
          g: 82,
          b: 45
        });
      };

      Color.skyBlue = function() {
        return new Elyssa.Color({
          r: 135,
          g: 206,
          b: 235
        });
      };

      Color.slateBlue = function() {
        return new Elyssa.Color({
          r: 106,
          g: 90,
          b: 205
        });
      };

      Color.slateGray = function() {
        return new Elyssa.Color({
          r: 112,
          g: 128,
          b: 144
        });
      };

      Color.slateGrey = Color.slateGray;

      Color.snow = function() {
        return new Elyssa.Color({
          r: 255,
          g: 250,
          b: 250
        });
      };

      Color.springGreen = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 127
        });
      };

      Color.steelBlue = function() {
        return new Elyssa.Color({
          r: 70,
          g: 130,
          b: 180
        });
      };

      Color.tan = function() {
        return new Elyssa.Color({
          r: 210,
          g: 180,
          b: 140
        });
      };

      Color.thistle = function() {
        return new Elyssa.Color({
          r: 216,
          g: 191,
          b: 216
        });
      };

      Color.tomato = function() {
        return new Elyssa.Color({
          r: 255,
          g: 99,
          b: 71
        });
      };

      Color.turquoise = function() {
        return new Elyssa.Color({
          r: 64,
          g: 224,
          b: 208
        });
      };

      Color.violet = function() {
        return new Elyssa.Color({
          r: 238,
          g: 130,
          b: 238
        });
      };

      Color.wheat = function() {
        return new Elyssa.Color({
          r: 245,
          g: 222,
          b: 179
        });
      };

      Color.whiteSmoke = function() {
        return new Elyssa.Color({
          r: 245,
          g: 245,
          b: 245
        });
      };

      Color.yellowGreen = function() {
        return new Elyssa.Color({
          r: 154,
          g: 205,
          b: 50
        });
      };

      Color.freezeDevBlue = function() {
        return new Elyssa.Color({
          r: 73,
          g: 92,
          b: 108
        });
      };

      return Color;

    })();
    return window.color = Elyssa.color = function(param) {
      return new Elyssa.Color(param);
    };
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Rect = (function() {

      function Rect(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        }, this.x = _ref.x, this.y = _ref.y, this.w = _ref.w, this.h = _ref.h;
        if (this.x == null) {
          this.x = 0;
        }
        if (this.y == null) {
          this.y = 0;
        }
        if (this.w == null) {
          this.w = 0;
        }
        if (this.h == null) {
          this.h = 0;
        }
      }

      Rect.prototype.contains = function(_arg) {
        var h, w, x, y, _ref, _ref1;
        x = _arg.x, y = _arg.y, w = _arg.w, h = _arg.h;
        if ((w != null) && (h != null)) {
          return (this.x <= (_ref = x + h) && _ref <= this.x + this.w) && (this.y <= (_ref1 = y + w) && _ref1 <= this.y + this.h);
        } else {
          return (this.x <= x && x <= this.x + this.w) && (this.y <= y && y <= this.y + this.h);
        }
      };

      Rect.prototype.center = function() {
        return {
          x: this.w / 2 + this.x,
          y: this.h / 2 + this.y
        };
      };

      Rect.prototype.add = function(_arg) {
        var h, w, x, y;
        x = _arg.x, y = _arg.y, w = _arg.w, h = _arg.h;
        return {
          x: this.x += x,
          y: this.y += y,
          w: this.w += w,
          h: this.h += h
        };
      };

      Rect.prototype.toSize = function() {
        return new Elyssa.Size({
          w: this.w,
          h: this.h
        });
      };

      Rect.prototype.toVector = function() {
        return new Elyssa.Vector({
          x: this.x,
          y: this.y,
          z: 0
        });
      };

      Rect.prototype.toString = function() {
        return JSON.stringify({
          x: this.x,
          y: this.y,
          w: this.w,
          h: this.h
        });
      };

      return Rect;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Size = (function() {

      function Size(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : {
          w: 0,
          h: 0
        }, this.w = _ref.w, this.h = _ref.h;
        if (this.w == null) {
          this.w = 0;
        }
        if (this.h == null) {
          this.h = 0;
        }
      }

      Size.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: 0,
          y: 0,
          w: this.w,
          h: this.h
        });
      };

      Size.prototype.center = function() {
        return {
          x: this.w / 2,
          y: this.h / 2
        };
      };

      Size.prototype.toString = function() {
        return JSON.stringify({
          x: this.x,
          y: this.y,
          z: this.z
        });
      };

      return Size;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Vector = (function() {

      function Vector(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : {
          x: 0,
          y: 0,
          z: 0
        }, this.x = _ref.x, this.y = _ref.y, this.z = _ref.z;
        if (this.x == null) {
          this.x = 0;
        }
        if (this.y == null) {
          this.y = 0;
        }
        if (this.z == null) {
          this.z = 0;
        }
      }

      Vector.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: this.x,
          y: this.y,
          w: 0,
          h: 0
        });
      };

      Vector.prototype.toString = function() {
        return JSON.stringify({
          x: this.x,
          y: this.y,
          z: this.z
        });
      };

      return Vector;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

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
      var functionList;

      functionList = {};

      function Entity(name) {
        this.name = name != null ? name : this.constructor.name;
        this.components = {};
        functionList = {};
      }

      Entity.prototype.add = function(component) {
        var componentInstance, componentName, key, value;
        if (!component) {
          return this;
        }
        componentName = component.name;
        componentInstance = this.components[componentName];
        if (!componentInstance) {
          componentInstance = component;
          if (typeof componentInstance.register === "function") {
            componentInstance.register();
          }
          for (key in componentInstance) {
            value = componentInstance[key];
            if (key === 'constructor') {
              continue;
            }
            if (typeof value === 'function') {
              if (!functionList[key]) {
                functionList[key] = [];
              }
              functionList[key].push(value);
              if (!this[key]) {
                this[key] = (function(key) {
                  return function() {
                    var functions, _i, _len, _ref;
                    _ref = functionList[key];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                      functions = _ref[_i];
                      functions.apply(this, arguments);
                    }
                    return this;
                  };
                })(key);
              }
            }
          }
        }
        return this;
      };

      Entity.prototype.remove = function(componentName) {
        var _base;
        if (this.components[componentName]) {
          if (typeof (_base = this.components[componentName]).unregister === "function") {
            _base.unregister();
          }
          delete this.components[componentName];
        }
        return this;
      };

      Entity.prototype.render = function() {
        var key, value, _ref;
        _ref = this.components;
        for (key in _ref) {
          value = _ref[key];
          if (typeof value.render === "function") {
            value.render();
          }
        }
        return this;
      };

      Entity.prototype.update = function(dt) {
        var key, value, _ref;
        _ref = this.components;
        for (key in _ref) {
          value = _ref[key];
          if (typeof value.update === "function") {
            value.update(dt);
          }
        }
        return this;
      };

      return Entity;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.GraphicsDevice = {};
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.RenderTarget = (function() {

      function RenderTarget() {}

      return RenderTarget;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Texture = (function() {

      function Texture(source) {}

      Texture.prototype.loadFromFile = function(filename) {};

      Texture.prototype.loadFromData = function(data) {};

      Texture.prototype.textureRect = new Elyssa.Rect();

      Texture.prototype.toString = function() {
        return {
          filename: ''
        };
      };

      return Texture;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.TextureManager = (function() {

      function TextureManager() {}

      return TextureManager;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, document, Elyssa) {
    'use strict';
    return Elyssa.Renderer = (function() {
      var bind, functionNames, setMethods, source;

      functionNames = ['drawLine', 'drawPoint', 'drawTexture', 'clear'];

      source = null;

      bind = function(func, context) {
        if (func != null) {
          return func.apply(context, arguments);
        }
      };

      setMethods = function(context, methodArray, source) {
        var method, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = methodArray.length; _i < _len; _i++) {
          method = methodArray[_i];
          if (!source[method]) {
            console.log("Renderer " + source.name + " does not implement function " + method);
          }
          _results.push((function(method) {
            return context[method] = function() {
              return bind(source[method](context));
            };
          })(method));
        }
        return _results;
      };

      function Renderer(source) {
        if (!source) {
          console.log('Please specify a renderer implementation');
        } else {
          setMethods(this, functionNames, source);
        }
      }

      return Renderer;

    })();
  })(this, this.document, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, document, Elyssa) {
    'use strict';
    return Elyssa.Renderer.Canvas = (function() {
      var context;

      context = null;

      function Canvas() {
        var canvasElement;
        this.name = 'Canvas';
        canvasElement = document.createElement('canvas');
        document.body.appendChild(canvasElement);
        context = canvasElement.getContext('2d');
      }

      Canvas.prototype.render = function(element) {};

      Canvas.prototype.clear = function() {
        return context.clearRect(0, 0, 0, 0);
      };

      return Canvas;

    })();
  })(this, this.document, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, document, Elyssa) {
    'use strict';
    return Elyssa.Renderer.DOM = (function() {

      function DOM() {
        this.name = 'DOM';
      }

      DOM.prototype.clear = function() {};

      return DOM;

    })();
  })(this, this.document, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, document, Elyssa) {
    'use strict';
    return Elyssa.Renderer.SVG = (function() {

      function SVG() {
        this.name = 'SVG';
      }

      SVG.prototype.clear = function() {};

      return SVG;

    })();
  })(this, this.document, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Node = (function(_super) {

      __extends(Node, _super);

      function Node() {}

      Node.prototype.position = new Elyssa.Vector();

      Node.prototype.color = new Elyssa.Color();

      Node.prototype.scale = new Elyssa.Vector();

      Node.prototype.texture = new Elyssa.Texture();

      Node.prototype.draw = function() {};

      Node.prototype.toString = function() {
        return JSON.stringify({
          position: this.position,
          color: this.color,
          scale: this.scale,
          texture: this.texture
        });
      };

      return Node;

    })(Elyssa.Entity);
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(window, Elyssa) {
    return Elyssa.Sprite = (function(_super) {

      __extends(Sprite, _super);

      function Sprite() {}

      return Sprite;

    })(Elyssa.Node);
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {})(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(window, Elyssa) {
    return Elyssa.Layer = (function(_super) {

      __extends(Layer, _super);

      function Layer() {}

      return Layer;

    })(Elyssa.Node);
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

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

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.Scene = (function() {
      var entityList;

      entityList = [];

      function Scene(_arg) {
        this.constructor.name = _arg.this;
        entityList = [];
      }

      Scene.prototype.add = function(entity) {
        return entityList.push(entity);
      };

      Scene.prototype.render = function() {
        var e, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = entityList.length; _i < _len; _i++) {
          e = entityList[_i];
          _results.push(typeof e.render === "function" ? e.render() : void 0);
        }
        return _results;
      };

      Scene.prototype.update = function(dt) {
        var e, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = entityList.length; _i < _len; _i++) {
          e = entityList[_i];
          _results.push(typeof e.update === "function" ? e.update(dt) : void 0);
        }
        return _results;
      };

      return Scene;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    'use strict';
    return Elyssa.SceneDirector = (function() {
      var currentScene, sceneList;

      sceneList = {};

      currentScene = null;

      function SceneDirector() {}

      SceneDirector.prototype.add = function(scene) {
        if (scene == null) {
          return;
        }
        return sceneList[scene.name] = scene;
      };

      SceneDirector.prototype["delete"] = function(sceneName) {
        return delete sceneList[sceneName];
      };

      SceneDirector.prototype.switchTo = function(sceneName) {
        if (sceneList[sceneName]) {
          return currentScene = sceneList[sceneName];
        }
      };

      SceneDirector.prototype.render = function() {
        return currentScene != null ? typeof currentScene.render === "function" ? currentScene.render() : void 0 : void 0;
      };

      SceneDirector.prototype.update = function(dt) {
        return currentScene != null ? typeof currentScene.update === "function" ? currentScene.update(dt) : void 0 : void 0;
      };

      return SceneDirector;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
