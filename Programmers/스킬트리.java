import java.io.*;
import java.util.*;

/*
스트림을 애용하자.
Arrays.stream()
stream.map(s -> ~~);
.filter(item -> ~~)
.count(), .sum() 등등
 */
class Solution {
    public int solution(String skill, String[] skill_trees) {
        return (int) Arrays.stream(skill_trees)
                .map(s -> s.replaceAll("[^" + skill + "]", ""))
                .filter(item -> skill.startsWith(item))
                .count();
    }
}
