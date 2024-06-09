// THERE ARE DIFFERENT WAYS OF CREATING ARRAY IN JAVASCRIPT 


// Simplest way of creating the array 
let arr=[10,20,30,40,50];

for(let i=0;i<arr.length;i++)
  {
    console.log(arr[i]);
  }

  // Array I  can Creare with different data types like object

  const array=['Ankush','Saini',20,null,undefined,true,false];
  console.log(array.length);

  let company=
    {
      'First-Name':'Harish',
      'Last-Name':'saini',
      age:9,
      class:'4th',
    }

    console.log(company["First-Name"]);
    console.log(company['Last-Name']);
    console.log(company.age);
    console.log(company.class);


    // Adding the element to array using push function 

    array.push('Itz_me');
    console.log('After using push function size of array\n',array.length);

    array.push('Hii','Good','Morning');

    for(let i=0;i<array.length;i++)
      {
        console.log(array[i]);
      }

      console.log(array.length);


      // Common Array methods in JavaScript

      //  1.push()
      //  2.pop()
      //  3.shift()   ---> Removes the element from first Index
      //  4.unshift() ----> Add the element from the First Index
      //  5.concat()
      //  6.indexOf()
      // 


      console.log('\n\n');
      newarr=[0,2,4,6];
      newarr.shift();

      for(let i=0;i<newarr.length;i++)
        {
          console.log(newarr[i]);
        }


