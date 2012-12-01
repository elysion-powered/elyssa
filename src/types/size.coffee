((window, Elyssa) ->
  
  class Elyssa.Size
    constructor: ({@w, @h} = {w: 0, h: 0}) ->
      @w = 0 unless @w?
      @h = 0 unless @h?
  
    toRect: -> new Elyssa.Rect {x: 0, y: 0, @w, @h}
      
    toString: -> JSON.stringify {@x, @y, @z}

  
)(@, @Elyssa or= {})