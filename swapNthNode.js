const linkedList = require('./linkedList');

function swapNthNode(head, n) {
  let node = head;
  while (n > 2) {
    node = node.next;
    n--;
  }

  const newHead = node.next;
  const second = head.next;

  head.next = newHead.next;
  node.next = head;
  newHead.next = second;

  return newHead;
}

console.log(swapNthNode(linkedList.createLinkedList([7,14,21,28,35,42]), 4));