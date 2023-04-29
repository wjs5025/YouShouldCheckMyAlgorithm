package BOJ_5073;

import java.io.*;
import java.util.*;

public class Main {
	static int a, b, c, maxLen;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		while (true) {
			String[] input = br.readLine().split(" ");
			a = Integer.parseInt(input[0]);
			b = Integer.parseInt(input[1]);
			c = Integer.parseInt(input[2]);

			if (a == 0 & b == 0 & c == 0)
				break;
			maxLen = Math.max(a, Math.max(b, c));

			// 삼각형 조건 부합하지 않음.
			if (!(a + b + c - maxLen > maxLen)) {
				System.out.println("Invalid");
				continue;
			}

			if (a == b && b == c && c == a) {
				System.out.println("Equilateral");
				continue;
			} else if (a != b && b != c && c != a) {
				System.out.println("Scalene");
				continue;
			} else {
				System.out.println("Isosceles");
				continue;
			}
		}
	}
}
