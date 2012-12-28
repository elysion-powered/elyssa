((window, Elyssa) ->

  # The scene director class manages a list of scenes
  class Elyssa.SceneDirector
    sceneList = {}
    currentScene = null
    
    constructor: ->
  
    # Adds a scene to the scene director
    #
    # @param {Object} The scene that will be added to the director
    add: (scene) ->
      return unless scene?
      
      sceneList[scene.name] = scene
    
    # Deletes a scene by scene name
    #
    # @param {String} The scene name
    delete: (sceneName) ->
      delete sceneList[sceneName]
    
    # Switches to a scene
    #
    # @param {String} The scene name
    switchTo: (sceneName) ->
      currentScene = sceneList[sceneName] if sceneList[sceneName]
    
    # Calls the render function of the current scene
    render: ->
      currentScene?.render?()
      
    # Calls the update function of the current scene
    update: (dt) ->
      currentScene?.update?(dt)

)(@, @Elyssa or= {})
