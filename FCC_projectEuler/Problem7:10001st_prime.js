function nthPrime(n) {
  var prime=0;
  var countPrimes=1
  // Good luck!
//comienz a contar a partir del 3 de 2 en dos para evitar pares 

for(var i=3;countPrimes<n;i +=2){
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

console.log(nthPrime(10001));
