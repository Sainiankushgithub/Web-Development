const arr=[0,1,2,3,4,5];
console.log(arr);
console.log(arr.length);

/***************          Methods in array                  ***************************** */

let arr1=[0,1,2,3,4,5];
let newarr1=arr1.slice(1,3);

console.log("A : ",arr1);

console.log(newarr1);
console.log("B : ",arr1);                               // SLICE & SPLICE 

let newarr2=arr1.splice(1,3);
console.log(newarr2);
console.log("C : ",arr1);

// ==================================================================================================================
console.log("=====================================");
console.log(arr);

arr.unshift(-1);
console.log(arr);
arr.shift();                                                //  SHIFT & UNSHIFT
console.log(arr);


// =====================================================================================================================


console.log("====================================");
console.log(typeof arr.join());

console.log(typeof arr);

console.log(arr.indexOf(2));
console.log(arr.indexOf(9));
console.log(arr.includes(2));                                    // JOIN , INDEXOF & INCLUDES 
console.log(arr.includes(9));



