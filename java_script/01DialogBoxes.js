console.log('Hello world !');
let a=true;
console.log(typeof(a));
var b=true;
if(b)
{
  console.log('b is true');
}
else
{
  console.log('b is false');
}
console.log(b);

// DIALOG BOXES 
//  1.ALERT
//  2.CONFIRM
//  3.PROMPT

alert('Welcome to day1 of learning javascript');

let confirmValue=confirm('Would you like to proceed');
console.log(confirmValue);

let promptValue=prompt('Please Enter Your Full Name');
console.log(promptValue);
