function fiboEvenSum(n) {

  let arr=[1,2]; 
  let sum=2;
  
  if(n<=1){
    return 0;
  }

//crear array con la secuencia fibonacii
  for(let i = 2; i<n;i++){
   arr.push(arr[i-1]+arr[i-2])

//sumar pares
    if(arr[i]%2 == 0){
      sum += arr[i];
     }
  }

 return sum;
}

console.log(fiboEvenSum(1));
