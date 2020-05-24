function findLowIndex(arr, key, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === key) {
    if (start >= end) return mid;
    const lowerIndex = findLowIndex(arr, key, start, mid - 1);
    return lowerIndex === -1 ? mid : lowerIndex;
  }

  if (start >= end) return -1;

  if (arr[mid] < key) return findLowIndex(arr, key, mid + 1, end);
  if (arr[mid] > key) return findLowIndex(arr, key, start, mid - 1);
}

function findHighIndex(arr, key, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === key) {
    if (start >= end) return mid;
    const higherIndex = findHighIndex(arr, key, mid + 1, end);
    return higherIndex === -1 ? mid : higherIndex;
  }

  if (start >= end) return -1;

  if (arr[mid] < key) return findHighIndex(arr, key, mid + 1, end);
  if (arr[mid] > key) return findHighIndex(arr, key, start, mid - 1);
}

console.log(findLowIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 6));
console.log(findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 6));

function findLowIndex2(arr, key, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);
  console.log(start, end, mid, arr[mid]);

  if (start >= end) {
    if (arr[mid] === key) {
      return mid;
    }
    return -1;
  }

  if (arr[mid] < key) return findLowIndex(arr, key, mid + 1, end);
  if (arr[mid] >= key) return findLowIndex(arr, key, start, mid - 1);
}

function findHighIndex2(arr, key, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);

  if (start >= end && arr[mid] === key) return mid;

  if (start >= end) return -1;

  if (arr[mid] <= key) return findHighIndex(arr, key, mid + 1, end);
  if (arr[mid] > key) return findHighIndex(arr, key, start, mid - 1);
}

console.log(findLowIndex2([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 6));
console.log(findHighIndex2([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 6));