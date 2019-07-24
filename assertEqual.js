/*const assertEqual = function(a, b) {
return a * b
};

console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: [actual] === [expected]");
  } else {
    console.log("Assertion Failed: [actual] !== [expected]");
  }
};

// TEST CODE
assertEqual(`"Lighthouse Labs" + "Bootcamp"`);
assertEqual(1, 1);