/*
배열의 중복값 제거하고, 내림차순 정렬.
4,2,2,1,3,4 -> 4,3,2,1
2,1,1,3,2,5,4 -> 5,4,3,2,1
*/

const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(',')
  .map(el => +el);

const solution = input => {
  const set = new Set(input);
  return [...set].sort((a, b) => b - a);
};

console.log(solution(input));
