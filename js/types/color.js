(function() {
  define('elyssa/types/color', ['elyssa/math'], function(Math) {
    'use strict';
    var Color;
    return Color = (function() {
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
          _ref = Color[param] ? Color[param]() : new Color(), this.r = _ref.r, this.g = _ref.g, this.b = _ref.b, this.a = _ref.a;
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
          this.r = Math.clamp(this.r, 0, colorMax);
          this.g = Math.clamp(this.g, 0, colorMax);
          this.b = Math.clamp(this.b, 0, colorMax);
          this.a = Math.clamp(this.a, 0, colorMax);
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
        factor = Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.r += delta;
        this.g += delta;
        this.b += delta;
        this.r = Math.clamp(this.r, 0, colorMax);
        this.g = Math.clamp(this.g, 0, colorMax);
        this.b = Math.clamp(this.b, 0, colorMax);
        return this;
      };

      Color.prototype.darken = function(factor) {
        var delta;
        factor = Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.r -= delta;
        this.g -= delta;
        this.b -= delta;
        this.r = Math.clamp(this.r, 0, colorMax);
        this.g = Math.clamp(this.g, 0, colorMax);
        this.b = Math.clamp(this.b, 0, colorMax);
        return this;
      };

      Color.prototype.fadeIn = function(factor) {
        var delta;
        factor = Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.a += delta;
        this.a = Math.clamp(this.a, 0, colorMax);
        return this;
      };

      Color.prototype.fadeOut = function(factor) {
        var delta;
        factor = Math.clamp(factor);
        delta = Math.round(colorMax * factor);
        this.a -= delta;
        this.a = Math.clamp(this.a, 0, colorMax);
        return this;
      };

      Color.aqua = function() {
        return new Color({
          r: 0,
          g: 255,
          b: 255
        });
      };

      Color.black = function() {
        return new Color({
          r: 0,
          g: 0,
          b: 0
        });
      };

      Color.blue = function() {
        return new Color({
          r: 0,
          g: 0,
          b: 255
        });
      };

      Color.fuchsia = function() {
        return new Color({
          r: 255,
          g: 0,
          b: 255
        });
      };

      Color.gray = function() {
        return new Color({
          r: 128,
          g: 128,
          b: 128
        });
      };

      Color.grey = Color.gray;

      Color.green = function() {
        return new Color({
          r: 0,
          g: 128,
          b: 0
        });
      };

      Color.lime = function() {
        return new Color({
          r: 0,
          g: 255,
          b: 0
        });
      };

      Color.maroon = function() {
        return new Color({
          r: 128,
          g: 0,
          b: 0
        });
      };

      Color.navy = function() {
        return new Color({
          r: 0,
          g: 0,
          b: 128
        });
      };

      Color.olive = function() {
        return new Color({
          r: 128,
          g: 128,
          b: 0
        });
      };

      Color.purple = function() {
        return new Color({
          r: 128,
          g: 0,
          b: 128
        });
      };

      Color.red = function() {
        return new Color({
          r: 255,
          g: 0,
          b: 0
        });
      };

      Color.silver = function() {
        return new Color({
          r: 192,
          g: 192,
          b: 192
        });
      };

      Color.teal = function() {
        return new Color({
          r: 0,
          g: 128,
          b: 128
        });
      };

      Color.white = function() {
        return new Color({
          r: 255,
          g: 255,
          b: 255
        });
      };

      Color.yellow = function() {
        return new Color({
          r: 255,
          g: 255,
          b: 0
        });
      };

      Color.transparent = function() {
        return new Color({
          r: 0,
          g: 0,
          b: 0,
          a: 0
        });
      };

      Color.aliceBlue = function() {
        return new Color({
          r: 240,
          g: 248,
          b: 255
        });
      };

      Color.antiqueWhite = function() {
        return new Color({
          r: 250,
          g: 235,
          b: 215
        });
      };

      Color.aquamarine = function() {
        return new Color({
          r: 127,
          g: 255,
          b: 212
        });
      };

      Color.azure = function() {
        return new Color({
          r: 240,
          g: 255,
          b: 255
        });
      };

      Color.beige = function() {
        return new Color({
          r: 245,
          g: 245,
          b: 220
        });
      };

      Color.bisque = function() {
        return new Color({
          r: 255,
          g: 228,
          b: 196
        });
      };

      Color.blanchedAlmond = function() {
        return new Color({
          r: 255,
          g: 235,
          b: 205
        });
      };

      Color.blueViolet = function() {
        return new Color({
          r: 138,
          g: 43,
          b: 226
        });
      };

      Color.brown = function() {
        return new Color({
          r: 165,
          g: 42,
          b: 42
        });
      };

      Color.burlyWood = function() {
        return new Color({
          r: 222,
          g: 184,
          b: 135
        });
      };

      Color.cadetBlue = function() {
        return new Color({
          r: 95,
          g: 158,
          b: 160
        });
      };

      Color.chartreuse = function() {
        return new Color({
          r: 127,
          g: 255,
          b: 0
        });
      };

      Color.chocolate = function() {
        return new Color({
          r: 210,
          g: 105,
          b: 30
        });
      };

      Color.coral = function() {
        return new Color({
          r: 255,
          g: 127,
          b: 80
        });
      };

      Color.cornflowerBlue = function() {
        return new Color({
          r: 100,
          g: 149,
          b: 237
        });
      };

      Color.cornsilk = function() {
        return new Color({
          r: 255,
          g: 248,
          b: 220
        });
      };

      Color.crimson = function() {
        return new Color({
          r: 220,
          g: 20,
          b: 60
        });
      };

      Color.cyan = function() {
        return new Color({
          r: 0,
          g: 255,
          b: 255
        });
      };

      Color.darkBlue = function() {
        return new Color({
          r: 0,
          g: 0,
          b: 139
        });
      };

      Color.darkCyan = function() {
        return new Color({
          r: 0,
          g: 139,
          b: 139
        });
      };

      Color.darkGoldenRod = function() {
        return new Color({
          r: 184,
          g: 134,
          b: 11
        });
      };

      Color.darkGray = function() {
        return new Color({
          r: 169,
          g: 169,
          b: 169
        });
      };

      Color.darkGrey = Color.darkGray;

      Color.darkGreen = function() {
        return new Color({
          r: 0,
          g: 100,
          b: 0
        });
      };

      Color.darkKhaki = function() {
        return new Color({
          r: 189,
          g: 183,
          b: 107
        });
      };

      Color.darkMagenta = function() {
        return new Color({
          r: 139,
          g: 0,
          b: 139
        });
      };

      Color.darkOliveGreen = function() {
        return new Color({
          r: 85,
          g: 107,
          b: 47
        });
      };

      Color.darkOrange = function() {
        return new Color({
          r: 255,
          g: 140,
          b: 0
        });
      };

      Color.darkOrchid = function() {
        return new Color({
          r: 153,
          g: 50,
          b: 204
        });
      };

      Color.darkRed = function() {
        return new Color({
          r: 139,
          g: 0,
          b: 0
        });
      };

      Color.darkSalmon = function() {
        return new Color({
          r: 233,
          g: 150,
          b: 122
        });
      };

      Color.darkSeaGreen = function() {
        return new Color({
          r: 143,
          g: 188,
          b: 143
        });
      };

      Color.darkSlateBlue = function() {
        return new Color({
          r: 72,
          g: 61,
          b: 139
        });
      };

      Color.darkSlateGray = function() {
        return new Color({
          r: 47,
          g: 79,
          b: 79
        });
      };

      Color.darkSlateGrey = Color.darkSlateGray;

      Color.darkTurquoise = function() {
        return new Color({
          r: 0,
          g: 206,
          b: 209
        });
      };

      Color.darkViolet = function() {
        return new Color({
          r: 148,
          g: 0,
          b: 211
        });
      };

      Color.deepPink = function() {
        return new Color({
          r: 255,
          g: 20,
          b: 147
        });
      };

      Color.deepSkyBlue = function() {
        return new Color({
          r: 0,
          g: 191,
          b: 255
        });
      };

      Color.dimGray = function() {
        return new Color({
          r: 105,
          g: 105,
          b: 105
        });
      };

      Color.dimGrey = Color.dimGray;

      Color.dodgerBlue = function() {
        return new Color({
          r: 30,
          g: 144,
          b: 255
        });
      };

      Color.fireBrick = function() {
        return new Color({
          r: 178,
          g: 34,
          b: 34
        });
      };

      Color.floralWhite = function() {
        return new Color({
          r: 255,
          g: 250,
          b: 240
        });
      };

      Color.forestGreen = function() {
        return new Color({
          r: 34,
          g: 139,
          b: 34
        });
      };

      Color.gainsboro = function() {
        return new Color({
          r: 220,
          g: 220,
          b: 220
        });
      };

      Color.ghostWhite = function() {
        return new Color({
          r: 248,
          g: 248,
          b: 255
        });
      };

      Color.gold = function() {
        return new Color({
          r: 255,
          g: 215,
          b: 0
        });
      };

      Color.goldenRod = function() {
        return new Color({
          r: 218,
          g: 165,
          b: 32
        });
      };

      Color.greenYellow = function() {
        return new Color({
          r: 173,
          g: 255,
          b: 47
        });
      };

      Color.honeyDew = function() {
        return new Color({
          r: 240,
          g: 255,
          b: 240
        });
      };

      Color.hotPink = function() {
        return new Color({
          r: 255,
          g: 105,
          b: 180
        });
      };

      Color.indianRed = function() {
        return new Color({
          r: 205,
          g: 92,
          b: 92
        });
      };

      Color.indigo = function() {
        return new Color({
          r: 75,
          g: 0,
          b: 130
        });
      };

      Color.ivory = function() {
        return new Color({
          r: 255,
          g: 255,
          b: 240
        });
      };

      Color.khaki = function() {
        return new Color({
          r: 240,
          g: 230,
          b: 140
        });
      };

      Color.lavender = function() {
        return new Color({
          r: 230,
          g: 230,
          b: 250
        });
      };

      Color.lavenderBlush = function() {
        return new Color({
          r: 255,
          g: 240,
          b: 245
        });
      };

      Color.lawnGreen = function() {
        return new Color({
          r: 124,
          g: 252,
          b: 0
        });
      };

      Color.lemonChiffon = function() {
        return new Color({
          r: 255,
          g: 250,
          b: 205
        });
      };

      Color.lightBlue = function() {
        return new Color({
          r: 173,
          g: 216,
          b: 230
        });
      };

      Color.lightCoral = function() {
        return new Color({
          r: 240,
          g: 128,
          b: 128
        });
      };

      Color.lightCyan = function() {
        return new Color({
          r: 224,
          g: 255,
          b: 255
        });
      };

      Color.lightGoldenRodYellow = function() {
        return new Color({
          r: 250,
          g: 250,
          b: 210
        });
      };

      Color.lightGray = function() {
        return new Color({
          r: 211,
          g: 211,
          b: 211
        });
      };

      Color.lightGrey = Color.lightGray;

      Color.lightGreen = function() {
        return new Color({
          r: 144,
          g: 238,
          b: 144
        });
      };

      Color.lightPink = function() {
        return new Color({
          r: 255,
          g: 182,
          b: 193
        });
      };

      Color.lightSalmon = function() {
        return new Color({
          r: 255,
          g: 160,
          b: 122
        });
      };

      Color.lightSeaGreen = function() {
        return new Color({
          r: 32,
          g: 178,
          b: 170
        });
      };

      Color.lightSkyBlue = function() {
        return new Color({
          r: 135,
          g: 206,
          b: 250
        });
      };

      Color.lightSlateGray = function() {
        return new Color({
          r: 119,
          g: 136,
          b: 153
        });
      };

      Color.lightSlateGrey = Color.lightSlateGray;

      Color.lightSteelBlue = function() {
        return new Color({
          r: 176,
          g: 196,
          b: 222
        });
      };

      Color.lightYellow = function() {
        return new Color({
          r: 255,
          g: 255,
          b: 224
        });
      };

      Color.limeGreen = function() {
        return new Color({
          r: 50,
          g: 205,
          b: 50
        });
      };

      Color.linen = function() {
        return new Color({
          r: 250,
          g: 240,
          b: 230
        });
      };

      Color.magenta = Color.fuchsia;

      Color.mediumAquaMarine = function() {
        return new Color({
          r: 102,
          g: 205,
          b: 170
        });
      };

      Color.mediumBlue = function() {
        return new Color({
          r: 0,
          g: 0,
          b: 205
        });
      };

      Color.mediumOrchid = function() {
        return new Color({
          r: 186,
          g: 85,
          b: 211
        });
      };

      Color.mediumPurple = function() {
        return new Color({
          r: 157,
          g: 112,
          b: 219
        });
      };

      Color.mediumSeaGreen = function() {
        return new Color({
          r: 60,
          g: 179,
          b: 113
        });
      };

      Color.mediumSlateBlue = function() {
        return new Color({
          r: 123,
          g: 104,
          b: 238
        });
      };

      Color.mediumSpringGreen = function() {
        return new Color({
          r: 0,
          g: 250,
          b: 154
        });
      };

      Color.mediumTurquoise = function() {
        return new Color({
          r: 72,
          g: 209,
          b: 204
        });
      };

      Color.mediumVioletRed = function() {
        return new Color({
          r: 199,
          g: 21,
          b: 133
        });
      };

      Color.midnightBlue = function() {
        return new Color({
          r: 25,
          g: 25,
          b: 112
        });
      };

      Color.mintCream = function() {
        return new Color({
          r: 245,
          g: 255,
          b: 250
        });
      };

      Color.mistyRose = function() {
        return new Color({
          r: 255,
          g: 228,
          b: 225
        });
      };

      Color.moccasin = function() {
        return new Color({
          r: 255,
          g: 228,
          b: 181
        });
      };

      Color.navajoWhite = function() {
        return new Color({
          r: 255,
          g: 222,
          b: 173
        });
      };

      Color.oldLace = function() {
        return new Color({
          r: 253,
          g: 245,
          b: 230
        });
      };

      Color.oliveDrab = function() {
        return new Color({
          r: 107,
          g: 142,
          b: 35
        });
      };

      Color.orange = function() {
        return new Color({
          r: 255,
          g: 165,
          b: 0
        });
      };

      Color.orangeRed = function() {
        return new Color({
          r: 255,
          g: 69,
          b: 0
        });
      };

      Color.orchid = function() {
        return new Color({
          r: 218,
          g: 112,
          b: 214
        });
      };

      Color.paleGoldenRod = function() {
        return new Color({
          r: 238,
          g: 232,
          b: 170
        });
      };

      Color.paleGreen = function() {
        return new Color({
          r: 152,
          g: 251,
          b: 152
        });
      };

      Color.paleTurquoise = function() {
        return new Color({
          r: 175,
          g: 238,
          b: 238
        });
      };

      Color.paleVioletRed = function() {
        return new Color({
          r: 219,
          g: 112,
          b: 147
        });
      };

      Color.papayaWhip = function() {
        return new Color({
          r: 255,
          g: 239,
          b: 213
        });
      };

      Color.peachPuff = function() {
        return new Color({
          r: 255,
          g: 218,
          b: 185
        });
      };

      Color.peru = function() {
        return new Color({
          r: 205,
          g: 133,
          b: 63
        });
      };

      Color.pink = function() {
        return new Color({
          r: 255,
          g: 192,
          b: 203
        });
      };

      Color.plum = function() {
        return new Color({
          r: 221,
          g: 160,
          b: 221
        });
      };

      Color.powderBlue = function() {
        return new Color({
          r: 176,
          g: 224,
          b: 230
        });
      };

      Color.rosyBrown = function() {
        return new Color({
          r: 188,
          g: 143,
          b: 143
        });
      };

      Color.royalBlue = function() {
        return new Color({
          r: 65,
          g: 105,
          b: 225
        });
      };

      Color.saddleBrown = function() {
        return new Color({
          r: 139,
          g: 69,
          b: 19
        });
      };

      Color.salmon = function() {
        return new Color({
          r: 250,
          g: 128,
          b: 114
        });
      };

      Color.sandyBrown = function() {
        return new Color({
          r: 244,
          g: 164,
          b: 96
        });
      };

      Color.seaGreen = function() {
        return new Color({
          r: 46,
          g: 139,
          b: 87
        });
      };

      Color.seaShell = function() {
        return new Color({
          r: 255,
          g: 245,
          b: 238
        });
      };

      Color.sienna = function() {
        return new Color({
          r: 160,
          g: 82,
          b: 45
        });
      };

      Color.skyBlue = function() {
        return new Color({
          r: 135,
          g: 206,
          b: 235
        });
      };

      Color.slateBlue = function() {
        return new Color({
          r: 106,
          g: 90,
          b: 205
        });
      };

      Color.slateGray = function() {
        return new Color({
          r: 112,
          g: 128,
          b: 144
        });
      };

      Color.slateGrey = Color.slateGray;

      Color.snow = function() {
        return new Color({
          r: 255,
          g: 250,
          b: 250
        });
      };

      Color.springGreen = function() {
        return new Color({
          r: 0,
          g: 255,
          b: 127
        });
      };

      Color.steelBlue = function() {
        return new Color({
          r: 70,
          g: 130,
          b: 180
        });
      };

      Color.tan = function() {
        return new Color({
          r: 210,
          g: 180,
          b: 140
        });
      };

      Color.thistle = function() {
        return new Color({
          r: 216,
          g: 191,
          b: 216
        });
      };

      Color.tomato = function() {
        return new Color({
          r: 255,
          g: 99,
          b: 71
        });
      };

      Color.turquoise = function() {
        return new Color({
          r: 64,
          g: 224,
          b: 208
        });
      };

      Color.violet = function() {
        return new Color({
          r: 238,
          g: 130,
          b: 238
        });
      };

      Color.wheat = function() {
        return new Color({
          r: 245,
          g: 222,
          b: 179
        });
      };

      Color.whiteSmoke = function() {
        return new Color({
          r: 245,
          g: 245,
          b: 245
        });
      };

      Color.yellowGreen = function() {
        return new Color({
          r: 154,
          g: 205,
          b: 50
        });
      };

      Color.freezeDevBlue = function() {
        return new Color({
          r: 73,
          g: 92,
          b: 108
        });
      };

      return Color;

    })();
  });

}).call(this);
