define 'elyssa/storage', ['root', 'serialize'], (root, serialize) ->
  'use strict'
  
  Storage = do (localStorage = root.localStorage) ->
    storageMap = {}
    
    toString = -> serialize storageMap
    
    clear = -> storageMap = {}
    
    load = ->
      
    save = ->
      
    item = (key, value) ->
    
    {toString, item, load, save, clear}
    