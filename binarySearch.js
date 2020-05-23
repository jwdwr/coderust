function binarySearch(a, key) {
  let done = false;
  let start = 0, end = a.length, mid;
  while (!done) {
    mid = Math.round((start + end) / 2);
    if (a[mid] < key) {
      start = mid + 1;
    } else if (a[mid] > key) {
      end = mid - 1;
    } else if (key === a[mid]) {
      return mid;
    } else if (start === end) {
      done = true;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 12, 13, 14, 24, 48, 56], 13));

function binarySearchRecursive(a, key, start = 0, end = a.length) {
  const mid = Math.floor((start + end) / 2);

  if (a[mid] === key) return mid;
  if (a[mid] > key) return binarySearchRecursive(a, key, start, mid-1);
  if (a[mid] < key) return binarySearchRecursive(a, key, mid+1, end);
  if (start < end) return -1
}

console.log(binarySearchRecursive([1, 2, 12, 13, 14, 24, 48, 56], 1));