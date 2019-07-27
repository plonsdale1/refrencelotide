// function printItems(array) {
//   for (item of array) {
//     console.log(item);
//   }
// }
// these two are different because the latter is a recursion

function printItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}


const array = [[["😎"]], [["💩", "🤗"]], "😼", ["😂"]];
printItems(array);
