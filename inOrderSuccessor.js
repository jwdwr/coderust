function inOrderSuccessor(root, data) {
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
  while (stack.length) {
    let current = stack.pop();
    populateStack(current.right);
    if (current.data === data) {
      return stack.pop();
    }
  }
}

function inOrderSuccessor(root, data) {
  const searchStack = [];
  function searchTree(root, data) {
    if (!root) return;

    let result;
    searchStack.push(root);
    if (root.data === data) {
      result = root;
    } else if (root.data > data) {
      result = searchTree(root.left, data);
    } else if (root.data < data) {
      result = searchTree(root.right, data);
    }
    if (!result) {
      searchStack.pop(root);
    }
    return result;
  }

  searchTree(root, data);
  console.log(searchStack);
}