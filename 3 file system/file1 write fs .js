let fs = require('fs')

let data = 'this is hello form new file'
fs.writeFile('./3 file system/newfile.txt',data,{encoding:'utf-8',flag:'w'},(error)=>{
    if(error) throw  error
    console.log('write sucess')
})

