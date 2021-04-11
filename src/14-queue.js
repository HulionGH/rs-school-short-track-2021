const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(val) {
    this.length++;
    if (this.stack) {
      let lastNode = this.stack;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = new ListNode(val);
    } else {
      this.stack = new ListNode(val);
    }
  }

  dequeue() {
    this.length--;
    const { next, value } = this.stack;
    this.stack = next;
    return value;
  }
}

module.exports = Queue;
