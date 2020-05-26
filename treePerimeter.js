function displayTreePerimeter(root) {
  let result = "";
  result += displayLeftSide(root);
  result += displayLeaves(root);
  result += displayRightSide(root);
  return result;
}

function displayLeftSide(root) {
  if (!root.left) return "";
  return root.data + " " + displayLeftSide(root.left);
}

function displayLeaves(root) {
  if (!root) return "";
  if (!root.left && !root.right) return root.data + " ";
  return displayLeaves(root.left) + displayLeaves(root.right);
}

function displayRightSide(root) {
  if (!root.right) return "";
  return root.data + " " + displayRightSide(root.right);
}