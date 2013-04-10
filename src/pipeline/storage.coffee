define 'elyssa/storage', ['root'], (root) ->
  'use strict'
  
  Storage = do (localStorage = root.localStorage) ->
    storageMap = {}
    
    toString = -> Elyssa.serialize storageMap
    
    clear = -> storageMap = {}
    
    load = ->
      
    save = ->
      
    item = (key, value) ->
    
    {toString, item, load, save, clear}
    