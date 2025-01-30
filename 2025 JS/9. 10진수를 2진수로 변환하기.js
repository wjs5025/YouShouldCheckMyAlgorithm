/*

2로 나눈 나머지를 저장.

10 % 2 = 0
5 % 2 = 1
2 % 2 = 0
1 % 2 = 1

1010
*/
const fs = require('fs');
const input = +fs.readFileSync('./dev/stdin').toString();

const solution = input => {
  const stack = [];
  let answer = '';

  while (true) {
    if (input < 1) break;

    if (input % 2 === 0) {
      stack.push(0);
    } else {
      stack.push(1);
    }

    input = Math.trunc(input / 2);
  }

  while (stack.length) {
    answer = answer.concat(stack.pop());
  }

  return answer;
};

console.log(solution(input));
