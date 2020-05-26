const linkedList = require('./linkedList');

function rotateList(head, n) { // backwards
  let newHead, prev, current = head;

  for (n; n > 1; n--) {
    prev = current;
    current = current.next;
  }

  prev.next = null;
  newHead = current;

  while (current.next) {
    current = current.next;
  }

  current.next = head;

  return newHead;
}

console.log(linkedList.display(rotateList(linkedList.createLinkedList([1,2,3,4,5]), 2)));

function listLength(head) {
  let length = 0
  let node = head;
  while (node) {
    length += 1;
    node = node.next;
  }

  return length;
}
function rotateList2(head, n) {
  let length = listLength(head)
  let prev, current = head;
  for (m = (length - n % length) % length; m > 0; m--) {
    prev = current;
    current = current.next;
  }

  prev.next = null;
  let newHead = current;

  while (current.next) {
    current = current.next;
  }

  current.next = head;

  return newHead;
}

console.log(linkedList.display(rotateList2(linkedList.createLinkedList([1,2,3,4,5]), 2)));