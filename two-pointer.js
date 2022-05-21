//Problem Name: Merge two sorted array into another sorted array
//Solving Approach: Two Pointer
// Time Complexity : O(n)

const mergeTwoArray = (arr1, arr2) => {
  let finalArr = [];
  let i = 0;
  let j = 0;
  let n = arr1.length;
  let m = arr2.length;

  for (let k = 0; k < n + m; k++) {
    if (arr1[i] <= arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }
  return finalArr;
};

let a = [1, 2, 4, 6];
let b = [3, 5, 7];

mergeTwoArray(a, b);
