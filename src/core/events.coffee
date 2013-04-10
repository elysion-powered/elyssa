define 'elyssa/events', ->
  'use strict'
  
  class EventMap
    eventMap = {}
    eventFunctions = {}
   
    constructor: (@sender) ->
      eventMap = {}
      eventFunctions = {}
    
    validEvents: []

    on: (eventName, eventFunction) ->
      return unless eventFunction

      if @validEvents.length > 0
        return if validEvents.indexOf(eventName) is -1
      
      eventDesc = 
        event: eventFunction
        id: -1
        type: ''
        sender: @sender
      
      unless eventMap[eventName]
        eventMap[eventName] = [eventDesc]
      else
        eventMap[eventName].push eventDesc
      
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
      
      for i in eventMap[name]
        triggerFunction = (evObject) -> 
          i.event.apply(context, [[i.sender], args].reduce((a, b) -> a.concat(b)))
        
        if interval      
          if repeat
            i.type = 'repeat'
            i.id = window.setInterval triggerFunction, interval
          else
            i.type = 'once'
            i.id = window.setTimeout triggerFunction, interval
        else
          i.type = 'direct'
          triggerFunction.call @

      @
    

  Events = new Elyssa.EventMap('Elyssa.Events')
  
  return {EventMap, Events}
