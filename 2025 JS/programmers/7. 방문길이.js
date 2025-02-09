/*
설계
- 각 direction에 따른 함수 구현 (맵 초과 방어로직도 함께 구현)
- dirs 배열 순회하면서 각 함수 실행.
- 이때, 이동전, 후의 좌표를 문자열로 묶어서 visited에 push.
- 단, 방향은 상관없으므로, 왕복로 포함 총 2개의 길을 push.
- 단, 이동이 없는경우(전 후 좌표가 같은 경우)에는 아예 무시.
- 이동이 일어나면서 visited에 포함되지않은 길이면 answer 증가.
*/

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');
const N = +input[0];
const arr = input[1].split(',').map(el => +el);

function solution(dirs) {
  dirs = dirs.split('');
  const visited = [];

  var answer = 0;

  let x = 5;
  let y = 5;

  function U() {
    if (y - 1 < 0) return;
    y -= 1;
  }

  function D() {
    if (y + 1 > 10) return;
    y += 1;
  }

  function R() {
    if (x + 1 > 10) return;
    x += 1;
  }

  function L() {
    if (x - 1 < 0) return;
    x -= 1;
  }

  dirs.forEach(dir => {
    const beforeY = y;
    const beforeX = x;

    switch (dir) {
      case 'U': {
        U();
        break;
      }
      case 'D': {
        D();
        break;
      }
      case 'R': {
        R();
        break;
      }
      case 'L': {
        L();
        break;
      }
      default:
        break;
    }

    if (beforeY === y && beforeX === x) return;
    const road = `${beforeY}${beforeX}${y}${x}`;
    const road2 = `${y}${x}${beforeY}${beforeX}`;

    if (!visited.includes(road) && !visited.includes(road2)) answer += 1;
    visited.push(road, road2);
  });

  console.log(visited);

  return answer;
}

console.log(solution(N, arr));
