/*
[메모]
*/

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');
const lst = input[0].split(' ').map(el => +el);
const searchList = input[1].split(' ').map(el => +el);

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) return (this.root = new Node(value));
    let current = this.root;

    while (true) {
      if (current.data > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          break;
        }
      }
    }
  }

  search(target) {
    let current = this.root;

    while (current) {
      if (current.data === target) return true;

      if (target < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

function solution(lst, searchList) {
  let answer = [];
  const tree = new Tree();

  lst.forEach(el => tree.insert(el));
  searchList.forEach(el => answer.push(tree.search(el)));
  console.log(tree);

  return answer;
}

console.log(solution(lst, searchList));
