do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  textureCache = {}
  
  Elyssa.TextureManager =
    add: (texture) ->
    remove: (index) ->   