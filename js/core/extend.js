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
