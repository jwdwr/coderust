function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = Math.round(Math.random() * (array.length - 1));

  return [
    ...quickSort(array.filter(value => value < array[pivot])),
    array[pivot],
    ...quickSort(array.filter(value => value > array[pivot]))
  ];
}

console.log(quickSort([33,6,21,12,19,29,38,22,14,40]));