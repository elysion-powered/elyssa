do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  Elyssa.Storage = do (localStorage = window.localStorage) ->
    storageMap = {}
    
    toString = -> JSON.stringify storageMap
    
    clear = -> storageMap = {}
    
    load = ->
      
    save = ->
      
    item = (key, value) ->
    
    {toString, item, load, save, clear}
    