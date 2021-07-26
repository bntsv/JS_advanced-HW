// Given is an array of todos objects:
const todos = [
    {
        title: 'Todo1',
        completed: true,
        priority: 'low'
    },
    {
        title: 'Todo2',
        completed: false,
        priority: 'low'
    },
    {
        title: 'Todo3',
        completed: true,
        priority: 'high'
    },
    {
        title: 'Todo4',
        completed: true,
        priority: 'medium'
    },
    {
        title: 'Todo5',
        completed: false,
        priority: 'high'
    },
    {
        title: 'Todo6',
        completed: true,
        priority: 'low'
    },
]

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */

function sortArrayByKey(arr, prop){
    arr.sort(function (a, b) {

        var priorityA = a[prop];
        var priorityB = b[prop];
    
        if (priorityA < priorityB) {
            return -1;
        }
        if (priorityA > priorityB) {
            return 1;
        }
    
        return 0;
    });
    return arr
}

/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log(sortArrayByKey(todos, 'priority'))

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]

