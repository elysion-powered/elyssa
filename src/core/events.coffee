do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.EventMap
    eventMap = {}
    eventFunctions = {}
    
    constructor: ->
      eventMap = {}
      eventFunctions = {}
    
    on: (eventName, eventFunction) -> eventMap[eventName] = eventFunction      
    off: (eventName) -> delete eventMap[eventName] if eventMap[eventName]
    
    trigger: (eventName, args...) -> eventMap[eventName].apply(@, args) if eventMap[eventName]
    

  Elyssa.Events = new Elyssa.EventMap()
