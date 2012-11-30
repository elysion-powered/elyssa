((window, Elyssa) ->
  
  class Elyssa.Vector
    constructor: ({@x, @y, @z} = {x: 0, y: 0, z: 0}) ->
      @x = 0 unless @x?
      @y = 0 unless @y?
      @z = 0 unless @z?
  
    toString: ->
      JSON.stringify {@x, @y ,@z}

  
)(@, @Elyssa or= {})
