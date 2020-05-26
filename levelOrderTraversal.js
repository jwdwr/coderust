let levelOrderTraversal = function(root) {
  var result = "";

  let queue = [root, null];
  while (queue.length) {
    current = queue.shift();
    if (!current) {
      result += '\n';
      if (queue.length) queue.push(null);
    } else {
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      result += current.data + ' ';
    }
  }

  return result;
};