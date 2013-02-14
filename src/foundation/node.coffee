do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  class Elyssa.Node extends Elyssa.Entity
    
    constructor: ->
      
    position: new Elyssa.Vector()
    color: new Elyssa.Color()
    scale: new Elyssa.Vector()
    texture: new Elyssa.Texture()
    
    draw: ->
    
    
    toString: ->
      position: position.toString()
      color: color.toString()
      scale: scale.toString()
      texture: texture.toString()
