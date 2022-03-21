let arr = ['10', '11', '9', '7', '8'];

console.log(arr.sort((a, b) => Number(b) - Number(a)));


// book solution calls for calling Number() object on each argument for sort callback,
// but this happens implicitly when subtracting strings a-b.