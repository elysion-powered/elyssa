do (window = @, Elyssa = @Elyssa or= {}) ->
  
  # Vector2 class
  class Elyssa.Vector2
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
    toRect: -> new Elyssa.Rect {@x, @y}
    
    normalize: ->
      new Elyssa.Vector
        x: @x / @length
        y: @y / @length
    
    # Read-only property: length
    @property 'length',
      get: -> window.Math.sqrt(@x * @x + @y * @y)
    
    # Calculates the dot product between two vectors and returns the value
    @dotProduct: (a, b) -> 
      return unless a and b
    
      a.x * b.x + a.y * b.y
    
    # Static function to normalize a vector
    @normalize: (vec) ->
      new Elyssa.Vector2
        x: vec.x / vec.length
        y: vec.y / vec.length
    
    toVector3: -> Elyssa.Vector3 {@x, @y}
    
    # Serializes the vector
    toString: -> Elyssa.serialize {@x, @y, @z}, defaultValue

    # Deserializes the vector
    @fromString: (string) -> Elyssa.deserialize string, @name
