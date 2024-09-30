const score =400;

console.log(score);

let newScore=new Number(10000000);
console.log(newScore);

console.log(newScore.toString());
console.log(newScore.toLocaleString('en-IN'));   // 1,00,00,000
console.log(newScore.toFixed(2));                // 10000000.00

newScore=10000000.2345;
console.log(newScore.toPrecision(10));        // 10000000.23

/************************************ MATHS ***********************/

let number=123.45;
console.log(Math.ceil(number));  // 124
console.log(Math.floor(number)); // 123

console.log(Math.max(9,5,12,4));
console.log(Math.min(2,6,3,1));

console.log(Math.floor(Math.random()*5)+1);

console.log("Different random value ");
for(let i=0;i<30;i++)
{
  console.log(Math.floor(Math.random()*6)+1);
}

const min_val=10;
const max_val=20;

console.log("random value between 10 and 20 ");
for(let i=0;i<20;i++)
{
  console.log(Math.floor(Math.random()*(max_val-min_val+1))+min_val);
}




