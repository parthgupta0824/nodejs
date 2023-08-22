const figlet = require('figlet')
const colors = require('colors')
let data = 'Subscribe'

figlet(data, function (error, tempdata) {
    if(error){
        console.log('error')
        return ;
    }
    console.log(colors)
    console.log(tempdata.rainbow)
}) 