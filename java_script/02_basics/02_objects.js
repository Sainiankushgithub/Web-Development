const user1={
  name:"Ankush",
  "full name":"Ankush saini",
  age:21,
  roll_no:2206409,
  email:"ankush@gmail.com",
  location:"Jammu & Kashmir"
}
console.log(user1["full name"]);
console.log(user1["email"]);
console.log(user1["age"]);

// To print everything in a object so use table for that 
console.table(user1);


// to reperesent a symbol in a object ---> take that key in a square bracket e.g [mysymbol]

const mysymbol=Symbol("key1");
const user2={
  "full name ":"Ankur singh",
  [mysymbol]:"Mykey1",
  location:"Delhi",
  age:18,
  email:"ankursingh@gmail.com"
}
console.log(typeof user2[mysymbol])      // string
console.table(user2);

console.log(user2);

// i can go on updating the values untill i use object.freeze(object_name); e.g i want to change the user2 email

console.log("Values after Object.freeze()");
user2.email="ankur@gmail.com";
Object.freeze(user2);
user2.email="ankursingh1234@gmail.com";

console.log(user2);


