// Question 3: Write a function that converts HEX to RGB.
//  Then Make that function auto-dect the formats so that
//   if you enter HEX color format it returns RGB and if you 
//   enter RGB color format it returns HEX.
var inputR = document.getElementById("inputR")
var inputG = document.getElementById("inputG")
var inputB = document.getElementById("inputB")
var buttonRGB = document.getElementById("enterRGB")

var inputHex = document.getElementById("inputHex")
var buttonHex = document.getElementById("enterH")

var output = document.getElementById("output")

buttonRGB.addEventListener("click", rgbConvert);

buttonHex.addEventListener("click", hexConvert);

const rgb = [100,125,10];
let hexColor= "#647d0a";

function hexConvert(){
  color = inputHex.value
console.log(color.length)
convert(color)
}

function rgbConvert(){
  color = inputR.value +","+ inputG.value +","+ inputB.value
  color = color.split(",")
  for (let i = 0; i<color.length;i++){
    color[i] = parseInt(color[i])
  }
  convert(color)
}


function convert(color){
  let colorOutH = []
  let colorOutR=[]


  if (typeof(color) == "string"){
    //de hex a rgb
    //vuelve array el string hex

    for(let i=1; i<color.length;i+=2){
      colorOutR.push("0x"+color[i].concat(color[i+1]))
    }

  for (let i =0;i<colorOutR.length;i++){

    colorOutR[i] = parseInt(colorOutR[i])
  }
   
    output.textContent = colorOutR.join(",")
    return colorOutH.join("")  
    
  }

              // de rgb a hex
      for(item of color){
        colorOutH.push(item.toString(16))
      }
      for (item in colorOutH){
      
        if(colorOutH[item].length == 1){
        
          colorOutH[item] = "0" + colorOutH[item]
        }
      }

      colorOutH.unshift("#")
      
      
    output.textContent = colorOutH.join("")
    return colorOutH.join("")  

}

// console.log(hexToRgb(rgb))