
// const assertEqual = function(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("😀😀😀Assertion Passed:", actual, "===", expected);
//   } else {
//     console.log("Assertion Failed:", actual, "!==", expected);
//   }
// };

const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("this is how it works?");
    // console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
const stringsA = ["string", "string"];
const stringsB = ["string", "string"];
assertEqual(stringsA, stringsB);

