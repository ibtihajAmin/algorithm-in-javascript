let arr1 = [12, 15, 17, 19, 21, 24];

const binarySearch = (arr, searchingValue) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === searchingValue) {
      return `Value is found at index ${mid}`;
    } else if (arr[mid] < searchingValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  mid = Math.floor((left + right) / 2);
};

console.log(binarySearch(arr1, 17));
