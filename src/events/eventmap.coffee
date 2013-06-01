define 'elyssa/eventmap', ['root'], ->
  'use strict'
  
  class EventMap
   
    constructor: (@sender) ->
      @events = {}
      @validEvents = []    

    on: (eventName, eventFunction) ->
      return unless eventFunction

      if @validEvents.length > 0
        return if @validEvents.indexOf(eventName) is -1
      
      eventDesc = 
        event: eventFunction
        id: -1
        type: ''
        sender: @sender
      
      unless @events[eventName]
        @events[eventName] = [eventDesc]
      else
        @events[eventName].push eventDesc
      
      @
      
    off: (eventName) -> 
      return unless eventName    

      if @events[eventName].type is 'once' or @events[eventName].type is 'repeat'
        root.clearInterval @events[eventName].id if @events[eventName].type is 'repeat'
        root.clearTimeout @events[eventName].id if @events[eventName].type is 'once'

      delete @events[eventName] if @events[eventName]

      @
    
    trigger: (eventName, args...) ->
      # Break if 
      return unless eventName?

      # Differentiate between eventName being an object or a string
      if typeof eventName is 'object'
        {name, interval, repeat, context, delay} = eventName
      else
        name = eventName

      # Break if event doesn't exist
      return unless @events[name]

      # Set default values
      interval = 0 unless interval?
      repeat = false unless repeat?
      context = @ unless context?
      delay = 0 unless delay?
      
      # Walk through all events and call them
      for i in @events[name]
        triggerFunction = -> 
          if i.sender
            i.event.apply context, [].concat.apply [], [[i.sender], args]
          else
            i.event.apply context, args
        
        triggerEvent = ->
          if interval      
            if repeat
              i.type = 'repeat'
              i.id = root.setInterval triggerFunction, interval
            else
              i.type = 'once'
              i.id = root.setTimeout triggerFunction, interval
          else
            i.type = 'direct'
            triggerFunction.call @
          null
        
        if delay
          timeoutId = root.setTimeout ->
            triggerEvent.call @
            root.clearTimeout timeoutId
        else
          triggerEvent.call @

      @
    