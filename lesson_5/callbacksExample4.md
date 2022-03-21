let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

ACTION                  PERFORMED ON        SIDE EFFECT           RETURN VALUE     IS R.V. USED?

method call (forEach)    outer array        none                  undefined           yes.myArr    
out callback execution       each sub-array     none                [undefined, undefined]     no
method call (map)       each sub-array      none             [undefined, undefined] yes. given to cb
in callback execution      sub-array elms     none              undefined         yes, given to map
conditional             sub-array elms      none                  boolean   Y.run code inblock or not
method call (console)    num (sub array elm) prints string of elm undefined       yes, RV of inner cb

All sub array elms besides 3 are printed to console.