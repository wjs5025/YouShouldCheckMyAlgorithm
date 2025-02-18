class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(data) {
    this.items.push(data);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  seek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(progresses, speeds) {
  var answer = [];

  const queue = new Queue();

  progresses.forEach(p => queue.push(p));

  while (true) {
    for (let i = 0; i < speeds.length; i++) {
      queue.items[i] += speeds[i];
    }

    let cnt = 0;
    while (queue.seek() >= 100) {
      queue.pop();
      cnt++;
    }
    if (cnt) answer.push(cnt);

    if (queue.isEmpty()) break;
  }

  return answer;
}
