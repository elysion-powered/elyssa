(function() {
  define('elyssa/loop', function() {
    'use strict';
    var Loop;
    return Loop = (function() {
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
  });

}).call(this);
