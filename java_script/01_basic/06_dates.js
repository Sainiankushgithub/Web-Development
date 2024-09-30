console.log('Displaying the date');

let myDate= new Date();
console.log(myDate);        // 2024-09-30T21:48:03.599Z 

console.log(myDate.toString()); // Tue Oct 01 2024 03:19:04 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());  // 2024-09-30T21:50:38.855Z

console.log(myDate.toJSON()); // 2024-09-30T21:51:11.530Z

console.log(myDate.toLocaleDateString());  //  10/1/2024

console.log(myDate.toLocaleString());      // 10/1/2024, 3:23:02 AM  

