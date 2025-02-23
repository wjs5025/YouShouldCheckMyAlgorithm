/*
n개의 양의 정수로 이루어진 arr, 정수 타겟이 주어졌을 때, 이중에서 합이 target인 두 수가 arr에 있는지 찾고, 있으면 true 없으면 false를 반환하는 함수를 작성하라.
*/

const arr = [1, 2, 3, 4, 8];
const target = 6;
const result = true;

function solution(arr, target) {
  const hash = new Array(target + 1).fill(0);

  const fillHash = () => {
    for (v of arr) {
      if (v < target) {
        hash[v] = 1;
      }
    }
  };

  fillHash();

  for (v of arr) {
    if (v >= target) continue;
    if (hash[target - v] === 1) return true;
  }

  return false;
}

if (solution(arr, target) === result) console.log('정답!');
else console.log('실패!');
