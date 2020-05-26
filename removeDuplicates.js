function removeDuplicates(head) {
  const valueSet = new Set();
  let prev, current = head;
  while (current) {
    if (valueSet.has(current.data)) {
      prev.next = current.next;
    } else {
      valueSet.add(current.data);
    }

    prev = current;
    current = current.next
  }

  return head;
}