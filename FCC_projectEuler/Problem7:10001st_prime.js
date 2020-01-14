function nthPrime(n) {
  var prime=0
  var countPrimes=0
  // Good luck!

for(var i=2;countPrimes<n;i++){//crear array de primos
  var isPrime =false;
  for(var j=2;j<i;j++){//checar si no primo
    if(i%j==0){
      isPrime=true
    }
  }
  if(!isPrime){//si es primo lo guarda en el array
    prime=i;
    isPrime =false;
    countPrimes++;
  }
}
  return prime;
}

console.log(nthPrime(10));
