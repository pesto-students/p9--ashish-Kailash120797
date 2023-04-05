//  program to implement Queue using two stacks

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    // Move all elements from s1 to s2
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(x);

    // Push back to s1
    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
    }
  }

  // Dequeue an item from the queue
  deQueue() {
    // If first stack is empty
    if (this.s1.length == 0) {
      document.write("Q is Empty");
    }

    // Return top of s1
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);

document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");
