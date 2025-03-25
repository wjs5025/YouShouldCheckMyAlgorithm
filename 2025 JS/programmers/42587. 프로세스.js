class Node {
  constructor(priority, isTarget) {
    this.priority = priority;
    this.isTarget = isTarget;
  }
}

class Queue {
  queue = [];
  front = 0;
  rear = 0;

  push(d) {
    this.queue.push(d);
    this.rear++;
  }

  pop() {
    return this.queue[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(priorities, location) {
  let cnt = 0;
  const queue = new Queue();
  const maximum = [];

  priorities.forEach((el, idx) => {
    const isTarget = idx === location;
    queue.push(new Node(el, isTarget));
    maximum.push(el);
  });

  maximum.sort((a, b) => b - a);

  while (true) {
    const now = queue.pop();

    if (now.priority < maximum[0]) {
      queue.push(now);
    } else {
      cnt++;
      maximum.shift();
      if (now.isTarget) {
        return cnt;
      }
    }
  }
}
