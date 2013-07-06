do (root = exports ? this) ->
  'use check'
  
  root.ClassHelper = (object) ->
    objPrototype = object::
  
    methods =
      property: (prop) ->
        for key, value of prop
          propObject =
            configurable: true,
            enumerable: false,
  
          propObject.get = value.get if value.get?
          propObject.set = value.set if value.set?
  
          Object.defineProperty objPrototype, key, propObject
        null
  
      staticProperty: (prop) ->
        Object.defineProperty object, key, value for key, value of prop
        null
  
      get: (prop) ->
        for name, getter of prop
          obj = {}
          obj[name] = {get: getter}
          methods.property obj
        null
  
      set: (prop) ->
        for name, setter of prop
          obj = {}
          obj[name] = {set: setter}
          methods.property obj
        null
  
    methods
