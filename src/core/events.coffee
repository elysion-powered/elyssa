do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.EventMap
    eventMap = {}
    eventFunctions = {}
    
    constructor: ->
      eventMap = {}
      eventFunctions = {}
    
    validEvents: []
    on: (eventName, eventFunction) -> 
      if @validEvents.length > 0
        return if validEvents.indexOf(eventName) is -1
        
      eventMap[eventName] = eventFunction      
    off: (eventName) -> delete eventMap[eventName] if eventMap[eventName]
    
    trigger: (eventName, args...) -> eventMap[eventName].apply(@, args) if eventMap[eventName]
    

  Elyssa.Events = new Elyssa.EventMap()
