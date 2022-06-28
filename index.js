const fs = require('fs');
const http = require('http');
const url = require('url');

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

const server = http.createServer((req, res) => {

    const pathName = req.url;
    
    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the overview');
    } else if (pathName === '/product') {
        res.end('This is the product');
    } else if (pathName === '/api') {
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, { 'Content-type': 'application/json'})
            res.end(data);
        })
    } 
    else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000')
});

