(function() {

  (function(window, Elyssa) {
    'use strict';    Elyssa.Color = (function() {
      var colorMax;

      colorMax = 255;

      function Color(param) {
        var _ref;
        if (param == null) {
          param = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
          };
        }
        if (typeof param === 'string') {
          _ref = Elyssa.Color[param] ? Elyssa.Color[param]() : new Elyssa.Color(), this.r = _ref.r, this.g = _ref.g, this.b = _ref.b, this.a = _ref.a;
        } else {
          this.r = param.r, this.g = param.g, this.b = param.b, this.a = param.a;
          if (this.r == null) {
            this.r = 0;
          }
          if (this.g == null) {
            this.g = 0;
          }
          if (this.b == null) {
            this.b = 0;
          }
          if (this.a == null) {
            this.a = 255;
          }
          this.r = Elyssa.Math.clamp(this.r, 0, colorMax);
          this.g = Elyssa.Math.clamp(this.g, 0, colorMax);
          this.b = Elyssa.Math.clamp(this.b, 0, colorMax);
          this.a = Elyssa.Math.clamp(this.a, 0, colorMax);
        }
      }

      Color.prototype.toString = function() {
        if (this.a / colorMax === 1.0) {
          return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        } else {
          return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + (this.a / colorMax) + ")";
        }
      };

      Color.prototype.toHex = function() {
        var tmpB, tmpG, tmpR;
        tmpR = (~~this.r).toString(16);
        tmpG = (~~this.g).toString(16);
        tmpB = (~~this.b).toString(16);
        if (tmpR.length === 1) {
          tmpR = "0" + tmpR;
        }
        if (tmpG.length === 1) {
          tmpG = "0" + tmpG;
        }
        if (tmpB.length === 1) {
          tmpB = "0" + tmpB;
        }
        if (tmpR[0] === tmpR[1] && tmpG[0] === tmpG[1] && tmpB[0] === tmpB[1]) {
          return "#" + tmpR[0] + tmpG[0] + tmpB[0];
        } else {
          return "#" + tmpR + tmpG + tmpB;
        }
      };

      Color.prototype.lighten = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.r += delta;
        this.g += delta;
        this.b += delta;
        this.r = Elyssa.Math.clamp(this.r, 0, colorMax);
        this.g = Elyssa.Math.clamp(this.g, 0, colorMax);
        this.b = Elyssa.Math.clamp(this.b, 0, colorMax);
        return this;
      };

      Color.prototype.darken = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.r -= delta;
        this.g -= delta;
        this.b -= delta;
        this.r = Elyssa.Math.clamp(this.r, 0, colorMax);
        this.g = Elyssa.Math.clamp(this.g, 0, colorMax);
        this.b = Elyssa.Math.clamp(this.b, 0, colorMax);
        return this;
      };

      Color.prototype.fadeIn = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.a += delta;
        this.a = Elyssa.Math.clamp(this.a, 0, colorMax);
        return this;
      };

      Color.prototype.fadeOut = function(factor) {
        var delta;
        factor = Elyssa.Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.a -= delta;
        this.a = Elyssa.Math.clamp(this.a, 0, colorMax);
        return this;
      };

      Color.aqua = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 255
        });
      };

      Color.black = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 0
        });
      };

      Color.blue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 255
        });
      };

      Color.fuchsia = function() {
        return new Elyssa.Color({
          r: 255,
          g: 0,
          b: 255
        });
      };

      Color.gray = function() {
        return new Elyssa.Color({
          r: 128,
          g: 128,
          b: 128
        });
      };

      Color.grey = Color.gray;

      Color.green = function() {
        return new Elyssa.Color({
          r: 0,
          g: 128,
          b: 0
        });
      };

      Color.lime = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 0
        });
      };

      Color.maroon = function() {
        return new Elyssa.Color({
          r: 128,
          g: 0,
          b: 0
        });
      };

      Color.navy = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 128
        });
      };

      Color.olive = function() {
        return new Elyssa.Color({
          r: 128,
          g: 128,
          b: 0
        });
      };

      Color.purple = function() {
        return new Elyssa.Color({
          r: 128,
          g: 0,
          b: 128
        });
      };

      Color.red = function() {
        return new Elyssa.Color({
          r: 255,
          g: 0,
          b: 0
        });
      };

      Color.silver = function() {
        return new Elyssa.Color({
          r: 192,
          g: 192,
          b: 192
        });
      };

      Color.teal = function() {
        return new Elyssa.Color({
          r: 0,
          g: 128,
          b: 128
        });
      };

      Color.white = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 255
        });
      };

      Color.yellow = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 0
        });
      };

      Color.transparent = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 0,
          a: 0
        });
      };

      Color.aliceBlue = function() {
        return new Elyssa.Color({
          r: 240,
          g: 248,
          b: 255
        });
      };

      Color.antiqueWhite = function() {
        return new Elyssa.Color({
          r: 250,
          g: 235,
          b: 215
        });
      };

      Color.aquamarine = function() {
        return new Elyssa.Color({
          r: 127,
          g: 255,
          b: 212
        });
      };

      Color.azure = function() {
        return new Elyssa.Color({
          r: 240,
          g: 255,
          b: 255
        });
      };

      Color.beige = function() {
        return new Elyssa.Color({
          r: 245,
          g: 245,
          b: 220
        });
      };

      Color.bisque = function() {
        return new Elyssa.Color({
          r: 255,
          g: 228,
          b: 196
        });
      };

      Color.blanchedAlmond = function() {
        return new Elyssa.Color({
          r: 255,
          g: 235,
          b: 205
        });
      };

      Color.blueViolet = function() {
        return new Elyssa.Color({
          r: 138,
          g: 43,
          b: 226
        });
      };

      Color.brown = function() {
        return new Elyssa.Color({
          r: 165,
          g: 42,
          b: 42
        });
      };

      Color.burlyWood = function() {
        return new Elyssa.Color({
          r: 222,
          g: 184,
          b: 135
        });
      };

      Color.cadetBlue = function() {
        return new Elyssa.Color({
          r: 95,
          g: 158,
          b: 160
        });
      };

      Color.chartreuse = function() {
        return new Elyssa.Color({
          r: 127,
          g: 255,
          b: 0
        });
      };

      Color.chocolate = function() {
        return new Elyssa.Color({
          r: 210,
          g: 105,
          b: 30
        });
      };

      Color.coral = function() {
        return new Elyssa.Color({
          r: 255,
          g: 127,
          b: 80
        });
      };

      Color.cornflowerBlue = function() {
        return new Elyssa.Color({
          r: 100,
          g: 149,
          b: 237
        });
      };

      Color.cornsilk = function() {
        return new Elyssa.Color({
          r: 255,
          g: 248,
          b: 220
        });
      };

      Color.crimson = function() {
        return new Elyssa.Color({
          r: 220,
          g: 20,
          b: 60
        });
      };

      Color.cyan = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 255
        });
      };

      Color.darkBlue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 139
        });
      };

      Color.darkCyan = function() {
        return new Elyssa.Color({
          r: 0,
          g: 139,
          b: 139
        });
      };

      Color.darkGoldenRod = function() {
        return new Elyssa.Color({
          r: 184,
          g: 134,
          b: 11
        });
      };

      Color.darkGray = function() {
        return new Elyssa.Color({
          r: 169,
          g: 169,
          b: 169
        });
      };

      Color.darkGrey = Color.darkGray;

      Color.darkGreen = function() {
        return new Elyssa.Color({
          r: 0,
          g: 100,
          b: 0
        });
      };

      Color.darkKhaki = function() {
        return new Elyssa.Color({
          r: 189,
          g: 183,
          b: 107
        });
      };

      Color.darkMagenta = function() {
        return new Elyssa.Color({
          r: 139,
          g: 0,
          b: 139
        });
      };

      Color.darkOliveGreen = function() {
        return new Elyssa.Color({
          r: 85,
          g: 107,
          b: 47
        });
      };

      Color.darkOrange = function() {
        return new Elyssa.Color({
          r: 255,
          g: 140,
          b: 0
        });
      };

      Color.darkOrchid = function() {
        return new Elyssa.Color({
          r: 153,
          g: 50,
          b: 204
        });
      };

      Color.darkRed = function() {
        return new Elyssa.Color({
          r: 139,
          g: 0,
          b: 0
        });
      };

      Color.darkSalmon = function() {
        return new Elyssa.Color({
          r: 233,
          g: 150,
          b: 122
        });
      };

      Color.darkSeaGreen = function() {
        return new Elyssa.Color({
          r: 143,
          g: 188,
          b: 143
        });
      };

      Color.darkSlateBlue = function() {
        return new Elyssa.Color({
          r: 72,
          g: 61,
          b: 139
        });
      };

      Color.darkSlateGray = function() {
        return new Elyssa.Color({
          r: 47,
          g: 79,
          b: 79
        });
      };

      Color.darkSlateGrey = Color.darkSlateGray;

      Color.darkTurquoise = function() {
        return new Elyssa.Color({
          r: 0,
          g: 206,
          b: 209
        });
      };

      Color.darkViolet = function() {
        return new Elyssa.Color({
          r: 148,
          g: 0,
          b: 211
        });
      };

      Color.deepPink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 20,
          b: 147
        });
      };

      Color.deepSkyBlue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 191,
          b: 255
        });
      };

      Color.dimGray = function() {
        return new Elyssa.Color({
          r: 105,
          g: 105,
          b: 105
        });
      };

      Color.dimGrey = Color.dimGray;

      Color.dodgerBlue = function() {
        return new Elyssa.Color({
          r: 30,
          g: 144,
          b: 255
        });
      };

      Color.fireBrick = function() {
        return new Elyssa.Color({
          r: 178,
          g: 34,
          b: 34
        });
      };

      Color.floralWhite = function() {
        return new Elyssa.Color({
          r: 255,
          g: 250,
          b: 240
        });
      };

      Color.forestGreen = function() {
        return new Elyssa.Color({
          r: 34,
          g: 139,
          b: 34
        });
      };

      Color.gainsboro = function() {
        return new Elyssa.Color({
          r: 220,
          g: 220,
          b: 220
        });
      };

      Color.ghostWhite = function() {
        return new Elyssa.Color({
          r: 248,
          g: 248,
          b: 255
        });
      };

      Color.gold = function() {
        return new Elyssa.Color({
          r: 255,
          g: 215,
          b: 0
        });
      };

      Color.goldenRod = function() {
        return new Elyssa.Color({
          r: 218,
          g: 165,
          b: 32
        });
      };

      Color.greenYellow = function() {
        return new Elyssa.Color({
          r: 173,
          g: 255,
          b: 47
        });
      };

      Color.honeyDew = function() {
        return new Elyssa.Color({
          r: 240,
          g: 255,
          b: 240
        });
      };

      Color.hotPink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 105,
          b: 180
        });
      };

      Color.indianRed = function() {
        return new Elyssa.Color({
          r: 205,
          g: 92,
          b: 92
        });
      };

      Color.indigo = function() {
        return new Elyssa.Color({
          r: 75,
          g: 0,
          b: 130
        });
      };

      Color.ivory = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 240
        });
      };

      Color.khaki = function() {
        return new Elyssa.Color({
          r: 240,
          g: 230,
          b: 140
        });
      };

      Color.lavender = function() {
        return new Elyssa.Color({
          r: 230,
          g: 230,
          b: 250
        });
      };

      Color.lavenderBlush = function() {
        return new Elyssa.Color({
          r: 255,
          g: 240,
          b: 245
        });
      };

      Color.lawnGreen = function() {
        return new Elyssa.Color({
          r: 124,
          g: 252,
          b: 0
        });
      };

      Color.lemonChiffon = function() {
        return new Elyssa.Color({
          r: 255,
          g: 250,
          b: 205
        });
      };

      Color.lightBlue = function() {
        return new Elyssa.Color({
          r: 173,
          g: 216,
          b: 230
        });
      };

      Color.lightCoral = function() {
        return new Elyssa.Color({
          r: 240,
          g: 128,
          b: 128
        });
      };

      Color.lightCyan = function() {
        return new Elyssa.Color({
          r: 224,
          g: 255,
          b: 255
        });
      };

      Color.lightGoldenRodYellow = function() {
        return new Elyssa.Color({
          r: 250,
          g: 250,
          b: 210
        });
      };

      Color.lightGray = function() {
        return new Elyssa.Color({
          r: 211,
          g: 211,
          b: 211
        });
      };

      Color.lightGrey = Color.lightGray;

      Color.lightGreen = function() {
        return new Elyssa.Color({
          r: 144,
          g: 238,
          b: 144
        });
      };

      Color.lightPink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 182,
          b: 193
        });
      };

      Color.lightSalmon = function() {
        return new Elyssa.Color({
          r: 255,
          g: 160,
          b: 122
        });
      };

      Color.lightSeaGreen = function() {
        return new Elyssa.Color({
          r: 32,
          g: 178,
          b: 170
        });
      };

      Color.lightSkyBlue = function() {
        return new Elyssa.Color({
          r: 135,
          g: 206,
          b: 250
        });
      };

      Color.lightSlateGray = function() {
        return new Elyssa.Color({
          r: 119,
          g: 136,
          b: 153
        });
      };

      Color.lightSlateGrey = Color.lightSlateGray;

      Color.lightSteelBlue = function() {
        return new Elyssa.Color({
          r: 176,
          g: 196,
          b: 222
        });
      };

      Color.lightYellow = function() {
        return new Elyssa.Color({
          r: 255,
          g: 255,
          b: 224
        });
      };

      Color.limeGreen = function() {
        return new Elyssa.Color({
          r: 50,
          g: 205,
          b: 50
        });
      };

      Color.linen = function() {
        return new Elyssa.Color({
          r: 250,
          g: 240,
          b: 230
        });
      };

      Color.magenta = Color.fuchsia;

      Color.mediumAquaMarine = function() {
        return new Elyssa.Color({
          r: 102,
          g: 205,
          b: 170
        });
      };

      Color.mediumBlue = function() {
        return new Elyssa.Color({
          r: 0,
          g: 0,
          b: 205
        });
      };

      Color.mediumOrchid = function() {
        return new Elyssa.Color({
          r: 186,
          g: 85,
          b: 211
        });
      };

      Color.mediumPurple = function() {
        return new Elyssa.Color({
          r: 157,
          g: 112,
          b: 219
        });
      };

      Color.mediumSeaGreen = function() {
        return new Elyssa.Color({
          r: 60,
          g: 179,
          b: 113
        });
      };

      Color.mediumSlateBlue = function() {
        return new Elyssa.Color({
          r: 123,
          g: 104,
          b: 238
        });
      };

      Color.mediumSpringGreen = function() {
        return new Elyssa.Color({
          r: 0,
          g: 250,
          b: 154
        });
      };

      Color.mediumTurquoise = function() {
        return new Elyssa.Color({
          r: 72,
          g: 209,
          b: 204
        });
      };

      Color.mediumVioletRed = function() {
        return new Elyssa.Color({
          r: 199,
          g: 21,
          b: 133
        });
      };

      Color.midnightBlue = function() {
        return new Elyssa.Color({
          r: 25,
          g: 25,
          b: 112
        });
      };

      Color.mintCream = function() {
        return new Elyssa.Color({
          r: 245,
          g: 255,
          b: 250
        });
      };

      Color.mistyRose = function() {
        return new Elyssa.Color({
          r: 255,
          g: 228,
          b: 225
        });
      };

      Color.moccasin = function() {
        return new Elyssa.Color({
          r: 255,
          g: 228,
          b: 181
        });
      };

      Color.navajoWhite = function() {
        return new Elyssa.Color({
          r: 255,
          g: 222,
          b: 173
        });
      };

      Color.oldLace = function() {
        return new Elyssa.Color({
          r: 253,
          g: 245,
          b: 230
        });
      };

      Color.oliveDrab = function() {
        return new Elyssa.Color({
          r: 107,
          g: 142,
          b: 35
        });
      };

      Color.orange = function() {
        return new Elyssa.Color({
          r: 255,
          g: 165,
          b: 0
        });
      };

      Color.orangeRed = function() {
        return new Elyssa.Color({
          r: 255,
          g: 69,
          b: 0
        });
      };

      Color.orchid = function() {
        return new Elyssa.Color({
          r: 218,
          g: 112,
          b: 214
        });
      };

      Color.paleGoldenRod = function() {
        return new Elyssa.Color({
          r: 238,
          g: 232,
          b: 170
        });
      };

      Color.paleGreen = function() {
        return new Elyssa.Color({
          r: 152,
          g: 251,
          b: 152
        });
      };

      Color.paleTurquoise = function() {
        return new Elyssa.Color({
          r: 175,
          g: 238,
          b: 238
        });
      };

      Color.paleVioletRed = function() {
        return new Elyssa.Color({
          r: 219,
          g: 112,
          b: 147
        });
      };

      Color.papayaWhip = function() {
        return new Elyssa.Color({
          r: 255,
          g: 239,
          b: 213
        });
      };

      Color.peachPuff = function() {
        return new Elyssa.Color({
          r: 255,
          g: 218,
          b: 185
        });
      };

      Color.peru = function() {
        return new Elyssa.Color({
          r: 205,
          g: 133,
          b: 63
        });
      };

      Color.pink = function() {
        return new Elyssa.Color({
          r: 255,
          g: 192,
          b: 203
        });
      };

      Color.plum = function() {
        return new Elyssa.Color({
          r: 221,
          g: 160,
          b: 221
        });
      };

      Color.powderBlue = function() {
        return new Elyssa.Color({
          r: 176,
          g: 224,
          b: 230
        });
      };

      Color.rosyBrown = function() {
        return new Elyssa.Color({
          r: 188,
          g: 143,
          b: 143
        });
      };

      Color.royalBlue = function() {
        return new Elyssa.Color({
          r: 65,
          g: 105,
          b: 225
        });
      };

      Color.saddleBrown = function() {
        return new Elyssa.Color({
          r: 139,
          g: 69,
          b: 19
        });
      };

      Color.salmon = function() {
        return new Elyssa.Color({
          r: 250,
          g: 128,
          b: 114
        });
      };

      Color.sandyBrown = function() {
        return new Elyssa.Color({
          r: 244,
          g: 164,
          b: 96
        });
      };

      Color.seaGreen = function() {
        return new Elyssa.Color({
          r: 46,
          g: 139,
          b: 87
        });
      };

      Color.seaShell = function() {
        return new Elyssa.Color({
          r: 255,
          g: 245,
          b: 238
        });
      };

      Color.sienna = function() {
        return new Elyssa.Color({
          r: 160,
          g: 82,
          b: 45
        });
      };

      Color.skyBlue = function() {
        return new Elyssa.Color({
          r: 135,
          g: 206,
          b: 235
        });
      };

      Color.slateBlue = function() {
        return new Elyssa.Color({
          r: 106,
          g: 90,
          b: 205
        });
      };

      Color.slateGray = function() {
        return new Elyssa.Color({
          r: 112,
          g: 128,
          b: 144
        });
      };

      Color.slateGrey = Color.slateGray;

      Color.snow = function() {
        return new Elyssa.Color({
          r: 255,
          g: 250,
          b: 250
        });
      };

      Color.springGreen = function() {
        return new Elyssa.Color({
          r: 0,
          g: 255,
          b: 127
        });
      };

      Color.steelBlue = function() {
        return new Elyssa.Color({
          r: 70,
          g: 130,
          b: 180
        });
      };

      Color.tan = function() {
        return new Elyssa.Color({
          r: 210,
          g: 180,
          b: 140
        });
      };

      Color.thistle = function() {
        return new Elyssa.Color({
          r: 216,
          g: 191,
          b: 216
        });
      };

      Color.tomato = function() {
        return new Elyssa.Color({
          r: 255,
          g: 99,
          b: 71
        });
      };

      Color.turquoise = function() {
        return new Elyssa.Color({
          r: 64,
          g: 224,
          b: 208
        });
      };

      Color.violet = function() {
        return new Elyssa.Color({
          r: 238,
          g: 130,
          b: 238
        });
      };

      Color.wheat = function() {
        return new Elyssa.Color({
          r: 245,
          g: 222,
          b: 179
        });
      };

      Color.whiteSmoke = function() {
        return new Elyssa.Color({
          r: 245,
          g: 245,
          b: 245
        });
      };

      Color.yellowGreen = function() {
        return new Elyssa.Color({
          r: 154,
          g: 205,
          b: 50
        });
      };

      Color.freezeDevBlue = function() {
        return new Elyssa.Color({
          r: 73,
          g: 92,
          b: 108
        });
      };

      return Color;

    })();
    return window.color = Elyssa.color = function(param) {
      return new Elyssa.Color(param);
    };
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Rect = (function() {
      var defaultValue;

      defaultValue = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };

      function Rect(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : defaultValue, this.x = _ref.x, this.y = _ref.y, this.w = _ref.w, this.h = _ref.h;
        if (this.x == null) {
          this.x = defaultValue.x;
        }
        if (this.y == null) {
          this.y = defaultValue.y;
        }
        if (this.w == null) {
          this.w = defaultValue.w;
        }
        if (this.h == null) {
          this.h = defaultValue.h;
        }
      }

      Rect.prototype.contains = function(_arg) {
        var h, w, x, y, _ref, _ref1;
        x = _arg.x, y = _arg.y, w = _arg.w, h = _arg.h;
        if ((w != null) && (h != null)) {
          return (this.x <= (_ref = x + h) && _ref <= this.x + this.w) && (this.y <= (_ref1 = y + w) && _ref1 <= this.y + this.h);
        } else {
          return (this.x <= x && x <= this.x + this.w) && (this.y <= y && y <= this.y + this.h);
        }
      };

      Rect.prototype.center = function() {
        return {
          x: this.w / 2 + this.x,
          y: this.h / 2 + this.y
        };
      };

      Rect.prototype.add = function(_arg) {
        var h, w, x, y;
        x = _arg.x, y = _arg.y, w = _arg.w, h = _arg.h;
        return {
          x: this.x += x,
          y: this.y += y,
          w: this.w += w,
          h: this.h += h
        };
      };

      Rect.prototype.toSize = function() {
        return new Elyssa.Size({
          w: this.w,
          h: this.h
        });
      };

      Rect.prototype.toVector2 = function() {
        return new Elyssa.Vector2({
          x: this.x,
          y: this.y
        });
      };

      Rect.prototype.toVector3 = function() {
        return new Elyssa.Vector3({
          x: this.x,
          y: this.y
        });
      };

      Rect.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          w: this.w,
          h: this.h
        }, defaultValue);
      };

      Rect.fromString = function(rectString) {
        return Elyssa.deserialize(rectString, this.name);
      };

      return Rect;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Size = (function() {

      function Size(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : {
          w: 0,
          h: 0
        }, this.w = _ref.w, this.h = _ref.h;
        if (this.w == null) {
          this.w = 0;
        }
        if (this.h == null) {
          this.h = 0;
        }
      }

      Size.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: 0,
          y: 0,
          w: this.w,
          h: this.h
        });
      };

      Size.prototype.center = function() {
        return {
          x: this.w / 2,
          y: this.h / 2
        };
      };

      Size.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          w: this.w,
          h: this.h
        }, defaultValue);
      };

      Size.fromString = function(rectString) {
        return Elyssa.deserialize(rectString, this.name);
      };

      return Size;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Vector2 = (function() {
      var defaultValue;

      defaultValue = {
        x: 0,
        y: 0
      };

      function Vector2(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : defaultValue, this.x = _ref.x, this.y = _ref.y;
        if (this.x == null) {
          this.x = defaultValue.x;
        }
        if (this.y == null) {
          this.y = defaultValue.y;
        }
      }

      Vector2.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: this.x,
          y: this.y
        });
      };

      Vector2.prototype.normalize = function() {
        return new Elyssa.Vector({
          x: this.x / this.length,
          y: this.y / this.length
        });
      };

      Vector2.property('length', {
        get: function() {
          return window.Math.sqrt(this.x * this.x + this.y * this.y);
        }
      });

      Vector2.dotProduct = function(a, b) {
        if (!(a && b)) {
          return;
        }
        return a.x * b.x + a.y * b.y;
      };

      Vector2.normalize = function(vec) {
        return new Elyssa.Vector2({
          x: vec.x / vec.length,
          y: vec.y / vec.length
        });
      };

      Vector2.prototype.toVector3 = function() {
        return Elyssa.Vector3({
          x: this.x,
          y: this.y
        });
      };

      Vector2.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          z: this.z
        }, defaultValue);
      };

      Vector2.fromString = function(string) {
        return Elyssa.deserialize(string, this.name);
      };

      return Vector2;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);

(function() {

  (function(window, Elyssa) {
    return Elyssa.Vector3 = (function() {
      var defaultValue;

      defaultValue = {
        x: 0,
        y: 0,
        z: 0
      };

      function Vector3(_arg) {
        var _ref;
        _ref = _arg != null ? _arg : defaultValue, this.x = _ref.x, this.y = _ref.y, this.z = _ref.z;
        if (this.x == null) {
          this.x = defaultValue.x;
        }
        if (this.y == null) {
          this.y = defaultValue.y;
        }
        if (this.z == null) {
          this.z = defaultValue.z;
        }
      }

      Vector3.prototype.toRect = function() {
        return new Elyssa.Rect({
          x: this.x,
          y: this.y
        });
      };

      Vector3.prototype.normalize = function() {
        return new Elyssa.Vector({
          x: this.x / this.length,
          y: this.y / this.length,
          z: this.z / this.length
        });
      };

      Vector3.property('length', {
        get: function() {
          return window.Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
      });

      Vector3.crossProduct = function(a, b) {
        if (!(a && b)) {
          return;
        }
        return new Elyssa.Vector3({
          x: a.y * b.z - b.y * a.z,
          y: a.z * b.x - b.z * a.x,
          z: a.x * b.y - b.x * a.y
        });
      };

      Vector3.dotProduct = function(a, b) {
        if (!(a && b)) {
          return;
        }
        return a.x * b.x + a.y * b.y + a.z * b.z;
      };

      Vector3.normalize = function(vec) {
        return new Elyssa.Vector3({
          x: vec.x / vec.length,
          y: vec.y / vec.length,
          z: vec.z / vec.length
        });
      };

      Vector3.up = function() {
        return new Elyssa.Vector3({
          x: 0,
          y: 1,
          z: 0
        });
      };

      Vector3.zero = function() {
        return new Elyssa.Vector3({
          x: 0,
          y: 0,
          Z: 0
        });
      };

      Vector3.one = function() {
        return new Elyssa.Vector3({
          x: 1,
          y: 1,
          z: 1
        });
      };

      Vector3.right = function() {
        return new Elyssa.Vector3({
          x: 1,
          y: 0,
          z: 0
        });
      };

      Vector3.prototype.toVector2 = function() {
        return Elyssa.Vector2({
          x: this.x,
          y: this.y
        });
      };

      Vector3.prototype.toString = function() {
        return Elyssa.serialize({
          x: this.x,
          y: this.y,
          z: this.z
        }, defaultValue);
      };

      Vector3.fromString = function(string) {
        return Elyssa.deserialize(string, this.name);
      };

      return Vector3;

    })();
  })(this, this.Elyssa || (this.Elyssa = {}));

}).call(this);
