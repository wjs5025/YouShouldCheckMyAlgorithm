function solution(participant, completion) {
  const hash = {};

  for (p of participant) {
    if (!!hash[p]) hash[p]++;
    else hash[p] = 1;
  }

  for (c of completion) {
    hash[c]--;
  }

  for (key of Object.keys(hash)) {
    if (!!hash[key]) return key;
  }
}
