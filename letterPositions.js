const letterPositions = function(sentence) {
  const results = {};
  const lettersArray = sentence.replace(/\s/g, '').split("");
  for(i = 0; i < lettersArray.length; i++) {
    const character = lettersArray[i];
    if(results[character]) { // checking if results the object has a character in the current increment.
      results[character].push(i) // if it doesnt put it in this way.
    } else { //same as saying if(results[character] === undefined)
      results[character] = [i]
    }
    console.log("the current results object looks like this:" )
    console.log(results)
  }
  return results;
};






const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};
assertEqual(letterPositions("lighthouse in the house").e, [1]);