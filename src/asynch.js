define([], function() {
  return function(fn) {
    setTimeout(fn, 1000);
  }
});
