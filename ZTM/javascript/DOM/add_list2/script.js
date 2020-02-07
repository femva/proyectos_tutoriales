var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	input.value = "";
}

function addListAfterClick(event) {
console.log(event)
	if (inputLength() > 0) {
		createListElement();
		addElement ()
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		addElement ()
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// tachar textto
var done = document.querySelector("ul")
done.addEventListener("click", function(e){
	var l = e.target.className
	


	if (l == "list" || l == "list done"){ 
	e.target.classList.toggle("done")	//.target nos dice cual elemento se seleccino

}


})

 





//añadir boton
document.body.onload = addElement;
function addElement () { 

			//tamaño del ul
			var numli =document.getElementsByTagName("li").length
			//numero de botones en ul
			var numbutton = document.querySelector("ul").getElementsByTagName("button").length
//cre un boton por cada <li>
	for(var i = numbutton; i<numli; i++){
		var li = document.querySelector("ul").children[i]
		  // crea nuevo boton
			var newButton = document.createElement("button"); 
			// crea  texto del boton
			var newContent = document.createTextNode("eliminar"); 
			// añade texto al boton
			newButton.appendChild(newContent);  
		
			// añade boton al Documento
			li.appendChild(newButton); 

			//añade class= "del" al boton
			document.querySelector("ul").children[i].querySelector("button").classList.add("del")
			//añade class = "list" al texto
			document.querySelector("ul").children[i].classList.add("list")
	}
}

	//eliminar


	//seleccionar boton especifico
	var delButton = document.querySelector("ul")

	delButton.addEventListener("click", function(del){
		console.log(del.target)
		
		var c = del.target.className

		if (c == "del"){ //solo funcionara con el boton que tiene class=del
			
			var element = del.target
			element.parentElement.remove(element);
			
		}
	

	})