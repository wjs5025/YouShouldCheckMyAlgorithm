/*
실패율 = 스테이지에 도달했으나, 아직 클리어하지 못한 플레이어수 / 스테이지에 도달한 플레이어 수

전체 스테이지는 N
현재 멈춰있는 스테이지 번호 배열 stages

실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열 리턴하기.

[2, 1, 2, 6, 2, 4, 3, 3]

1. 스테이지N 배열로 전체 정의하기
2. 각 스테이지 실패율을 배열에 담기
    - 즉, 실패율은 현재 스테이지의 개수 /현재 스테이지 보다 큰 숫자의 개수
3. 정렬하기
*/

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');
const N = +input[0];
const arr = input[1].split(',').map(el => +el);

function solution(N, stages) {
  const answer = new Array(N + 1).fill(0);

  answer.forEach((el, idx) => {
    if (idx === 0) return;

    const 아직 = stages.filter(st => st === idx).length;
    const 도달 = stages.filter(st => st >= idx).length;
    const 실패율 = 아직 / 도달 || 0;

    answer[idx] = { key: idx, value: 실패율 };
  });

  answer.shift();
  answer.sort((a, b) => b.value - a.value);

  return answer.map(el => el.key);
}

console.log(solution(N, arr));
