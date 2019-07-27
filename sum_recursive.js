



// function sumToOne(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sumToOne(n - 1);
// }

// console.log(sumToOne(4));











function sumToOne(n) {
  if (n === 1) {
    return 1; 
  }
  return n + sumToOne(n -1);
}









console.log(sumToOne(4));


// would only return one because of the base case/ stopping condition

//proper pseudo code
//if (n > 1) this means recursive case returns n + sum of all numbers from 1 to (n-1)
// return n + sumToOne(n - 1);
//if (n === 1) this is a base case returns 1
// return 1;