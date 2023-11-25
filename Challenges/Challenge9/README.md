## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.js](./challenge.js) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
5. *You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge.*


## Challenge description

### Creating a Tree

The previous challenge showed how to store a Tree in an Array. But how do you convert a Tree from an Array to the more-standard Node form? 

#### Implementing a Tree

To implement a Tree, we'll create a Node class. It will store an integer of Data, and point to 2 child Nodes. 
```
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
```

1. Create a Node `node` from a given cell `i` in the array: `Node node = new Node(array[i])`;
2. Create the children Nodes from their positions in the array. (See step #1).
3. Assign the children Nodes to `node.left` and `node.right`. 


You first create a Node, and then you create children Nodes in the  same manner. This sounds like a recursive function will be needed!

As  mentioned, since trees are recursive structures, recursive functions are  used to navigate them. 

Here's the above algorithm:
```
function arrayToTree(array, i) {
  if (i >= array.length || array[i] === 0) {
    return null
  }

  const node = new Node(array[i])
  node.left = arrayToTree(array, 2*i+1)
  node.right = arrayToTree(array, 2*i+2)

  return node
}
```

#### Traversing a Tree in Pre-order

**Pre-order** traversal means you process a Node and then process its sub-trees. 

Here is the pre-order algorithm:
```
function preOrder(node) {
  if (node === null) {
    return '';
  }
  
  return `${node.data} ${preOrder(node.left)} ${preOrder(node.right)}`
}
```
 
#### Challenge

You will be given an array as input, which represents a Tree. Process the array into a Tree of Nodes, as shown above. Then go through the tree and print it in post-order.
Print each number space-separated.

#### Example test case
```
const = tree = arrayToTree([10, 1, 2, 3, 4, 5, 6])

console.log(postOrder(tree))
//=> 3 4 1 5 6 2 10
```


### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).