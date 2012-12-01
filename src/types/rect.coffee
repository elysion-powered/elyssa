((window, Elyssa) ->

  class Elyssa.Rect
    constructor: ({@x, @y, @w, @h} = {x: 0, y: 0, w: 0, h: 0}) ->
      @x = 0 unless @x?
      @y = 0 unless @y?
      @w = 0 unless @w?
      @h = 0 unless @h?
  
    contains: ({x, y}) ->
      x >= @x and y >= @y and x <= @x + @w and y <= @y + @h
  
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
