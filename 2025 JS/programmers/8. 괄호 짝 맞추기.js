/*
정상괄호가 아닌 경우.
1. 닫는 괄호 먼저 나올때
2. 다 뺐는데, 쌍이 안맞을때.

여는괄호는 push해서 쌓다가, 닫는 괄호 나오면 pop해서 상쇄하면됨.
- 배열이 비어있는데 닫는괄호 나오면 잘못된 괄호임 (1에 의해서)
- 그러고 배열이 남으면 잘못된 괄호임. (2에 의해서)

*/
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('');

const solution = input => {
  let answer = false;
  const arr = [];

  input.forEach(el => {
    if (el === '(') arr.push(el);
    else {
      if (!arr.length) return;
      arr.pop();
    }
  });

  if (arr.length) answer = false;
  else answer = true;
  return answer;
};

console.log(solution(input));
