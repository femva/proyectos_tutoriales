//https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor
function largestPrimeFactor(number) {
  // Good luck!
var arr=[]; 
var fact=[];
var div=number


for(var i=1;i<=number;i++){//crear array de primos
  var isPrime =false;
  for(var j=2;j<i;j++){//checar si no primo
    if(i%j==0){
      isPrime=true
    }
  }
  if(!isPrime){//si es primo lo guarda en el array
    arr.push(i)
    isPrime =false;
  }
}

for(var i=2;i<=arr.length;i++){
    if((div / arr[i-1])%1==0){  //poder resusar un numero
    i-=1;
  }
  if((div / arr[i])%1==0){ //guarda los primos factoriales
    div= div/arr[i]
    fact.push(arr[i]) 
  }


}
return fact[fact.length-1] 
}

 console.log(largestPrimeFactor(13195));

