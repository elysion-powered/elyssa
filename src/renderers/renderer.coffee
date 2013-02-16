do (window = @, document = @document, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.Renderer
    functionNames = ['drawLine', 'drawPoint', 'drawTexture', 'clear']
    
    source = null
    
    bind = (func, context) -> func.apply context, arguments if func?
    
    setMethods = (context, methodArray, source) ->
      for method in methodArray
        # Check if the renderer has all needed methods
        console.log "Renderer #{source.name} does not implement function #{method}" unless source[method]
        
        # Bind functions to Renderer object
        do (method = method) -> context[method] = -> bind source[method] context
    
    constructor: (source) -> 
      unless source
        console.log 'Please specify a renderer implementation'
      else
        setMethods(@, functionNames, source)
