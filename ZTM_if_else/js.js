var age = parseInt(prompt("How old are you? "));

if (age < 18){
  alert("Sorry, you are too young to drive thiscarr.Powering off");
  alert("Get bak in "+ (18- age) + " year(s)")
}else{
  alert("Powering on. Enjoy the ride!.")
}