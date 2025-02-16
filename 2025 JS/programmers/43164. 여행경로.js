function solution(tickets) {
  var answer = [];
  const N = tickets.length;
  const routes = [];

  const dfs = (ticket, visited, route) => {
    if (tickets.length === visited.length) {
      route = `${route},${ticket[1]}`;
      routes.push(route);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited.includes(i)) continue;
      if (ticket[1] !== tickets[i][0]) continue;
      dfs(tickets[i], [...visited, i], `${route},${tickets[i][0]}`);
    }
  };

  for (let i = 0; i < N; i++) {
    if (tickets[i][0] === 'ICN') {
      dfs(tickets[i], [i], 'ICN');
    }
  }

  routes.sort();
  return routes[0].split(',');
}

/**
16:25

인천공항 시작해서 DFS 돌리기.
[기저 조건]
- 모든 티켓을 사용했을 때

[탐색 조건]
- 방문한 티켓은 제외
- 출발지와 도착지가 같지 않으면 제외
- 그 외에는 탐색

마지막에 사전순 정렬 (자동으로 알파벳빠른순 정렬) 후, 첫 요소 리턴.
*/
