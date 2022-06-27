const fs = require('fs');
const http = require('http');

// Blocking Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.`
// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('File written');

// // Non-blocking Asynchronous way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     if (err) return console.log('error')
//      console.log(data)

//      fs.writeFile('./txt/final.txt', `${data}`, err => {
//        console.log('File has been written');
//      })
// })

const server = http.createServer((req, res) => {
    res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000')
})

