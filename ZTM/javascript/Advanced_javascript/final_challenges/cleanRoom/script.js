// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//  make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
//   should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently
//    from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

var input = document.getElementById("userinput");
var button = document.getElementById("enter")
var output = document.getElementById("output")


button.addEventListener("click", cleanTheRoom)



const arr = ["b",1,2,"a","1",4,591,392,391,2,5,10,2,1,1,1,20,20,1,2,3,4,5,6,7,8,9,10,"1","2","3","1"]
  


function cleanTheRoom(){
  let array =input.value
  array = array.split(",")
array = array.sort()
  array = array.sort((a, b) => a - b) //ordena por orden

  let arrayTemp =[];
  let one = true;
  let newArray= []

  while(array.length >0){
  
    if (array[0] === array[1]){ //comprueba si el elemento 0 = al elemento 1
      arrayTemp.push(array[1]) // añade a un nuevo array el elemnto 1
      array.splice(0,1)
    } else{
     
      if (arrayTemp.length > 0 ){//añade el ultimo elemento al
        arrayTemp.push(array[0])
        newArray.push(arrayTemp)
        array.splice(0,1)
        arrayTemp =[]
      }else{ // si solo hay un elemento de este tipo
        newArray.push(array[0])
        array.splice(0,1)
      arrayTemp =[]
      }
      
      
    }

  }
  output.textContent = newArray

console.log(newArray[1], typeof(newArray[1]))


 }




//  cleanTheRoom(arr)



  
//   const a = [1,2,3,4]
// a.splice(1,1)

//   console.log(a)

