((window, Elyssa) ->

  class Elyssa.Rect
    constructor: ({@x, @y, @w, @h} = {x: 0, y: 0, w: 0, h: 0}) ->
      @x = 0 unless @x?
      @y = 0 unless @y?
      @w = 0 unless @w?
      @h = 0 unless @h?
  
    contains: ({x, y, w, h}) ->
      if w? and h?
        @x <= x + h <= @x + @w and @y <= y + w <= @y + @h
      else
        @x <= x <= @x + @w and @y <= y <= @y + @h
  
    center: ->
      x: @w / 2 + @x
      y: @h / 2 + @y

    add: ({x, y, w, h}) ->
      x: @x += x
      y: @y += y
      w: @w += w
      h: @h += h
  
    toSize: -> new Elyssa.Size {@w, @h}
    
    toVector: -> new Elyssa.Vector {@x, @y, z: 0}
      
    toString: -> JSON.stringify {@x, @y, @w, @h}
      

)(@, @Elyssa or= {})
