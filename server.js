const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    let path='./views/'
    switch(req.url){
        case '/':
            path+='index.html'
            res.statusCode=200
            break;
        case '/about':
            path+='about.html'
            res.statusCode=200
            break;
            case '/about-me':
                res.setHeader('Location','/about')
                res.statusCode=301
                break;
        default:
            path+='404.html'
            res.statusCode=404
                break;

    }
    res.setHeader('Content-type','text/html')
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
    
})
server.listen(3000,()=>{
    console.log('listen to port 3000')
})