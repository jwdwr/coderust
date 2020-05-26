class InorderIterator {
  // TODO: Write - Your - Code
  constructor(root) {
    this.previous = new Set();
    this.root = root;
  }

  hasNext() {
   return !!this.getNextFromTree(this.root);
  }

  getNextFromTree(root) {
    let left = this.getNextFromTree(root.left);
    if (left) return left;

    if (root && !this.previous.has(root)) {
      return root;
    }

    let right = this.getNextFromTree(root.right);
    if (right) return right;
  }

  // getNext returns null if there are no more elements in tree
  getNext() {
    const next = this.getNextFromTree(this.root);
    this.previous.add(next);
    return next;
  }
}

class InorderIterator2 {
  // TODO: Write - Your - Code
  constructor(root) {
    this.stack = [];
    this.fillStack(root);
  }

  fillStack(root) {
    let current = root;
    while (current) {
      this.stack.push(current);
      current = current.left;
    }
  }

  hasNext() {
   return this.stack.length();
  }

  getNext() {
    const next = this.stack.pop();
    this.fillStack(next.right);
    return next;
  }
}

let inorderUsingIterator = function(root) {
  let iter = new InorderIterator(root);
  let result_str = '';
  while (iter.hasNext()) {
    let ptr = iter.getNext();
    result_str += ptr.data + ' ';
  }
  return result_str;
};