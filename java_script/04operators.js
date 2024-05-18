// == equal to 

const user1='18';
const user2=18;

console.log(user1==user2); // true [it does implicit conversion]


// === equal to with same type 
console.log(user1===user2); // false 

console.log(parseInt(user1)===user2); // true

console.log(typeof(parseInt(user1))); // Number
console.log(typeof((user1)));         // string


// != not equal to 

console.log(user1!=user2); // false
console.log(user1!==user2); // true

