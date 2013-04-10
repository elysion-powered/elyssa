define 'elyssa/renderer/canvas', ->
  'use strict'
  
  class Canvas
    context = null
    
    constructor: ->
      @name = 'Canvas'
      
      canvasElement = document.createElement 'canvas'
      document.body.appendChild canvasElement
      
      context = canvasElement.getContext '2d'
      
    render: (element) ->
      
    clear: -> context.clearRect 0, 0, 0, 0
      
