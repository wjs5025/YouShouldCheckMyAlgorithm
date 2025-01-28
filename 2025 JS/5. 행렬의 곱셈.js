/**
 * 암기할 것.
 *
 * - 행렬의 결과 크기는 (앞 행렬 세로 길이) * (뒷 행렬 가로 길이), 즉 arr1.length * arr2[0].length
 * - 행렬 곱은 다음과 같이 구함.
 *  for(let i =0; i<arr1.length; i++){
 *    for (let j = 0; j < arr2[0].length; j++){
 *      for (let k =0; k < arr1[0].length; k++){
 *          result[i][j] = arr1[i][k] * arr2[k][j]
 *       }
 *    }
 *  }
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
