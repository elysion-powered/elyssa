(function() {

  (function(window, Elyssa) {
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
        return clearTimeout(id);
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
