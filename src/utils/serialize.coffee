do (window = @, Elyssa = @Elyssa or= {}) ->
  
  Elyssa.serialize = (object, defaultValue) ->
    if defaultValue
      # Remove default values from object to be stringified (we're saving a lot of bytes here)
      for key, value of defaultValue
        delete object[key] if value is object[key]
    
    JSON.stringify object
