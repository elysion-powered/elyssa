define 'elyssa/types/size',
  ['elyssa/types/rect', 'serialize', 'deserialize'],
  (Rect, serialize, deserialize) ->
    
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