define 'elyssa/texture/manager', ->
  'use strict'
  
  textureCache = {}
  
  TextureManager =
    add: (texture) ->
    remove: (index) ->   