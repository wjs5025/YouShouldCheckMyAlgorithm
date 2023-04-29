package BOJ_1260;

import java.io.*;
import java.util.*;

public class Main {
	static List<ArrayList<Integer>> graph = new ArrayList<>();
	static int N, M, V;
	static StringBuilder sb = new StringBuilder();
	static boolean[] visited;

	static void dfs(int start) {
		// 기저조건
		if (visited[start]) {
			return;
		}

		visited[start] = true;
		sb.append(start).append(" ");
		// 로직
		ArrayList<Integer> child = graph.get(start);
		for (int c : child) {
			dfs(c);
		}
	}

	static void bfs(int start) {
		StringBuilder tmp = new StringBuilder();
		Queue<Integer> q = new ArrayDeque<>();
		q.add(start);
		visited[start] = true;

		while (!q.isEmpty()) {
			int now = q.poll();
			tmp.append(now).append(" ");

			ArrayList<Integer> child = graph.get(now);

			for (int c : child) {
				if (visited[c])
					continue;
				visited[c] = true;
				q.add(c);
			}
		}
		sb.append(tmp).append("\n");
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = null;

		input = br.readLine().split(" ");
		N = Integer.parseInt(input[0]);
		M = Integer.parseInt(input[1]);
		V = Integer.parseInt(input[2]);

		for (int i = 0; i <= N; i++) {
			graph.add(new ArrayList<>());
		}

		for (int i = 0; i < M; i++) {
			input = br.readLine().split(" ");
			int a = Integer.parseInt(input[0]);
			int b = Integer.parseInt(input[1]);

			graph.get(a).add(b);
			graph.get(b).add(a);
		}

		for (ArrayList<Integer> g : graph) {
			Collections.sort(g);
		}

		visited = new boolean[N + 1];
		dfs(V);
		sb.append("\n");
		visited = new boolean[N + 1];
		bfs(V);
		System.out.println(sb);
	}
}
