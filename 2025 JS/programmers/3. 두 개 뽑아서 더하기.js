const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(',')
  .map(el => +el);

function solution(numbers) {
  const arr = [];

  numbers.map((el, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      arr.push(el + numbers[i]);
    }
  });

  return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(solution(input));
