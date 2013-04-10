define 'elyssa/texturemanager', ->
  'use strict'
  
  textureCache = {}
  
  Elyssa.TextureManager =
    add: (texture) ->
    remove: (index) ->   