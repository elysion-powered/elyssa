(function() {

  (function(window, Elyssa) {
    return Elyssa.deserialize = function(stringedObject, convert) {
      var parsedObject;
      if (!stringedObject) {
        return new Elyssa[convert]();
      }
      try {
        parsedObject = JSON.parse(stringedObject);
        return new Elyssa[convert](parsedObject);
      } catch (error) {
        console.log("Error while converting " + stringedObject + " to a " + convert + ": " + error);
        return new Elyssa[convert]();
      }
    };
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.serialize = function(object, defaultValue) {
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
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);