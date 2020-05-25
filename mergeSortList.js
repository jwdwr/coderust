const linkedList = require('./linkedList');

function listLength(head) {
  let length = 0
  let node = head;
  while (node) {
    length += 1;
    node = node.next;
  }

  return length;
}

function mergeSort(head, depth=0) {
  if (!head.next) return head;
  const length = listLength(head);
  let midpoint = Math.round(length/2);

  let counter = midpoint;

  let left = head;
  let leftEnd = head;

  while (counter > 1) {
    leftEnd = leftEnd.next;
    counter--;
  }

  let right = leftEnd.next;
  leftEnd.next = null;

  const sortedLeft = mergeSort(left, depth+1);
  const sortedRight = mergeSort(right, depth+1);
  const merged = mergeSorted(sortedLeft, sortedRight);
  return merged;
}

function mergeSorted(head1, head2) {
  let node1 = head1, node2 = head2, firstSorted;

  // get start of list
  if (node1.data < node2.data) {
    firstSorted = node1;
    node1 = node1.next;
  } else {
    firstSorted = node2;
    node2 = node2.next;
  }

  let lastSorted = firstSorted;

  while (node1 || node2) {
    if (!node2 || (node1 && node1.data < node2.data)) {
      lastSorted.next = node1;
      lastSorted = node1;
      node1 = node1.next;
    } else {
      lastSorted.next = node2;
      lastSorted = node2;
      node2 = node2.next;
    }
  }

  return firstSorted;
}

const list = linkedList.createLinkedList([5,3,1,4,6]);
console.log(linkedList.display(list));
console.log(mergeSort(list));