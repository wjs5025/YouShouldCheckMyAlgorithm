/*
알파벳 소문자 문자열 s

1. 같은 알파벳이 2개 붙어있는 짝 찾기.
2. 짝을 제거하고, 앞 뒤로 문자열 이어붙이기
3. 과정을 반복하여 문자열을 모두 제거하면 종료.
문자열 s가 있을 때, 수행할수 있나 없나 확인


앞에부터 넣어 
- 지금의 top이랑 다르면 push, 같으면 pop해서 상쇄
- push하다가, 현재 문자열 길이보다 배열 크기가 더 크면 0 리턴 후 종료
- 아니면 계속 진행하다가 문자열 길이 0, 배열크기 0일 때 종료

단, 모두 상쇄한 뒤에 stack에 요소가 남아있으면 실패(0)

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX와 같이 push만 되는 경우를
방어하기위한 if 로직. (이는 s.length/2 < stack.length 로도 해결가능.)

*/

const fs = require('fs');
const input = +fs.readFileSync('./dev/stdin').toString();

function solution(s) {
  let answer = 1;
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (s.length - i - 1 < stack.length) {
      answer = 0;
      break;
    }
  }

  if (stack.length) answer = 0;
  return answer;
}

console.log(solution(input));
