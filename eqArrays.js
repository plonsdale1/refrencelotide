
// const assertEqual = function(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("😀😀😀Assertion Passed:", actual, "===", expected);
//   } else {
//     console.log("Assertion Failed:", actual, "!==", expected);
//   }
// };



const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
} 

module.exports = eqArrays;








// this is for assert equaling turning the arrays into string with json stringify
// console.log((assertEqual([1, 2, 3], [1, 2, 3])));
// assertEqual([1, 2, 3], [1, 2, 3]);
// assertEqual([1, 2, 3], [3, 2, 1]);

// assertEqual(["1", "2", "3"], ["1", "2", "3"]); 
// assertEqual(["1", "2", "3"], ["1", "2", 3]); 

// if (JSON.stringify(actual) === JSON.stringify(expected)) { used for turning arrays into strings