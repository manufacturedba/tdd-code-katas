define([], function() {
  function a(x, y) {
    return x * y;
  }

  function b(x) {
    return this.a(x, x + 1) + 1;
  }

  return {
    a: a,
    b: b
  }
});
