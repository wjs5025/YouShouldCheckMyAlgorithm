/*
21:04

1번 ~ N번까지 원을 이뤄앉았고,K번째 사람을 제거함.
한사람제거하면 나머지로 원을따라 계속함.

N명 사라질때까지 계속함.

1234567

09:47
Q. 왜 K-1 일까?
- 한개 pop 했으니까, 현위치를 한개 줄여줘야 맞긴하네..

*/

const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split(' ')
  .map(el => +el);
const [N, K] = input;

function solution(N, K) {
  const arr = new Array(N).fill(0).map((_, idx) => idx + 1);
  const result = [];
  let idx = 0;

  while (result.length !== N) {
    idx = (idx + K - 1) % arr.length;
    result.push(arr.splice(idx, 1));
  }

  return `<${result.join(', ')}>`;
}

console.log(solution(N, K));
