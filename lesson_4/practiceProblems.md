1. [1, 2, 3]. Because filter returns each value the callback function returns a truthy value for,
 and num => 'hi' will always return a truthy value.

2. [undefined, undefined, undefined]. Map returns a new array populated by the return value for each iteration of the callback function. Since this is an arrow function with brackets, it needs an explicit return statement. It lacks this, so each iteration of the callback will return 'undefined'.

3. [1, 4, 9]. Correct arrow function syntax, doesn't need explicit return statement because the function expression is all on one line. Performs squaring function on each array value.

4. Return value is 1. Bc .length is chained to return vale of .pop(), which is always just 1 element (the value that was removed from the end of the original array). 
    // OoooOO. I messed up. since the value returned by pop() is a string, it takes the length of the string, which is 11.

5. Callback's return value is [2, 4, 8]. Return value of every is 'true' because for each iteration the callback function returns a truthy value (num = num *2).
    // Almost right. Callback's return value is [2, 4, 6]. Assignment expression doesn't roll over value of num from each iteration. so return num = num * 2 is same as return num * 2.

6. Yes, it is destructive. It mutates the original array it is called upon. By reading the MDN documentation. the return value of line 2 is [1, 1, 1, 1, 1]. arr.fill inserts the value 1 starting at index 1 (inclusive) and continues changing the values to 1 until index spot 5 (exclusive).

7. [undefined, 'bear']. Map returns the value of the callback and sets that value in the corresponding index of the new array it returns. Since there is no 'else' condition for elements that don't meet the selection criterion, and 'ant' does not have a length more than 3, the first value returned is undefined.

8.