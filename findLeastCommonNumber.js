function findLeastCommonNumber(arrayA, arrayB, arrayC) {
  const maxLength = Math.max(arrayA.length, arrayB.length, arrayC.length);
  let largest, a = 0, b = 0, c = 0, n = 0;
  while (n < maxLength) {
    n = Math.max(a, b, c);
    largest = Math.max(arrayA[a], arrayB[b], arrayC[c]);

    if (arrayA[a] === largest && arrayB[b] === largest && arrayC[c] === largest) {
      return largest;
    }

    if (arrayA[a] !== undefined && arrayA[a] < largest) {
      a++;
    }
    if (arrayB[b] !== undefined && arrayB[b] < largest) {
      b++;
    }
    if (arrayC[c] !== undefined && arrayC[c] < largest) {
      c++;
    }

    console.log(arrayA[a], arrayB[b], arrayC[c], largest)
  }

  return -1;
}

console.log(findLeastCommonNumber([1, 5, 6, 7, 17, 20] , [3, 4, 7, 9, 12, 16, 50] , [5, 6, 7, 10, 16, 25]));

function findLeastCommonNumber2(arrayA, arrayB, arrayC) {
  let a = 0, b = 0, c = 0;
  while (true) {
    console.log(arrayA[a], arrayB[b], arrayC[c])
    if (arrayA[a] === arrayB[b] && arrayB[b] === arrayC[c]) {
      return arrayA[a];
    }

    smallest = Math.min(arrayA[a], arrayB[b], arrayC[c]);

    if (arrayA[a] === smallest) {
      a++;
    }
    if (arrayB[b] === smallest) {
      b++;
    }
    if (arrayC[c] === smallest) {
      c++;
    }

    if (a === arrayA.length || b === arrayB.length || c === arrayC.length) return -1;
  }
}

console.log(findLeastCommonNumber2([1, 5, 6, 7, 17, 20] , [3, 4, 7, 9, 12, 16, 50] , [5, 6, 7, 10, 16, 25]));