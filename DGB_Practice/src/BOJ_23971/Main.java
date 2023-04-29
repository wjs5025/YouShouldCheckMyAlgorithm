package BOJ_23971;

import java.io.*;
import java.util.*;

public class Main {
	static int H, W, N, M;
	static int cnt = Integer.MIN_VALUE;

	static void updateCnt(int startR, int startC) {
		int tmp = 0;

		for (int i = startR; i < H; i += (N + 1)) {
			for (int j = startC; j < W; j += (M + 1)) {
				tmp++;
			}
		}
		cnt = Math.max(cnt, tmp);
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = br.readLine().split(" ");

		H = Integer.parseInt(input[0]);
		W = Integer.parseInt(input[1]);
		N = Integer.parseInt(input[2]);
		M = Integer.parseInt(input[3]);

		// map[i][j] 부터 시작. 여기서 (세로는 N, 가로는 M식 늘려가면서 최대한 가 카운트도해.)
		updateCnt(0,0 );
		System.out.println(cnt);
	}
}
