var num1 = parseInt(prompt("Enter a number:"));
var result;
var simbol = prompt( `choose an operation:
 * = multiplication 
 / = division 
 - = subtraccion
+ = sum `);
var num2 = parseInt(prompt("Enter a second number:"));

switch (simbol){
  case "*":
    result = num1*num2;
    alert(`${num1} * ${num2} = ${result}`);
    break;
  case "/":
    result = num1 / num2;
    alert(`${num1} / ${num2} = ${result}`);
    break;
  case "-":
    result = num1-num2;
    alert(`${num1} - ${num2} = ${result}`);
    break;
  case "+":
    result=num1+num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;

}

