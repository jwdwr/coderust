let inorderIterative = function(root) {
  let result = "";
  const stack = [];

  function populateStack(root) {
    if (!root) return;
    let current = root;
    while (current) {
      stack.push(current);
      current = current.left;
    }
  }

  populateStack(root);
  while (current) {
    populateStack(current.right);
    result += current.data + ' ';
    current = stack.pop();
  }

  return result;
};