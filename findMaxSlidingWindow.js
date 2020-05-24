let findMaxSlidingWindow = function(arr, window_size) {
  const result = [];
  for (let start = 0; start <= arr.length - window_size; start++) {
    let max = arr[start];
    for (let n = start; n < start + window_size; n++) {
      max = Math.max(max, arr[n]);
    }
    result.push(max);
  }
  return result;
};

console.log(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5], 3));

let findMaxSlidingWindow2 = function(arr, window_size) {
  const result = [];
  const window = [];

  for (let i = 0; i < window_size; i++) {
    while (window.length && arr[window[window.length - 1]] < arr[i]) {
      window.pop();
    }

    window.push(i);
  }

  result.push(arr[window[0]]);

  for (let i = window_size; i < arr.length; i++) {
    while (arr[window[window.length - 1]] < arr[i]) {
      window.pop();
    }

    if (window[0] < i - 2) {
      window.shift();
    }

    window.push(i);

    result.push(arr[window[0]]);
  }

  return result;
};

console.log(findMaxSlidingWindow2([1,2,3,4,3,2,1,2,5], 3));
