define(function(require) {
  var spy = require('../src/spy');
  var sandbox = sinon.sandbox.create();

  afterEach(function() {
    sandbox.restore();
    sandbox.reset();
  });

  it('should check a method input', function() {
    sandbox.spy(spy, 'a');
    spy.b(2);
    expect(spy.a.calledWith(2, 3)).to.be.true;
  });

  it('should stub output', function() {
    sandbox.stub(spy, 'a').returns(3);
    expect(spy.b(2)).to.equal(4);
  });

  it('should throw an error', function() {
    sandbox.stub(spy, 'a').throws();
    expect(spy.b).to.throw(Error);
  })
});
