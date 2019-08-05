
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("😀😀😀Assertion Passed:", actual, "===", expected);
  } else {
    console.log("Assertion Failed:", actual, "!==", expected);
  }
};



const takeUntil = function(array, callback) {
 // array === [1, 2, 5, 7, 2, -1, 2, 4, 5]
 // callback === x => x > 0

  let results = [];
  for(let i = 0; i <= array.length; i++) {
    let element = array[i];
    // element = 1 , 2 , 5 , 
    if(callback(element) === false ) { 
      return results;
    } else {
      results.push(element);
    }
  }
 
   
  
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x > 0);
console.log('---');





console.log(results1);


//i need to implement a function that searches through the elements of this array and returns a truthy value 
