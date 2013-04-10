define 'elyssa/scene', ->
  'use strict'

  # Scene class
  class Scene
    
    entityList = []
    
    # Constructor
    #
    # @param {String} Name of the scene, defaults to the class name
    constructor: (@name: @constructor.name) ->
      entityList = []
  
    # Adds an entity to the scene
    # 
    # @param {Object} The entity that will be added to the list
    add: (entity) ->
      entityList.push(entity)
      
    # Renders all entities
    render: ->
      e.render?() for e in entityList
    
    # Updates all entities
    update: (dt) ->
      e.update?(dt) for e in entityList
