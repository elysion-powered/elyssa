do (window = @, Elyssa = @Elyssa or= {}) ->

  class Elyssa.Rect
    defaultValue =
      x: 0
      y: 0
      w: 0
      h: 0
      
    constructor: ({@x, @y, @w, @h} = defaultValue) ->
      @x = defaultValue.x unless @x?
      @y = defaultValue.y unless @y?
      @w = defaultValue.w unless @w?
      @h = defaultValue.h unless @h?
  
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
      
    toString: -> Elyssa.serialize {@x, @y, @w, @h}, defaultValue

    @fromString: (rectString) -> Elyssa.deserialize rectString, 'Rect'
