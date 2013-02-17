do (window = @, Elyssa = @Elyssa or= {}) ->
  
  # Vector class
  class Elyssa.Vector3
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
    toRect: -> new Elyssa.Rect {@x, @y}
    
    normalize: ->
      new Elyssa.Vector
        x: @x / @length
        y: @y / @length
        z: @z / @length
    
    # Read-only property: length
    @property 'length',
      get: -> window.Math.sqrt(@x * @x + @y * @y + @z * @z)
    
    # Calculates the cross product of two vectors and returns it as a new vector
    @crossProduct: (a, b) ->
      return unless a and b
      
      new Elyssa.Vector3 
        x: a.y * b.z - b.y * a.z
        y: a.z * b.x - b.z * a.x
        z: a.x * b.y - b.x * a.y
    
    # Calculates the dot product between two vectors and returns the value
    @dotProduct: (a, b) -> 
      return unless a and b
    
      a.x * b.x + a.y * b.y + a.z * b.z
    
    # Static function to normalize a vector
    @normalize: (vec) ->
      new Elyssa.Vector3
        x: vec.x / vec.length
        y: vec.y / vec.length
        z: vec.z / vec.length

    @up: -> new Elyssa.Vector3 {x: 0, y: 1, z: 0}
    @zero: -> new Elyssa.Vector3 {x: 0, y: 0, Z: 0}
    @one: -> new Elyssa.Vector3 {x: 1, y: 1, z: 1}
    @right: -> new Elyssa.Vector3 {x: 1, y: 0, z: 0}
    
    toVector2: -> Elyssa.Vector2 {@x, @y}
    
    # Serializes the vector
    toString: -> Elyssa.serialize {@x, @y, @z}, defaultValue

    # Deserializes the vector
    @fromString: (string) -> Elyssa.deserialize string, @name
