import java.io.*;
import java.util.*;

class Solution {
    static ArrayList<Point> points = new ArrayList<>();
    static long maxX = Long.MIN_VALUE;
    static long maxY = Long.MIN_VALUE;
    static long minX = Long.MAX_VALUE;
    static long minY = Long.MAX_VALUE;

    // 교점을 저장하는 클래스
    static class Point {
        long x;
        long y;

        Point(long x, long y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public String toString() {
            return String.format("(%d, %d)", this.x, this.y);
        }
    }

    // 두 배열(직선)을 검사해서, 정수 교점이 발생하면 points에 추가
    public void check(int[] a, int[] b) {
        long A = a[0];
        long B = a[1];
        long E = a[2];
        long C = b[0];
        long D = b[1];
        long F = b[2];

        long bottom = A * D - B * C;
        if (bottom == 0)
            return;

        double x = (double) (B * F - E * D) / bottom;
        double y = (double) (E * C - A * F) / bottom;

        if (x % 1 == 0 && y % 1 == 0) {
            maxX = Math.max(maxX, (long) x);
            maxY = Math.max(maxY, (long) y);
            minX = Math.min(minX, (long) x);
            minY = Math.min(minY, (long) y);
            points.add(new Point((long) x, (long) y));
        }
    }

    public String[] solution(int[][] line) {
        for (int i = 0; i < line.length; i++) {
            for (int j = i + 1; j < line.length; j++) {
                check(line[i], line[j]);
            }
        }

        String[][] result = new String[(int) (maxY - minY) + 1][(int) (maxX - minX) + 1];
        String[] answer = new String[result.length];

        // 결과 배열 초기화
        for (int i = 0; i < result.length; i++) {
            for (int j = 0; j < result[i].length; j++) {
                result[i][j] = ".";
            }
        }

        // 별 찍기
        for (Point p : points) {
            int x = (int) (p.x - minX);
            int y = (int) (maxY - p.y);
            result[y][x] = "*";
        }

        // 결과 출력
        for (int i = 0; i < result.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < result[i].length; j++) {
                sb.append(result[i][j]);
            }
            answer[i] = sb.toString();
        }

        return answer;
    }
}

// 2중 포문으로 모든 직선을 비교하고 교점들을 모은다.
// 교점들 중, (y최대 - y최소) * (x최대 - x최소) 구하기
