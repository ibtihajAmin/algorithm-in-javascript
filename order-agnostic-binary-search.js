// Problem Name: Order Agnostic Binary Search               ///Asc: 10,20,30,40,50
// Time Complexity: O(log(n))                               /// Desc: 50,40,30,20,10

const orderAgnosticBinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = start + (end - start / 2);

    if (arr[mid] === target) return mid;

    if (isAscending) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
};

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [6, 5, 4, 3, 2, 1];

orderAgnosticBinarySearch(arr1, 2);
orderAgnosticBinarySearch(arr2, 2);
