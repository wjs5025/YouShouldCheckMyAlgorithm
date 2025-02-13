/*
1.맵초기화
2.상우하좌 만들기
3.DFS 돌리기
- 돌리다가 최소값보다 크면 리턴종료.
*/

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split("\n");
const line = input.shift();
const [N, M] = line.split(" ").map(el => +el);

function solution(N,M,input) {
  const map = new Array(N).fill(null).map(() => new Array(M).fill(0));

  const visited = new Array(N).fill(null).map(() => new Array(M).fill(false));
  const dy = [1, 0, -1, 0]
  const dx = [0, 1, 0, -1]
  let min = Number.MAX_SAFE_INTEGER;

  const initMap = () =>{
    for (let i =0; i< N ; i++){
      const line = input[i].split("");
      for (let j = 0; j <M; j++){
        map[i][j] = +line[j];
      }
    }
  }

  const bfs =(startY, startX) =>{
    // 큐에 담아놓고 시작, 방문처리
    const queue = [[startY, startX, 1]];
    visited[startY][startX] = true;

    while(queue.length){
      const [y,x,cnt] = queue.shift(); // 큐에서 뽑고,

      if (cnt >= min) continue; // 최솟값보다 커지면 돌필요없으니 리턴

      if (y === N-1 && x === M-1) { // 도착지면 min 갱신
        min = Math.min(min, cnt)
        continue;
      }

      for (let i =0; i< 4; i++){
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (ny >= N || nx >= M || ny < 0 || nx < 0) continue;
        if (visited[ny][nx]) continue;
        if (map[ny][nx] === 0) continue;

        visited[ny][nx] = true;
        queue.push([ny, nx, cnt+1])
      }
    }
  }



  initMap();
  bfs(0, 0);

  return min;
}

console.log(solution(N,M,input));
