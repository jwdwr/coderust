function binarySearchRotated(arr, val, start=0, end=arr.length-1) {
  const mid = Math.ceil((start + end) / 2);
  console.log(`searching from ${start} to ${end}`);
  if (arr[mid] === val) return mid;
  if (start >= end) return -1;
  if (arr[mid] > val) {
    console.log(`${arr[mid]} is greater than ${val}`);
    if (val <= arr[start]) {
      console.log(`${val} is lte ${arr[start]}`);
      return binarySearchRotated(arr, val, start, mid - 1);
    } else {
      console.log(`${val} is gt ${arr[end]}`);
      return binarySearchRotated(arr, val, mid + 1, end);
    }
  }
  if (arr[mid] < val) {
    console.log(`${arr[mid]} is less than ${val}`);
    if (arr[end] >= val) {
      console.log(`${val} is gte ${arr[end]}`);
      return binarySearchRotated(arr, val, mid + 1, end);
    } else {
      console.log(`${val} is lt ${arr[end]}`);
      return binarySearchRotated(arr, val, start, mid - 1);
    }
  }
}
console.log([4,5,6,1,2,3]);
console.log(binarySearchRotated([5,6,1,2,3,4], 3));

function binarySearchRotated2(arr, val, start=0, end=arr.length-1) {
  const mid = Math.ceil((start + end) / 2);
  console.log(`searching ${arr} for ${val} from ${start} to ${end}. idx ${mid} = ${arr[mid]}`);
  console.log(arr[mid], val, arr[mid] == val);
  if (arr[mid] === val) return mid;
  if (start >= end) return -1;
  if (val < arr[mid]) {
    // if left half is sorted, search it
    if (arr[start] <= arr[mid] && arr[start] <= val) return binarySearchRotated2(arr, val, start, mid - 1);
    // else search right half
    else return binarySearchRotated2(arr, val, mid + 1, end);
  }
  if (val > arr[mid]) {
    // if right half is sorted, search it
    if (arr[mid] <= arr[end] && val <= arr[end]) return binarySearchRotated2(arr, val, mid + 1, end);
    // else search left half
    else return binarySearchRotated2(arr, val, start, mid - 1);
  }
}
console.log([4,5,6,1,2,3]);
console.log(binarySearchRotated2([3,4,5,6,1,2], 2));