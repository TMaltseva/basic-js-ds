const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (data === node.data) return node;

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }

    this.head = addNode(this.head, data);
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) return false;
      if (data === node.data) return true;

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }

    return hasNode(this.head, data);
  }

  find(data) {
    function findNodeData(node, data) {
      if (!node) return null;
      if (data === node.data) return node;

      if (data < node.data) {
        return findNodeData(node.left, data);
      } else {
        return findNodeData(node.right, data);
      }
    }

    return findNodeData(this.head, data);
  }

  remove(data) {
    function findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }

        let minFromRight = findMin(node.right);
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
      }

      return node;
    }

    this.head = removeNode(this.head, data);
  }

  min() {
    let node = this.head;
    while (node && node.left) {
      node = node.left;
    }
    return node ? node.data : null;
  }

  max() {
    let node = this.head;
    while (node && node.right) {
      node = node.right;
    }
    return node ? node.data : null;
  }
}

module.exports = {
  BinarySearchTree
};