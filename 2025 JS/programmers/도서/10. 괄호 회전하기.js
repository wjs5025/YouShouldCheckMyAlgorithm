/*

*/
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString();

/*
1. 옳은 괄호인지 판단하는 로직 먼저 짜기 (boolean)
2. 한칸씩 옮기면서 위 로직을 통과하는지 검사.
- 총 s.length 번 돌건데, 통과하면 cnt ++.
*/

const check = arr => {
  const stack = [];
  let result = true;

  arr.forEach(el => {
    if (el === '[' || el === '(' || el === '{') {
      stack.push(el);
    } else {
      if (!stack.length) {
        result = false;
        return;
      }

      const top = stack.pop();

      if ((el === ']' && top !== '[') || (el === ')' && top !== '(') || (el === '}' && top !== '{')) {
        result = false;
        return;
      }
    }
  });

  return result && stack.length === 0;
};

const rotate = arr => {
  const el = arr.shift();
  arr.push(el);
};

function solution(s) {
  var answer = 0;
  let rotateCnt = s.length;
  const arr = s.split('');

  do {
    if (check(arr)) answer += 1;

    rotate(arr);
    rotateCnt -= 1;
  } while (rotateCnt !== 0);

  return answer;
}

console.log(solution(input));
