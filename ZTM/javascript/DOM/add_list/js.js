var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

function inputLength(){
    return input.value.length
}

function createElementList (){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value=""
}

function addListAfterClick(){
    if(inputLength()> 0 ){
        createElementList()
    }
}

function addListAfterEnter(event){
  if(inputLength() > 0 && event.keyCode==13){
    createElementList()

}
}
button.addEventListener("click", addListAfterClick)


input.addEventListener("keypress",addListAfterEnter)