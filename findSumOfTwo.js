function findSumOfTwo(array, sum) {
  const pairMap = {};

  for (let i in array) {
    if (pairMap[array[i]]) return true;
    pairMap[sum - array[i]] = array[i];
  }

  return false;
}