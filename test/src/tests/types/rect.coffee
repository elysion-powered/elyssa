describe 'Elyssa', ->
  describe 'Types', ->
    describe 'Rect', ->
      rect = new Elyssa.Rect()
      
      describe 'constructor', ->
        it 'default value x is 0', -> rect.x.should.equal(0)
        it 'default value y is 0', -> rect.y.should.equal(0)
        it 'default value w is 0', -> rect.w.should.equal(0)
        it 'default value h is 0', -> rect.h.should.equal(0)
      
      describe '#center()', ->
        it 'x value should return a number', -> rect.center().x.should.be.a('number')
        it 'y value should return a number', -> rect.center().y.should.be.a('number')
        it 'x value should be 0 if x, y, w and h are 0', -> rect.center().x.should.equal(0)
        it 'y value should be 0 if x, y, w and h are 0', -> rect.center().y.should.equal(0)