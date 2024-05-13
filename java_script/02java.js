

// Methods with arguments 
// toUpperCase()
// toLowerCase() 
// trim()
// trimStart()
// trimEnd()
// variable_name.length


let a="Ankush saini";
console.log("Converting the string to upper case");
console.log(a.toUpperCase());
console.log("Converting the string to lower case");
console.log(a.toLowerCase());

var n=a.length;
console.log("Length of your entered string is "+n);

var c="         I am Ankush saini, My friend name is Nothing       ";
console.log(c);

console.log("Trim() function used to remove unncessary whitespace from the begining and the end ");
console.log(c.trim());

// trimStart()
// trimEnd()


// METHODS WITH ARGUMENT 
// includes()
// indexOf()
// replace()
// replaceAll()
// concat()
// padStart()
// padEnd()
// charAt()
// charCodeAt()
// split()

let intro="Hii, I am Ankush saini";


console.log(intro.indexOf('A'));  // indexOf()
console.log(intro.replace("am","'m"));  // replace()


const accountNumber='4141';
console.log(accountNumber.padStart(12,'*'));     // padStart



console.log(intro.charCodeAt(10));               // charCodeAt()


console.log(intro.split(' '));                   // split()

const readline=require('readline');
const r1=readline.createInterface({                                     // inlcudes()
  input:process.stdin,
  output:process.stdout
});
r1.question("Enter to check whether this string part present in another string or not \n",function(check){

if(intro.includes(check))
{
  console.log("It's present ");
}
else
{
  console.log("It's not present");
}
r1.close();
});


// TEMPLATE LITERAL

let accountBalance=56;
console.log(`My account Balance is $${accountBalance}`);