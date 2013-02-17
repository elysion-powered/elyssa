(function() {

  describe('Elyssa', function() {
    return describe('Types', function() {
      return describe('Rect', function() {
        var rect;
        rect = new Elyssa.Rect();
        describe('constructor', function() {
          it('default value x is 0', function() {
            return rect.x.should.equal(0);
          });
          it('default value y is 0', function() {
            return rect.y.should.equal(0);
          });
          it('default value w is 0', function() {
            return rect.w.should.equal(0);
          });
          return it('default value h is 0', function() {
            return rect.h.should.equal(0);
          });
        });
        return describe('#center()', function() {
          it('x value should return a number', function() {
            return rect.center().x.should.be.a('number');
          });
          it('y value should return a number', function() {
            return rect.center().y.should.be.a('number');
          });
          it('x value should be 0 if x, y, w and h are 0', function() {
            return rect.center().x.should.equal(0);
          });
          return it('y value should be 0 if x, y, w and h are 0', function() {
            return rect.center().y.should.equal(0);
          });
        });
      });
    });
  });

}).call(this);
