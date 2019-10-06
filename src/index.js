let source = [1, 2, 3, 4, 1, 2, 3, 6, 8, 9];
let target = 10;

console.log(
  (function findIndexes(source, target) {
    let indices = [];
    source.forEach((elem, index) => {
      if (elem === target) {
        indices.push(index);
      }
    });
    if (indices.length === 0) {
      return [-1, -1];
    } else {
      return indices;
    }
  })(source, target)
);
