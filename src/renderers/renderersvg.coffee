do (window = @, document = @document, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.Renderer.SVG
    constructor: ->
      @name = 'SVG'
      
    clear: ->