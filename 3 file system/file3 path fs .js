let path = require('path')
let fs = require('fs')


console.log(process.cwd())
console.log(__dirname)


// reading from diff folder and get the path using `join`           '.'
let path1 = path.join(__dirname,'read folder','abc.txt')

fs.readFile(path1,{encoding:'utf-8'},(error,data)=>{
    if(error) throw error
    console.log(data)
    console.log('read success')
})