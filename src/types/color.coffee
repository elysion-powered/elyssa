do (window = @, Elyssa = @Elyssa or= {}) ->
  'use strict'
  
  # Color class
  # This class allows to modifiy R, G, B and alpha value as well
  # It also provides static functions 
  class Elyssa.Color
    
    colorMax = 255
    
    # Creates the color class
    #
    # Allows to define R, G, B and A components
    constructor: (param) ->
      param = {r: 0, g: 0, b: 0, a: 255} unless param?
      
      if typeof param is 'string'
        return if Elyssa.Color[param] then Elyssa.Color[param]() else new Elyssa.Color()
      else
        {@r, @g, @b, @a} = param
        
        # Default values
        @r = 0 unless @r?
        @g = 0 unless @g?
        @b = 0 unless @b?
        @a = 255 unless @a?
        
        @r = Elyssa.Math.clamp(@r, 0, colorMax)
        @g = Elyssa.Math.clamp(@g, 0, colorMax)
        @b = Elyssa.Math.clamp(@b, 0, colorMax)
        @a = Elyssa.Math.clamp(@a, 0, colorMax)
    
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
      
      "##{tmpR}#{tmpG}#{tmpB}"
    
    # Lighten the color
    #
    # @param {Number} The percentage (0.0 - 1.0) the color will be lightened
    # @return {Object} The color object
    lighten: (factor) ->
      factor = Elyssa.Math.clamp(factor)
      
      delta = ~~(colorMax * factor)
      @r += delta
      @g += delta
      @b += delta
      
      @
      
    # Darken the color
    #
    # @param {Number} The percentage (0.0 - 1.0) the color will be darkened
    # @return {Object} The color object
    darken: (factor) ->
      factor = Elyssa.Math.clamp(factor)
      
      delta = ~~(colorMax * factor)
      @r -= delta
      @g -= delta
      @b -= delta
      
      @
    
    fadeIn: (factor) -> 
      factor = Elyssa.Math.clamp(factor)
      
      delta = ~~(colorMax * factor)
      @a += delta
      
      @
      
    fadeOut: (factor) -> 
      factor = Elyssa.Math.clamp(factor)
      
      delta = ~~(colorMax * factor)
      @a -= delta
      
      @
    
    
    
    # Static methods
    # Predefined colors
    
    # Basic colors
    
    # Returns new object with color values: R: 0   G: 255 B: 255
    # @return {Object} The color object
    @aqua: -> new Elyssa.Color {r: 0, g: 255, b: 255}                  
    # Returns new object with color values: R: 0   G: 0   B: 0
    # @return {Object} The color object
    @black: -> new Elyssa.Color {r: 0, g: 0, b: 0}                     
    # Returns new object with color values: R: 0   G: 0   B: 255
    # @return {Object} The color object
    @blue: -> new Elyssa.Color {r: 0, g: 0, b: 255}                   
    # Returns new object with color values: R: 255 G: 0   B: 255
    # @return {Object} The color object
    @fuchsia: -> new Elyssa.Color {r: 255, g: 0, b: 255}               
    # Returns new object with color values: R: 128 G: 128 B: 128
    # @return {Object} The color object
    @gray: -> new Elyssa.Color {r: 128, g: 128, b: 128}                
    # Alternative spelling for .gray 
    # @see Elyssa.Color.gray
    # @return {Object} The color object
    @grey: @gray                                                       
    # Returns new object with color values: R: 0   G: 128 B: 0
    # @return {Object} The color object
    @green: -> new Elyssa.Color {r: 0, g: 128, b: 0}                   
    # Returns new object with color values: R: 0   G: 255 B: 0
    # @return {Object} The color object
    @lime: -> new Elyssa.Color {r: 0, g: 255, b: 0}        
    # Returns new object with color values: R: 128 G: 0   B: 0      
    # @return {Object} The color object      
    @maroon: -> new Elyssa.Color {r: 128, g: 0, b: 0}  
    # Returns new object with color values: R: 0   G: 0   B: 128    
    # @return {Object} The color object            
    @navy: -> new Elyssa.Color {r: 0, g: 0, b: 128}    
    # Returns new object with color values: R: 128 G: 128 B: 0     
    # @return {Object} The color object           
    @olive: -> new Elyssa.Color {r: 128, g: 128, b: 0}  
    # Returns new object with color values: R: 128 G: 0   B: 128               
    # @return {Object} The color object
    @purple: -> new Elyssa.Color {r: 128, g: 0, b: 128}   
    # Returns new object with color values: R: 255 G: 0   B: 0    
    # @return {Object} The color object         
    @red: -> new Elyssa.Color {r: 255, g: 0, b: 0}      
    # Returns new object with color values: R: 192 G: 192 B: 192     
    # @return {Object} The color object          
    @silver: -> new Elyssa.Color {r: 192, g: 192, b: 192}     
    # Returns new object with color values: R: 0   G: 128 B: 128    
    # @return {Object} The color object     
    @teal: -> new Elyssa.Color {r: 0, g: 128, b: 128}       
    # Returns new object with color values: R: 255 G: 255 B: 255           
    @white: -> new Elyssa.Color {r: 255, g: 255, b: 255}    
    # Returns new object with color values: R: 255 G: 255 B: 0        
    # @return {Object} The color object   
    @yellow: -> new Elyssa.Color {r: 255, g: 255, b: 0}                

    # Returns new object with color values: R: 0 G: 0 B: 0 A: 0
    # @return {Object} The color object
    @transparent: -> new Elyssa.Color {r: 0, g: 0, b: 0, a: 0}         
    
    # Advanced colors (http://www.w3schools.com/cssref/css_colornames.asp)
    
    # Returns new object with color values: R: 240 G: 248 B: 255
    # @return {Object} The color object
    @aliceBlue: -> new Elyssa.Color {r: 240, g: 248, b: 255}   
    # Returns new object with color values: R: 250 G: 235 B: 215      
    # @return {Object} The color object  
    @antiqueWhite: -> new Elyssa.Color {r: 250, g: 235, b: 215}        
    # Returns new object with color values: R: 127 G: 255 B: 212
    # @return {Object} The color object
    @aquamarine: -> new Elyssa.Color {r: 127, g: 255, b: 212}          
    # Returns new object with color values: R: 240 G: 255 B: 255
    # @return {Object} The color object
    @azure: -> new Elyssa.Color {r: 240, g: 255, b: 255}               
    # Returns new object with color values: R: 245 G: 245 B: 220
    # @return {Object} The color object
    @beige: -> new Elyssa.Color {r: 245, g: 245, b: 220}               
    # Returns new object with color values: R: 255 G: 228 B: 196
    # @return {Object} The color object
    @bisque: -> new Elyssa.Color {r: 255, g: 228, b: 196}              
    # Returns new object with color values: R: 255 G: 235 B: 205
    # @return {Object} The color object
    @blanchedAlmond: -> new Elyssa.Color {r: 255, g: 235, b: 205}      
    # Returns new object with color values: R: 138 G: 43  B: 226
    # @return {Object} The color object
    @blueViolet: -> new Elyssa.Color {r: 138, g: 43, b: 226}           
    # Returns new object with color values: R: 165 G: 42  B: 42
    # @return {Object} The color object
    @brown: -> new Elyssa.Color {r: 165, g: 42, b: 42}                 
    # Returns new object with color values: R: 222 G: 184 B: 135
    # @return {Object} The color object
    @burlyWood: -> new Elyssa.Color {r: 222, g: 184, b: 135}           
    # Returns new object with color values: R: 95  G: 158 B: 160
    # @return {Object} The color object
    @cadetBlue: -> new Elyssa.Color {r: 95, g: 158, b: 160}            
    # Returns new object with color values: R: 127 G: 255 B: 0
    # @return {Object} The color object
    @chartreuse: -> new Elyssa.Color {r: 127, g: 255, b: 0}            
    # Returns new object with color values: R: 210 G: 105 B: 30
    # @return {Object} The color object
    @chocolate: -> new Elyssa.Color {r: 210, g: 105, b: 30}            
    # Returns new object with color values: R: 255 G: 127 B: 80
    # @return {Object} The color object
    @coral: -> new Elyssa.Color {r: 255, g: 127, b: 80}                
    # Returns new object with color values: R: 100 G: 149 B: 237
    # @return {Object} The color object
    @cornflowerBlue: -> new Elyssa.Color {r: 100, g: 149, b: 237}      
    # Returns new object with color values: R: 255 G: 248 B: 220
    # @return {Object} The color object
    @cornsilk: -> new Elyssa.Color {r: 255, g: 248, b: 220}            
    # Returns new object with color values: R: 220 G: 20  B: 60
    # @return {Object} The color object
    @crimson: -> new Elyssa.Color {r: 220, g: 20, b: 60}               
    # Returns new object with color values: R: 0   G: 255 B: 255
    # @return {Object} The color object
    @cyan: -> new Elyssa.Color {r: 0, g: 255, b: 255}                  
    # Returns new object with color values: R: 0   G: 0   B: 139
    # @return {Object} The color object
    @darkBlue: -> new Elyssa.Color {r: 0, g: 0, b: 139}                
    # Returns new object with color values: R: 0   G: 139 B: 139
    # @return {Object} The color object
    @darkCyan: -> new Elyssa.Color {r: 0, g: 139, b: 139}              
    # Returns new object with color values: R: 184 G: 134 B: 11
    # @return {Object} The color object
    @darkGoldenRod: -> new Elyssa.Color {r: 184, g: 134, b: 11}        
    # Returns new object with color values: R: 169 G: 169 B: 169
    # @return {Object} The color object
    @darkGray: -> new Elyssa.Color {r: 169, g: 169, b: 169}            
    # Alternative spelling for .darkGray 
    # @see Elyssa.Color.darkGray 
    # @return {Object} The color object
    @darkGrey: @darkGray                                              
    # Returns new object with color values: R: 0   G: 100 B: 0
    # @return {Object} The color object
    @darkGreen: -> new Elyssa.Color {r: 0, g: 100, b: 0}               
    # Returns new object with color values: R: 189 G: 183 B: 107
    # @return {Object} The color object
    @darkKhaki: -> new Elyssa.Color {r: 189, g: 183, b: 107}           
    # Returns new object with color values: R: 139 G: 0   B: 139
    # @return {Object} The color object
    @darkMagenta: -> new Elyssa.Color {r: 139, g: 0, b: 139}               
    # Returns new object with color values: R: 85  G: 107 B: 47
    # @return {Object} The color object
    @darkOliveGreen: -> new Elyssa.Color {r: 85, g: 107, b: 47}            
    # Returns new object with color values: R: 255 G: 140 B: 0
    # @return {Object} The color object
    @darkOrange: -> new Elyssa.Color {r: 255, g: 140, b: 0}                
    # Returns new object with color values: R: 153 G: 50  B: 204
    # @return {Object} The color object
    @darkOrchid: -> new Elyssa.Color {r: 153, g: 50, b: 204}               
    # Returns new object with color values: R: 139 G: 0   B: 0
    # @return {Object} The color object
    @darkRed: -> new Elyssa.Color {r: 139, g: 0, b: 0}                     
    # Returns new object with color values: R: 233 G: 150 B: 122
    # @return {Object} The color object
    @darkSalmon: -> new Elyssa.Color {r: 233, g: 150, b: 122}              
    # Returns new object with color values: R: 143 G: 188 B: 143
    # @return {Object} The color object
    @darkSeaGreen: -> new Elyssa.Color {r: 143, g: 188, b: 143}            
    # Returns new object with color values: R: 72  G: 61  B: 139
    # @return {Object} The color object
    @darkSlateBlue: -> new Elyssa.Color {r: 72, g: 61, b: 139}             
    # Returns new object with color values: R: 47  G: 79  B: 79
    # @return {Object} The color object
    @darkSlateGray: -> new Elyssa.Color {r: 47, g: 79, b: 79}              
    # Alternative spelling for .darkSlateGray 
    # @see Elyssa.Color.darkSlateGray
    # @return {Object} The color object
    @darkSlateGrey: @darkSlateGray                                         
    # Returns new object with color values: R: 0   G: 206 B: 209
    # @return {Object} The color object
    @darkTurquoise: -> new Elyssa.Color {r: 0, g: 206, b: 209}             
    # Returns new object with color values: R: 148 G: 0   B: 211
    # @return {Object} The color object
    @darkViolet: -> new Elyssa.Color {r: 148, g: 0, b: 211}                
    # Returns new object with color values: R: 255 G: 20  B: 147
    # @return {Object} The color object
    @deepPink: -> new Elyssa.Color {r: 255, g: 20, b: 147}                 
    # Returns new object with color values: R: 0   G: 191 B: 255
    # @return {Object} The color object
    @deepSkyBlue: -> new Elyssa.Color {r: 0, g: 191, b: 255}               
    # Returns new object with color values: R: 105 G: 105 B: 105
    # @return {Object} The color object
    @dimGray: -> new Elyssa.Color {r: 105, g: 105, b: 105}                 
    # Alternative spelling for .dimGray 
    # @see Elyssa.Color.dimGray
    # @return {Object} The color object
    @dimGrey: @dimGray                                                     
    # Returns new object with color values: R: 30  G: 144 B: 255
    # @return {Object} The color object
    @dodgerBlue: -> new Elyssa.Color {r: 30, g: 144, b: 255}               
    # Returns new object with color values: R: 178 G: 34  B: 34
    # @return {Object} The color object
    @fireBrick: -> new Elyssa.Color {r: 178, g: 34, b: 34}                 
    # Returns new object with color values: R: 255 G: 250 B: 240
    # @return {Object} The color object
    @floralWhite: -> new Elyssa.Color {r: 255, g: 250, b: 240}             
    # Returns new object with color values: R: 34  G: 139 B: 34
    # @return {Object} The color object
    @forestGreen: -> new Elyssa.Color {r: 34, g: 139, b: 34}               
    # Returns new object with color values: R: 220 G: 220 B: 220
    # @return {Object} The color object
    @gainsboro: -> new Elyssa.Color {r: 220, g: 220, b: 220}               
    # Returns new object with color values: R: 248 G: 248 B: 255
    # @return {Object} The color object
    @ghostWhite: -> new Elyssa.Color {r: 248, g: 248, b: 255}              
    # Returns new object with color values: R: 255 G: 215 B: 0
    # @return {Object} The color object
    @gold: -> new Elyssa.Color {r: 255, g: 215, b: 0}                      
    # Returns new object with color values: R: 218 G: 165 B: 32
    # @return {Object} The color object
    @goldenRod: -> new Elyssa.Color {r: 218, g: 165, b: 32}                
    # Returns new object with color values: R: 173 G: 255 B: 47
    # @return {Object} The color object
    @greenYellow: -> new Elyssa.Color {r: 173, g: 255, b: 47}              
    # Returns new object with color values: R: 240 G: 255 B: 240
    # @return {Object} The color object
    @honeyDew: -> new Elyssa.Color {r: 240, g: 255, b: 240}                
    # Returns new object with color values: R: 255 G: 105 B: 180
    # @return {Object} The color object
    @hotPink: -> new Elyssa.Color {r: 255, g: 105, b: 180}                 
    # Returns new object with color values: R: 205 G: 92  B: 92
    # @return {Object} The color object
    @indianRed: -> new Elyssa.Color {r: 205, g: 92, b: 92}                 
    # Returns new object with color values: R: 75  G: 0   B: 130
    # @return {Object} The color object
    @indigo: -> new Elyssa.Color {r: 75, g: 0, b: 130}                     
    # Returns new object with color values: R: 255 G: 255 B: 240
    # @return {Object} The color object
    @ivory: -> new Elyssa.Color {r: 255, g: 255, b: 240}                   
    # Returns new object with color values: R: 240 G: 230 B: 140
    # @return {Object} The color object
    @khaki: -> new Elyssa.Color {r: 240, g: 230, b: 140}                   
    # Returns new object with color values: R: 230 G: 230 B: 250
    # @return {Object} The color object
    @lavender: -> new Elyssa.Color {r: 230, g: 230, b: 250}                
    # Returns new object with color values: R: 255 G: 240 B: 245
    # @return {Object} The color object
    @lavenderBlush: -> new Elyssa.Color {r: 255, g: 240, b: 245}           
    # Returns new object with color values: R: 124 G: 252 B: 0
    # @return {Object} The color object
    @lawnGreen: -> new Elyssa.Color {r: 124, g: 252, b: 0}                 
    # Returns new object with color values: R: 255 G: 250 B: 205
    # @return {Object} The color object
    @lemonChiffon: -> new Elyssa.Color {r: 255, g: 250, b: 205}            
    # Returns new object with color values: R: 173 G: 216 B: 230
    # @return {Object} The color object
    @lightBlue: -> new Elyssa.Color {r: 173, g: 216, b: 230}               
    # Returns new object with color values: R: 240 G: 128 B: 128
    # @return {Object} The color object
    @lightCoral: -> new Elyssa.Color {r: 240, g: 128, b: 128}              
    # Returns new object with color values: R: 224 G: 255 B: 255
    # @return {Object} The color object
    @lightCyan: -> new Elyssa.Color {r: 224, g: 255, b: 255}               
    # Returns new object with color values: R: 250 G: 250 B: 210
    # @return {Object} The color object
    @lightGoldenRodYellow: -> new Elyssa.Color {r: 250, g: 250, b: 210}    
    # Returns new object with color values: R: 211 G: 211 B: 211
    # @return {Object} The color object
    @lightGray: -> new Elyssa.Color {r: 211, g: 211, b: 211}               
    # Alternative spelling for .lightGray 
    # @see Elyssa.Color.lightGray
    # @return {Object} The color object
    @lightGrey: @lightGray                                                 
    # Returns new object with color values: R: 144 G: 238 B: 144
    # @return {Object} The color object
    @lightGreen: -> new Elyssa.Color {r: 144, g: 238, b: 144}              
    # Returns new object with color values: R: 255 G: 182 B: 193
    # @return {Object} The color object
    @lightPink: -> new Elyssa.Color {r: 255, g: 182, b: 193}               
    # Returns new object with color values: R: 255 G: 160 B: 122
    # @return {Object} The color object
    @lightSalmon: -> new Elyssa.Color {r: 255, g: 160, b: 122}             
    # Returns new object with color values: R: 32  G: 178 B: 170
    # @return {Object} The color object
    @lightSeaGreen: -> new Elyssa.Color {r: 32, g: 178, b: 170}            
    # Returns new object with color values: R: 135 G: 206 B: 250
    # @return {Object} The color object
    @lightSkyBlue: -> new Elyssa.Color {r: 135, g: 206, b: 250}            
    # Returns new object with color values: R: 119 G: 136 B: 153
    # @return {Object} The color object
    @lightSlateGray: -> new Elyssa.Color {r: 119, g: 136, b: 153}          
    # Alternative spelling for .lightSlateGray 
    # @see Elyssa.Color.lightSlateGray
    # @return {Object} The color object
    @lightSlateGrey: @lightSlateGray                                       
    # Returns new object with color values: R: 176 G: 196 B: 222
    # @return {Object} The color object
    @lightSteelBlue: ->  new Elyssa.Color {r: 176, g: 196, b: 222}         
    # Returns new object with color values: R: 255 G: 255 B: 224
    # @return {Object} The color object
    @lightYellow: -> new Elyssa.Color {r: 255, g: 255, b: 224}             
    # Returns new object with color values: R: 50  G: 205 B: 50
    # @return {Object} The color object
    @limeGreen: -> new Elyssa.Color {r: 50, g: 205, b: 50}                 
    # Returns new object with color values: R: 250 G: 240 B: 230
    # @return {Object} The color object
    @linen: -> new Elyssa.Color {r: 250, g: 240, b: 230}                   
    # Same as .fuchsia 
    # @See Elyssa.Color.fuchsia
    # @return {Object} The color object
    @magenta: @fuchsia                                                     
    # Returns new object with color values: R: 102 G: 205 B: 170
    # @return {Object} The color object
    @mediumAquaMarine: -> new Elyssa.Color {r: 102, g: 205, b: 170}        
    # Returns new object with color values: R: 0   G: 0   B: 205
    # @return {Object} The color object
    @mediumBlue: -> new Elyssa.Color {r: 0, g: 0, b: 205}                  
    # Returns new object with color values: R: 186 G: 85  B: 211
    # @return {Object} The color object
    @mediumOrchid: -> new Elyssa.Color {r: 186, g: 85, b: 211}             
    # Returns new object with color values: R: 147 G: 112 B: 219
    # @return {Object} The color object
    @mediumPurple: -> new Elyssa.Color {r: 157, g: 112, b: 219}            
    # Returns new object with color values: R: 60  G: 179 B: 113
    # @return {Object} The color object
    @mediumSeaGreen: -> new Elyssa.Color {r: 60, g: 179, b: 113}           
    # Returns new object with color values: R: 123 G: 104 B: 238
    # @return {Object} The color object
    @mediumSlateBlue: -> new Elyssa.Color {r: 123, g: 104, b: 238}         
    # Returns new object with color values: R: 0   G: 250 B: 154
    # @return {Object} The color object
    @mediumSpringGreen: -> new Elyssa.Color {r: 0, g: 250, b: 154}         
    # Returns new object with color values: R: 72  G: 209 B: 204
    # @return {Object} The color object
    @mediumTurquoise: -> new Elyssa.Color {r: 72, g: 209, b: 204}          
    # Returns new object with color values: R: 199 G: 21  B: 133
    # @return {Object} The color object
    @mediumVioletRed: -> new Elyssa.Color {r: 199, g: 21, b: 133}          
    # Returns new object with color values: R: 25  G: 25  B: 112
    # @return {Object} The color object
    @midnightBlue: -> new Elyssa.Color {r: 25, g: 25, b: 112}              
    # Returns new object with color values: R: 245 G: 255 B: 250
    # @return {Object} The color object
    @mintCream: -> new Elyssa.Color {r: 245, g: 255, b: 250}               
    # Returns new object with color values: R: 255 G: 228 B: 225
    # @return {Object} The color object
    @mistyRose: -> new Elyssa.Color {r: 255, g: 228, b: 225}               
    # Returns new object with color values: R: 255 G: 228 B: 181
    # @return {Object} The color object
    @moccasin: -> new Elyssa.Color {r: 255, g: 228, b: 181}                
    # Returns new object with color values: R: 255 G: 222 B: 173
    # @return {Object} The color object
    @navajoWhite: -> new Elyssa.Color {r: 255, g: 222, b: 173}             
    # Returns new object with color values: R: 253 G: 245 B: 230
    # @return {Object} The color object
    @oldLace: -> new Elyssa.Color {r: 253, g: 245, b: 230}                 
    # Returns new object with color values: R: 107 G: 142 B: 35
    # @return {Object} The color object
    @oliveDrab: -> new Elyssa.Color {r: 107, g: 142, b: 35}                
    # Returns new object with color values: R: 255 G: 165 B: 0
    # @return {Object} The color object
    @orange: -> new Elyssa.Color {r: 255, g: 165, b: 0}                    
    # Returns new object with color values: R: 255 G: 69  B: 0
    # @return {Object} The color object
    @orangeRed: -> new Elyssa.Color {r: 255, g: 69, b: 0}                  
    # Returns new object with color values: R: 218 G: 112 B: 214
    # @return {Object} The color object
    @orchid: -> new Elyssa.Color {r: 218, g: 112, b: 214}                  
    # Returns new object with color values: R: 238 G: 232 B: 170
    # @return {Object} The color object
    @paleGoldenRod: -> new Elyssa.Color {r: 238, g: 232, b: 170}           
    # Returns new object with color values: R: 152 G: 251 B: 152
    # @return {Object} The color object
    @paleGreen: -> new Elyssa.Color {r: 152, g: 251, b: 152}               
    # Returns new object with color values: R: 175 G: 238 B: 238
    # @return {Object} The color object
    @paleTurquoise: -> new Elyssa.Color {r: 175, g: 238, b: 238}           
    # Returns new object with color values: R: 219 G: 112 B: 147
    # @return {Object} The color object
    @paleVioletRed: -> new Elyssa.Color {r: 219, g: 112, b: 147}       
    # Returns new object with color values: R: 255 G: 239 B: 213
    # @return {Object} The color object
    @papayaWhip: -> new Elyssa.Color {r: 255, g: 239, b: 213}              
    # Returns new object with color values: R: 255 G: 218 B: 185
    # @return {Object} The color object
    @peachPuff: -> new Elyssa.Color {r: 255, g: 218, b: 185}               
    # Returns new object with color values: R: 205 G: 133 B: 63
    # @return {Object} The color object
    @peru: -> new Elyssa.Color {r: 205, g: 133, b: 63}                     
    # Returns new object with color values: R: 255 G: 192 B: 203
    # @return {Object} The color object
    @pink: -> new Elyssa.Color {r: 255, g: 192, b: 203}                    
    # Returns new object with color values: R: 221 G: 160 B: 221
    # @return {Object} The color object
    @plum: -> new Elyssa.Color {r: 221, g: 160, b: 221}                    
    # Returns new object with color values: R: 176 G: 224 B: 230
    # @return {Object} The color object
    @powderBlue: -> new Elyssa.Color {r: 176, g: 224, b: 230}              
    # Returns new object with color values: R: 188 G: 143 B: 143
    # @return {Object} The color object
    @rosyBrown: -> new Elyssa.Color {r: 188, g: 143, b: 143}               
    # Returns new object with color values: R: 65  G: 105 B: 225
    # @return {Object} The color object
    @royalBlue: -> new Elyssa.Color {r: 65, g: 105, b: 225}                
    # Returns new object with color values: R: 139 G: 69  B: 19
    # @return {Object} The color object
    @saddleBrown: -> new Elyssa.Color {r: 139, g: 69, b: 19}               
    # Returns new object with color values: R: 250 G: 128 B: 114
    # @return {Object} The color object
    @salmon: -> new Elyssa.Color {r: 250, g: 128, b: 114}                  
    # Returns new object with color values: R: 244 G: 164 B: 96
    # @return {Object} The color object
    @sandyBrown: -> new Elyssa.Color {r: 244, g: 164, b: 96}               
    # Returns new object with color values: R: 46  G: 139 B: 87
    # @return {Object} The color object
    @seaGreen: -> new Elyssa.Color {r: 46, g: 139, b: 87}                  
    # Returns new object with color values: R: 255 G: 245 B: 238
    # @return {Object} The color object
    @seaShell: -> new Elyssa.Color {r: 255, g: 245, b: 238}                
    # Returns new object with color values: R: 160 G: 82  B: 45
    # @return {Object} The color object
    @sienna: -> new Elyssa.Color {r: 160, g: 82, b: 45}                    
    # Returns new object with color values: R: 135 G: 206 B: 235
    # @return {Object} The color object
    @skyBlue: -> new Elyssa.Color {r: 135, g: 206, b: 235}                 
    # Returns new object with color values: R: 106 G: 90  B: 205
    # @return {Object} The color object
    @slateBlue: -> new Elyssa.Color {r: 106, g: 90, b: 205}                
    # Returns new object with color values: R: 112 G: 128 B: 144
    # @return {Object} The color object
    @slateGray: -> new Elyssa.Color {r: 112, g: 128, b: 144}               
    # Alternative spelling for .slateGray 
    # @see Elyssa.Color.slateGray
    # @return {Object} The color object
    @slateGrey: @slateGray                                                     
    # Returns new object with color values: R: 255 G: 250 B: 250
    # @return {Object} The color object
    @snow: -> new Elyssa.Color {r: 255, g: 250, b: 250}                    
    # Returns new object with color values: R: 0   G: 255 B: 127
    # @return {Object} The color object
    @springGreen: -> new Elyssa.Color {r: 0, g: 255, b: 127}               
    # Returns new object with color values: R: 70  G: 130 B: 180
    # @return {Object} The color object
    @steelBlue: -> new Elyssa.Color {r: 70, g: 130, b: 180}                
    # Returns new object with color values: R: 210 G: 180 B: 140
    # @return {Object} The color object
    @tan: -> new Elyssa.Color {r: 210, g: 180, b: 140}                     
    # Returns new object with color values: R: 216 G: 191 B: 216
    # @return {Object} The color object
    @thistle: -> new Elyssa.Color {r: 216, g: 191, b: 216}                 
    # Returns new object with color values: R: 255 G: 99  B: 71
    # @return {Object} The color object
    @tomato: -> new Elyssa.Color {r: 255, g: 99, b: 71}                    
    # Returns new object with color values: R: 64  G: 224 B: 208
    # @return {Object} The color object
    @turquoise: -> new Elyssa.Color {r: 64, g: 224, b: 208}                
    # Returns new object with color values: R: 238 G: 130 B: 238
    # @return {Object} The color object
    @violet: -> new Elyssa.Color {r: 238, g: 130, b: 238}                  
    # Returns new object with color values: R: 245 G: 222 B: 179
    # @return {Object} The color object
    @wheat: -> new Elyssa.Color {r: 245, g: 222, b: 179}                   
    # Returns new object with color values: R: 245 G: 245 B: 245
    # @return {Object} The color object
    @whiteSmoke: -> new Elyssa.Color {r: 245, g: 245, b: 245}              
    # Returns new object with color values: R: 154 G: 205 B: 50
    # @return {Object} The color object
    @yellowGreen: -> new Elyssa.Color {r: 154, g: 205, b: 50}          
     
    # Custom colors
    
    # Returns new object with color values: R: 73  G: 92  B: 108  
    # @return {Object} The color object
    @freezeDevBlue: -> new Elyssa.Color {r: 73, g: 92, b: 108}         

  # Color shorthand function
  window.color = Elyssa.color = (param) -> new Elyssa.Color param
