do (window = @, Elyssa = @Elyssa or= {}) ->
  
  class Elyssa.Vector
    constructor: ({@x, @y, @z} = {x: 0, y: 0, z: 0}) ->
      @x = 0 unless @x?
      @y = 0 unless @y?
      @z = 0 unless @z?
  
    toRect: -> new Elyssa.Rect {@x, @y, w: 0, h: 0}
    
    toString: -> JSON.stringify {@x, @y, @z}