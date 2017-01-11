define([], function() {
  return function primeFactors(number) {

    var primes = [];

    if (number > 1) {
      primes.push(number);
    }

    return primes;
  };
});
