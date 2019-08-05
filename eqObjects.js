const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: [actual] === [expected]");
  } else {
    console.log("Assertion Failed: [actual] !== [expected]");
  }
};


const eqObjects = function(one, two) {
  if(one === two) {
    return true
  } else {
    return false
  }
};



const three = { two: "1", one: "2" };
const four = { two: "1", one: "2" };
eqObjects(three, four, three, four); // => true
eqObjects(three, four)
assertEqual(true, true);
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false