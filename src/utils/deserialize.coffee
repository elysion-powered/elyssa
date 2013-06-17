do (window = @, Elyssa = @Elyssa or= {}) ->
  
  deserialize = (stringedObject, convert) ->
    return new Elyssa[convert]() unless stringedObject
      
    try
      parsedObject = JSON.parse stringedObject
      return new Elyssa[convert] parsedObject
    catch error
      console.log "Error while converting #{stringedObject} to a #{convert}: #{error}"
      return new Elyssa[convert]()