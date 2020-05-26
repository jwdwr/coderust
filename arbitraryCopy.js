const linkedList = require("./linkedList");

function deepCopyArbitraryPointer(head) {
  const copyMap = {};
  let copyHead, copyCurrent, current = head;
  while (current) {
    let currentCopy = new linkedList.LinkedListNode(current.data);
    currentCopy.arbitrary = current.arbitrary && current.arbitrary.data;
    copyMap[current.data] = currentCopy;

    if (copyHead) {
      copyCurrent.next = currentCopy;
    } else {
      copyHead = currentCopy;
    }

    copyCurrent = currentCopy;
    current = current.next;
  }

  copyCurrent = copyHead;
  while (copyCurrent) {
    copyCurrent.arbitrary = currentCopy.arbitrary && copymap[currentCopy.arbitrary];
    copyCurrent = copyCurrent.next;
  }

  return copyHead;
}