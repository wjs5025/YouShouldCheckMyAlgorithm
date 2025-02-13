
/**
16:47 ~

맵은 N x M
1. bfs 돌리기
- 돌면서 최솟값 갱신 및 체크
2. 최솟값 비교 후 리턴
- MAX와 같다면 도착 못한거니까 -1
- 그 외엔 최솟값 리턴
*/

function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;

    const visited = new Array(N).fill(0).map(()=>new Array(M).fill(0));
    const dy = [1, 0, -1, 0]
    const dx = [0, 1, 0, -1]
    let min = Number.MAX_SAFE_INTEGER;
    
    const bfs = (sy, sx) => {
        const queue = [[sy, sx, 1]];
        visited[sy][sx] = 1;
        
        while (queue.length) {
            const [y, x, cnt] = queue.shift();
            
            if (min <= cnt) continue;
            if (y === N-1 && x === M-1) {
                min = Math.min(min, cnt);
                continue;
            }

            for (let i =0; i<4; i++){
                const ny = y + dy[i];
                const nx = x + dx[i];
                
                if (ny >= N || nx >= M || ny < 0 || nx < 0) continue;
                if (visited[ny][nx] === 1) continue;
                if (maps[ny][nx] === 0) continue;
                
                visited[ny][nx] = 1;
                queue.push([ny,nx,cnt+1]);
            }
            
            
        }
        
    }
    
    bfs(0,0);
    
    if (min === Number.MAX_SAFE_INTEGER) return -1;
    return min;
}
