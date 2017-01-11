define([], function() {
  return function primeFactors(number) {

    var primes = [];

    for (var candidate = 2; number > 1; candidate++) {
      for (; number % candidate == 0; number /= candidate) {
        primes.push(candidate);
      }
    }

    return primes;
  };
});
