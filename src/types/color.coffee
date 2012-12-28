((window, Elyssa) ->
  
  class Elyssa.Color
    colorMax = 255
    
    constructor: ({@r, @g, @b, @a} = {r: 255, g: 255, b: 255, a: 255}) ->
      @r = 0 unless @r?
      @g = 0 unless @g?
      @b = 0 unless @b?
      @a = 0 unless @a?
      
      Elyssa.Math.clamp(@r, 0, colorMax)
      Elyssa.Math.clamp(@g, 0, colorMax)
      Elyssa.Math.clamp(@b, 0, colorMax)
      Elyssa.Math.clamp(@a, 0, colorMax)
    
    toString: ->
      if @a / colorMax is 1.0
        "rgb(#{@r}, #{@g}, #{@b})"
      else
        "rgba(#{@r}, #{@g}, #{@b}, #{@a / colorMax})"
    
    toHex: ->
      tmpR = (~~@r).toString(16)
      tmpG = (~~@g).toString(16)
      tmpB = (~~@b).toString(16)
      
      tmpR = "0" + tmpR if tmpR.length is 1
      tmpG = "0" + tmpG if tmpG.length is 1
      tmpB = "0" + tmpB if tmpB.length is 1
      
      "##{tmpR}#{tmpG}#{tmpB}"
    
    lighten: (factor) ->
      factor = Elyssa.Math.clamp(factor)
      
      delta = ~~(colorMax * factor)
      @r += delta
      @g += delta
      @b += delta
      
      @
      
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
    @aqua: -> new Elyssa.Color {r: 0, g: 255, b: 255}                  # R: 0   G: 255 B: 255
    @black: -> new Elyssa.Color {r: 0, g: 0, b: 0}                     # R: 0   G: 0   B: 0
    @blue: -> new Elyssa.Color {r: 0, g: 0, b: 255}                    # R: 0   G: 0   B: 255
    @fuchsia: -> new Elyssa.Color {r: 255, g: 0, b: 255}               # R: 255 G: 0   B: 255
    @gray: -> new Elyssa.Color {r: 128, g: 128, b: 128}                # R: 128 G: 128 B: 128
    @grey: @gray                                                       # Alternative spelling for TelColor.clGray
    @green: -> new Elyssa.Color {r: 0, g: 128, b: 0}                   # R: 0   G: 128 B: 0
    @lime: -> new Elyssa.Color {r: 0, g: 255, b: 0}                    # R: 0   G: 255 B: 0
    @maroon: -> new Elyssa.Color {r: 128, g: 0, b: 0}                  # R: 128 G: 0   B: 0
    @navy: -> new Elyssa.Color {r: 0, g: 0, b: 128}                    # R: 0   G: 0   B: 128
    @olive: -> new Elyssa.Color {r: 128, g: 128, b: 0}                 # R: 128 G: 128 B: 0
    @purple: -> new Elyssa.Color {r: 128, g: 0, b: 128}                # R: 128 G: 0   B: 128
    @red: -> new Elyssa.Color {r: 255, g: 0, b: 0}                     # R: 255 G: 0   B: 0
    @silver: -> new Elyssa.Color {r: 192, g: 192, b: 192}              # R: 192 G: 192 B: 192
    @teal: -> new Elyssa.Color {r: 0, g: 128, b: 128}                  # R: 0   G: 128 B: 128
    @white: -> new Elyssa.Color {r: 255, g: 255, b: 255}               # R: 255 G: 255 B: 255
    @yellow: -> new Elyssa.Color {r: 255, g: 255, b: 0}                # R: 255 G: 255 B: 0

    @transparent: -> new Elyssa.Color {r: 0, g: 0, b: 0, a: 0}         # Like black, but with A value of 0
    
    # Advanced colors (http://www.w3schools.com/cssref/css_colornames.asp)
    @aliceBlue: -> new Elyssa.Color {r: 240, g: 248, b: 255}           # R: 240 G: 248 B: 255
    @antiqueWhite: -> new Elyssa.Color {r: 250, g: 235, b: 215}        # R: 250 G: 235 B: 215
    @aquamarine: -> new Elyssa.Color {r: 127, g: 255, b: 212}          # R: 127 G: 255 B: 212
    @azure: -> new Elyssa.Color {r: 240, g: 255, b: 255}               # R: 240 G: 255 B: 255
    @beige: -> new Elyssa.Color {r: 245, g: 245, g: 220}               # R: 245 G: 245 B: 220
    @bisque: -> new Elyssa.Color {r: 255, g: 228, b: 196}              # R: 255 G: 228 B: 196
    @blanchedAlmond: -> new Elyssa.Color {r: 255, g: 235, b: 205}      # R: 255 G: 235 B: 205
    @blueViolet: -> new Elyssa.Color {r: 138, g: 43, b: 226}           # R: 138 G: 43  B: 226
    @brown: -> new Elyssa.Color {r: 165, g: 42, b: 42}                 # R: 165 G: 42  B: 42
    @burlyWood: -> new Elyssa.Color {r: 222, g: 184, b: 135}           # R: 222 G: 184 B: 135
    @cadetBlue: -> new Elyssa.Color {r: 95, g: 158, b: 160}            # R: 95  G: 158 B: 160
    @chartreuse: -> new Elyssa.Color {r: 127, g: 255, b: 0}            # R: 127 G: 255 B: 0
    @chocolate: -> new Elyssa.Color {r: 210, g: 105, b: 30}            # R: 210 G: 105 B: 30
    @coral: -> new Elyssa.Color {r: 255, g: 127, b: 80}                # R: 255 G: 127 B: 80
    @cornflowerBlue: -> new Elyssa.Color {r: 100, g: 149, b: 237}      # R: 100 G: 149 B: 237
    @cornsilk: -> new Elyssa.Color {r: 255, g: 248, b: 220}            # R: 255 G: 248 B: 220
    @crimson: -> new Elyssa.Color {r: 220, g: 20, b: 60}               # R: 220 G: 20  B: 60
    @cyan: -> new Elyssa.Color {r: 0, g: 255, b: 255}                  # R: 0   G: 255 B: 255
    @darkBlue: -> new Elyssa.Color {r: 0, g: 0, b: 139}                # R: 0   G: 0   B: 139
    @darkCyan: -> new Elyssa.Color {r: 0, g: 139, b: 139}              # R: 0   G: 139 B: 139
    @darkGoldenRod: -> new Elyssa.Color {r: 184, g: 134, b: 11}        # R: 184 G: 134 B: 11
    @darkGray: -> new Elyssa.Color {r: 169, g: 169, b: 169}            # R: 169 G: 169 B: 169
    @darkGrey: @darkGray                                               # Alternative spelling for .darkGray
    @darkGreen: -> new Elyssa.Color {r: 0, g: 100, b: 0}               # R: 0   G: 100 B: 0
    @darkKhaki: -> new Elyssa.Color {r: 189, g: 183, b: 107}           # R: 189 G: 183 B: 107
    @darkMagenta: -> new Elyssa.Color {r: 139, g: 0, b: 139}           # R: 139 G: 0   B: 139
    @darkOliveGreen: -> new Elyssa.Color {r: 85, g: 107, b: 47}        # R: 85  G: 107 B: 47
    @darkOrange: -> new Elyssa.Color {r: 255, g: 140, b: 0}            # R: 255 G: 140 B: 0
    @darkOrchid: -> new Elyssa.Color {r: 153, g: 50, b: 204}           # R: 153 G: 50  B: 204
    @darkRed: -> new Elyssa.Color {r: 139, g: 0, b: 0}                 # R: 139 G: 0   B: 0
    @darkSalmon: -> new Elyssa.Color {r: 233, g: 150, b: 122}          # R: 233 G: 150 B: 122
    @darkSeaGreen: -> new Elyssa.Color {r: 143, g: 188, b: 143}        # R: 143 G: 188 B: 143
    @darkSlateBlue: -> new Elyssa.Color {r: 72, g: 61, b: 139}         # R: 72  G: 61  B: 139
    @darkSlateGray: -> new Elyssa.Color {r: 47, g: 79, b: 79}          # R: 47  G: 79  B: 79
    @darkSlateGrey: @darkSlateGray                                     # Alternative spelling for .darkSlateGray
    @darkTurquoise: -> new Elyssa.Color {r: 0, g: 206, b: 209}         # R: 0   G: 206 B: 209
    @darkViolet: -> new Elyssa.Color {r: 148, g: 0, b: 211}            # R: 148 G: 0   B: 211
    @deepPink: -> new Elyssa.Color {r: 255, g: 20, b: 147}             # R: 255 G: 20  B: 147
    @deepSkyBlue: -> new Elyssa.Color {r: 0, g: 191, b: 255}           # R: 0   G: 191 B: 255
    @dimGray: -> new Elyssa.Color {r: 105, g: 105, b: 105}             # R: 105 G: 105 B: 105
    @dimGrey: @dimGray                                                 # Alternative spelling for .dimGray
    @dodgerBlue: -> new Elyssa.Color {r: 30, g: 144, b: 255}           # R: 30  G: 144 B: 255
    @fireBrick: -> new Elyssa.Color {r: 178, g: 34, b: 34}             # R: 178 G: 34  B: 34
    @floralWhite: -> new Elyssa.Color {r: 255, g: 250, b: 240}         # R: 255 G: 250 B: 240
    @forestGreen: -> new Elyssa.Color {r: 34, g: 139, b: 34}           # R: 34  G: 139 B: 34
    @gainsboro: -> new Elyssa.Color {r: 220, g: 220, b: 220}           # R: 220 G: 220 B: 220
    @ghostWhite: -> new Elyssa.Color {r: 248, g: 248, b: 255}          # R: 248 G: 248 B: 255
    @gold: -> new Elyssa.Color {r: 255, g: 215, b: 0}                  # R: 255 G: 215 B: 0
    @goldenRod: -> new Elyssa.Color {r: 218, g: 165, b: 32}            # R: 218 G: 165 B: 32
    @greenYellow: -> new Elyssa.Color {r: 173, g: 255, b: 47}          # R: 173 G: 255 B: 47
    @honeyDew: -> new Elyssa.Color {r: 240, g: 255, b: 240}            # R: 240 G: 255 B: 240
    @hotPink: -> new Elyssa.Color {r: 255, g: 105, b: 180}             # R: 255 G: 105 B: 180
    @indianRed: -> new Elyssa.Color {r: 205, g: 92, b: 92}             # R: 205 G: 92  B: 92
    @indigo: -> new Elyssa.Color {r: 75, g: 0, b: 130}                 # R: 75  G: 0   B: 130
    @ivory: -> new Elyssa.Color {r: 255, g: 255, b: 240}               # R: 255 G: 255 B: 240
    @khaki: -> new Elyssa.Color {r: 240, g: 230, b: 140}               # R: 240 G: 230 B: 140
    @lavender: -> new Elyssa.Color {r: 230, g: 230, b: 250}            # R: 230 G: 230 B: 250
    @lavenderBlush: -> new Elyssa.Color {r: 255, g: 240, b: 245}       # R: 255 G: 240 B: 245
    @lawnGreen: -> new Elyssa.Color {r: 124, g: 252, b: 0}             # R: 124 G: 252 B: 0
    @lemonChiffon: -> new Elyssa.Color {r: 255, g: 250, b: 205}        # R: 255 G: 250 B: 205
    @lightBlue: -> new Elyssa.Color {r: 173, g: 216, b: 230}           # R: 173 G: 216 B: 230
    @lightCoral: -> new Elyssa.Color {r: 240, g: 128, b: 128}          # R: 240 G: 128 B: 128
    @lightCyan: -> new Elyssa.Color {r: 224, g: 255, b: 255}           # R: 224 G: 255 B: 255
    @lightGoldenRodYellow: -> new Elyssa.Color {r: 250, g: 250, b: 210}# R: 250 G: 250 B: 210
    @lightGray: -> new Elyssa.Color {r: 211, g: 211, b: 211}           # R: 211 G: 211 B: 211
    @lightGrey: @lightGray                                             # Alternative spelling for .LightGray
    @lightGreen: -> new Elyssa.Color {r: 144, g: 238, b: 144}          # R: 144 G: 238 B: 144
    @lightPink: -> new Elyssa.Color {r: 255, g: 182, b: 193}           # R: 255 G: 182 B: 193
    @lightSalmon: -> new Elyssa.Color {r: 255, g: 160, b: 122}         # R: 255 G: 160 B: 122
    @lightSeaGreen: -> new Elyssa.Color {r: 32, g: 178, b: 170}        # R: 32  G: 178 B: 170
    @lightSkyBlue: -> new Elyssa.Color {r: 135, g: 206, b: 250}        # R: 135 G: 206 B: 250
    @lightSlateGray: -> new Elyssa.Color {r: 119, g: 136, b: 153}      # R: 119 G: 136 B: 153
    @lightSlateGrey: @lightSlateGray                                   # Alternative spelling for .LightSlateGray
    @lightSteelBlue: ->  new Elyssa.Color {r: 176, g: 196, b: 222}     # R: 176 G: 196 B: 222
    @lightYellow: -> new Elyssa.Color {r: 255, g: 255, b: 224}         # R: 255 G: 255 B: 224
    @limeGreen: -> new Elyssa.Color {r: 50, g: 205, b: 50}             # R: 50  G: 205 B: 50
    @linen: -> new Elyssa.Color {r: 250, g: 240, b: 230}               # R: 250 G: 240 B: 230
    @magenta: @fuchsia                                                 # Same as .clFuchsia
    @mediumAquaMarine: -> new Elyssa.Color {r: 102, g: 205, b: 170}    # R: 102 G: 205 B: 170
    @mediumBlue: -> new Elyssa.Color {r: 0, g: 0, b: 205}              # R: 0   G: 0   B: 205
    @mediumOrchid: -> new Elyssa.Color {r: 186, g: 85, b: 211}         # R: 186 G: 85  B: 211
    @mediumPurple: -> new Elyssa.Color {r: 157, g: 112, b: 219}        # R: 147 G: 112 B: 219
    @mediumSeaGreen: -> new Elyssa.Color {r: 60, g: 179, b: 113}       # R: 60  G: 179 B: 113
    @mediumSlateBlue: -> new Elyssa.Color {r: 123, g: 104, b: 238}     # R: 123 G: 104 B: 238
    @mediumSpringGreen: -> new Elyssa.Color {r: 0, g: 250, b: 154}     # R: 0   G: 250 B: 154
    @mediumTurquoise: -> new Elyssa.Color {r: 72, g: 209, b: 204}      # R: 72  G: 209 B: 204
    @mediumVioletRed: -> new Elyssa.Color {r: 199, g: 21, b: 133}      # R: 199 G: 21  B: 133
    @midnightBlue: -> new Elyssa.Color {r: 25, g: 25, b: 112}          # R: 25  G: 25  B: 112
    @mintCream: -> new Elyssa.Color {r: 245, g: 255, b: 250}           # R: 245 G: 255 B: 250
    @mistyRose: -> new Elyssa.Color {r: 255, g: 228, b: 225}           # R: 255 G: 228 B: 225
    @moccasin: -> new Elyssa.Color {r: 255, g: 228, b: 181}            # R: 255 G: 228 B: 181
    @navajoWhite: -> new Elyssa.Color {r: 255, g: 222, b: 173}         # R: 255 G: 222 B: 173
    @oldLace: -> new Elyssa.Color {r: 253, g: 245, b: 230}             # R: 253 G: 245 B: 230
    @oliveDrab: -> new Elyssa.Color {r: 107, g: 142, b: 35}            # R: 107 G: 142 B: 35
    @orange: -> new Elyssa.Color {r: 255, g: 165, b: 0}                # R: 255 G: 165 B: 0
    @orangeRed: -> new Elyssa.Color {r: 255, g: 69, b: 0}              # R: 255 G: 69  B: 0
    @orchid: -> new Elyssa.Color {r: 218, g: 112, b: 214}              # R: 218 G: 112 B: 214
    @paleGoldenRod: -> new Elyssa.Color {r: 238, g: 232, b: 170}       # R: 238 G: 232 B: 170
    @paleGreen: -> new Elyssa.Color {r: 152, g: 251, b: 152}           # R: 152 G: 251 B: 152
    @paleTurquoise: -> new Elyssa.Color {r: 175, g: 238, b: 238}       # R: 175 G: 238 B: 238
    @paleVioletRed: -> new Elyssa.Color {r: 219, g: 112, b: 147}       # R: 219 G: 112 B: 147
    @papayaWhip: -> new Elyssa.Color {r: 255, g: 239, b: 213}          # R: 255 G: 239 B: 213
    @peachPuff: -> new Elyssa.Color {r: 255, g: 218, b: 185}           # R: 255 G: 218 B: 185
    @peru: -> new Elyssa.Color {r: 205, g: 133, b: 63}                 # R: 205 G: 133 B: 63
    @pink: -> new Elyssa.Color {r: 255, g: 192, b: 203}                # R: 255 G: 192 B: 203
    @plum: -> new Elyssa.Color {r: 221, g: 160, b: 221}                # R: 221 G: 160 B: 221
    @powderBlue: -> new Elyssa.Color {r: 176, g: 224, b: 230}          # R: 176 G: 224 B: 230
    @rosyBrown: -> new Elyssa.Color {r: 188, g: 143, b: 143}           # R: 188 G: 143 B: 143
    @royalBlue: -> new Elyssa.Color {r: 65, g: 105, b: 225}            # R: 65  G: 105 B: 225
    @saddleBrown: -> new Elyssa.Color {r: 139, g: 69, b: 19}           # R: 139 G: 69  B: 19
    @salmon: -> new Elyssa.Color {r: 250, g: 128, b: 114}              # R: 250 G: 128 B: 114
    @sandyBrown: -> new Elyssa.Color {r: 244, g: 164, g: 96}           # R: 244 G: 164 B: 96
    @seaGreen: -> new Elyssa.Color {r: 46, g: 139, b: 87}              # R: 46  G: 139 B: 87
    @seaShell: -> new Elyssa.Color {r: 255, g: 245, b: 238}            # R: 255 G: 245 B: 238
    @sienna: -> new Elyssa.Color {r: 160, g: 82, b: 45}                # R: 160 G: 82  B: 45
    @skyBlue: -> new Elyssa.Color {r: 135, g: 206, b: 235}             # R: 135 G: 206 B: 235
    @slateBlue: -> new Elyssa.Color {r: 106, g: 90, b: 205}            # R: 106 G: 90  B: 205
    @slateGray: -> new Elyssa.Color {r: 112, g: 128, b: 144}           # R: 112 G: 128 B: 144
    @slateGrey: @slateGray                                             # Alternative spelling for .slateGray
    @snow: -> new Elyssa.Color {r: 255, g: 250, b: 250}                # R: 255 G: 250 B: 250
    @springGreen: -> new Elyssa.Color {r: 0, g: 255, b: 127}           # R: 0   G: 255 B: 127
    @steelBlue: -> new Elyssa.Color {r: 70, g: 130, b: 180}            # R: 70  G: 130 B: 180
    @tan: -> new Elyssa.Color {r: 210, g: 180, b: 140}                 # R: 210 G: 180 B: 140
    @thistle: -> new Elyssa.Color {r: 216, g: 191, b: 216}             # R: 216 G: 191 B: 216
    @tomato: -> new Elyssa.Color {r: 255, g: 99, b: 71}                # R: 255 G: 99  B: 71
    @turquoise: -> new Elyssa.Color {r: 64, g: 224, b: 208}            # R: 64  G: 224 B: 208
    @violet: -> new Elyssa.Color {r: 238, g: 130, b: 238}              # R: 238 G: 130 B: 238
    @wheat: -> new Elyssa.Color {r: 245, g: 222, b: 179}               # R: 245 G: 222 B: 179
    @whiteSmoke: -> new Elyssa.Color {r: 245, g: 245, b: 245}          # R: 245 G: 245 B: 245
    @yellowGreen: -> new Elyssa.Color {r: 154, g: 205, b: 50}          # R: 154 G: 205 B: 50
     
    # Custom color
    @freezeDevBlue: -> new Elyssa.Color {r: 73, g: 92, b: 108}         # R: 73  G: 92  B: 108  My own blue-ish color
  
)(@, @Elyssa or= {})
