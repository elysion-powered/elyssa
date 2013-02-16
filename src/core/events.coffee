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
      return unless eventFunction

      if @validEvents.length > 0
        return if validEvents.indexOf(eventName) is -1
        
      eventMap[eventName] = 
        event: eventFunction
        id: -1
        type: ''
      
      @
    off: (eventName) -> 
      return unless eventName    

      if eventMap[eventName].type is 'once' or eventMap[eventName].type is 'repeat'
        window.clearInterval eventMap[eventName].id if eventMap[eventName].type is 'repeat'
        window.clearTimeout eventMap[eventName].id if eventMap[eventName].type is 'once'

      delete eventMap[eventName] if eventMap[eventName]

      @
    
    trigger: (eventName, args...) ->
      return unless eventName?

      if typeof eventName is 'object'
        {name, interval, repeat, context} = eventName
      else
        name = eventName

      # Set default values
      interval = 0 unless interval?
      repeat = false unless repeat?
      context = @ unless context?

      triggerFunction = ->
        eventMap[name].event.apply(context, args) if eventMap[name]

      if interval      
        if repeat
          eventMap[name].type = 'repeat'
          eventMap[name].id = window.setInterval triggerFunction, interval
        else
          eventMap[name].type = 'once'
          eventMap[name].id = window.setTimeout triggerFunction, interval
      else
        eventMap[name].type = 'direct'
        triggerFunction.call @

      @
    

  Elyssa.Events = new Elyssa.EventMap()
