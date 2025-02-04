/*
NxN 크기의 격자
크레인 좌우로 움직여서 멈춘 위치에서 인형 뽑기 가능.
바구니에 같은거 생기면 pop

맵 board
크레인 작동위치 배열 Moves

쌍이 맞아서 사라진 인형 개수 리턴 (2개씩 사라지니까, 카운트해서 곱하기 2하거나, 카운트마다 2 더하기)

0,0,0,0,0
0,0,1,0,3
0,2,5,0,1
4,2,4,4,2
3,5,1,3,1

[1,5,3,5,1,2,1,4]
*/

const fs = require('fs');
const input = +fs.readFileSync('./dev/stdin').toString().split(',');

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  const N = board.length;
  const done = []; // 뽑은 인형들

  // 맵 생성(map)
  const map = new Array(N);
  for (let i = 0; i < N; i++) {
    map[i] = new Array(N).fill(0);
  }

  // 인형 채우기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[j][i] = board[i][j];
    }
  }

  // 뽑아서 map 갱신하고, done에 들어갈 값 리턴
  const 뽑기 = moveIdx => {
    let 인형 = 0;

    for (let i = 0; i < map[moveIdx].length; i++) {
      if (map[moveIdx][i] !== 0) {
        인형 = map[moveIdx][i];
        map[moveIdx][i] = 0;
        break;
      }
    }

    return 인형;
  };

  // moves
  moves.forEach(move => {
    const 인형 = 뽑기(move - 1);
    if (인형 === 0) return;
    if (done[done.length - 1] === 인형) {
      done.pop();
      answer += 2;
    } else {
      done.push(인형);
    }
  });

  return answer;
}

console.log(solution(board, moves));
