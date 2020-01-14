function nthPrime(n) {
  var prime=[2];

  // Good luck!
//solo prueba numeros impares

for(var i=3;prime.length<n;i +=2){

  var isPrime =false;
  for(var j=0;j<prime.length;j++){//solo reviza si es divisible entre los numeros primos anteriores
    if(i%prime[j]==0){
      isPrime=true
      break;
    }
  }
  if(!isPrime){//si es primo lo guarda en el array
    prime.push(i);
    isPrime =false;
    
 
  }
}

  return prime[prime.length-1];
}

console.log(nthPrime(100));
