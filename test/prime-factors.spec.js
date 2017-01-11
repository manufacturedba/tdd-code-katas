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

    it('should return [2, 2] for 4', function () {
      expect(primeFactors(4)).to.eql([2, 2]);
    });

    it('should return [5] for 5', function () {
      expect(primeFactors(5)).to.eql([5]);
    });

    it('should return [2, 3] for 6', function () {
      expect(primeFactors(6)).to.eql([2, 3]);
    });

    it('should return [2, 2, 2] for 8', function () {
      expect(primeFactors(8)).to.eql([2, 2, 2]);
    });

    it('should return [3, 3] for 9', function () {
      expect(primeFactors(9)).to.eql([3, 3]);
    });

    it('should return [2, 2, 5, 5] for 100', function () {
      expect(primeFactors(100)).to.eql([2, 2, 5, 5]);
    });
  });
})
