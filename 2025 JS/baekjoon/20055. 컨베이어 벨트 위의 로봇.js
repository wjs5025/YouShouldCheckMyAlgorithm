/*
20:23

길이가 N인 컨베이어.
2N인 벨트가 컨베이어 돌고있음.

한칸 회전하면 다음번호로 이동.
2N 번칸은 1번의 위치로 이동.

큐 인듯?

올리는 위치 1번
내리는 위치 N번

이동하면 무조건 내구도 1감소.

벨트는 로봇이랑 같이 이동해.
로봇이 이동하려면 이동하려는 칸에 로봇이 없어야되고, 칸에 1이상의 내구도가 있어야함.
올리는 위치 칸의 내구도가 0이 아니면, 올리는 위치에 로봇을 올려.
내구도가 0이난의 개수가 k이상이면 과정 종료함.

박스 올릴건데, 박스는 올리는 위치에서만 올릴 수있음.
박스가 내리는 위치에 도달하면 내림.

1. 컨베이어 큐를 만듬.
2. 하나씩 올려. (시간 올리면서, 단, 해당 칸에 로봇 없어야돼)

칸의 내구도네.

[실패.]
다시 연구하고 풀어보자.
*/

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [N, K] = input
  .shift()
  .split(' ')
  .map(el => +el);
const hp = input[0].split(' ').map(el => +el);

class Node {
  constructor(hp) {
    this.hp = hp;
    this.robot = 0;
  }
}

function solution(N, K, hp) {
  let stage = 0;
  let under = 0;

  //   Belt 초기화
  let belt = [];

  hp.forEach(el => {
    belt.push(new Node(el));
  });

  const rotate = () => {
    const tmp = belt.pop();
    belt = [tmp, ...belt];
  };

  const move = () => {
    const tmp = belt[2 * N - 1];

    for (let i = 0; i < 2 * N - 2; i++) {
      belt[i + 1] = belt[i];
    }

    belt[0] = tmp;
  };

  const up = () => {};

  const down = () => {};

  const check = () => {
    return under >= K;
  };

  while (true) {
    stage++;

    // 1. 회전
    rotate();
    down();

    // 2. 로봇 이동
    move();
    down();

    // 3. 로봇 올리기
    up();

    if (check()) break;
  }

  console.log(belt);
  return stage;
}

console.log(solution(N, K, hp));
