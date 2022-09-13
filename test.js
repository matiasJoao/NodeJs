const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>TEST</title></head>');
        res.write('<body><form action="/users" method="POST"><button type="submit">go to users</button></form></form><form action="/creat-user" method="POST"><input type="text" name="username" ><button>click</button></body>');
        res.write('</html>');
        return res.end();
      }  
      if(req.url === '/users'){
        res.write('<html>');
        res.write('<head><title>Page</title></head>');
        res.write('<body> <div><ul><li>Nothing</li></ul></div></body>');
        res.write('</html>');
        return res.end();
      }
      if(req.url === '/creat-user' && req.method === 'POST'){
        const data =  [];
        req.on('data', (chunk) => {
            data.push(chunk);
        });
        req.on('end', () => {
          const formatedData = Buffer.concat(data).toString();
          const uniqueData = formatedData.split('=')[1];
          console.log(uniqueData);
        });
        res.write('<html>');
        res.write('<head><title>Page</title></head>');
        res.write('<body><p>creat user route</p></body>');
        res.write('</html>');
        return res.end();
      }


});
server.listen(3000);