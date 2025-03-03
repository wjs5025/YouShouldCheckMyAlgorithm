/*

*/
function solution(word) {
  const map = new Map();
  const dic = ['A', 'E', 'I', 'O', 'U'];
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(dic[i]);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      arr.push(dic[i] + dic[j]);
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        arr.push(dic[i] + dic[j] + dic[k]);
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        for (let l = 0; l < 5; l++) {
          arr.push(dic[i] + dic[j] + dic[k] + dic[l]);
        }
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        for (let l = 0; l < 5; l++) {
          for (let m = 0; m < 5; m++) {
            arr.push(dic[i] + dic[j] + dic[k] + dic[l] + dic[m]);
          }
        }
      }
    }
  }

  arr.sort();

  return arr.findIndex(el => el === word) + 1;
}
