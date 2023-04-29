package BOJ_11723;

import java.io.*;
import java.util.*;

public class Main {
	static List<Integer> al = new ArrayList<>();

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = null;
		int cnt = Integer.parseInt(br.readLine());
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i <= 20; i++) {
			al.add(0);
		}
		for (int i = 0; i < cnt; i++) {
			input = br.readLine().split(" ");
			
			int num = 0;
			switch (input[0]) {
			case "add":
				num = Integer.parseInt(input[1]);
				if (al.get(num) == 0)
					al.set(num, num);
				break;
			case "check":
				num = Integer.parseInt(input[1]);
				if (al.get(num) == 0)
					sb.append(0).append("\n");
				else
					sb.append(1).append("\n");
				break;
			case "remove":
				num = Integer.parseInt(input[1]);
				if (al.get(num) != 0)
					al.set(num, 0);
				break;
			case "toggle":
				num = Integer.parseInt(input[1]);
				if (al.get(num) != 0)
					al.set(num, 0);
				else
					al.set(num, num);
				break;
			case "all":
				for (int j = 1; j <= 20; j++) {
					al.set(j, j);
				}
				break;
			case "empty":
				for (int j = 1; j <= 20; j++) {
					al.set(j, 0);
				}
				break;
			default:
				break;
			}
		}
		System.out.println(sb);
	}
}
