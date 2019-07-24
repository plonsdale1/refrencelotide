const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: [actual] === [expected]");
  } else {
    console.log("Assertion Failed: [actual] !== [expected]");
  }
};
const head = function(array) {
  return array[0];
};
const tail = function(array2) {
  array2 = array2.slice(1, 3);
  return array2;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//TEST CODE
assertEqual(`"Lighthouse Labs" + "Bootcamp"`);
assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
