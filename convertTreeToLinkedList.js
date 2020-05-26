function convertToLinkedList(root) {
  const [start] = convert(root);
  return start;
}

function convert(root) {
  if (!root) return [];

  let [leftStart, leftEnd] = convert(root.left);
  let [rightStart, rightEnd] = convert(root.right);

  if (!leftStart) leftStart = root;
  if (!rightEnd) rightEnd = root;

  if (leftEnd) {
    leftEnd.right = root;
    root.left = leftEnd;
  }
  if (rightStart) {
    rightStart.left = root;
    root.right = rightStart;
  }

  return [leftStart, rightEnd];
}