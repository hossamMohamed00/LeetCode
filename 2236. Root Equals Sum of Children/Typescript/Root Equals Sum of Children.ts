/*
  Problem Link: {https://leetcode.com/problems/root-equals-sum-of-children}
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function checkTree(root: TreeNode): boolean {
  return root.left!.val + root.right!.val === root.val ? true : false;
}

// TESTING HERE
console.log(checkTree(new TreeNode(1, new TreeNode(0), new TreeNode(1))));
