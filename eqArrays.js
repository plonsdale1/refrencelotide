






const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};
console.log((assertEqual([1, 2, 3], [1, 2, 3])));
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [3, 2, 1]);

assertEqual(["1", "2", "3"], ["1", "2", "3"]); 
assertEqual(["1", "2", "3"], ["1", "2", 3]); 

// if (JSON.stringify(actual) === JSON.stringify(expected)) { used for turning arrays into strings