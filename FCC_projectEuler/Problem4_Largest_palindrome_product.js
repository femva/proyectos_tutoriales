// Project Euler: Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

//ninvierte el numero
function rev(num){
  num =num.toString(10)
let num2="";
for(let i =num.length-1;i>=0;i--){
  num2 = num2+num[i] 
}
 // console.log("num2",num2.length)
return num2
}


let item;
function largestPalindromeProduct(n) {
  // Good luck!
  // inicializa los numeros a multiplicar
  let num= "9"
 if(num.length != n ){
   for(let i = n;i >1;i--){
     num =num +"9"
   }
 }
 num = parseInt(num)
let num2 = num
let mul;
//-------------------------
let arr=[];

for (let i = num;i>1;i--){
 // console.log(num)
 for (let j =num2;j>1;j--){
   mul = i*j
  
  if (mul == rev(mul) ){
    arr.push(mul)
  }

  }
 
}

  return arr.sort(function(a, b){return b - a})[0];
}

console.log(largestPalindromeProduct(3));