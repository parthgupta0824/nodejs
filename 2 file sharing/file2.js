// let exportfile = require('./file1.js')

// console.log(exportfile.pi)
// console.log(exportfile.add(2,3))






// array destructuring 
let {pi, firstname, lastname, square, add} = require('./file1')

console.log(pi)
console.log(add(2,3))