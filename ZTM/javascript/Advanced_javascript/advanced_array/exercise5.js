// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const added = []
const adds = array.forEach(num => {
  added.push( "!" + num.username)
});
console.log(added)

//Create an array using map that has all the usernames with a "? to each of the usernames

const added = array.map(user => {
  return user.username + "?"
})
console.log(added)
//Filter the array to only include users who are on team: red
const redTeam = array.filter(user =>{
  return user.team === "red"
 
})
console.log(redTeam)

//Find out the total score of all users using reduce

const score = array.reduce((accumulator, num) => {
  return accumulator + num.score;
},0);
console.log(score)

// (1), what is the value of i?  lapocicion del elemento del array
// (2), Make this map function pure:

const arrayNum = [1, 2, 4, 5, 8, 9];
const double= []
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	double.push( num * 2)
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const added = array.map(user => { 
  const a = user.items.map((stuff,i) =>{
    return  user.items[i] = stuff + "!"
  
  })


  return user
})

console.log(added);