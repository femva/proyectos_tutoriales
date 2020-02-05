var array = ["Banana", "Apples", "Oranges", "Blueberry"];
console.log(array);

array.shift(); //borra el primer elemento
array.sort(); //ordena en orden alfabetico

array.shift();//borra el primer elemento
console.log(array);

array.reverse(); // invierte el orden del array [a, c, b, e] -->  [e, b, c, a]
console.log(array);

array.unshift("kiwi");//introduce un valor al inicio
// .pull()   extrae el ultimo valor
//.push()   introduce un valor al final

console.log(array)



var array2 = ["Banana",["Apples",["Oranges"], "Blueberry"]]; //array anidado 
console.log(array2[1][1][0]) //accediendo a arrays dentro e otro array []

