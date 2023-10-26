import java.io.*;
import java.util.*;

class Hand {
    int r;
    int c;

    public Hand(int r, int c) {
        this.r = r;
        this.c = c;
    }

    @Override
    public String toString() {
        return "c = " + c + " r = " + r;
    }
}

class Solution {
    static Hand left = new Hand(0, 3);
    static Hand right = new Hand(2, 3);

    static int[][] keypad = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { -1, 0, -1 } };

    public static int numberFromLeft(int num) {
        int numR = 1;
        int numC = num == 0 ? 3 : num / 3;

        return Math.abs(left.r - numR) + Math.abs(left.c - numC);
    }

    public static int numberFromRight(int num) {
        int numR = 1;
        int numC = num == 0 ? 3 : num / 3;

        return Math.abs(right.r - numR) + Math.abs(right.c - numC);
    }

    public String solution(int[] numbers, String hand) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < numbers.length; i++) {
            System.out.println("누를 숫자" + numbers[i]);

            if (numbers[i] % 3 == 1) {
                sb.append("L");
                left.r = 0;
                left.c = numbers[i] / 3;
            } else if (numbers[i] != 0 && numbers[i] % 3 == 0) {
                sb.append("R");
                right.r = 2;
                right.c = numbers[i] / 3 - 1;
            } else {
                if (numberFromLeft(numbers[i]) > numberFromRight(numbers[i])) {
                    sb.append("R");
                    right.r = 1;
                    right.c = numbers[i] == 0 ? 3 : numbers[i] / 3;
                } else if (numberFromLeft(numbers[i]) < numberFromRight(numbers[i])) {
                    sb.append("L");
                    left.r = 1;
                    left.c = numbers[i] == 0 ? 3 : numbers[i] / 3;
                } else {
                    if (hand.equals("right")) {
                        sb.append("R");
                        right.r = 1;
                        right.c = numbers[i] == 0 ? 3 : numbers[i] / 3;
                    } else {
                        sb.append("L");
                        left.r = 1;
                        left.c = numbers[i] == 0 ? 3 : numbers[i] / 3;
                    }
                }

            }
            System.out.println(left);
            System.out.println(right);
        }
        return sb.toString();
    }
}

/*
 * 엄지랑 검지로만 숫자입력하고싶어.
 * 엄지는 *에서 검지는 #에서 시작.
 * 상하좌우 4가지 방향으로만 이동가능.
 * 키패드ㅡ 이동한칸은 거리로 1에 해당.
 * 147은 왼손 엄지
 * 369는 오름손 엄지
 * 
 * 가운데 열의 4개 숫자는 현재 위치에서 더 가까운 엄지손가락 사용
 * 거리 같으면, 오른손잡이는 오른손 엄지, 왼손은 왼손 엄지사용
 * 
 * 
 */