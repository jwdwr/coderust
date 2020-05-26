function findSuccessor(root, data) {
  function searchTree(root, data) {
    if (!root) return;
    if (data === root.data) return root;
    if (data < root.data) return searchTree(root.left, data);
    if (data > root.data) return searchTree(root.right, data);
  }

  function successor(root, value=root.data) {
    console.log(`searching node ${root.data} for ${value}`);
    if (root.data <= value) {
      console.log(`node value of ${root.data} is LTE ${value}`);
      if (root.right) {
        console.log(`node has a right child`);
        return successor(root.right, value);
      } else if (root.parent) {
        console.log(`node has a parent`);
        return successor(root.parent, value);
      } else {
        return;
      }
    } else if (root.left) {
      console.log(`node value of ${root.data} is GT ${value}`);
      console.log(`node has a left child`);
      return successor(root.left, value);
    }

    return root;
  }

  const foundNode = searchTree(root, data);
  const foundNext = successor(foundNode);
  console.log('found data: ', foundNode.data);
  console.log('found successor: ', foundNext.data);

  return foundNext;
}