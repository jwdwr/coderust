const linkedList = require('./linkedList');

function intersect(head1, head2) {
  let node1 = head1;
  while (node1) {
    let node2 = head2;
    while (node2) {
      if (node2 === node1.next) {
        return node2.data;
      }
      node2 = node2.next;
    }
    node1 = node1.next;
  }

  return null;
}

function listLength(head) {
  let length = 0
  let node = head;
  while (node) {
    length += 1;
    node = node.next;
  }

  return length;
}

function intersect2(head1, head2) {
  const length1 = listLength(head1);
  const length2 = listLength(head2);
  const lengthDiff = length1 - length2;

  let [longNode, shortNode] = lengthDiff > 0 ? [head1, head2] : [head2, head1];

  let counter = Math.abs(lengthDiff);
  while (counter > 0) {
    longNode = longNode.next;
    counter -= 1;
  }

  while (longNode) {
    if (longNode === shortNode) {
      return longNode.data;
    }

    longNode = longNode.next;
    shortNode = shortNode.next;
  }
}

console.log(intersect2(linkedList.createLinkedList([13, 4, 12, 27]),linkedList.createLinkedList([29, 23, 82, 11, 12, 27])));