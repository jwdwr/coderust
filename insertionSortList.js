const linkedList = require("./linkedList");

function insertionSort(head) {
  let sortedHead = head;
  let current = head.next;
  sortedHead.next = null;

  while (current) {
    let next = current.next;
    let sortedPrev, sortedCurrent = sortedHead;
    while (sortedCurrent) {
      if (sortedCurrent.data > current.data) {
        if (sortedCurrent === sortedHead) {
          current.next = sortedHead;
          sortedHead = current;
        } else {
          sortedPrev.next = current;
          current.next = sortedCurrent;
        }
        break;
      } else {
        sortedPrev = sortedCurrent;
        sortedCurrent = sortedCurrent.next;
      }
    }

    if (sortedPrev && !sortedCurrent) {
      sortedPrev.next = current;
      current.next = null;
    }
    current = next;
  }

  return sortedHead;
}

console.log(linkedList.display(insertionSort(linkedList.createLinkedList([5,1,2,9,3,2,13]))));


function insertionSort2(head) {
  let sortedHead = null;
  let current = head;

  while (current) {
    let next = current.next;
    let sortedPrev, sortedCurrent = sortedHead;

    while (sortedCurrent && sortedCurrent.data < current.data) {
      sortedPrev = sortedCurrent;
      sortedCurrent = sortedCurrent.next;
    }

    if (sortedPrev) {
      sortedPrev.next = current;
    } else {
      sortedHead = current;
    }
    current.next = sortedCurrent;

    current = next;
  }

  return sortedHead;
}
console.log(linkedList.display(insertionSort2(linkedList.createRandomLinkedList(10))));
