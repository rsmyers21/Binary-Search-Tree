/* This program creates a Class that implements a binary search tree*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    /* Uses a recursive function to insert a node */
    insertNode(root, newNode) {
        /*checks to see if the value is greater than root, determines if it goes left or right*/
        if(newNode.value < root.value) {
            /*if there is no value on the left, the node is inserted and the function stops*/
            if(root.left === null) {
                root.left = newNode;
            }
            /*if there is a value on the left, then the function needs to go deeper until it finds a null value*/
            else {
                this.insertNode(root.left, newNode)
            }
        }
        /*if value is greater than root, it goes on the right side*/
        else {
            /*If there is no value on the right, the node is inserted and the function stops*/
            if(root.right === null) {
                root.right = newNode;
            }
            /*if there is a value on the right, the function needs to go another level deeper recursively */
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }
}

tree = new BinarySearchTree()
console.log(tree.isEmpty())