define ['elyssa/color', 'elyssa/serialize', 'elyssa/deserialize'], (Color, serialize, deserialize) ->

  class Rect
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
  
    toSize: -> new Size {@w, @h}
    
    toVector2: -> new Vector2 {@x, @y}
    toVector3: -> new Vector3 {@x, @y}
      
    toString: -> serialize {@x, @y, @w, @h}, defaultValue

    @fromString: (rectString) -> deserialize rectString, @name
    

  class Size
    constructor: (param = {w: 0, h: 0}) ->
      return new Size param unless @ instance Size
      
      param = {@w, @h}
      
      @w = 0 unless @w?
      @h = 0 unless @h?
  
    toRect: -> new Rect {x: 0, y: 0, @w, @h}
    
    center: ->
      x: @w / 2
      y: @h / 2
      
    toString: -> serialize {@x, @y, @w, @h}, defaultValue

    @fromString: (rectString) -> deserialize rectString, @name
    
  # Vector2 class
  class Vector2
    
    {get} = window.ClassHelper(@)
    
    defaultValue =
      x: 0
      y: 0
    
    # Creates the vector class
    #
    # Allows to define X and Y components as part of an object
    constructor: ({@x, @y} = defaultValue) ->
      @x = defaultValue.x unless @x?
      @y = defaultValue.y unless @y?
  
    # Converts a vector into a rect
    toRect: -> new Rect {@x, @y}
    
    normalize: ->
      new Vector
        x: @x / @length
        y: @y / @length
    
    # Read-only property: length
    get length: -> window.Math.sqrt(@x * @x + @y * @y)
    
    # Calculates the dot product between two vectors and returns the value
    @dotProduct: (a, b) ->
      return unless a and b
    
      a.x * b.x + a.y * b.y
    
    # Static function to normalize a vector
    @normalize: (vec) ->
      new Vector2
        x: vec.x / vec.length
        y: vec.y / vec.length
    
    toVector3: -> Vector3 {@x, @y}
    
    # Serializes the vector
    toString: -> serialize {@x, @y, @z}, defaultValue

    # Deserializes the vector
    @fromString: (string) -> deserialize string, @name
    

  # Vector class
  class Vector3
    
    {get} = window.ClassHelper(@)
    
    defaultValue =
      x: 0
      y: 0
      z: 0
    
    # Creates the vector class
    #
    # Allows to define X, Y and Z components as part of an object
    constructor: ({@x, @y, @z} = defaultValue) ->
      @x = defaultValue.x unless @x?
      @y = defaultValue.y unless @y?
      @z = defaultValue.z unless @z?
  
    # Converts a vector into a rect
    toRect: -> new Rect {@x, @y}
    
    normalize: ->
      new Vector
        x: @x / @length
        y: @y / @length
        z: @z / @length
    
    # Read-only property: length
    get length: -> window.Math.sqrt(@x * @x + @y * @y + @z * @z)
    
    # Calculates the cross product of two vectors and returns it as a new vector
    @crossProduct: (a, b) ->
      return unless a and b
      
      new Vector3
        x: a.y * b.z - b.y * a.z
        y: a.z * b.x - b.z * a.x
        z: a.x * b.y - b.x * a.y
    
    # Calculates the dot product between two vectors and returns the value
    @dotProduct: (a, b) ->
      return unless a and b
    
      a.x * b.x + a.y * b.y + a.z * b.z
    
    # Static function to normalize a vector
    @normalize: (vec) ->
      new Vector3
        x: vec.x / vec.length
        y: vec.y / vec.length
        z: vec.z / vec.length

    @up: -> new Vector3 {x: 0, y: 1, z: 0}
    @zero: -> new Vector3 {x: 0, y: 0, Z: 0}
    @one: -> new Vector3 {x: 1, y: 1, z: 1}
    @right: -> new Vector3 {x: 1, y: 0, z: 0}
    
    toVector2: -> Vector2 {@x, @y}
    
    # Serializes the vector
    toString: -> serialize {@x, @y, @z}, defaultValue

    # Deserializes the vector
    @fromString: (string) -> deserialize string, @name