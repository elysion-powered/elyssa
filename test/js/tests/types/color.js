(function() {

  describe('Elyssa', function() {
    return describe('Types', function() {
      return describe('Color', function() {
        describe('constructor', function() {
          it('default value r is 0', function() {
            return new Elyssa.Color().r.should.equal(0);
          });
          it('default value g is 0', function() {
            return new Elyssa.Color().g.should.equal(0);
          });
          it('default value b is 0', function() {
            return new Elyssa.Color().b.should.equal(0);
          });
          it('default value a is 255', function() {
            return new Elyssa.Color().a.should.equal(255);
          });
          it('value assignment works as expected', function() {
            var color, colorObject;
            colorObject = {
              r: ~~(Math.random() * 255),
              g: ~~(Math.random() * 255),
              b: ~~(Math.random() * 255),
              a: ~~(Math.random() * 255)
            };
            color = new Elyssa.Color(colorObject);
            color.r.should.equal(colorObject.r);
            color.g.should.equal(colorObject.g);
            color.b.should.equal(colorObject.b);
            return color.a.should.equal(colorObject.a);
          });
          it('constructor with string works as expected', function() {
            var color;
            color = new Elyssa.Color('blue');
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          return it('constructor with false string value returns default color', function() {
            var color;
            color = new Elyssa.Color('traaaaaainzzz');
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
        });
        describe('#toHex()', function() {
          it('black color is #000', function() {
            return new Elyssa.Color({
              r: 0,
              g: 0,
              b: 0
            }).toHex().should.equal('#000');
          });
          return it('white color is #fff', function() {
            return new Elyssa.Color({
              r: 255,
              g: 255,
              b: 255
            }).toHex().should.equal('#fff');
          });
        });
        describe('#toString()', function() {
          return it('black color is rgb(0, 0, 0)', function() {
            return new Elyssa.Color({
              r: 0,
              g: 0,
              b: 0
            }).toString().should.equal('rgb(0, 0, 0)');
          });
        });
        describe('#lighten()', function() {
          it('lighten() should not change anything', function() {
            var color;
            color = new Elyssa.Color().lighten();
            color.r.should.equal(0);
            color.g.should.equal(0);
            return color.b.should.equal(0);
          });
          it('lighten(0) should not change anything', function() {
            var color;
            color = new Elyssa.Color().lighten(0);
            color.r.should.equal(0);
            color.g.should.equal(0);
            return color.b.should.equal(0);
          });
          return it('lighten(1.0) converts black color to white color', function() {
            var whiteColor;
            whiteColor = new Elyssa.Color().lighten(1.0);
            whiteColor.r.should.equal(255);
            whiteColor.g.should.equal(255);
            return whiteColor.b.should.equal(255);
          });
        });
        describe('#darken()', function() {
          it('darken() should not change anything', function() {
            var color;
            color = new Elyssa.Color({
              r: 255,
              g: 255,
              b: 255
            }).darken();
            color.r.should.equal(255);
            color.g.should.equal(255);
            return color.b.should.equal(255);
          });
          it('darken(0) should not change anything', function() {
            var color;
            color = new Elyssa.Color({
              r: 255,
              g: 255,
              b: 255
            }).darken(0);
            color.r.should.equal(255);
            color.g.should.equal(255);
            return color.b.should.equal(255);
          });
          return it('darken(1.0) converts white color to black color', function() {
            var blackColor;
            blackColor = new Elyssa.Color({
              r: 255,
              g: 255,
              b: 255
            }).darken(1.0);
            blackColor.r.should.equal(0);
            blackColor.g.should.equal(0);
            return blackColor.b.should.equal(0);
          });
        });
        describe('#fadeIn()', function() {
          it('fadeIn() should not change anything', function() {
            return new Elyssa.Color({
              a: 0
            }).fadeIn().a.should.equal(0);
          });
          it('fadeIn(0) should not change anything', function() {
            return new Elyssa.Color({
              a: 0
            }).fadeIn(0).a.should.equal(0);
          });
          it('fadeIn(0.5) turns alpha value 0 into 128', function() {
            return new Elyssa.Color({
              a: 0
            }).fadeIn(0.5).a.should.equal(128);
          });
          it('fadeIn(0.5) turns alpha value 128 into 255', function() {
            return new Elyssa.Color({
              a: 128
            }).fadeIn(0.5).a.should.equal(255);
          });
          it('fadeIn(1.0) turns alpha value 0 into 255', function() {
            return new Elyssa.Color({
              a: 0
            }).fadeIn(1.0).a.should.equal(255);
          });
          return it('fadeIn(5.0) should act the same as fadeIn(1.0)', function() {
            return new Elyssa.Color({
              a: 0
            }).fadeIn(5.0).a.should.equal(255);
          });
        });
        describe('#fadeOut()', function() {
          it('fadeOut() should not change anything', function() {
            return new Elyssa.Color().fadeOut().a.should.equal(255);
          });
          it('fadeOut(0) should not change anything', function() {
            return new Elyssa.Color().fadeOut(0).a.should.equal(255);
          });
          it('fadeOut(0.5) turns alpha value 128 into 0', function() {
            return new Elyssa.Color({
              a: 128
            }).fadeOut(0.5).a.should.equal(0);
          });
          it('fadeOut(0.5) turns alpha value 255 into 127', function() {
            return new Elyssa.Color().fadeOut(0.5).a.should.equal(127);
          });
          it('fadeOut(1.0) turns alpha value 255 into 0', function() {
            return new Elyssa.Color().fadeOut(1.0).a.should.equal(0);
          });
          return it('fadeOut(5.0) should act the same as fadeOut(1.0)', function() {
            return new Elyssa.Color().fadeOut(5.0).a.should.equal(0);
          });
        });
        return describe('Static color functions', function() {
          it('.aqua()', function() {
            var color;
            color = Elyssa.Color.aqua();
            color.r.should.equal(0);
            color.g.should.equal(255);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.black()', function() {
            var color;
            color = Elyssa.Color.black();
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.blue()', function() {
            var color;
            color = Elyssa.Color.blue();
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.fuchsia()', function() {
            var color;
            color = Elyssa.Color.fuchsia();
            color.r.should.equal(255);
            color.g.should.equal(0);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.gray()', function() {
            var color;
            color = Elyssa.Color.gray();
            color.r.should.equal(128);
            color.g.should.equal(128);
            color.b.should.equal(128);
            return color.a.should.equal(255);
          });
          it('.grey()', function() {
            var color;
            color = Elyssa.Color.grey();
            color.r.should.equal(128);
            color.g.should.equal(128);
            color.b.should.equal(128);
            return color.a.should.equal(255);
          });
          it('.green()', function() {
            var color;
            color = Elyssa.Color.green();
            color.r.should.equal(0);
            color.g.should.equal(128);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.lime()', function() {
            var color;
            color = Elyssa.Color.lime();
            color.r.should.equal(0);
            color.g.should.equal(255);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.maroon()', function() {
            var color;
            color = Elyssa.Color.maroon();
            color.r.should.equal(128);
            color.g.should.equal(0);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.navy()', function() {
            var color;
            color = Elyssa.Color.navy();
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(128);
            return color.a.should.equal(255);
          });
          it('.olive()', function() {
            var color;
            color = Elyssa.Color.olive();
            color.r.should.equal(128);
            color.g.should.equal(128);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.purple()', function() {
            var color;
            color = Elyssa.Color.purple();
            color.r.should.equal(128);
            color.g.should.equal(0);
            color.b.should.equal(128);
            return color.a.should.equal(255);
          });
          it('.gray()', function() {
            var color;
            color = Elyssa.Color.red();
            color.r.should.equal(255);
            color.g.should.equal(0);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.silver()', function() {
            var color;
            color = Elyssa.Color.silver();
            color.r.should.equal(192);
            color.g.should.equal(192);
            color.b.should.equal(192);
            return color.a.should.equal(255);
          });
          it('.teal()', function() {
            var color;
            color = Elyssa.Color.teal();
            color.r.should.equal(0);
            color.g.should.equal(128);
            color.b.should.equal(128);
            return color.a.should.equal(255);
          });
          it('.white()', function() {
            var color;
            color = Elyssa.Color.white();
            color.r.should.equal(255);
            color.g.should.equal(255);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.yellow()', function() {
            var color;
            color = Elyssa.Color.yellow();
            color.r.should.equal(255);
            color.g.should.equal(255);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.transparent()', function() {
            var color;
            color = Elyssa.Color.transparent();
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(0);
            return color.a.should.equal(0);
          });
          it('.aliceBlue()', function() {
            var color;
            color = Elyssa.Color.aliceBlue();
            color.r.should.equal(240);
            color.g.should.equal(248);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.antiqueWhite()', function() {
            var color;
            color = Elyssa.Color.antiqueWhite();
            color.r.should.equal(250);
            color.g.should.equal(235);
            color.b.should.equal(215);
            return color.a.should.equal(255);
          });
          it('.azure()', function() {
            var color;
            color = Elyssa.Color.azure();
            color.r.should.equal(240);
            color.g.should.equal(255);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.beige()', function() {
            var color;
            color = Elyssa.Color.beige();
            color.r.should.equal(245);
            color.g.should.equal(245);
            color.b.should.equal(220);
            return color.a.should.equal(255);
          });
          it('.bisque()', function() {
            var color;
            color = Elyssa.Color.bisque();
            color.r.should.equal(255);
            color.g.should.equal(228);
            color.b.should.equal(196);
            return color.a.should.equal(255);
          });
          it('.blanchedAlmond()', function() {
            var color;
            color = Elyssa.Color.blanchedAlmond();
            color.r.should.equal(255);
            color.g.should.equal(235);
            color.b.should.equal(205);
            return color.a.should.equal(255);
          });
          it('.blueViolet()', function() {
            var color;
            color = Elyssa.Color.blueViolet();
            color.r.should.equal(138);
            color.g.should.equal(43);
            color.b.should.equal(226);
            return color.a.should.equal(255);
          });
          it('.brown()', function() {
            var color;
            color = Elyssa.Color.brown();
            color.r.should.equal(165);
            color.g.should.equal(42);
            color.b.should.equal(42);
            return color.a.should.equal(255);
          });
          it('.burlyWood()', function() {
            var color;
            color = Elyssa.Color.burlyWood();
            color.r.should.equal(222);
            color.g.should.equal(184);
            color.b.should.equal(135);
            return color.a.should.equal(255);
          });
          it('.cadetBlue()', function() {
            var color;
            color = Elyssa.Color.cadetBlue();
            color.r.should.equal(95);
            color.g.should.equal(158);
            color.b.should.equal(160);
            return color.a.should.equal(255);
          });
          it('.chartreuse()', function() {
            var color;
            color = Elyssa.Color.chartreuse();
            color.r.should.equal(127);
            color.g.should.equal(255);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.chocolate()', function() {
            var color;
            color = Elyssa.Color.chocolate();
            color.r.should.equal(210);
            color.g.should.equal(105);
            color.b.should.equal(30);
            return color.a.should.equal(255);
          });
          it('.coral()', function() {
            var color;
            color = Elyssa.Color.coral();
            color.r.should.equal(255);
            color.g.should.equal(127);
            color.b.should.equal(80);
            return color.a.should.equal(255);
          });
          it('.cornflowerBlue()', function() {
            var color;
            color = Elyssa.Color.cornflowerBlue();
            color.r.should.equal(100);
            color.g.should.equal(149);
            color.b.should.equal(237);
            return color.a.should.equal(255);
          });
          it('.cornsilk()', function() {
            var color;
            color = Elyssa.Color.cornsilk();
            color.r.should.equal(255);
            color.g.should.equal(248);
            color.b.should.equal(220);
            return color.a.should.equal(255);
          });
          it('.crimson()', function() {
            var color;
            color = Elyssa.Color.crimson();
            color.r.should.equal(220);
            color.g.should.equal(20);
            color.b.should.equal(60);
            return color.a.should.equal(255);
          });
          it('.cyan()', function() {
            var color;
            color = Elyssa.Color.cyan();
            color.r.should.equal(0);
            color.g.should.equal(255);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.darkBlue()', function() {
            var color;
            color = Elyssa.Color.darkBlue();
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(139);
            return color.a.should.equal(255);
          });
          it('.darkCyan()', function() {
            var color;
            color = Elyssa.Color.darkCyan();
            color.r.should.equal(0);
            color.g.should.equal(139);
            color.b.should.equal(139);
            return color.a.should.equal(255);
          });
          it('.darkGoldenRod()', function() {
            var color;
            color = Elyssa.Color.darkGoldenRod();
            color.r.should.equal(184);
            color.g.should.equal(134);
            color.b.should.equal(11);
            return color.a.should.equal(255);
          });
          it('.darkGray()', function() {
            var color;
            color = Elyssa.Color.darkGray();
            color.r.should.equal(169);
            color.g.should.equal(169);
            color.b.should.equal(169);
            return color.a.should.equal(255);
          });
          it('.darkGrey()', function() {
            var color;
            color = Elyssa.Color.darkGrey();
            color.r.should.equal(169);
            color.g.should.equal(169);
            color.b.should.equal(169);
            return color.a.should.equal(255);
          });
          it('.darkGreen()', function() {
            var color;
            color = Elyssa.Color.darkGreen();
            color.r.should.equal(0);
            color.g.should.equal(100);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.darkKhaki()', function() {
            var color;
            color = Elyssa.Color.darkKhaki();
            color.r.should.equal(189);
            color.g.should.equal(183);
            color.b.should.equal(107);
            return color.a.should.equal(255);
          });
          it('.darkMagenta()', function() {
            var color;
            color = Elyssa.Color.darkMagenta();
            color.r.should.equal(139);
            color.g.should.equal(0);
            color.b.should.equal(139);
            return color.a.should.equal(255);
          });
          it('.darkOliveGreen()', function() {
            var color;
            color = Elyssa.Color.darkOliveGreen();
            color.r.should.equal(85);
            color.g.should.equal(107);
            color.b.should.equal(47);
            return color.a.should.equal(255);
          });
          it('.darkOrange()', function() {
            var color;
            color = Elyssa.Color.darkOrange();
            color.r.should.equal(255);
            color.g.should.equal(140);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.darkOrchid()', function() {
            var color;
            color = Elyssa.Color.darkOrchid();
            color.r.should.equal(153);
            color.g.should.equal(50);
            color.b.should.equal(204);
            return color.a.should.equal(255);
          });
          it('.darkRed()', function() {
            var color;
            color = Elyssa.Color.darkRed();
            color.r.should.equal(139);
            color.g.should.equal(0);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.darkSalmon()', function() {
            var color;
            color = Elyssa.Color.darkSalmon();
            color.r.should.equal(233);
            color.g.should.equal(150);
            color.b.should.equal(122);
            return color.a.should.equal(255);
          });
          it('.darkSeaGreen()', function() {
            var color;
            color = Elyssa.Color.darkSeaGreen();
            color.r.should.equal(143);
            color.g.should.equal(188);
            color.b.should.equal(143);
            return color.a.should.equal(255);
          });
          it('.darkSlateBlue()', function() {
            var color;
            color = Elyssa.Color.darkSlateBlue();
            color.r.should.equal(72);
            color.g.should.equal(61);
            color.b.should.equal(139);
            return color.a.should.equal(255);
          });
          it('.darkSlateGray()', function() {
            var color;
            color = Elyssa.Color.darkSlateGray();
            color.r.should.equal(47);
            color.g.should.equal(79);
            color.b.should.equal(79);
            return color.a.should.equal(255);
          });
          it('.darkSlateGrey', function() {
            var color;
            color = Elyssa.Color.darkSlateGrey();
            color.r.should.equal(47);
            color.g.should.equal(79);
            color.b.should.equal(79);
            return color.a.should.equal(255);
          });
          it('.darkTurquoise()', function() {
            var color;
            color = Elyssa.Color.darkTurquoise();
            color.r.should.equal(0);
            color.g.should.equal(206);
            color.b.should.equal(209);
            return color.a.should.equal(255);
          });
          it('.darkViolet()', function() {
            var color;
            color = Elyssa.Color.darkViolet();
            color.r.should.equal(148);
            color.g.should.equal(0);
            color.b.should.equal(211);
            return color.a.should.equal(255);
          });
          it('.deepPink()', function() {
            var color;
            color = Elyssa.Color.deepPink();
            color.r.should.equal(255);
            color.g.should.equal(20);
            color.b.should.equal(147);
            return color.a.should.equal(255);
          });
          it('.deepSkyBlue()', function() {
            var color;
            color = Elyssa.Color.deepSkyBlue();
            color.r.should.equal(0);
            color.g.should.equal(191);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.dimGray()', function() {
            var color;
            color = Elyssa.Color.dimGray();
            color.r.should.equal(105);
            color.g.should.equal(105);
            color.b.should.equal(105);
            return color.a.should.equal(255);
          });
          it('.dimGrey()', function() {
            var color;
            color = Elyssa.Color.dimGrey();
            color.r.should.equal(105);
            color.g.should.equal(105);
            color.b.should.equal(105);
            return color.a.should.equal(255);
          });
          it('.dodgerBlue()', function() {
            var color;
            color = Elyssa.Color.dodgerBlue();
            color.r.should.equal(30);
            color.g.should.equal(144);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.fireBrick()', function() {
            var color;
            color = Elyssa.Color.fireBrick();
            color.r.should.equal(178);
            color.g.should.equal(34);
            color.b.should.equal(34);
            return color.a.should.equal(255);
          });
          it('.floralWhite()', function() {
            var color;
            color = Elyssa.Color.floralWhite();
            color.r.should.equal(255);
            color.g.should.equal(250);
            color.b.should.equal(240);
            return color.a.should.equal(255);
          });
          it('.forestGreen()', function() {
            var color;
            color = Elyssa.Color.forestGreen();
            color.r.should.equal(34);
            color.g.should.equal(139);
            color.b.should.equal(34);
            return color.a.should.equal(255);
          });
          it('.gainsboro()', function() {
            var color;
            color = Elyssa.Color.gainsboro();
            color.r.should.equal(220);
            color.g.should.equal(220);
            color.b.should.equal(220);
            return color.a.should.equal(255);
          });
          it('.ghostWhite()', function() {
            var color;
            color = Elyssa.Color.ghostWhite();
            color.r.should.equal(248);
            color.g.should.equal(248);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.gold()', function() {
            var color;
            color = Elyssa.Color.gold();
            color.r.should.equal(255);
            color.g.should.equal(215);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.goldenRod()', function() {
            var color;
            color = Elyssa.Color.goldenRod();
            color.r.should.equal(218);
            color.g.should.equal(165);
            color.b.should.equal(32);
            return color.a.should.equal(255);
          });
          it('.greenYellow()', function() {
            var color;
            color = Elyssa.Color.greenYellow();
            color.r.should.equal(173);
            color.g.should.equal(255);
            color.b.should.equal(47);
            return color.a.should.equal(255);
          });
          it('.honeyDew()', function() {
            var color;
            color = Elyssa.Color.honeyDew();
            color.r.should.equal(240);
            color.g.should.equal(255);
            color.b.should.equal(240);
            return color.a.should.equal(255);
          });
          it('.hotPink()', function() {
            var color;
            color = Elyssa.Color.hotPink();
            color.r.should.equal(255);
            color.g.should.equal(105);
            color.b.should.equal(180);
            return color.a.should.equal(255);
          });
          it('.indianRed()', function() {
            var color;
            color = Elyssa.Color.indianRed();
            color.r.should.equal(205);
            color.g.should.equal(92);
            color.b.should.equal(92);
            return color.a.should.equal(255);
          });
          it('.indigo()', function() {
            var color;
            color = Elyssa.Color.indigo();
            color.r.should.equal(75);
            color.g.should.equal(0);
            color.b.should.equal(130);
            return color.a.should.equal(255);
          });
          it('.ivory()', function() {
            var color;
            color = Elyssa.Color.ivory();
            color.r.should.equal(255);
            color.g.should.equal(255);
            color.b.should.equal(240);
            return color.a.should.equal(255);
          });
          it('.khaki()', function() {
            var color;
            color = Elyssa.Color.khaki();
            color.r.should.equal(240);
            color.g.should.equal(230);
            color.b.should.equal(140);
            return color.a.should.equal(255);
          });
          it('.lavender()', function() {
            var color;
            color = Elyssa.Color.lavender();
            color.r.should.equal(230);
            color.g.should.equal(230);
            color.b.should.equal(250);
            return color.a.should.equal(255);
          });
          it('.lavenderBlush()', function() {
            var color;
            color = Elyssa.Color.lavenderBlush();
            color.r.should.equal(255);
            color.g.should.equal(240);
            color.b.should.equal(245);
            return color.a.should.equal(255);
          });
          it('.lawnGreen()', function() {
            var color;
            color = Elyssa.Color.lawnGreen();
            color.r.should.equal(124);
            color.g.should.equal(252);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.lemonChiffon()', function() {
            var color;
            color = Elyssa.Color.lemonChiffon();
            color.r.should.equal(255);
            color.g.should.equal(250);
            color.b.should.equal(205);
            return color.a.should.equal(255);
          });
          it('.lightBlue()', function() {
            var color;
            color = Elyssa.Color.lightBlue();
            color.r.should.equal(173);
            color.g.should.equal(216);
            color.b.should.equal(230);
            return color.a.should.equal(255);
          });
          it('.lightCoral()', function() {
            var color;
            color = Elyssa.Color.lightCoral();
            color.r.should.equal(240);
            color.g.should.equal(128);
            color.b.should.equal(128);
            return color.a.should.equal(255);
          });
          it('.lightCyan()', function() {
            var color;
            color = Elyssa.Color.lightCyan();
            color.r.should.equal(224);
            color.g.should.equal(255);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.lightGoldenRodYellow()', function() {
            var color;
            color = Elyssa.Color.lightGoldenRodYellow();
            color.r.should.equal(250);
            color.g.should.equal(250);
            color.b.should.equal(210);
            return color.a.should.equal(255);
          });
          it('.lightGray()', function() {
            var color;
            color = Elyssa.Color.lightGray();
            color.r.should.equal(211);
            color.g.should.equal(211);
            color.b.should.equal(211);
            return color.a.should.equal(255);
          });
          it('.lightGrey', function() {
            var color;
            color = Elyssa.Color.lightGrey();
            color.r.should.equal(211);
            color.g.should.equal(211);
            color.b.should.equal(211);
            return color.a.should.equal(255);
          });
          it('.lightGreen()', function() {
            var color;
            color = Elyssa.Color.lightGreen();
            color.r.should.equal(144);
            color.g.should.equal(238);
            color.b.should.equal(144);
            return color.a.should.equal(255);
          });
          it('.lightPink()', function() {
            var color;
            color = Elyssa.Color.lightPink();
            color.r.should.equal(255);
            color.g.should.equal(182);
            color.b.should.equal(193);
            return color.a.should.equal(255);
          });
          it('.lightSalmon()', function() {
            var color;
            color = Elyssa.Color.lightSalmon();
            color.r.should.equal(255);
            color.g.should.equal(160);
            color.b.should.equal(122);
            return color.a.should.equal(255);
          });
          it('.lightSeaGreen()', function() {
            var color;
            color = Elyssa.Color.lightSeaGreen();
            color.r.should.equal(32);
            color.g.should.equal(178);
            color.b.should.equal(170);
            return color.a.should.equal(255);
          });
          it('.lightSkyBlue()', function() {
            var color;
            color = Elyssa.Color.lightSkyBlue();
            color.r.should.equal(135);
            color.g.should.equal(206);
            color.b.should.equal(250);
            return color.a.should.equal(255);
          });
          it('.lightSlateGray()', function() {
            var color;
            color = Elyssa.Color.lightSlateGray();
            color.r.should.equal(119);
            color.g.should.equal(136);
            color.b.should.equal(153);
            return color.a.should.equal(255);
          });
          it('.lightSlateGrey', function() {
            var color;
            color = Elyssa.Color.lightSlateGrey();
            color.r.should.equal(119);
            color.g.should.equal(136);
            color.b.should.equal(153);
            return color.a.should.equal(255);
          });
          it('.lightSteelBlue()', function() {
            var color;
            color = Elyssa.Color.lightSteelBlue();
            color.r.should.equal(176);
            color.g.should.equal(196);
            color.b.should.equal(222);
            return color.a.should.equal(255);
          });
          it('.lightYellow()', function() {
            var color;
            color = Elyssa.Color.lightYellow();
            color.r.should.equal(255);
            color.g.should.equal(255);
            color.b.should.equal(224);
            return color.a.should.equal(255);
          });
          it('.limeGreen()', function() {
            var color;
            color = Elyssa.Color.limeGreen();
            color.r.should.equal(50);
            color.g.should.equal(205);
            color.b.should.equal(50);
            return color.a.should.equal(255);
          });
          it('.linen()', function() {
            var color;
            color = Elyssa.Color.linen();
            color.r.should.equal(250);
            color.g.should.equal(240);
            color.b.should.equal(230);
            return color.a.should.equal(255);
          });
          it('.magenta', function() {
            var color;
            color = Elyssa.Color.magenta();
            color.r.should.equal(255);
            color.g.should.equal(0);
            color.b.should.equal(255);
            return color.a.should.equal(255);
          });
          it('.mediumAquaMarine()', function() {
            var color;
            color = Elyssa.Color.mediumAquaMarine();
            color.r.should.equal(102);
            color.g.should.equal(205);
            color.b.should.equal(170);
            return color.a.should.equal(255);
          });
          it('.mediumBlue()', function() {
            var color;
            color = Elyssa.Color.mediumBlue();
            color.r.should.equal(0);
            color.g.should.equal(0);
            color.b.should.equal(205);
            return color.a.should.equal(255);
          });
          it('.mediumOrchid()', function() {
            var color;
            color = Elyssa.Color.mediumOrchid();
            color.r.should.equal(186);
            color.g.should.equal(85);
            color.b.should.equal(211);
            return color.a.should.equal(255);
          });
          it('.mediumPurple()', function() {
            var color;
            color = Elyssa.Color.mediumPurple();
            color.r.should.equal(157);
            color.g.should.equal(112);
            color.b.should.equal(219);
            return color.a.should.equal(255);
          });
          it('.mediumSeaGreen()', function() {
            var color;
            color = Elyssa.Color.mediumSeaGreen();
            color.r.should.equal(60);
            color.g.should.equal(179);
            color.b.should.equal(113);
            return color.a.should.equal(255);
          });
          it('.mediumSlateBlue()', function() {
            var color;
            color = Elyssa.Color.mediumSlateBlue();
            color.r.should.equal(123);
            color.g.should.equal(104);
            color.b.should.equal(238);
            return color.a.should.equal(255);
          });
          it('.mediumSpringGreen()', function() {
            var color;
            color = Elyssa.Color.mediumSpringGreen();
            color.r.should.equal(0);
            color.g.should.equal(250);
            color.b.should.equal(154);
            return color.a.should.equal(255);
          });
          it('.mediumTurquoise()', function() {
            var color;
            color = Elyssa.Color.mediumTurquoise();
            color.r.should.equal(72);
            color.g.should.equal(209);
            color.b.should.equal(204);
            return color.a.should.equal(255);
          });
          it('.mediumVioletRed()', function() {
            var color;
            color = Elyssa.Color.mediumVioletRed();
            color.r.should.equal(199);
            color.g.should.equal(21);
            color.b.should.equal(133);
            return color.a.should.equal(255);
          });
          it('.midnightBlue()', function() {
            var color;
            color = Elyssa.Color.midnightBlue();
            color.r.should.equal(25);
            color.g.should.equal(25);
            color.b.should.equal(112);
            return color.a.should.equal(255);
          });
          it('.mintCream()', function() {
            var color;
            color = Elyssa.Color.mintCream();
            color.r.should.equal(245);
            color.g.should.equal(255);
            color.b.should.equal(250);
            return color.a.should.equal(255);
          });
          it('.mistyRose()', function() {
            var color;
            color = Elyssa.Color.mistyRose();
            color.r.should.equal(255);
            color.g.should.equal(228);
            color.b.should.equal(225);
            return color.a.should.equal(255);
          });
          it('.moccasin()', function() {
            var color;
            color = Elyssa.Color.moccasin();
            color.r.should.equal(255);
            color.g.should.equal(228);
            color.b.should.equal(181);
            return color.a.should.equal(255);
          });
          it('.navajoWhite()', function() {
            var color;
            color = Elyssa.Color.navajoWhite();
            color.r.should.equal(255);
            color.g.should.equal(222);
            color.b.should.equal(173);
            return color.a.should.equal(255);
          });
          it('.oldLace()', function() {
            var color;
            color = Elyssa.Color.oldLace();
            color.r.should.equal(253);
            color.g.should.equal(245);
            color.b.should.equal(230);
            return color.a.should.equal(255);
          });
          it('.oliveDrab()', function() {
            var color;
            color = Elyssa.Color.oliveDrab();
            color.r.should.equal(107);
            color.g.should.equal(142);
            color.b.should.equal(35);
            return color.a.should.equal(255);
          });
          it('.orange()', function() {
            var color;
            color = Elyssa.Color.orange();
            color.r.should.equal(255);
            color.g.should.equal(165);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.orangeRed()', function() {
            var color;
            color = Elyssa.Color.orangeRed();
            color.r.should.equal(255);
            color.g.should.equal(69);
            color.b.should.equal(0);
            return color.a.should.equal(255);
          });
          it('.orchid()', function() {
            var color;
            color = Elyssa.Color.orchid();
            color.r.should.equal(218);
            color.g.should.equal(112);
            color.b.should.equal(214);
            return color.a.should.equal(255);
          });
          it('.paleGoldenRod()', function() {
            var color;
            color = Elyssa.Color.paleGoldenRod();
            color.r.should.equal(238);
            color.g.should.equal(232);
            color.b.should.equal(170);
            return color.a.should.equal(255);
          });
          it('.paleGreen()', function() {
            var color;
            color = Elyssa.Color.paleGreen();
            color.r.should.equal(152);
            color.g.should.equal(251);
            color.b.should.equal(152);
            return color.a.should.equal(255);
          });
          it('.paleTurquoise()', function() {
            var color;
            color = Elyssa.Color.paleTurquoise();
            color.r.should.equal(175);
            color.g.should.equal(238);
            color.b.should.equal(238);
            return color.a.should.equal(255);
          });
          it('.paleVioletRed()', function() {
            var color;
            color = Elyssa.Color.paleVioletRed();
            color.r.should.equal(219);
            color.g.should.equal(112);
            color.b.should.equal(147);
            return color.a.should.equal(255);
          });
          it('.papayaWhip()', function() {
            var color;
            color = Elyssa.Color.papayaWhip();
            color.r.should.equal(255);
            color.g.should.equal(239);
            color.b.should.equal(213);
            return color.a.should.equal(255);
          });
          it('.peachPuff()', function() {
            var color;
            color = Elyssa.Color.peachPuff();
            color.r.should.equal(255);
            color.g.should.equal(218);
            color.b.should.equal(185);
            return color.a.should.equal(255);
          });
          it('.peru()', function() {
            var color;
            color = Elyssa.Color.peru();
            color.r.should.equal(205);
            color.g.should.equal(133);
            color.b.should.equal(63);
            return color.a.should.equal(255);
          });
          it('.pink()', function() {
            var color;
            color = Elyssa.Color.pink();
            color.r.should.equal(255);
            color.g.should.equal(192);
            color.b.should.equal(203);
            return color.a.should.equal(255);
          });
          it('.plum()', function() {
            var color;
            color = Elyssa.Color.plum();
            color.r.should.equal(221);
            color.g.should.equal(160);
            color.b.should.equal(221);
            return color.a.should.equal(255);
          });
          it('.powderBlue()', function() {
            var color;
            color = Elyssa.Color.powderBlue();
            color.r.should.equal(176);
            color.g.should.equal(224);
            color.b.should.equal(230);
            return color.a.should.equal(255);
          });
          it('.rosyBrown()', function() {
            var color;
            color = Elyssa.Color.rosyBrown();
            color.r.should.equal(188);
            color.g.should.equal(143);
            color.b.should.equal(143);
            return color.a.should.equal(255);
          });
          it('.royalBlue()', function() {
            var color;
            color = Elyssa.Color.royalBlue();
            color.r.should.equal(65);
            color.g.should.equal(105);
            color.b.should.equal(225);
            return color.a.should.equal(255);
          });
          it('.saddleBrown()', function() {
            var color;
            color = Elyssa.Color.saddleBrown();
            color.r.should.equal(139);
            color.g.should.equal(69);
            color.b.should.equal(19);
            return color.a.should.equal(255);
          });
          it('.salmon()', function() {
            var color;
            color = Elyssa.Color.salmon();
            color.r.should.equal(250);
            color.g.should.equal(128);
            color.b.should.equal(114);
            return color.a.should.equal(255);
          });
          it('.sandyBrown()', function() {
            var color;
            color = Elyssa.Color.sandyBrown();
            color.r.should.equal(244);
            color.g.should.equal(164);
            color.b.should.equal(96);
            return color.a.should.equal(255);
          });
          it('.seaGreen()', function() {
            var color;
            color = Elyssa.Color.seaGreen();
            color.r.should.equal(46);
            color.g.should.equal(139);
            color.b.should.equal(87);
            return color.a.should.equal(255);
          });
          it('.seaShell()', function() {
            var color;
            color = Elyssa.Color.seaShell();
            color.r.should.equal(255);
            color.g.should.equal(245);
            color.b.should.equal(238);
            return color.a.should.equal(255);
          });
          it('.sienna()', function() {
            var color;
            color = Elyssa.Color.sienna();
            color.r.should.equal(160);
            color.g.should.equal(82);
            color.b.should.equal(45);
            return color.a.should.equal(255);
          });
          it('.skyBlue()', function() {
            var color;
            color = Elyssa.Color.skyBlue();
            color.r.should.equal(135);
            color.g.should.equal(206);
            color.b.should.equal(235);
            return color.a.should.equal(255);
          });
          it('.slateBlue()', function() {
            var color;
            color = Elyssa.Color.slateBlue();
            color.r.should.equal(106);
            color.g.should.equal(90);
            color.b.should.equal(205);
            return color.a.should.equal(255);
          });
          it('.slateGray()', function() {
            var color;
            color = Elyssa.Color.slateGray();
            color.r.should.equal(112);
            color.g.should.equal(128);
            color.b.should.equal(144);
            return color.a.should.equal(255);
          });
          it('.slateGrey', function() {
            var color;
            color = Elyssa.Color.slateGrey();
            color.r.should.equal(112);
            color.g.should.equal(128);
            color.b.should.equal(144);
            return color.a.should.equal(255);
          });
          it('.snow()', function() {
            var color;
            color = Elyssa.Color.snow();
            color.r.should.equal(255);
            color.g.should.equal(250);
            color.b.should.equal(250);
            return color.a.should.equal(255);
          });
          it('.springGreen()', function() {
            var color;
            color = Elyssa.Color.springGreen();
            color.r.should.equal(0);
            color.g.should.equal(255);
            color.b.should.equal(127);
            return color.a.should.equal(255);
          });
          it('.steelBlue()', function() {
            var color;
            color = Elyssa.Color.steelBlue();
            color.r.should.equal(70);
            color.g.should.equal(130);
            color.b.should.equal(180);
            return color.a.should.equal(255);
          });
          it('.tan()', function() {
            var color;
            color = Elyssa.Color.tan();
            color.r.should.equal(210);
            color.g.should.equal(180);
            color.b.should.equal(140);
            return color.a.should.equal(255);
          });
          it('.thistle()', function() {
            var color;
            color = Elyssa.Color.thistle();
            color.r.should.equal(216);
            color.g.should.equal(191);
            color.b.should.equal(216);
            return color.a.should.equal(255);
          });
          it('.tomato()', function() {
            var color;
            color = Elyssa.Color.tomato();
            color.r.should.equal(255);
            color.g.should.equal(99);
            color.b.should.equal(71);
            return color.a.should.equal(255);
          });
          it('.turquoise()', function() {
            var color;
            color = Elyssa.Color.turquoise();
            color.r.should.equal(64);
            color.g.should.equal(224);
            color.b.should.equal(208);
            return color.a.should.equal(255);
          });
          it('.violet()', function() {
            var color;
            color = Elyssa.Color.violet();
            color.r.should.equal(238);
            color.g.should.equal(130);
            color.b.should.equal(238);
            return color.a.should.equal(255);
          });
          it('.wheat()', function() {
            var color;
            color = Elyssa.Color.wheat();
            color.r.should.equal(245);
            color.g.should.equal(222);
            color.b.should.equal(179);
            return color.a.should.equal(255);
          });
          it('.whiteSmoke()', function() {
            var color;
            color = Elyssa.Color.whiteSmoke();
            color.r.should.equal(245);
            color.g.should.equal(245);
            color.b.should.equal(245);
            return color.a.should.equal(255);
          });
          return it('.yellowGreen()', function() {
            var color;
            color = Elyssa.Color.yellowGreen();
            color.r.should.equal(154);
            color.g.should.equal(205);
            color.b.should.equal(50);
            return color.a.should.equal(255);
          });
        });
      });
    });
  });

}).call(this);
