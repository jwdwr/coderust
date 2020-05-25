const linkedList = require('./linkedList');

function reverse(head) {
  let prev, current, next = head;
  while (next) {
    current = next;
    next = current.next;
    current.next = prev;
    prev = current;
  }

  return current;
}

console.log(reverse(linkedList.createLinkedList([7,14,21,28])));

function reverse2(current, prev) {
  if (!current) return prev;
  const next = current.next;
  current.next = prev;
  return reverse2(next, current);
}

console.log(reverse2(linkedList.createLinkedList([7,14,21,28])));