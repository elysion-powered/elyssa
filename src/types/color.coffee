((window, Elyssa) ->
  
  class Color
    constructor: ({@r, @g, @b, @a} = {r: 255, g: 255, b: 255, a: 255}) ->
      @r = 0 unless @r?
      @g = 0 unless @g?
      @b = 0 unless @b?
      @a = 0 unless @a?
    
    toString: ->
      if a / 255 == 1.0
        "rgb(#{@r}, #{@g}, #{b})"
      else
        "rgba(#{@r}, #{@g}, #{b}, #{a / 255})"
  
)(@, @Elyssa or= {})
