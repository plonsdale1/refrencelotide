const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};



const without = function(a, b) {
  for(let i = 0; i < a.length && b.length; i++) {
    [i] = a;
    [i] = b;
    if(a !== b) {
      return a;
    }else {
      i++;
    }
  }
}







// const without = function(a, b) {
//   result = [];
//   const i = [0];
//   c = [i];
//   d = [i];
//   for(i = 0; i < a.length; i++) {
//     if([c] === [d]) {
//       return false
//     }else {
//       return result
//     }
//   }
  
// };



console.log(assertEqual(without([1, 2, 3], [1])([2, 3]))); // => [2, 3]
console.log(assertEqual(without(["1", "2", "3"], [1, 2, "3"])(["1", "2"]))) // => ["1", "2"]