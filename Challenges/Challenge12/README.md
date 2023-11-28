## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.js](./challenge.js) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
5.  *You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge.*


## Challenge description

### Sets

These are the important methods a Set, in JavaScript, supports:
- add(item) - Adds an item to the Set.
- delete(item) - Removes an item from the Set.
- has(item) - Returns true if the item is in the Set, and false otherwise.

### Purpose of Sets
The Set is useful when you want to check if items are in a collection but there's no specific order that you care about. For example, let's say you're given a raw list of numbers and need to find the numbers that appear more than once. What Algorithm could you use to find them?

#### Solution

Create a Set for holding the items. For each item, check if it's already in the Set. If it is, you've found a duplicate. Otherwise add the item to the Set.

### Standard Sets
Since ES5 JavaScript includes a Set class.
Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

### Challenge
A duplicate is a number whose value appeared earlier in the list. Given a list of numbers, return an array with all the duplicates in the order that they appear. (Duplicates that appear multiple times should be printed multiple times).
Use Ruby's Set class to solve the challenge.

### Example
```javaScript
const arr = [1, 2, 3, 1, 5, 6, 7, 8, 5, 2]

console.log(find_duplicates(arr))
// => [1, 5, 2]
```


### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).