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
      //  5.concat()  ----> conacte the two array 
      //  6.indexOf()  ----> Give the index of the element
      //  7.Includes()   ---> Gives True or false value that the given value present in the array or not 
      //  8.reverse()
      //  9.sort()
      //  10.slice()   ---> gives the element from the start and the end 
      //  11.splice()    ----> removes or add the array element form given index e.g index, no of element you wanted to delete , elements how many you want to add from given index


      console.log('\n\n');
      newarr=[0,2,4,6];
      newar=[1,3,5,7];
      newarr.shift();

      for(let i=0;i<newarr.length;i++)
        {
          console.log(newarr[i]);
        }

        newarr.unshift(0);

        
      for(let i=0;i<newarr.length;i++)
        {
          console.log(newarr[i]);
        }


        console.log(newarr.includes(6));
        console.log(newarr.includes(7));

        console.log(newarr.indexOf(6));
        console.log(newarr.indexOf(7));


        const concate_array=newarr.concat(newar);
        for(let i=0;i<concate_array.length;i++)
          {
            console.log(concate_array[i]);
          }

          console.log('Reverse an array\n');
          concate_array.reverse();
          for(let i=0;i<concate_array.length;i++)
            {
              console.log(concate_array[i])
            }

            console.log('sort an array ');
            concate_array.sort();
             for(let i=0;i<concate_array.length;i++)
              {
                console.log(concate_array[i]);
              }


              // slice
              console.log('slice method');
              const slice_arr=concate_array.slice(3);

              // const slice_arr=concate_array.slice(3,6);
              for(let i=0;i<slice_arr.length;i++)
                {
                  console.log(slice_arr[i]);
                }











