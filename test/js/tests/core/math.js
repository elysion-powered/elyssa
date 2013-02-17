(function() {

  describe('Elyssa', function() {
    return describe('Core', function() {
      return describe('Math', function() {
        return describe('.clamp', function() {
          it('value is between min and max', function() {
            return Elyssa.Math.clamp(0.5, 0, 1).should.equal(0.5);
          });
          it('value is bigger than max', function() {
            return Elyssa.Math.clamp(1.5, 0, 1).should.equal(1);
          });
          it('value is smaller than min', function() {
            return Elyssa.Math.clamp(-5, 0, 1).should.equal(0);
          });
          return it('value is bigger than max, but max is maller than min', function() {
            return Elyssa.Math.clamp(-5, 1, 0).should.equal(0);
          });
        });
      });
    });
  });

}).call(this);
