/**
 * 암기할 것.
 */
const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(',')
  .map(el => +el);

function solution(arr1, arr2) {
  const arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr.push(new Array(arr2[0].length).fill(0));
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        arr[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return arr;
}

console.log(solution(input));
