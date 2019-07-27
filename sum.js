function sumToOne(n) {
  let sum = 0;
  for(let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
}
console.log(sumToOne(4));
// this problem sums every whole from 4 to one 4+3+2+1 = 10