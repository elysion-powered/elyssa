do (window = @, Elyssa = @Elyssa or= {}) ->

  class Elyssa.Rect
    defaultValue =
      x: 0
      y: 0
      w: 0
      h: 0
      
    constructor: (param = defaultValue) ->
      return new Rect param unless @ instanceof Rect
      
      param = {@x, @y, @w, @h}
      
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
    
    toVector2: -> new Elyssa.Vector2 {@x, @y}
    toVector3: -> new Elyssa.Vector3 {@x, @y}
      
    toString: -> Elyssa.serialize {@x, @y, @w, @h}, defaultValue

    @fromString: (rectString) -> Elyssa.deserialize rectString, @name
