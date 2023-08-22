// let fs = require('fs')
// let path = require('path')


// let path1 = path.join(__dirname, 'file1 data.txt')
// let path2 = path.join(__dirname, 'file2 data.txt')
// let path3 = path.join(__dirname, 'output data.txt')

// fs.readFile(path1, { encoding: 'utf-8' }, (error, data) => {
//     if (error) throw error
//     let arr = data.split('\n')

//     fs.readFile(path2, { encoding: "utf-8" }, (error, data) => {
//         if (error) throw error
//         let brr = data.split('\n')


//         let finalarr = arr.concat(brr)
//         finalarr.sort((a, b) => a - b)
//         finalarr = finalarr.join('\n')

//         fs.writeFile(path3, finalarr, error => {
//             if (error) throw error
//             console.log('write success')
//         })
//     })
// })

// ---------------------------------------------callback hell--------------------------------------------









// by using promises

let fs = require('fs')
let path = require('path')


let path1 = path.join(__dirname, 'file1 data.txt')
let path2 = path.join(__dirname, 'file2 data.txt')
let path3 = path.join(__dirname, 'output data.txt')

let finalarr = []


function readf1() {
    return new Promise((resolve, reject) => {
        fs.readFile(path1, { encoding: 'utf-8' }, (error, data) => {
            if (error) reject(error)
            resolve(data.split('\n'))
        })
    })
}

function readf2() {
    return new Promise((resolve, reject) => {
        fs.readFile(path2, { encoding: 'utf-8' }, (error, data) => {
            if (error) reject(error)
            resolve(data.split('\n'))
        })
    })
}

function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path3, data, { encoding: 'utf-8' }, error => {
            console.log('write sucess');
        })

    })
}


readf1()
    .then((data1) => {
        finalarr = finalarr.concat(data1)
        return readf2()
    })
    .then((data2) => {
        finalarr = finalarr.concat(data2)
        finalarr.sort((a, b) => a - b)
        finalarr = finalarr.join('\n');
        return writeFile(finalarr);
    })
    .catch((error) => {
        console.log(error.message)
    })