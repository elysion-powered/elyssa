((window, Elyssa) ->
  
  Elyssa.Math =
    clamp: (value, min = 0.0, max = 1.0) ->
      if min <= value <= max
        value
      else
        if value > max then max else min
      
  
)(@, @Elyssa or= {})
