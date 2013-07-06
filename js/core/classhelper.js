(function() {
  (function(root) {
    'use check';
    return root.ClassHelper = function(object) {
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
