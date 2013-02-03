do (window = @, Elyssa = @Elyssa or= {}) ->
  
  class Elyssa.Size
    constructor: ({@w, @h} = {w: 0, h: 0}) ->
      @w = 0 unless @w?
      @h = 0 unless @h?
  
    toRect: -> new Elyssa.Rect {x: 0, y: 0, @w, @h}
    
    center: ->
      x: @w / 2
      y: @h / 2
      
    toString: -> JSON.stringify {@x, @y, @z}