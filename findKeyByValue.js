// console.log("HEY")

const assertEqual = function(actual, expected) {
  if ((actual) === (expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};

// const shoeRack = {
//   Peter: "nikes",
//   Kenny: undefined,
//   Bryson: "magazine"
// }

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
  for(let key in object) {
    // var objectsValue = object[key];
    console.log(object[key], value);
    console.log(key);
    if (object[key] === value) {
      return key;
    }
    // console.log(Object.keys(value))
  }
};

// findKeyByValue(shoeRack, "nikes") === "Peter"
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// bestTVShowsByGenre,
// bestTVShowsByGenre,