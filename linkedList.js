const LinkedListNode = function(data){
  this.data = data;
  this.next = null;
}

const insertAtHead = function(head, data) {
  let newNode = new LinkedListNode(data);
  newNode.next = head;
  return newNode;
}

const insertAtTail = function(head, node) {
  if (!head) {
    return node;
  }

  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }

  temp.next = node;
  return head;
}

const createRandomLinkedList = function(length) {
  let listHead = null;
  for (let i = 0; i < length; i++) {
    listHead = insertAtHead(listHead, Math.floor(Math.random() * 100 + 1));
  }
  return listHead;
}

const createLinkedList = function(lst) {
  let listHead = null;
  lst.reverse();
  for (let x = 0; x < lst.length; x++) {
    listHead = insertAtHead(listHead, lst[x]);
  }
  return listHead;
}

const display = function(head) {
  let temp = head;
  let s = "";
  while (temp) {
    s += temp.data;
    temp = temp.next;
    if (temp) {
      s += ", ";
    }
  }
  return s;
};

module.exports = {LinkedListNode, insertAtHead, insertAtTail, createRandomLinkedList, createLinkedList, display};