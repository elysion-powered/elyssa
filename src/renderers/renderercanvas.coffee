do (window = @, document = @document, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.Renderer.Canvas
    context = null
    
    constructor: ->
      @name = 'Canvas'
      
      canvasElement = document.createElement 'canvas'
      document.body.appendChild canvasElement
      
      context = canvasElement.getContext '2d'
      
    render: (element) ->
      
    clear: -> context.clearRect 0, 0, 0, 0
      
