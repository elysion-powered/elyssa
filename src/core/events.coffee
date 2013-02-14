do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  Elyssa.Events = do ->
    eventMap = {}
    eventFunctions = {}
    
    eventFunctions.on = (eventName, eventFunction) ->
      eventMap[eventName] = eventFunction
      
    eventFunctions.off = (eventName) ->
      delete eventMap[eventName] if eventMap[eventName]
      
    eventFunctions.trigger = (eventName, args...) ->
      eventMap[eventName].apply(@, args) if eventMap[eventName]
    
    eventFunctions