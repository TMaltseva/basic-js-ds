const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = null;
    this.last = null;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (value === undefined || value === null) {
      console.log("Invalid value");
      return;
    }

    let newNode = new ListNode(value);

    if(!this.queue) {
      this.queue = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (!this.queue) {
      console.log("Queue is empty");
      return null;
    }
    
    const dequeuedValue = this.queue.value;
    this.queue = this.queue.next;
    return dequeuedValue;
  } 
}

module.exports = {
  Queue
};
