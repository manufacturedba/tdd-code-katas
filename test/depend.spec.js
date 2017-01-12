define(function(require) {
  var Squire = require('squire');
  var injector = new Squire();

  injector.mock('ency', function() {
    return false;
  });

  it('should return 0', injector.run(['./src/depend'], function(depend) {
    expect(depend()).to.equal(0);
  }));
});
