// Developer: Le Ngoc Ha.
//Email: kngocha99.job@gmail.com.
//Phone:

//  Part 1:
const sum = (param) => {
  let sum = 0;
  for (let i = 1; i <= param; i++) {
    sum += i;
  }
  return sum;
};

//Part 2.1:
const sortArray = () => {
  const points = [12, 10, 15, 11, 14, 13, 16];

  if (points.length === 0) {
    return;
  }
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < points.length; i += 1) {
      if (points[i - 1] > points[i]) {
        done = false;
        let tmp = points[i - 1];
        points[i - 1] = points[i];
        points[i] = tmp;
      }
    }
  }
  return points;
};

//Part 2.2
function sortAbsValues(sortedArray) {
  let idx = -1,
    negs,
    pos,
    result = [],
    nIdx = 0,
    pIdx = 0;
  if (sortedArray.length === 0) return result;
  // Find the index where positive elements begin
  while (idx < sortedArray.length && sortedArray[++idx] < 0);
  // Get elements till the index and reverse the array
  negs = sortedArray.slice(0, idx).reverse();
  // Get elements from the index till the end
  pos = sortedArray.slice(idx);
  // Merging algorithm implementation which merges `negs` and `pos`
  while (nIdx < negs.length || pIdx < pos.length) {
    if (nIdx < negs.length && pIdx < pos.length) {
      if (Math.abs(negs[nIdx]) <= pos[pIdx]) result.push(negs[nIdx++]);
      else result.push(pos[pIdx++]);
    } else if (nIdx < negs.length) result.push(negs[nIdx++]);
    else result.push(pos[pIdx++]);
  }
  return result;
}

//Part 3:
const replaceDimention = (str = "", size = "") => {
  if (str.length === 0 || size.length == 0) {
    return;
  }
  return str.replace(
    /[_]?(\d{2,4}x\d{2,4}|\d{2,4}x|x\d{2,4})?.jpg\?/,
    `_${size}.jpg?`
  );
};

console.log(sum(7));
console.log(sortArray());
console.log(sortAbsValues([-8, -5, -3, -1, 3, 6, 9]));
console.log(
  replaceDimention("https://cdn.shopify.com/e-800x600-jpg.jpg?v=15", "100x200")
);
