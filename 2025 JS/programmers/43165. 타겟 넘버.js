function solution(numbers, target) {
    var answer = 0;
    const N = numbers.length;
    
    const dfs = (idx, calc, value) => {
        const current = calc === "+" ? value + numbers[idx]  : value - numbers[idx];

        if (idx === N-1) {
            if (current === target) answer += 1;
            return;
        }

        dfs(idx+1, "+", current)
        dfs(idx+1, "-", current)
        
    }
    
    dfs(0, "+", 0)
    dfs(0, "-", 0)
    
    return answer;
}