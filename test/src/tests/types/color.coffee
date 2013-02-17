describe 'Elyssa', ->
  describe 'Types', ->
    describe 'Color', ->
      describe 'constructor', ->
        it 'default value r is 0', -> new Elyssa.Color().r.should.equal(0)
        it 'default value g is 0', -> new Elyssa.Color().g.should.equal(0)
        it 'default value b is 0', -> new Elyssa.Color().b.should.equal(0)
        it 'default value a is 255', -> new Elyssa.Color().a.should.equal(255)
        
        it 'value assignment works as expected', ->
          colorObject =
            r: ~~(Math.random() * 255)
            g: ~~(Math.random() * 255)
            b: ~~(Math.random() * 255)
            a: ~~(Math.random() * 255)
          
          color = new Elyssa.Color colorObject
          
          color.r.should.equal colorObject.r
          color.g.should.equal colorObject.g
          color.b.should.equal colorObject.b
          color.a.should.equal colorObject.a
          
        it 'constructor with string works as expected', ->
          color = new Elyssa.Color 'blue'
          
          color.r.should.equal 0
          color.g.should.equal 0
          color.b.should.equal 255
          color.a.should.equal 255
          
        it 'constructor with false string value returns default color', ->
          color = new Elyssa.Color 'traaaaaainzzz'
          
          color.r.should.equal 0
          color.g.should.equal 0
          color.b.should.equal 0
          color.a.should.equal 255
        
      describe '#toHex()', ->
        it 'black color is #000', -> new Elyssa.Color({r: 0, g: 0, b: 0}).toHex().should.equal('#000')
        it 'white color is #fff', -> new Elyssa.Color({r: 255, g: 255, b: 255}).toHex().should.equal('#fff')

      describe '#toString()', ->
        it 'black color is rgb(0, 0, 0)', -> new Elyssa.Color({r: 0, g: 0, b: 0}).toString().should.equal('rgb(0, 0, 0)')

      describe '#lighten()', ->
        it 'lighten() should not change anything', ->
          color = new Elyssa.Color().lighten()
          
          color.r.should.equal(0)
          color.g.should.equal(0)
          color.b.should.equal(0)
        it 'lighten(0) should not change anything', ->
          color = new Elyssa.Color().lighten(0)
          
          color.r.should.equal(0)
          color.g.should.equal(0)
          color.b.should.equal(0)
        it 'lighten(1.0) converts black color to white color', ->
          whiteColor = new Elyssa.Color().lighten(1.0)
          
          whiteColor.r.should.equal(255)
          whiteColor.g.should.equal(255)
          whiteColor.b.should.equal(255)
        
      describe '#darken()', ->
        it 'darken() should not change anything', ->
          color = new Elyssa.Color({r: 255, g: 255, b: 255}).darken()
          
          color.r.should.equal(255)
          color.g.should.equal(255)
          color.b.should.equal(255)
        it 'darken(0) should not change anything', ->
          color = new Elyssa.Color({r: 255, g: 255, b: 255}).darken(0)
          
          color.r.should.equal(255)
          color.g.should.equal(255)
          color.b.should.equal(255)
        it 'darken(1.0) converts white color to black color', ->
          blackColor = new Elyssa.Color({r: 255, g: 255, b: 255}).darken(1.0)
          
          blackColor.r.should.equal(0)
          blackColor.g.should.equal(0)
          blackColor.b.should.equal(0)

      describe '#fadeIn()', ->
        it 'fadeIn() should not change anything', -> new Elyssa.Color({a: 0}).fadeIn().a.should.equal(0)
        it 'fadeIn(0) should not change anything', -> new Elyssa.Color({a: 0}).fadeIn(0).a.should.equal(0)
        
        it 'fadeIn(0.5) turns alpha value 0 into 128', -> new Elyssa.Color({a: 0}).fadeIn(0.5).a.should.equal(128)
        it 'fadeIn(0.5) turns alpha value 128 into 255', -> new Elyssa.Color({a: 128}).fadeIn(0.5).a.should.equal(255)
        
        it 'fadeIn(1.0) turns alpha value 0 into 255', -> new Elyssa.Color({a: 0}).fadeIn(1.0).a.should.equal(255)
        it 'fadeIn(5.0) should act the same as fadeIn(1.0)', -> new Elyssa.Color({a: 0}).fadeIn(5.0).a.should.equal(255)
        
      describe '#fadeOut()', ->
        it 'fadeOut() should not change anything', -> new Elyssa.Color().fadeOut().a.should.equal(255)
        it 'fadeOut(0) should not change anything', -> new Elyssa.Color().fadeOut(0).a.should.equal(255)
        
        it 'fadeOut(0.5) turns alpha value 128 into 0', -> new Elyssa.Color({a: 128}).fadeOut(0.5).a.should.equal(0)
        it 'fadeOut(0.5) turns alpha value 255 into 127', -> new Elyssa.Color().fadeOut(0.5).a.should.equal(127)
        
        it 'fadeOut(1.0) turns alpha value 255 into 0', -> new Elyssa.Color().fadeOut(1.0).a.should.equal(0)
        it 'fadeOut(5.0) should act the same as fadeOut(1.0)', -> new Elyssa.Color().fadeOut(5.0).a.should.equal(0)
      
      describe 'Static color functions', ->
        it '.aqua()', ->
          color = Elyssa.Color.aqua()
          
          color.r.should.equal 0
          color.g.should.equal 255
          color.b.should.equal 255
          color.a.should.equal 255
  
        it '.black()', ->
          color = Elyssa.Color.black()
          
          color.r.should.equal 0
          color.g.should.equal 0
          color.b.should.equal 0
          color.a.should.equal 255
                         
        it '.blue()', ->
          color = Elyssa.Color.blue()
          
          color.r.should.equal 0
          color.g.should.equal 0
          color.b.should.equal 255
          color.a.should.equal 255
          
        it '.fuchsia()', ->
          color = Elyssa.Color.fuchsia()
          
          color.r.should.equal 255
          color.g.should.equal 0
          color.b.should.equal 255
          color.a.should.equal 255
        
        it '.gray()', ->
          color = Elyssa.Color.gray()
          
          color.r.should.equal 128
          color.g.should.equal 128
          color.b.should.equal 128
          color.a.should.equal 255
          
        it '.grey()', ->
          color = Elyssa.Color.grey()
          
          color.r.should.equal 128
          color.g.should.equal 128
          color.b.should.equal 128
          color.a.should.equal 255
          
        it '.green()', ->
          color = Elyssa.Color.green()
          
          color.r.should.equal 0
          color.g.should.equal 128
          color.b.should.equal 0
          color.a.should.equal 255
          
        it '.lime()', ->
          color = Elyssa.Color.lime()
          
          color.r.should.equal 0
          color.g.should.equal 255
          color.b.should.equal 0
          color.a.should.equal 255
          
        it '.maroon()', ->
          color = Elyssa.Color.maroon()
          
          color.r.should.equal 128
          color.g.should.equal 0
          color.b.should.equal 0
          color.a.should.equal 255
          
        it '.navy()', ->
          color = Elyssa.Color.navy()
          
          color.r.should.equal 0
          color.g.should.equal 0
          color.b.should.equal 128
          color.a.should.equal 255
          
        it '.olive()', ->
          color = Elyssa.Color.olive()
          
          color.r.should.equal 128
          color.g.should.equal 128
          color.b.should.equal 0
          color.a.should.equal 255
          
        it '.purple()', ->
          color = Elyssa.Color.purple()
          
          color.r.should.equal 128
          color.g.should.equal 0
          color.b.should.equal 128
          color.a.should.equal 255
          
        it '.gray()', ->
          color = Elyssa.Color.red()
          
          color.r.should.equal 255
          color.g.should.equal 0
          color.b.should.equal 0
          color.a.should.equal 255
          
        it '.silver()', ->
          color = Elyssa.Color.silver()
          
          color.r.should.equal 192
          color.g.should.equal 192
          color.b.should.equal 192
          color.a.should.equal 255
          
        it '.teal()', ->
          color = Elyssa.Color.teal()
          
          color.r.should.equal 0
          color.g.should.equal 128
          color.b.should.equal 128
          color.a.should.equal 255
          
        it '.white()', ->
          color = Elyssa.Color.white()
          
          color.r.should.equal 255
          color.g.should.equal 255
          color.b.should.equal 255
          color.a.should.equal 255
          
        it '.yellow()', ->
          color = Elyssa.Color.yellow()
          
          color.r.should.equal 255
          color.g.should.equal 255
          color.b.should.equal 0
          color.a.should.equal 255
          
        it '.transparent()', ->
          color = Elyssa.Color.transparent()
          
          color.r.should.equal 0
          color.g.should.equal 0
          color.b.should.equal 0
          color.a.should.equal 0

        it '.aliceBlue()', -> 
          color = Elyssa.Color.aliceBlue()
        
          color.r.should.equal 240 
          color.g.should.equal 248 
          color.b.should.equal 255 
          color.a.should.equal 255   
        
        it '.antiqueWhite()', -> 
          color = Elyssa.Color.antiqueWhite() 
        
          color.r.should.equal 250 
          color.g.should.equal 235 
          color.b.should.equal 215 
          color.a.should.equal 255
        
        it '.azure()', -> 
          color = Elyssa.Color.azure()
        
          color.r.should.equal 240 
          color.g.should.equal 255 
          color.b.should.equal 255 
          color.a.should.equal 255               
        
        it '.beige()', -> 
          color = Elyssa.Color.beige()
        
          color.r.should.equal 245 
          color.g.should.equal 245 
          color.b.should.equal 220 
          color.a.should.equal 255               
        
        it '.bisque()', -> 
          color = Elyssa.Color.bisque()
        
          color.r.should.equal 255 
          color.g.should.equal 228 
          color.b.should.equal 196 
          color.a.should.equal 255              
        
        it '.blanchedAlmond()', -> 
          color = Elyssa.Color.blanchedAlmond()
        
          color.r.should.equal 255 
          color.g.should.equal 235 
          color.b.should.equal 205 
          color.a.should.equal 255      
        
        it '.blueViolet()', -> 
          color = Elyssa.Color.blueViolet()
        
          color.r.should.equal 138 
          color.g.should.equal 43 
          color.b.should.equal 226 
          color.a.should.equal 255           
        
        it '.brown()', -> 
          color = Elyssa.Color.brown()
        
          color.r.should.equal 165 
          color.g.should.equal 42 
          color.b.should.equal 42 
          color.a.should.equal 255                 
        
        it '.burlyWood()', -> 
          color = Elyssa.Color.burlyWood()
        
          color.r.should.equal 222 
          color.g.should.equal 184 
          color.b.should.equal 135 
          color.a.should.equal 255           
        
        it '.cadetBlue()', -> 
          color = Elyssa.Color.cadetBlue()
        
          color.r.should.equal 95 
          color.g.should.equal 158 
          color.b.should.equal 160 
          color.a.should.equal 255            
        
        it '.chartreuse()', -> 
          color = Elyssa.Color.chartreuse()
        
          color.r.should.equal 127 
          color.g.should.equal 255 
          color.b.should.equal 0 
          color.a.should.equal 255            
        
        it '.chocolate()', -> 
          color = Elyssa.Color.chocolate()
        
          color.r.should.equal 210 
          color.g.should.equal 105 
          color.b.should.equal 30 
          color.a.should.equal 255            
        
        it '.coral()', -> 
          color = Elyssa.Color.coral()
        
          color.r.should.equal 255 
          color.g.should.equal 127 
          color.b.should.equal 80 
          color.a.should.equal 255                
        
        it '.cornflowerBlue()', -> 
          color = Elyssa.Color.cornflowerBlue()
        
          color.r.should.equal 100 
          color.g.should.equal 149 
          color.b.should.equal 237 
          color.a.should.equal 255      
        
        it '.cornsilk()', -> 
          color = Elyssa.Color.cornsilk()
        
          color.r.should.equal 255 
          color.g.should.equal 248 
          color.b.should.equal 220 
          color.a.should.equal 255            
        
        it '.crimson()', -> 
          color = Elyssa.Color.crimson()
        
          color.r.should.equal 220 
          color.g.should.equal 20 
          color.b.should.equal 60 
          color.a.should.equal 255               
        
        it '.cyan()', -> 
          color = Elyssa.Color.cyan()
        
          color.r.should.equal 0 
          color.g.should.equal 255 
          color.b.should.equal 255 
          color.a.should.equal 255                  
        
        it '.darkBlue()', -> 
          color = Elyssa.Color.darkBlue()
        
          color.r.should.equal 0 
          color.g.should.equal 0 
          color.b.should.equal 139 
          color.a.should.equal 255                
        
        it '.darkCyan()', -> 
          color = Elyssa.Color.darkCyan()
        
          color.r.should.equal 0 
          color.g.should.equal 139 
          color.b.should.equal 139 
          color.a.should.equal 255              
        
        it '.darkGoldenRod()', -> 
          color = Elyssa.Color.darkGoldenRod()
        
          color.r.should.equal 184 
          color.g.should.equal 134 
          color.b.should.equal 11 
          color.a.should.equal 255        
        
        it '.darkGray()', -> 
          color = Elyssa.Color.darkGray()
        
          color.r.should.equal 169 
          color.g.should.equal 169 
          color.b.should.equal 169 
          color.a.should.equal 255            
        
        it '.darkGrey()', -> 
          color = Elyssa.Color.darkGrey()
           
          color.r.should.equal 169 
          color.g.should.equal 169 
          color.b.should.equal 169 
          color.a.should.equal 255                                            
        
        it '.darkGreen()', -> 
          color = Elyssa.Color.darkGreen()
        
          color.r.should.equal 0 
          color.g.should.equal 100 
          color.b.should.equal 0 
          color.a.should.equal 255               
        
        it '.darkKhaki()', -> 
          color = Elyssa.Color.darkKhaki()
        
          color.r.should.equal 189 
          color.g.should.equal 183 
          color.b.should.equal 107 
          color.a.should.equal 255           
        
        it '.darkMagenta()', -> 
          color = Elyssa.Color.darkMagenta()
        
          color.r.should.equal 139 
          color.g.should.equal 0 
          color.b.should.equal 139 
          color.a.should.equal 255               
        
        it '.darkOliveGreen()', -> 
          color = Elyssa.Color.darkOliveGreen()
        
          color.r.should.equal 85 
          color.g.should.equal 107 
          color.b.should.equal 47 
          color.a.should.equal 255            
        
        it '.darkOrange()', -> 
          color = Elyssa.Color.darkOrange()
        
          color.r.should.equal 255 
          color.g.should.equal 140 
          color.b.should.equal 0 
          color.a.should.equal 255                
        
        it '.darkOrchid()', -> 
          color = Elyssa.Color.darkOrchid()
        
          color.r.should.equal 153 
          color.g.should.equal 50 
          color.b.should.equal 204 
          color.a.should.equal 255               
        
        it '.darkRed()', -> 
          color = Elyssa.Color.darkRed()
        
          color.r.should.equal 139 
          color.g.should.equal 0 
          color.b.should.equal 0 
          color.a.should.equal 255                     
        
        it '.darkSalmon()', -> 
          color = Elyssa.Color.darkSalmon()
        
          color.r.should.equal 233 
          color.g.should.equal 150 
          color.b.should.equal 122 
          color.a.should.equal 255              
        
        it '.darkSeaGreen()', -> 
          color = Elyssa.Color.darkSeaGreen()
        
          color.r.should.equal 143 
          color.g.should.equal 188 
          color.b.should.equal 143 
          color.a.should.equal 255            
        
        it '.darkSlateBlue()', -> 
          color = Elyssa.Color.darkSlateBlue()
        
          color.r.should.equal 72 
          color.g.should.equal 61 
          color.b.should.equal 139 
          color.a.should.equal 255             
        
        it '.darkSlateGray()', -> 
          color = Elyssa.Color.darkSlateGray()
        
          color.r.should.equal 47 
          color.g.should.equal 79 
          color.b.should.equal 79 
          color.a.should.equal 255
        
        it '.darkSlateGrey', -> 
          color = Elyssa.Color.darkSlateGrey()
        
          color.r.should.equal 47 
          color.g.should.equal 79 
          color.b.should.equal 79 
          color.a.should.equal 255                                      
        
        it '.darkTurquoise()', -> 
          color = Elyssa.Color.darkTurquoise()
        
          color.r.should.equal 0 
          color.g.should.equal 206 
          color.b.should.equal 209 
          color.a.should.equal 255             
        
        it '.darkViolet()', -> 
          color = Elyssa.Color.darkViolet()
        
          color.r.should.equal 148 
          color.g.should.equal 0 
          color.b.should.equal 211 
          color.a.should.equal 255                
        
        it '.deepPink()', -> 
          color = Elyssa.Color.deepPink()
        
          color.r.should.equal 255 
          color.g.should.equal 20 
          color.b.should.equal 147 
          color.a.should.equal 255                 
        
        it '.deepSkyBlue()', -> 
          color = Elyssa.Color.deepSkyBlue()
        
          color.r.should.equal 0 
          color.g.should.equal 191 
          color.b.should.equal 255 
          color.a.should.equal 255               
        
        it '.dimGray()', -> 
          color = Elyssa.Color.dimGray() 
        
          color.r.should.equal 105 
          color.g.should.equal 105 
          color.b.should.equal 105 
          color.a.should.equal 255                 
        
        it '.dimGrey()', -> 
          color = Elyssa.Color.dimGrey() 
        
          color.r.should.equal 105 
          color.g.should.equal 105 
          color.b.should.equal 105 
          color.a.should.equal 255                                  
        
        it '.dodgerBlue()', -> 
          color = Elyssa.Color.dodgerBlue()
        
          color.r.should.equal 30 
          color.g.should.equal 144 
          color.b.should.equal 255 
          color.a.should.equal 255               
        
        it '.fireBrick()', -> 
          color = Elyssa.Color.fireBrick()
        
          color.r.should.equal 178 
          color.g.should.equal 34 
          color.b.should.equal 34 
          color.a.should.equal 255                 
        
        it '.floralWhite()', -> 
          color = Elyssa.Color.floralWhite()
        
          color.r.should.equal 255 
          color.g.should.equal 250 
          color.b.should.equal 240 
          color.a.should.equal 255             
        
        it '.forestGreen()', -> 
          color = Elyssa.Color.forestGreen()
        
          color.r.should.equal 34 
          color.g.should.equal 139 
          color.b.should.equal 34 
          color.a.should.equal 255               
        
        it '.gainsboro()', -> 
          color = Elyssa.Color.gainsboro()
        
          color.r.should.equal 220 
          color.g.should.equal 220 
          color.b.should.equal 220 
          color.a.should.equal 255               
        
        it '.ghostWhite()', -> 
          color = Elyssa.Color.ghostWhite()
        
          color.r.should.equal 248 
          color.g.should.equal 248 
          color.b.should.equal 255 
          color.a.should.equal 255              
        
        it '.gold()', -> 
          color = Elyssa.Color.gold()
        
          color.r.should.equal 255 
          color.g.should.equal 215 
          color.b.should.equal 0 
          color.a.should.equal 255                      
        
        it '.goldenRod()', -> 
          color = Elyssa.Color.goldenRod()
        
          color.r.should.equal 218 
          color.g.should.equal 165 
          color.b.should.equal 32 
          color.a.should.equal 255                
        
        it '.greenYellow()', -> 
          color = Elyssa.Color.greenYellow()
        
          color.r.should.equal 173 
          color.g.should.equal 255 
          color.b.should.equal 47 
          color.a.should.equal 255              
        
        it '.honeyDew()', -> 
          color = Elyssa.Color.honeyDew()
        
          color.r.should.equal 240 
          color.g.should.equal 255 
          color.b.should.equal 240 
          color.a.should.equal 255                
        
        it '.hotPink()', -> 
          color = Elyssa.Color.hotPink()
        
          color.r.should.equal 255 
          color.g.should.equal 105 
          color.b.should.equal 180 
          color.a.should.equal 255                 
        
        it '.indianRed()', -> 
          color = Elyssa.Color.indianRed()
        
          color.r.should.equal 205 
          color.g.should.equal 92 
          color.b.should.equal 92 
          color.a.should.equal 255                 
        
        it '.indigo()', -> 
          color = Elyssa.Color.indigo()
        
          color.r.should.equal 75 
          color.g.should.equal 0 
          color.b.should.equal 130 
          color.a.should.equal 255                     
        
        it '.ivory()', -> 
          color = Elyssa.Color.ivory()
        
          color.r.should.equal 255 
          color.g.should.equal 255 
          color.b.should.equal 240 
          color.a.should.equal 255                   
        
        it '.khaki()', -> 
          color = Elyssa.Color.khaki()
        
          color.r.should.equal 240 
          color.g.should.equal 230 
          color.b.should.equal 140 
          color.a.should.equal 255                   
        
        it '.lavender()', -> 
          color = Elyssa.Color.lavender()
        
          color.r.should.equal 230 
          color.g.should.equal 230 
          color.b.should.equal 250 
          color.a.should.equal 255                
        
        it '.lavenderBlush()', -> 
          color = Elyssa.Color.lavenderBlush()
        
          color.r.should.equal 255 
          color.g.should.equal 240 
          color.b.should.equal 245 
          color.a.should.equal 255           
        
        it '.lawnGreen()', -> 
          color = Elyssa.Color.lawnGreen()
        
          color.r.should.equal 124 
          color.g.should.equal 252 
          color.b.should.equal 0 
          color.a.should.equal 255                 
        
        it '.lemonChiffon()', -> 
          color = Elyssa.Color.lemonChiffon()
        
          color.r.should.equal 255 
          color.g.should.equal 250 
          color.b.should.equal 205 
          color.a.should.equal 255            
        
        it '.lightBlue()', -> 
          color = Elyssa.Color.lightBlue()
        
          color.r.should.equal 173 
          color.g.should.equal 216 
          color.b.should.equal 230 
          color.a.should.equal 255               
        
        it '.lightCoral()', -> 
          color = Elyssa.Color.lightCoral()
        
          color.r.should.equal 240 
          color.g.should.equal 128 
          color.b.should.equal 128 
          color.a.should.equal 255              
        
        it '.lightCyan()', -> 
          color = Elyssa.Color.lightCyan()
        
          color.r.should.equal 224 
          color.g.should.equal 255 
          color.b.should.equal 255 
          color.a.should.equal 255               
        
        it '.lightGoldenRodYellow()', -> 
          color = Elyssa.Color.lightGoldenRodYellow()
        
          color.r.should.equal 250 
          color.g.should.equal 250 
          color.b.should.equal 210 
          color.a.should.equal 255    
        
        it '.lightGray()', -> 
          color = Elyssa.Color.lightGray()
        
          color.r.should.equal 211 
          color.g.should.equal 211 
          color.b.should.equal 211 
          color.a.should.equal 255               
        
        it '.lightGrey', -> 
          color = Elyssa.Color.lightGrey()
           
          color.r.should.equal 211 
          color.g.should.equal 211 
          color.b.should.equal 211 
          color.a.should.equal 255                                                   
        
        it '.lightGreen()', -> 
          color = Elyssa.Color.lightGreen()
        
          color.r.should.equal 144 
          color.g.should.equal 238 
          color.b.should.equal 144 
          color.a.should.equal 255              
        
        it '.lightPink()', -> 
          color = Elyssa.Color.lightPink()
        
          color.r.should.equal 255 
          color.g.should.equal 182 
          color.b.should.equal 193 
          color.a.should.equal 255               
        
        it '.lightSalmon()', -> 
          color = Elyssa.Color.lightSalmon()
        
          color.r.should.equal 255 
          color.g.should.equal 160 
          color.b.should.equal 122 
          color.a.should.equal 255             
        
        it '.lightSeaGreen()', -> 
          color = Elyssa.Color.lightSeaGreen()
        
          color.r.should.equal 32 
          color.g.should.equal 178 
          color.b.should.equal 170 
          color.a.should.equal 255            
        
        it '.lightSkyBlue()', -> 
          color = Elyssa.Color.lightSkyBlue()
        
          color.r.should.equal 135 
          color.g.should.equal 206 
          color.b.should.equal 250 
          color.a.should.equal 255            
        
        it '.lightSlateGray()', -> 
          color = Elyssa.Color.lightSlateGray()
        
          color.r.should.equal 119 
          color.g.should.equal 136 
          color.b.should.equal 153 
          color.a.should.equal 255          
        
        it '.lightSlateGrey', -> 
          color = Elyssa.Color.lightSlateGrey()
           
          color.r.should.equal 119 
          color.g.should.equal 136 
          color.b.should.equal 153 
          color.a.should.equal 255                                           
        
        it '.lightSteelBlue()', -> 
          color = Elyssa.Color.lightSteelBlue()
        
          color.r.should.equal 176 
          color.g.should.equal 196 
          color.b.should.equal 222 
          color.a.should.equal 255         
        
        it '.lightYellow()', -> 
          color = Elyssa.Color.lightYellow()
        
          color.r.should.equal 255 
          color.g.should.equal 255 
          color.b.should.equal 224 
          color.a.should.equal 255             
        
        it '.limeGreen()', -> 
          color = Elyssa.Color.limeGreen()
        
          color.r.should.equal 50 
          color.g.should.equal 205 
          color.b.should.equal 50 
          color.a.should.equal 255                 
        
        it '.linen()', -> 
          color = Elyssa.Color.linen()
        
          color.r.should.equal 250 
          color.g.should.equal 240 
          color.b.should.equal 230 
          color.a.should.equal 255                   
        
        it '.magenta', ->
          color = Elyssa.Color.magenta()
          
          color.r.should.equal 255
          color.g.should.equal 0
          color.b.should.equal 255
          color.a.should.equal 255                                                  
        
        it '.mediumAquaMarine()', -> 
          color = Elyssa.Color.mediumAquaMarine()
        
          color.r.should.equal 102 
          color.g.should.equal 205 
          color.b.should.equal 170 
          color.a.should.equal 255        
        
        it '.mediumBlue()', -> 
          color = Elyssa.Color.mediumBlue()
        
          color.r.should.equal 0 
          color.g.should.equal 0 
          color.b.should.equal 205 
          color.a.should.equal 255                  
        
        it '.mediumOrchid()', -> 
          color = Elyssa.Color.mediumOrchid()
        
          color.r.should.equal 186 
          color.g.should.equal 85 
          color.b.should.equal 211 
          color.a.should.equal 255             
        
        it '.mediumPurple()', -> 
          color = Elyssa.Color.mediumPurple()
        
          color.r.should.equal 157 
          color.g.should.equal 112 
          color.b.should.equal 219 
          color.a.should.equal 255            
        
        it '.mediumSeaGreen()', -> 
          color = Elyssa.Color.mediumSeaGreen()
        
          color.r.should.equal 60 
          color.g.should.equal 179 
          color.b.should.equal 113 
          color.a.should.equal 255           
        
        it '.mediumSlateBlue()', -> 
          color = Elyssa.Color.mediumSlateBlue()
        
          color.r.should.equal 123 
          color.g.should.equal 104 
          color.b.should.equal 238 
          color.a.should.equal 255         
        
        it '.mediumSpringGreen()', -> 
          color = Elyssa.Color.mediumSpringGreen()
        
          color.r.should.equal 0 
          color.g.should.equal 250 
          color.b.should.equal 154 
          color.a.should.equal 255         
        
        it '.mediumTurquoise()', -> 
          color = Elyssa.Color.mediumTurquoise()
        
          color.r.should.equal 72 
          color.g.should.equal 209 
          color.b.should.equal 204 
          color.a.should.equal 255          
        
        it '.mediumVioletRed()', -> 
          color = Elyssa.Color.mediumVioletRed()
        
          color.r.should.equal 199 
          color.g.should.equal 21 
          color.b.should.equal 133 
          color.a.should.equal 255          
        
        it '.midnightBlue()', -> 
          color = Elyssa.Color.midnightBlue()
        
          color.r.should.equal 25 
          color.g.should.equal 25 
          color.b.should.equal 112 
          color.a.should.equal 255              
        
        it '.mintCream()', -> 
          color = Elyssa.Color.mintCream()
        
          color.r.should.equal 245 
          color.g.should.equal 255 
          color.b.should.equal 250 
          color.a.should.equal 255               
        
        it '.mistyRose()', -> 
          color = Elyssa.Color.mistyRose()
        
          color.r.should.equal 255 
          color.g.should.equal 228 
          color.b.should.equal 225 
          color.a.should.equal 255               
        
        it '.moccasin()', -> 
          color = Elyssa.Color.moccasin()
        
          color.r.should.equal 255 
          color.g.should.equal 228 
          color.b.should.equal 181 
          color.a.should.equal 255                
        
        it '.navajoWhite()', -> 
          color = Elyssa.Color.navajoWhite()
        
          color.r.should.equal 255 
          color.g.should.equal 222 
          color.b.should.equal 173 
          color.a.should.equal 255             
        
        it '.oldLace()', -> 
          color = Elyssa.Color.oldLace()
        
          color.r.should.equal 253 
          color.g.should.equal 245 
          color.b.should.equal 230 
          color.a.should.equal 255                 
        
        it '.oliveDrab()', -> 
          color = Elyssa.Color.oliveDrab()
        
          color.r.should.equal 107 
          color.g.should.equal 142 
          color.b.should.equal 35 
          color.a.should.equal 255                
        
        it '.orange()', -> 
          color = Elyssa.Color.orange()
        
          color.r.should.equal 255 
          color.g.should.equal 165 
          color.b.should.equal 0 
          color.a.should.equal 255                    
        
        it '.orangeRed()', -> 
          color = Elyssa.Color.orangeRed()
        
          color.r.should.equal 255 
          color.g.should.equal 69 
          color.b.should.equal 0 
          color.a.should.equal 255                  
        
        it '.orchid()', -> 
          color = Elyssa.Color.orchid()
        
          color.r.should.equal 218 
          color.g.should.equal 112 
          color.b.should.equal 214 
          color.a.should.equal 255                  
        
        it '.paleGoldenRod()', -> 
          color = Elyssa.Color.paleGoldenRod()
        
          color.r.should.equal 238 
          color.g.should.equal 232 
          color.b.should.equal 170 
          color.a.should.equal 255           
        
        it '.paleGreen()', -> 
          color = Elyssa.Color.paleGreen()
        
          color.r.should.equal 152 
          color.g.should.equal 251 
          color.b.should.equal 152 
          color.a.should.equal 255               
        
        it '.paleTurquoise()', -> 
          color = Elyssa.Color.paleTurquoise()
        
          color.r.should.equal 175 
          color.g.should.equal 238 
          color.b.should.equal 238 
          color.a.should.equal 255           
        
        it '.paleVioletRed()', -> 
          color = Elyssa.Color.paleVioletRed()
        
          color.r.should.equal 219 
          color.g.should.equal 112 
          color.b.should.equal 147 
          color.a.should.equal 255       
        
        it '.papayaWhip()', -> 
          color = Elyssa.Color.papayaWhip()
        
          color.r.should.equal 255 
          color.g.should.equal 239 
          color.b.should.equal 213 
          color.a.should.equal 255              
        
        it '.peachPuff()', -> 
          color = Elyssa.Color.peachPuff()
        
          color.r.should.equal 255 
          color.g.should.equal 218 
          color.b.should.equal 185 
          color.a.should.equal 255               
        
        it '.peru()', -> 
          color = Elyssa.Color.peru()
        
          color.r.should.equal 205 
          color.g.should.equal 133 
          color.b.should.equal 63 
          color.a.should.equal 255                     
        
        it '.pink()', -> 
          color = Elyssa.Color.pink()
        
          color.r.should.equal 255 
          color.g.should.equal 192 
          color.b.should.equal 203 
          color.a.should.equal 255                    
        
        it '.plum()', -> 
          color = Elyssa.Color.plum()
        
          color.r.should.equal 221 
          color.g.should.equal 160 
          color.b.should.equal 221 
          color.a.should.equal 255                    
        
        it '.powderBlue()', -> 
          color = Elyssa.Color.powderBlue()
        
          color.r.should.equal 176 
          color.g.should.equal 224 
          color.b.should.equal 230 
          color.a.should.equal 255              
        
        it '.rosyBrown()', -> 
          color = Elyssa.Color.rosyBrown()
        
          color.r.should.equal 188 
          color.g.should.equal 143 
          color.b.should.equal 143 
          color.a.should.equal 255               
        
        it '.royalBlue()', -> 
          color = Elyssa.Color.royalBlue()
        
          color.r.should.equal 65 
          color.g.should.equal 105 
          color.b.should.equal 225 
          color.a.should.equal 255                
        
        it '.saddleBrown()', -> 
          color = Elyssa.Color.saddleBrown()
        
          color.r.should.equal 139 
          color.g.should.equal 69 
          color.b.should.equal 19 
          color.a.should.equal 255               
        
        it '.salmon()', -> 
          color = Elyssa.Color.salmon()
        
          color.r.should.equal 250 
          color.g.should.equal 128 
          color.b.should.equal 114 
          color.a.should.equal 255                  
        
        it '.sandyBrown()', -> 
          color = Elyssa.Color.sandyBrown()
        
          color.r.should.equal 244 
          color.g.should.equal 164 
          color.b.should.equal 96 
          color.a.should.equal 255               
        
        it '.seaGreen()', -> 
          color = Elyssa.Color.seaGreen()
        
          color.r.should.equal 46 
          color.g.should.equal 139 
          color.b.should.equal 87 
          color.a.should.equal 255                  
        
        it '.seaShell()', -> 
          color = Elyssa.Color.seaShell()
        
          color.r.should.equal 255 
          color.g.should.equal 245 
          color.b.should.equal 238 
          color.a.should.equal 255                
        
        it '.sienna()', -> 
          color = Elyssa.Color.sienna()
        
          color.r.should.equal 160 
          color.g.should.equal 82 
          color.b.should.equal 45 
          color.a.should.equal 255                    
        
        it '.skyBlue()', -> 
          color = Elyssa.Color.skyBlue()
        
          color.r.should.equal 135 
          color.g.should.equal 206 
          color.b.should.equal 235 
          color.a.should.equal 255                 
        
        it '.slateBlue()', -> 
          color = Elyssa.Color.slateBlue()
        
          color.r.should.equal 106 
          color.g.should.equal 90 
          color.b.should.equal 205 
          color.a.should.equal 255                
        
        it '.slateGray()', -> 
          color = Elyssa.Color.slateGray()
        
          color.r.should.equal 112 
          color.g.should.equal 128 
          color.b.should.equal 144 
          color.a.should.equal 255               
        
        it '.slateGrey', -> 
          color = Elyssa.Color.slateGrey()
          
          color.r.should.equal 112 
          color.g.should.equal 128 
          color.b.should.equal 144 
          color.a.should.equal 255                                                     
        
        it '.snow()', -> 
          color = Elyssa.Color.snow()
        
          color.r.should.equal 255 
          color.g.should.equal 250 
          color.b.should.equal 250 
          color.a.should.equal 255                    
        
        it '.springGreen()', -> 
          color = Elyssa.Color.springGreen()
        
          color.r.should.equal 0 
          color.g.should.equal 255 
          color.b.should.equal 127 
          color.a.should.equal 255               
        
        it '.steelBlue()', -> 
          color = Elyssa.Color.steelBlue()
        
          color.r.should.equal 70 
          color.g.should.equal 130 
          color.b.should.equal 180 
          color.a.should.equal 255                
        
        it '.tan()', -> 
          color = Elyssa.Color.tan()
        
          color.r.should.equal 210 
          color.g.should.equal 180 
          color.b.should.equal 140 
          color.a.should.equal 255                     
        
        it '.thistle()', -> 
          color = Elyssa.Color.thistle()
        
          color.r.should.equal 216 
          color.g.should.equal 191 
          color.b.should.equal 216 
          color.a.should.equal 255                 
        
        it '.tomato()', -> 
          color = Elyssa.Color.tomato()
        
          color.r.should.equal 255 
          color.g.should.equal 99 
          color.b.should.equal 71 
          color.a.should.equal 255                    
        
        it '.turquoise()', -> 
          color = Elyssa.Color.turquoise()
        
          color.r.should.equal 64 
          color.g.should.equal 224 
          color.b.should.equal 208 
          color.a.should.equal 255                
        
        it '.violet()', -> 
          color = Elyssa.Color.violet()
        
          color.r.should.equal 238 
          color.g.should.equal 130 
          color.b.should.equal 238 
          color.a.should.equal 255                  
        
        it '.wheat()', -> 
          color = Elyssa.Color.wheat()
        
          color.r.should.equal 245 
          color.g.should.equal 222 
          color.b.should.equal 179 
          color.a.should.equal 255                   
        
        it '.whiteSmoke()', -> 
          color = Elyssa.Color.whiteSmoke()
        
          color.r.should.equal 245 
          color.g.should.equal 245 
          color.b.should.equal 245 
          color.a.should.equal 255              
        
        it '.yellowGreen()', -> 
          color = Elyssa.Color.yellowGreen() 
          color.r.should.equal 154 
          color.g.should.equal 205 
          color.b.should.equal 50 
          color.a.should.equal 255        
