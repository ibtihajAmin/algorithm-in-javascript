/*
Kadane’s Algorithm is an iterative dynamic programming algorithm. It calculates the maximum sum subarray ending at a particular position by using the maximum sum subarray ending at the previous position
*/

let maximumSum = (arr) => {
  let len = arr.length;
  let currentSum = 0;
  let maximumSum = 0;

  for (let i = 0; i < len; i++) {
    currentSum = Math.max(arr[i], arr[i] + currentSum);
    if (currentSum > maximumSum) {
      maximumSum = currentSum;
    }
  }
  //   return maximumSum;
  console.log(maximumSum);
};

maximumSum([-4, 5, 7, -6, 10, -15, 3]);
