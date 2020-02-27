// Question 2: Write a javascript function that takes an array of
// numbers and a target number. The function should find two different
// numbers in the array that, when added together, give the target number.
//  For example: answer([1,2,3], 4)should return [1,3]
 
var arr = document.getElementById("array")
var target = document.getElementById("target")
var button = document.getElementById("enter")
var output = document.getElementById("output")

button.addEventListener("click", prueba)

function prueba() {
  let array =arr.value
  array = array.split(",")
  for(let i = 0; i<array.length;i++){
    array[i]= parseInt(array[i])
  }
 let num = parseInt(target.value)


 add(array, num)
}


let array =[1,10,10,10,2,3,2,2,2,2,2,5]
const numero = 15

function add(arr, num){

  for (var i = 0; i<arr.length; i++){

  for (let j= i+1; j<arr.length;j++){
    
    if (num == arr[i]+arr[j]){
      output.textContent = [arr[i]+", "+arr[j] ]
      console.log([arr[i],arr[j] ])
      return [arr[i],arr[j] ]

    }
  }
}
output.textContent = "No hay suma de 2 numea para el numero"
}

