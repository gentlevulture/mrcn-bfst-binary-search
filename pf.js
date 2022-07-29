console.log(primeFactors(3)) //=> [3]
console.log(primeFactors(4)) //=> [2, 2]
console.log(primeFactors(18)) //=> [2, 3, 3]
console.log(primeFactors(2)) //=> [2]
console.log(primeFactors(29)) //=> [29]
console.log(primeFactors(105)) //=> [3, 5, 7]
console.log(primeFactors(200)) //=> [2, 2, 2, 5, 5]
console.log(primeFactors(321321321512))

// Slick implementation of finding prime factors using recursion
// by Sean Niles https://github.com/snyles

function getFactor(n) {
  for(let i = 2; i < n; i++) {
    if (n % i === 0) return i
  }
  return n
}

function primeFactors(n) {
  const factors = []
  if (getFactor(n) === n) {
    return [n]
  }
  else {
    fact1 = getFactor(n)
    fact2 = n / fact1
    factors.push(...primeFactors(fact1))
    factors.push(...primeFactors(fact2))
  }
  return factors
}