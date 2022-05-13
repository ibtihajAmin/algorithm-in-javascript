let arr1 = [5, 1, 87, 3, 33, 36, 67];

const linearSearch = (arr, findingValue) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === findingValue) {
      return `Item has found at index ${i}`;
    }
  }
  return -1;
};

console.log(linearSearch(arr1, 5));
console.log(linearSearch(arr1, 1));
console.log(linearSearch(arr1, 87));
console.log(linearSearch(arr1, 3));
console.log(linearSearch(arr1, 33));
console.log(linearSearch(arr1, 36));
console.log(linearSearch(arr1, 67));
console.log(linearSearch(arr1, 69));
