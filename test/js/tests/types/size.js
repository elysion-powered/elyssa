(function() {

  describe('Elyssa', function() {
    return describe('Types', function() {
      return describe('Size', function() {
        var size;
        size = new Elyssa.Size();
        describe('constructor', function() {
          it('default value w is 0', function() {
            return size.w.should.equal(0);
          });
          return it('default value h is 0', function() {
            return size.h.should.equal(0);
          });
        });
        return describe('#center', function() {
          it('x value should return a number', function() {
            return size.center().x.should.be.a('number');
          });
          it('y value should return a number', function() {
            return size.center().y.should.be.a('number');
          });
          it('x value should be 0 if x and y are 0', function() {
            return size.center().x.should.equal(0);
          });
          return it('y value should be 0 if x and y are 0', function() {
            return size.center().y.should.equal(0);
          });
        });
      });
    });
  });

}).call(this);
