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
