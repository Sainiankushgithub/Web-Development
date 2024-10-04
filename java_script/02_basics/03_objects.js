const tinderUser={
};

tinderUser.id=220
tinderUser.name="sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
  email:"regularUser@gmail.com",
  userDetail:{
    fullName:{
      firstName:"Ankush",
      middleName:"",
      lastName:"saini",
    }
  }
}

// console.log(regularUser);

// console.log(regularUser.userDetail.fullName.firstName);

const obj1={
  1:"a",
  2:"b"
};

const obj2={
  3:"a",
  4:"b"
};

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

// Another way of assiging the values 

const obj3={...obj1,...obj2};
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // True