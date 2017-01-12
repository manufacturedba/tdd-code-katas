define(function(require) {
  var asynch = require('../src/asynch');

  it('should wait for function to run', function(done) {
    asynch(function() {
      expect(true).to.be.true;
      done();
    });
  });
})
