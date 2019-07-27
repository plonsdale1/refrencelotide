// const map = function(arrMap, CallB) {
// console.log(arrMap)
// };

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("this is how it works?");
    // console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(assertEqual(results1));


