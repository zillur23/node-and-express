const http = require('http')
const server = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        res.end('welcome to the url port')
    
    }

    if(req.url === '/come'){
        res.end('where is the temple')
        
    }

   res.end('no url works without this')

})

server.listen(4043)