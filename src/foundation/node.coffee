define 'elyssa/node', ['elyssa/entity'], (Entity) ->
  'use strict'
  
  class Node extends Entity
    
    constructor: ->
      
    position: new Elyssa.Vector3()
    color: new Elyssa.Color()
    scale: new Elyssa.Vector2()
    texture: new Elyssa.Texture()
    
    draw: ->
    
    
    toString: -> Elyssa.serialize
      position: @position.toString()
      color: @color.toString()
      scale: @scale.toString()
      texture: @texture.toString()
      