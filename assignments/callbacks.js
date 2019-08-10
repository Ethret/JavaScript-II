// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
});

//

function lastItem(arr, cb) {
  let i = arr.length - 1;
  return cb(arr[i])
}

lastItem(items, function(last) {
  console.log(last)
});

//

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1, 2, function(added) {
  console.log(added)
});

//

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(1, 2, function(multed) {
  console.log(multed)
});

//

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let n = 0
  for(i=0; i < list.length; i++) {
    if (item.toLowerCase() == list[i].toLowerCase()) {
      n = n + 1 }
  }
  if (n > 0) {
    return cb(true)
  } else {
    return cb(false)
  }
}

contains('Notebook', items, function(torf) {
  console.log(torf)
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
