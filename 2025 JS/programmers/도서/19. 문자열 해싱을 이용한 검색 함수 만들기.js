/*
stirngList와 쿼리리스트가 있을때, 쿼리리스트에 있는 문자ㅕㅇㄹ이 strlist에 ㅇㅆ는지 여부 확인
*/

const stringList = ['apple', 'banana', 'cherry'];
const queryList = ['banana', 'kiwi', 'melon', 'apple'];
const result = [true, false, false, true];

const solution = (stringList, queryList) => {
  const hash = {};
  const result = [];

  for (str of stringList) {
    hash[str] = 1;
  }

  for (query of queryList) {
    result.push(!!hash[query]);
  }

  return result;
};

console.log(solution(stringList, queryList));
