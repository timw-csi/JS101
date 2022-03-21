/* 1. No, first() will return the object, but second() will return undefined, because the opening brackets
of the object are on a separate line. return acts on the same line.

    Book answer: I am correct.
    Good info on semicolons, and JS engine.
*/

/* 2. The last line outputs { first: [1, 2] } 
      This is because the operation on line 3 mutated the object referenced by numArray, 'object'. Both variables
      are pointing to / referencing the same address in memory.

      Book answer: I am correct. Gives tips on how to create copy of original array to work on, instead of 
      mutating original array.
*/

/* 3. 
      A: line 13: 'one is ["one"]'
         line 14: 'two is ["two"]
         line 15: 'three is ["three"]
      This is because the params in messWithVars have same names as variables in global scope.
      Although objects passed as parameters into a function reference the original function, the reassignments don't
      persist outside the function body due to below.
      Thus, variable shadowing takes place and the outer scoped variables are unreachable inside the function body.
      When lines 13-15 print the values to the console, they are using the values initialized on lines 7-9.

      B: same because of same variable shadowing taking place. reassignments don't apply outside of function body

      C: line 13: 'one is ["two"]'
         line 14: 'two is ["three"]
         line 15: 'three is ["one"]

      Objects passed as parameters into a function reference the original function,
      and .splice() mutates the caller, so the values referenced on lines 13-15 reflect these changes to the orignal
       objects referenced by the variables.