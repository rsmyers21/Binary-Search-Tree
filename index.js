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

    search(root, value) {
        //If tree is empty:
        if(!root){
            return false;
        }
        //If tree is not empty:
        else {
            if(root.value === value) {
                return true;
            }
            //If the the value if less than the root, it must be on the left side of the tree, so we navigate to the left side with the left child as the new root
            else if(value < root.value) {
                return this.search(root.left, value);
            }
            //If the the value if greater than the root, it must be on the right side of the tree, so we navigate to the right side with the right child as the new root
            else {
                return this.search(root.right, value);
            }
        }
    }
}

tree = new BinarySearchTree()
console.log(tree.isEmpty())

tree.insert(8);
tree.insert(6);
tree.insert(10);
console.log(tree.search(tree.root, 6));
console.log(tree.search(tree.root, 8));
console.log(tree.search(tree.root, 10));
console.log(tree.search(tree.root, 12));

