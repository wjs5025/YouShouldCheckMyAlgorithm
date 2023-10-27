import java.io.*;
import java.util.*;

class Pos {
    int r = 0;
    int c = 0;
    int cnt = 0;

    public Pos(int r, int c, int cnt) {
        this.r = r;
        this.c = c;
        this.cnt = cnt;
    }

    @Override
    public String toString() {
        return "r = " + r + " c = " + c;
    }
}

class Solution {
    static int N = 0; // 행
    static int M = 0; // 열
    static int[] dr = { 0, 1, 0, -1 }; // 상우하좌
    static int[] dc = { -1, 0, 1, 0 };
    static int[][] map;
    static int min = Integer.MAX_VALUE;

    static void bfs(Pos start) {
        boolean[][] visited = new boolean[N][M];
        visited[start.c][start.r] = true;

        Queue<Pos> q = new ArrayDeque<>();
        q.offer(start);

        while (!q.isEmpty()) {
            Pos current = q.poll();

            if (current.r == M - 1 && current.c == N - 1) {
                min = Math.min(min, current.cnt);
                return;
            }

            for (int i = 0; i < 4; i++) {
                int nr = current.r + dr[i];
                int nc = current.c + dc[i];

                if (nr < 0 || nc < 0 || nr > M - 1 || nc > N - 1)
                    continue;
                if (map[nc][nr] == 0)
                    continue;
                if (!visited[nc][nr]) {
                    visited[nc][nr] = true;
                    q.offer(new Pos(nr, nc, current.cnt + 1));
                }
            }

        }
    }

    public int solution(int[][] maps) {
        map = maps;
        int answer = 0;

        N = maps.length; // c 개수
        M = maps[0].length; // r 개수

        bfs(new Pos(0, 0, 1));

        if (min == Integer.MAX_VALUE)
            return -1;
        return min;
    }
}

/*
 * 두 팀으로 나눠서 진행해.
 * 상대 팀 진영 먼저 파괴하며 ㄴ이겨
 * 
 * 5x5 맵에
 * 내 캐릭터가 1,1 에 있고, 상대는 5,5에 있어
 * 
 * 상우하좌
 * 지나가야하는 칸의 개수의 최솟값 리턴.
 * 
 * 못가면 -1리턴
 * maps = n x m의 크기.
 * 맵은 0과 1로만 이뤄졌어.
 * 
 */