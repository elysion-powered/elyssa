(function() {
  (function(window, Elyssa) {
    var deserialize;
    return deserialize = function(stringedObject, convert) {
      var error, parsedObject;
      if (!stringedObject) {
        return new Elyssa[convert]();
      }
      try {
        parsedObject = JSON.parse(stringedObject);
        return new Elyssa[convert](parsedObject);
      } catch (_error) {
        error = _error;
        console.log("Error while converting " + stringedObject + "        to a " + convert + ": " + error);
        return new Elyssa[convert]();
      }
    };
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
