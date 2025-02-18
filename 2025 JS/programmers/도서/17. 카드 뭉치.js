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

  isEmpty() {
    return this.rear === this.front;
  }

  seek() {
    return this.items[this.front];
  }
}

function solution(cards1, cards2, goal) {
  const results = [];
  const deck1 = new Queue();
  const deck2 = new Queue();

  cards1.forEach(c => deck1.push(c));
  cards2.forEach(c => deck2.push(c));

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === deck1.seek()) {
      deck1.pop();
    } else if (goal[i] === deck2.seek()) {
      deck2.pop();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
