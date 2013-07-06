(function() {
  define('elyssa/serialize', function() {
    var serialize;
    return serialize = function(object, defaultValue) {
      var key, value;
      if (defaultValue) {
        for (key in defaultValue) {
          value = defaultValue[key];
          if (value === object[key]) {
            delete object[key];
          }
        }
      }
      return JSON.stringify(object);
    };
  });

}).call(this);
