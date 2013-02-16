do (window = @, document = @document, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.Renderer.DOM
    constructor: ->
      @name = 'DOM'
      
    clear: ->