/*
개수 2 < n <10^5 (100000) 10만 *10만이면 1억 넘어서 n제곱은 못씀.

[1,-5,2,4,3] -> [-5, 1,2,3,4]
[2,1,1,3,2,5,4] -> [1,1,2,2,3,4,5]
[6,1,7] -> [1,6,7]
[1,10,5,3,100]
 */

const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split(',')
  .map(el => +el);

const solution = input => {
  return input.sort((a, b) => a - b);
};

console.log(solution(input));
