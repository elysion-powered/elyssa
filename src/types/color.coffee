define ['elyssa/math', 'elyssa/constants/colors'], (Math, colors) ->
  'use strict'
  
  # Color class
  # This class allows to modifiy R, G, B and alpha value as well
  # It also provides static functions
  class Color
    
    colorMax = 255
    
    # Creates the color class
    #
    # Allows to define R, G, B and A components
    constructor: (param) ->
      return new Color param unless @ instanceof Color
      
      param = {r: 0, g: 0, b: 0, a: 255} unless param?
      
      if typeof param is 'string'
        {@r, @g, @b, @a} = if Color[param] then Color[param]() else new Color()
      else
        {@r, @g, @b, @a} = param
        
        # Default values
        @r = 0 unless @r?
        @g = 0 unless @g?
        @b = 0 unless @b?
        @a = 255 unless @a?
        
        @r = Math.clamp(@r, 0, colorMax)
        @g = Math.clamp(@g, 0, colorMax)
        @b = Math.clamp(@b, 0, colorMax)
        @a = Math.clamp(@a, 0, colorMax)
    
    # Converts the color class into a valid CSS string color
    #
    # @return {String} The color as a rgb or rgba value, depending on
    #   the alpha value
    toString: ->
      if @a / colorMax is 1.0
        "rgb(#{@r}, #{@g}, #{@b})"
      else
        "rgba(#{@r}, #{@g}, #{@b}, #{@a / colorMax})"
    
    # Converts color into hex color
    #
    # @note Hex colors do not have any information about the alpha value
    # @return {String} The color as a hex value
    toHex: ->
      tmpR = (~~@r).toString(16)
      tmpG = (~~@g).toString(16)
      tmpB = (~~@b).toString(16)
      
      tmpR = "0" + tmpR if tmpR.length is 1
      tmpG = "0" + tmpG if tmpG.length is 1
      tmpB = "0" + tmpB if tmpB.length is 1
      
      if tmpR[0] is tmpR[1] and tmpG[0] is tmpG[1] and tmpB[0] is tmpB[1]
        "##{tmpR[0]}#{tmpG[0]}#{tmpB[0]}"
      else
        "##{tmpR}#{tmpG}#{tmpB}"
    
    # Lighten the color
    #
    # @param {Number} The percentage (0.0 - 1.0) the color will be lightened
    # @return {Object} The color object
    lighten: (factor) ->
      factor = Math.clamp(factor)
      
      delta = Math.round(colorMax * factor)
      @r += delta
      @g += delta
      @b += delta
      
      @r = Math.clamp(@r, 0, colorMax)
      @g = Math.clamp(@g, 0, colorMax)
      @b = Math.clamp(@b, 0, colorMax)
      
      @
      
    # Darken the color
    #
    # @param {Number} The percentage (0.0 - 1.0) the color will be darkened
    # @return {Object} The color object
    darken: (factor) ->
      factor = Math.clamp(factor)
      
      delta = Math.round(colorMax * factor)
      @r -= delta
      @g -= delta
      @b -= delta
      
      @r = Math.clamp(@r, 0, colorMax)
      @g = Math.clamp(@g, 0, colorMax)
      @b = Math.clamp(@b, 0, colorMax)
      
      @
    
    fadeIn: (factor) ->
      factor = Math.clamp(factor)
      
      delta = Math.round(colorMax * factor)
      @a += delta
      
      @a = Math.clamp(@a, 0, colorMax)
      
      @
      
    fadeOut: (factor) ->
      factor = Math.clamp(factor)
      
      delta = Math.round(colorMax * factor)
      @a -= delta
      
      @a = Math.clamp(@a, 0, colorMax)
      
      @
    
    # Static methods
    for colorName, colorValue of colors
      @[colorName] = -> new Color colorValue

  # Color shorthand function
  #window.color = color = (param) -> new Color param
