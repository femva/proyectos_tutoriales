//compara edad mayor y menor que 18 pormedio de una funcion

function checkDriverAge(age){
  
  if (age < 18){
    alert("you cant drive, wait " +  ( 18-age) + " year(s)")
  }else {
    alert("you can drive")
  }


}

checkDriverAge(17);