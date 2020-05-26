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