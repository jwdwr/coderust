function deleteNode(head, key) {
  let prev, current = head;
  while (current) {
    if (current.data === key) {
      if (prev) {
        prev.next = current.next;
      } else {
        head = current.next
      }
    }

    prev = current;
    current = current.next;
  }

  return head;
}