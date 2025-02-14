class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (node) {
        traverse(node.left); // Kunjungi subtree kiri
        result.push(node.val); // Kunjungi node akar
        traverse(node.right); // Kunjungi subtree kanan
      }
    }
  
    traverse(root);
    return result;
  }
  
  // Membangun binary tree:
  // 1
  // \
  // 2
  // /
  // 3
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  console.log(inorderTraversal(root)); // Output: [1, 3, 2]