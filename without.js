const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};



const without = function(a, b) {
  result = [];
  for(i = 0; i < a.length; i++) {

   let found =  b.find(function(element) {
      return element === a[i]
    });


    if(found === undefined) {
      result.push(a[i]);
    }
  }
return result;  
};
// const without = function(a, b) {
//     const [x] = results;
//   let results = [x];
//     if(a === b) {
//     i = 0; i < a.length || b.length; i++
//     }else {
//       return results; 
//     }
//   }




const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, ["hello", "world", "lighthouse"]);







console.log(assertEqual(without([1, 2, 3], [1]), ([2, 3]))); // => [2, 3]
console.log(assertEqual(without(["1", "2", "3"], [1, 2, "3"]), (["1", "2"]))) // => ["1", "2"]