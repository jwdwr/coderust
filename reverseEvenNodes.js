const linkedList = require("./linkedList");

function reverseEvenNodes(head) {
  let evenNode = head.next;
  let prev, current = evenNode.next;
  evenNode.next = null;
  head.next = current; // this is UGLY
  let even = true;

  while (current) {
    next = current.next;
    even = !even;

    if (even) {
      prev.next = current.next;

      current.next = evenNode;
      evenNode = current;
    } else {
      prev = current;
    }
    current = next;
  }

  console.log(linkedList.display(head));
  console.log(linkedList.display(evenNode));

  current = head;
  currentEven = evenNode;
  while (current && currentEven) {
    let next = current.next;
    let evenNext = currentEven.next;
    current.next = currentEven;
    currentEven.next = next;
    current = next;
    currentEven = evenNext;
  }

  console.log(linkedList.display(head));

  return head;
}

reverseEvenNodes(linkedList.createLinkedList([1,2,3,4,5]));
