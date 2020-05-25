function findNthFromLast(head, n) {
  let lookahead = head;
  let node = head;

  let counter = n;

  while (counter > 0) {
    lookahead = lookahead.next;
    counter--;
  }
  while (lookahead) {
    lookahead = lookahead.next;
    node = node.next;
  }

  return node.data;
}