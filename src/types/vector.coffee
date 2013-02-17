do (window = @, Elyssa = @Elyssa or= {}) ->
  
  class Elyssa.Vector
    defaultValue =
      x: 0
      y: 0
      z: 0
    
    constructor: ({@x, @y, @z} = defaultValue) ->
      @x = defaultValue.x unless @x?
      @y = defaultValue.y unless @y?
      @z = defaultValue.z unless @z?
  
    toRect: -> new Elyssa.Rect {@x, @y, w: 0, h: 0}
    
    toString: -> JSON.stringify {@x, @y, @z}
    
    normalize: ->
      new Elyssa.Vector
        x: @x / @length
        y: @y / @length
        z: @z / @length
    
    @property 'length',
      get: -> window.Math.sqrt(@x * @x + @y * @y + @z * @z)
      
    @crossProduct: (a, b) ->
      new Elyssa.Vector 
        x: a.y * b.z - b.y * a.z
        y: a.z * b.x - b.z * a.x
        z: a.x * b.y - b.x * a.y
        
    @dotProduct: (a, b) -> a.x * b.x + a.y * b.y + a.z * b.z
    
    @normalize: (vec) ->
      new Elyssa.Vector
        x: vec.x / vec.length
        y: vec.y / vec.length
        z: vec.z / vec.length

    @up: -> new Elyssa.Vector {x: 0, y: 1, z: 0}
    @zero: -> new Elyssa.Vector {x: 0, y: 0, Z: 0}
    @one: -> new Elyssa.Vector {x: 1, y: 1, z: 1}
    @right: -> new Elyssa.Vector {x: 1, y: 0, z: 0}
    
    toString: -> Elyssa.serialize {@x, @y, @z}, defaultValue

    @fromString: (string) -> Elyssa.deserialize string, 'Vector'
