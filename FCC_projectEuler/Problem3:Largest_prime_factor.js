function largestPrimeFactor(number) {
  // Good luck!
var arr=[];

for(var i=2;i<number;i++){
  var isPrime =false;
  for(var j=2;j<i;j++){
    if(i%j==0){
      isPrime=true
    }
  }
  if(!isPrime){
    arr.push(i)
    isPrime =false;
  }
}
return arr
}

 console.log(largestPrimeFactor(40));
