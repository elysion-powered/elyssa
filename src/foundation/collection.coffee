define 'elyssa/collection', ->

  class Collection
    
    contructor: (content) ->
      @data =
        collection: {}
        state: {}
        proxies:
          handler: {}
          keyHandler: {}
  
      if content
        if typeof content is 'string'
          @fromString content
        else
          @set content
      
  
    fromString: (content) -> @data.collection = JSON.parse content
    toString: -> JSON.stringify @data.collection
  
    add: (key, value, state = 'rw') ->
      return if @exists key
      
      @proxy 'add', key, value
      @data.collection[key] = value

      if state is 'readonly' or state is 'read-only' or state is 'readOnly'
        state = 'ro'
      
      if state is 'writeonly' or state is 'write-only' or state is 'writeOnly'
        state = 'wo'

      @data.state[key] = state
    exists: (key) ->
      @proxy 'exists', key
      Object.hasOwnProperty.call @data.collection, key
    has: @exists
    remove: (key) ->
      @proxy 'remove', key
      delete @data.collection[key]
    keys: -> Object.keys(@data.collection)
    on: (name, key, proxyFn) ->
      if key and typeof key is 'string'
        @data.proxies.keyHandler[name] or= {}
        @data.proxies.keyHandler[name][key] = proxyFn
      else
        proxyFn = key
  
        @data.proxies.handler[name] or= []
        @data.proxies.handler[name].push proxyFn
    off: (name, key) ->
      if key
        if typeof key is 'number'
          if @data.proxies.handler[name]?
            @data.proxies.handler[name].splice key, 1
        else
          if @data.proxies.keyHandler[name]?[key]?
            delete @data.proxies.keyHandler[name][key]
      else
        delete @data.proxies.handler[name]
    proxy: (name, key, args...) ->
      if @data.proxies.handler[name]
        i() for i in @data.proxies.handler[name]
  
      if key
        args.splice(0, 0, key)
        if @data.proxies.keyHandler[name]?[key]?
          @data.proxies.keyHandler[name][key] args...
    get: (key) ->
      if data.state[key] isnt 'wo'
        @proxy 'get', key
        @data.collection[key]
      else
        undefined
    set: (key, value) ->
      if value
        if @exists key
          if @data.state[key] isnt 'ro'
            @data.collection[key] = value
            @proxy 'set', key, value
        else
          @add key, value
      else
        for k, v of key
          @set.call @, k, v
  
      null
    each: (callback) ->
      for key, value of @data.collection
        callback key, value
  
      null
    map: (callback) ->
      result = {}
      for key, value of @data.collection
        result[key] = callback key, value
  
      result
    filter: (callback) ->
      result = {}
      for key, value in @data.collection
        unless callback @data.collection[key]
          result[key] = @data.collection[key]
  
      result
    isEmpty: -> @keys().length is 0