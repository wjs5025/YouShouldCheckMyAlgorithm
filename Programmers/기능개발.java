import java.io.*;
import java.util.*;

class Solution {
    static Stack<Integer> stack = new Stack<>();
    static int[] needDays;

    public static void init(int[] progresses, int[] speeds) {
        needDays = new int[progresses.length];

        for (int i = 0; i < progresses.length; i++) {
            int day = 0;

            while (progresses[i] < 100) {
                progresses[i] += speeds[i];
                day += 1;
            }

            needDays[i] = day;
        }
    }

    public List<Integer> solution(int[] progresses, int[] speeds) {
        // q에 task 집어넣기
        init(progresses, speeds);

        ArrayList<Integer> answer = new ArrayList<>();
        // 처음 릴리즈는 1부터 시작한다.
        int release = 1;
        int last = needDays[0];

        for (int i = 1; i < needDays.length; i++) {
            if (last < needDays[i]) {
                answer.add(release);
                last = needDays[i];
                release = 1;
            } else {
                release += 1;
            }
            if (i + 1 == needDays.length)
                answer.add(release);
        }

        return answer;
    }
}