const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(',')
  .map(el => +el);

function solution(answers) {
  var answer = [];

  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const people = [0, 0, 0];

  answers.map((el, idx) => {
    if (el === first[idx % 5]) people[0] += 1;
    if (el === second[idx % 8]) people[1] += 1;
    if (el === third[idx % 10]) people[2] += 1;
  });

  const max = Math.max(...people);

  people.forEach((el, idx) => {
    if (el === max) answer.push(idx + 1);
  });

  return answer;
}

console.log(solution(input));
