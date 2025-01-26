'use strict'

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()

const solution = (input) =>{
    let N = parseInt(input);
    let cnt = 0;

    const devideFive = (num) => {
        let max = 0;
        for (let i = 1; i <= (num / 5); i++){
            if ((num - (i * 5)) % 3 === 0){
                max = i;
            }
        }

        return max;
    }

    const devideThree = (num) => {
        if (num % 3 == 0) return num/3;
        return -1;
    }

    let fiveCnt = devideFive(N);
    cnt += fiveCnt;
    N -= (5 * fiveCnt);

    const threeCnt = devideThree(N);
    cnt += threeCnt;

    if (threeCnt === -1) return -1;
    return cnt;
}

console.log(solution(input));