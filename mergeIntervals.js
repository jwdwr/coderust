class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

function mergeIntervals(intervals) {
  const merged = [];
  let mergedPair = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].first <= mergedPair.second) {
      mergedPair.second = intervals[i].second;
    } else {
      merged.push(mergedPair);
      mergedPair = intervals[i];
    }
  }

  merged.push(mergedPair);
  return merged;
}

console.log(mergeIntervals([1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [10, 15]));


function mergeIntervals2(intervals) {
  const merged = [Object.assign(new Pair(), intervals[0])];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].first <= merged[merged.length-1].second) {
      merged[merged.length-1].second = intervals[i].second;
    } else {
      merged.push(Object.assign(new Pair(), intervals[i]));
    }
  }

  return merged;
}

console.log(mergeIntervals2([1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [10, 15]));