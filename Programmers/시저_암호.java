import java.io.*;
import java.util.*;

class Solution {
    static int[] numbers;
    static int length;

    public String solution(String s, int n) {
        StringBuilder answer = new StringBuilder();
        length = s.length();
        numbers = new int[s.length()];

        for (int i = 0; i < length; i++) {
            int tmp = s.charAt(i);

            // 소문자일 경우
            if (tmp >= 97) {
                if (tmp + n > 122) {
                    numbers[i] = tmp + n - 26;
                } else {
                    numbers[i] = tmp + n;
                }
            }
            // 대문자일 경우
            else if (tmp >= 65) {
                if (tmp + n > 90) {
                    numbers[i] = tmp + n - 26;
                } else {
                    numbers[i] = tmp + n;
                }
            }
            // 공백일 경우
            else {
                numbers[i] = tmp;
            }
        }

        for (int i = 0; i < length; i++) {
            answer.append(Character.toString(numbers[i]));
        }
        System.out.println(Arrays.toString(numbers));

        return answer.toString();
    }
}

/*
 * A = 65
 * Z = 90
 * 
 * a = 97
 * space = 32
 * 
 * z= 122
 * 1.
 */