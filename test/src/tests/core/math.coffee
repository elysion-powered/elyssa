describe 'Elyssa', ->
  describe 'Core', ->
    describe 'Math', ->
      describe '.clamp', ->
        it 'value is between min and max', -> Elyssa.Math.clamp(0.5, 0, 1).should.equal(0.5)
        it 'value is bigger than max', -> Elyssa.Math.clamp(1.5, 0, 1).should.equal(1)
        it 'value is smaller than min', -> Elyssa.Math.clamp(-5, 0, 1).should.equal(0)
        it 'value is bigger than max, but max is maller than min', -> Elyssa.Math.clamp(-5, 1, 0).should.equal(0)