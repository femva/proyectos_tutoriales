var database = [
  {
    username: "Paco",
    password: "pass"
  }
];

var newsfeed = [
  {
    username: "juan",
    timeline: "Holaaa"
  },
  {
    username: "pedro",
    timeline: "Adiossss"
  },
  {
    username: "pepe",
    timeline: "Que haceee"
  }
];

console.log(database[0].username)

var usernamePrompt = prompt("cual es tu usuario");
var passwordPrompt = prompt("Cual es tu contraseña");

signIn(usernamePrompt, passwordPrompt )

function signIn (user, pass){
  if(database[0].username == user && database[0].password == pass){
    console.log("Bienvenido")

    console.log(newsfeed)
  }else{
    console.log("usuario incorrecto")
  }
}