/*
순회 구현하는 문제임.

1. 전위
2. 중위
3. 후위

순회 결과를 출력하라


[구현과정]
1. input의 0번 요소를 루트노드 삼음.
2. 그뒤로 계속 추가.

*/

const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split(' ')
  .map(el => el.trim())
  .map(el => +el);

function solution(input) {
  const tree = [0, ...input];

  const 전위 = idx => {
    if (idx > input.length) return '';

    let str = `${tree[idx]} `;
    str += 전위(idx * 2);
    str += 전위(idx * 2 + 1);

    return str;
  };

  const 중위 = idx => {
    if (idx > input.length) return '';

    let str = '';
    str += 중위(idx * 2);
    str += `${tree[idx]} `;
    str += 중위(idx * 2 + 1);

    return str;
  };

  const 후위 = idx => {
    if (idx > input.length) return '';

    let str = '';
    str += 후위(idx * 2);
    str += 후위(idx * 2 + 1);
    str += `${tree[idx]} `;

    return str;
  };

  return [전위(1, '').trimEnd(), 중위(1, '').trimEnd(), 후위(1, '').trimEnd()];
}

console.log(solution(input));
