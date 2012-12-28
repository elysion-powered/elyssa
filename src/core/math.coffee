((window, Elyssa) ->
  
  # Elyssa.Math Object
  # Equivilent to being a singleton class
  Elyssa.Math =
    # Clamps a value between a minimum and maximum
    #
    # @param {Number} The value that needs to be clamped
    # @param {Number} Minimum (Optional, set to 0.0 by default)
    # @param {Number} Maximum (Optional, set to 1.0 by default)
    #
    # @return {Number} The clamped value
    clamp: (value, min = 0.0, max = 1.0) ->
      if min <= value <= max
        value
      else
        if value > max then max else min
      
  
)(@, @Elyssa or= {})
