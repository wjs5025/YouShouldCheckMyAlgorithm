class Truck {
  constructor(weight) {
    this.weight = weight;
    this.distance = 1;
  }
}

class Queue {
  constructor(init) {
    this.queue = init;
    this.front = 0;
    this.rear = init.length;
  }

  push(data) {
    this.queue.push(data);
    this.rear++;
  }

  pop() {
    return this.queue[this.front++];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  add() {
    this.queue.forEach(t => {
      t.distance = t.distance + 1;
    });
  }

  sum() {
    let sum = 0;

    for (let i = this.front; i < this.rear; i++) {
      sum += this.queue[i].weight;
    }

    return sum;
  }

  peek() {
    return this.queue[this.front];
  }

  print() {
    return [...this.queue].splice(this.front, this.rear - this.front);
  }
}

function solution(bridge_length, weight, truck_weights) {
  let seconds = 0;

  const done = [];
  const bridge = new Queue([]);
  const wait = new Queue(truck_weights);

  while (done.length !== truck_weights.length) {
    seconds++;

    // 있는 트럭들 거리 증가
    bridge.add();

    // 다리에서 내리기
    if (!bridge.isEmpty() && bridge.peek().distance > bridge_length) {
      done.push(bridge.pop());
    }

    // 다리에 태우기
    if (bridge.size() >= bridge_length) continue;
    if (wait.isEmpty()) continue;
    if (bridge.sum() + wait.peek() > weight) continue;
    bridge.push(new Truck(wait.pop()));
  }

  return seconds;
}
