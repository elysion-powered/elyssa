define 'elyssa/math', ->
  'use strict'
  
  # Elyssa.Math
  # Static class
  # @mixin
  Elyssa.Math =
    # Clamps a value between a minimum and maximum
    #
    # @param {Number} The value that needs to be clamped
    # @param {Number} Minimum (Optional, set to 0.0 by default)
    # @param {Number} Maximum (Optional, set to 1.0 by default)
    #
    # @return {Number} The clamped value
    clamp: (value, min = 0.0, max = 1.0) ->
      [min, max] = [max, min] if min > max
      
      if min <= value <= max
        value
      else
        if value > max then max else min