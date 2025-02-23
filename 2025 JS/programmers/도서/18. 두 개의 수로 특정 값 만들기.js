/*
n개의 양의 정수로 이루어진 arr, 정수 타겟이 주어졌을 때, 이중에서 합이 target인 두 수가 arr에 있는지 찾고, 있으면 true 없으면 false를 반환하는 함수를 작성하라.
*/

const arr = [2, 3, 5, 9];
const target = 10;
const result = false;

function solution(arr, target) {
  const filteredArr = arr.filter(el => el < target);
  const hash = {};

  console.log(filteredArr);
  for (let i = 0; i < filteredArr.length - 1; i++) {
    for (let j = i + 1; j < filteredArr.length; j++) {
      const value = filteredArr[i] + filteredArr[j];
      hash[value] = value;
    }
  }

  return !!hash[target];
}

if (solution(arr, target) === result) console.log('정답!');
else console.log('실패!');
