define(function(require) {
  var primeFactors = require('../src/prime-factors');

  describe('primeFactors()', function() {
    it('should pass the canary test', function() {
      expect(false).to.be.false;
    });

    it('should return an empty array for 0', function () {
      expect(primeFactors(0)).to.be.empty;
    });

    it('should return an empty array for 1', function () {
      expect(primeFactors(1)).to.be.empty;
    });

    it('should return [2] for 2', function () {
      expect(primeFactors(2)).to.eql([2]);
    });

    it('should return [3] for 3', function () {
      expect(primeFactors(3)).to.eql([3]);
    });
  });
})
