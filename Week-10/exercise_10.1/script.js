// program  Maximum Depth of binary tree

//defination for binary tree Node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let root;
var maxDepth = function (root) {
  if (root === null || root === undefined) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write(" Depth of binary tree is : " + maxDepth(root));
