const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};

// const middle = function(arrayM) {
//   const result = [];
//   for(let position = 0; 0 < arrayM.length; position ++) {
//   console.log(position);
//   Mid = Math.floor(arrayM.length /2 === 0);
// if(position.length <= 2) {
//   return [];
// }else {
//   return result;
// }
//   }
// }

const middle = function(array) {
// need to find the midpoint of the array 

const a = Math.floor((array.length -1) / 2);
const b = Math.ceil((array.length -1) / 2) +1;
// const mid = array.length / 2; 
// const f = Math.floor(mid);
array[a] = array.slice(a, b);

const f = array[a];
return f;
  // return empty array
}





//   // code to return the middle-most part of the array if its odd, or if it is even with multiple nummbers in the middle. if it has zero, or one return an empty array.

// if() {

// }else /*if it doesnt pass the if condition*/ {
//   return  [];
// }
assertEqual(middle(["a"]), ["a"]);
assertEqual(middle(["b", "c", "d", "e", "f"]), ["d"]);
assertEqual(middle(["b", "c", "d", "e", "f", "g"]), ["d", "e"]);