class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, curr = this.root) {
    // recursive
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    if (val < curr.val)
      curr.left ? this.insert(val, curr.left) : curr.left = node;
    else if (val > curr.val)
      curr.right ? this.insert(val, curr.right) : curr.right = node;
    return this;

    // // iterative
    // const node = new Node(val);
    // if (!this.root) {
    //   this.root = node;
    //   return this;
    // }

    // while (true) {
    //   if (val < curr.val) {
    //     if (curr.left)
    //       curr = curr.left;
    //     else {
    //       curr.left = node;
    //       return this;
    //     }
    //   } else if (val > curr.val) {
    //     if (curr.right)
    //       curr = curr.right;
    //     else {
    //       curr.right = node;
    //       return this;
    //     }
    //   } else
    //     return;
    // }
  }

  find(val, curr = this.root) {
    // // recursive
    // if (!this.root) return;

    // if (val < curr.val)
    //   return curr.left ? this.find(val, curr.left) : false;
    // else if (val > curr.val)
    //   return curr.right ? this.find(val, curr.right) : false;
    // else return true;

    // iterative
    const node = new Node(val);
    if (!this.root) return;

    while (true) {
      if (val < curr.val) {
        if (curr.left) curr = curr.left;
        else return false;
      } else if (val > curr.val) {
        if (curr.right) curr = curr.right;
        else return false;
      } else
        return true;
    }
  }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(14);
bst.insert(3);
bst.insert(8);
bst.insert(6);
bst.insert(9);
bst.insert(19);
bst.insert(18);
bst.insert(2);
bst.insert(12);
bst.insert(16);
console.log(bst.find(16));