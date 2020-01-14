function sumSquareDifference(n) {
  // Good luck!
  // square of the sum sqos (1 + 2 + ... + 10)
  var sqos = (n * (n +1)) /2; //suma
 sqos*=sqos //al cuadrado

  
  //sum of the squares  12 + 22 + ... + 102 
  var sosq =(n*(n+1)*(2*n+1))/6

  return sqos - sosq;
}

console.log(sumSquareDifference(10));
