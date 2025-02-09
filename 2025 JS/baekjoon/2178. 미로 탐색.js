const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split(',')
  .map(el => +el);
