const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: [actual] === [expected]");
  } else {
    console.log("Assertion Failed: [actual] !== [expected]");
  }
};


const flatten = function(array) {
  const flat = [].concat.apply([], array)
  return flat
}









console.log(flatten([1, 2, [3, 4], 5, [6]]));