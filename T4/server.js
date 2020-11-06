var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    console.log(req.method + " - " + req.url)
    // Regex para apanhar os números
    if(req.url.match(/\/arqs\/index.html/)){
        fs.readFile("./arqs/index.html",function(err,data){
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
            res.write(data)
            res.end()
        })
    }
    else {
        var num = parseInt(req.url.match(/\d+/)[0])
        if (req.url.match(/\/arqs\/arq[0-9]*.html/) && num <= 122){
            fs.readFile("./arqs/arq" + num + ".html",function(err,data){
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write(data)
                res.end()
            })
        }
        else{
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
            res.write("<p>O URL não corresponde ao esperado.</p>")
            res.end() 
        }
    }
}).listen(7777)
console.log("Servidor à escuta na porta 7777!")

