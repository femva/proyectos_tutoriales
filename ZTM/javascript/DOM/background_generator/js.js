var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button")
var random1=[];//primer color
var random2=[];//segundo color
setGradien();

function setGradien(){
  body.style.background= " linear-gradient(to right, " +color1.value+","+ color2.value+")";
  //css.textContent = body.style.background +";"
  css.textContent = color1.value + " - "+color2.value

}

color1 .addEventListener("input",setGradien);
color2 .addEventListener("input",setGradien);

button.addEventListener("click",getRandomColor);



function getRandomColor() {
random1=["#"];//primer color
random2=["#"];//segundo color
 for(var i = 0;i<3;i++){ //genera 2 array con los valores para color rgb y los convierte a hex
  var  num =  Math.floor(Math.random() * Math.floor(256));
   random1.push(num.toString(16));

   num =  Math.floor(Math.random() * Math.floor(256));
   random2.push(num.toString(16));

 }

 for(var i=1; i<4;i++){ //cuando convierte a hex un numero de un solo digito "f" lo convierte a "0f"
   if(random1[i].length == 1){
   random1[i] = "0" + random1[i]
   }

   if(random2[i].length == 1){
    random2[i] = "0" + random2[i]
    }
 }

//concatena el array para ocuparlo como color rgb
 random1 = random1.join("");
 random2 = random2.join("");

color1.value= random1;
color2.value= random2;
setGradien();

}







