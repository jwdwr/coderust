const linkedList = require("./linkedList");
function addIntegers(integer1, integer2) {
  let current1 = integer1, current2 = integer2;
  let result, currentResult, carry = 0;
  while (current1 || current2 || carry) {
    let sum = (current1?.data || 0) + (current2?.data || 0) + carry;
    console.log(`adding ${current1?.data} to ${current2?.data}, carrying ${carry}: ${sum}`)

    carry = 0;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }

    let nextResult = new linkedList.LinkedListNode(sum);

    if (result) {
      currentResult.next = nextResult;
    } else {
      result = nextResult;
    }

    currentResult = nextResult;
    current1 = current1?.next;
    current2 = current2?.next;
  }

  return result;
}

let first = linkedList.createLinkedList([1,0,9,9]);
let second = linkedList.createLinkedList([7,3,2]);

console.log("First integer:", linkedList.display(first));
console.log("Second integer:", linkedList.display(second));

let result = addIntegers(first, second);
console.log("Result:", linkedList.display(result));