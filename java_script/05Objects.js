let product={
company : 'Tata',
'net-worth' : '155 Billions',
since : 1868,
};
console.log(product);
console.log(product.company);
console.log(product.since);
// console.log(product.net-worth); // this will throw an error
console.log(product['net-worth'])


console.log('Types of a Object ');
console.log(typeof product);
console.log(typeof product.since);

console.log('\n');

const user1=
{
  firstName:'Ankush',
  'last-Name':'saini',
  age:21,
  DOB:2004,
  State:'Jammu & kashmir',
}

const user2=
{
  firstName:'Sahil',
  'last-Name':'salaria',
  age:24,
  DOB:2000,
  State:'Mumbai'
}

console.log(user1);

console.log(user1.firstName);
console.log(user1['last-Name']);

console.log('\n\nObject.freeze & object.seal & in ');

// before using object.seal(user1) I can change any property & delete it after that i cannot delete any property but i can change it


Object.seal(user1);


// After using Object.freeze(user2) I cannot delete and modify any property 

Object.freeze(user1);












