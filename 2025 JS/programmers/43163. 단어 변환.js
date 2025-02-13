function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const canReplace = (w1, w2) => {
        let cnt = 0;
        
        for (let i =0; i < w1.length; i++) {
            if (w1[i] !== w2[i]) cnt++;
            if (cnt > 1) return false;
        }
        
        return cnt < 2;
    }
    
    const map = new Map();
    
    words.forEach(w =>{
        map.set(w, Number.MAX_SAFE_INTEGER)
    })
    
    const dfs = (now, cnt) =>{
        if (map.get(now) <= cnt) return;
      
        map.set(now, cnt);
        words.forEach(word => {
            if (canReplace(now, word)) dfs(word, cnt + 1);
        })
    }
    
    dfs(begin, 0)
    
    let answer = map.get(target);
    return answer === Number.MAX_SAFE_INTEGER ? 0 : answer
}

/*
begin to target

words에 있는 단어로만 변경 가능.
dfs + 메모이제이션 써야할듯?

set하고, 이미 있으면 리턴해서 종료. (이미 결과를 본 친구이기에)
마지막 메모이제이션 맵에 타겟이 없으면 0리턴. 있으면 단계
*/