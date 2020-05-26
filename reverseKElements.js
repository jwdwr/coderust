const linkedList = require('./linkedList');

function reverse(head, k) {
  let next, prev = head, current = head.next;
  for (let l = k; l > 1 && current; l--) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head.next = next;

  return [prev, head];
}

function reverseKNodes (head, k) {
  if (k <= 1) return head;

  let [newHead, last] = reverse(head, k);
  let nextHead = last.next;
  while (nextHead) {
    [newNext, newLast] = reverse(nextHead, k);
    last.next = newNext;
    nextHead = newLast.next;
    last = newLast;
  }

  return newHead;
};

console.log(linkedList.display(reverseKNodes(linkedList.createLinkedList([1,2,3,4,5,6,7,8,9,10,11]), 4)));