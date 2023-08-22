let fs = require('fs')



fs.readFile('./3 file system/newfile.txt',{encoding:'utf-8',flag:'r'},(error,data)=>{
    if(error) throw error
    console.log(data);
    console.log('read success');
})