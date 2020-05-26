function isBst(root, minimum, maximum) {
  if (!root) return true;

  if (minimum && root.data < minimum) return false;
  if (maximum && root.data > maximum) return false;

  return isBst(root.left, minimum, root.data) && isBst(root.right, root.data, maximum);
}