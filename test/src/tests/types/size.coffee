describe 'Elyssa', ->
  describe 'Types', ->
    describe 'Size', ->
      size = new Elyssa.Size()
      
      describe 'constructor', ->
        it 'default value w is 0', -> size.w.should.equal(0)
        it 'default value h is 0', -> size.h.should.equal(0)
        
      describe '#center', ->
        it 'x value should return a number', -> size.center().x.should.be.a('number')
        it 'y value should return a number', -> size.center().y.should.be.a('number')
        it 'x value should be 0 if x and y are 0', -> size.center().x.should.equal(0)
        it 'y value should be 0 if x and y are 0', -> size.center().y.should.equal(0)