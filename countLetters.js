


// i need to return the number 
const countLetters = function(letters) {
  const answer = {};
  const str = letters.replace(/\s/g, '');// REPLACE DELETES SPACES AUTOMATICLY
  const lettersarr = str.split("");
    for(const letter of lettersarr) {
      answer[letter]  = 0;
    }
    for(const letter of lettersarr) {
      answer[letter]  += 1;
    }
    console.log(answer);
    return answer;
};








// console.log(assertEqual(countLetters("bob hi", { "b": 2, "o": 1, "h": 1, "i": 1}))
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};
console.log(assertEqual(countLetters("bob hi"), { b: 2, o: 1, h: 1, i: 1}));
module.exports = countLetters;