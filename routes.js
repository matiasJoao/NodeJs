// core require
const FileSystem = require('fs');

// function with the request and response 
const requestsHandler = (req, res) => {
    const url = req.url;  
  const method = req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Page</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >send</button></form></body>')
    res.write('</html>');
    return res.end()
  }  
  if ( url === '/message' && method === 'POST'){
    const responseBody = [];
    req.on('data', (chunk) => {
      responseBody.push(chunk);
    });
     return req.on('end', () => {
    const dataBody = Buffer.concat(responseBody).toString();
    const message = dataBody.split('=')[1];
    FileSystem.writeFile('response.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
    }); 
  }
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Page</title></head>')
  res.write('<body> <div><p>asdjpiad</p></div></body>')
  res.write('</html>');
  res.end();
  
}
// exports
module.exports = requestsHandler;

// module.exports= {
// handler: requestsHandler
// } 
// module.exports.handler = requestsHandler;
// exports.handler = requestsHandler;