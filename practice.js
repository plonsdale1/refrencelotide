// making a simple function that prints even numb from 0 to 12
for(let number = 0; number <= 12; number += 2) {
  console.log(number);
}
// this makes sence because we assign the variable to zero and we set the conditional statement to stop if number becomes equal or greater than 12. we cause it to go up by two increments each time the loop is called. 
// pro tip we can use any number not just ones divisible by 2, five gives us 10 because any more would exceed 12! 

let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
//this gives us the same effect but with a while loop this time

function countEvenToTwelve(number) {
 if (number <= 12) {
console.log(number);
countEvenToTwelve(number+2);
 }
   }
    countEvenToTwelve(0);
    // this is the for loop from earlier but now as recursion loop
// again all these do the same things just different syntax

// function countUpFrom(number) {
//   console.log(number);
//   countUpFrom(number+1);
// }
// countUpFrom(1); uncomment this if you want to see the fallback against inifinte function it will stop it automatically at 7000