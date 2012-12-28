((window, Elyssa) ->

  # Scene class
  class Elyssa.Scene
    
    entityList = {}
    
    # Constructor
    #
    # @param {String} Name of the scene, defaults to the class name
    constructor: (@name: @constructor.name) ->
  
    # Adds an entity to the scene
    # 
    # @param {Object} The entity that will be added to the list
    add: (entity) ->
      
    # Renders all entities
    render: ->
    
    # Updates all entities
    update: (dt) ->

)(@, @Elyssa or= {})
