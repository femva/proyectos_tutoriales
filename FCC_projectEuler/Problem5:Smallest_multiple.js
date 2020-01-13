//ya resuelve pero tarda

function smallestMult(n) {
  var count =1

 var count = n*(n-1)*(n-2);
  // Good luck!
  var found=false
 

while(!found){
  console.log(count)
  var check = 0;
  for(var i=2;i<=n;i++){
    if(count%i==0 ){
      check++;
    }else{
      break;
    }
    
  }
if(check==n-1){
  found=true;
  break;
}
  count = count + (n*(n-1));
}
  return count;
}

console.log(smallestMult(10));
