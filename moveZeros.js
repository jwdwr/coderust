function moveZerosToLeft(array) {
  let zeroIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      for (let j = i; j > zeroIdx; j--) {
        array[j] = array[j-1];
        array[j-1] = 0;
      }
      zeroIdx++;
    }
  }

  return array;
}

console.log(moveZerosToLeft([1,10,-1,11,5,0,-7,0,25,-35]));

function moveZerosToLeft2(array) {
}

console.log(moveZerosToLeft2([1,10,-1,11,5,0,-7,0,25,-35]));