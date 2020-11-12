var http = require('http')
var axios = require('axios')
const { RSA_NO_PADDING } = require('constants')

http.createServer(function(req,res){

    console.log(req.method + ' - ' + req.url)
    if(req.method == 'GET'){

        // --------------------------------- Index.html ---------------------------------

        if(req.url == '/'){
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
            res.write('<h2>Escola de Música</h2>')
            res.write('<ul>')
            res.write('<li><a href="/alunos">Lista de alunos</a></li>')
            res.write('<li><a href="/cursos">Lista de cursos</a></li>')
            res.write('<li><a href="/instrumentos">Lista de instrumentos</a></li>')
            res.write('</ul>')
            res.end() 
        }

        // ----------------------------------- Alunos ----------------------------------

        else if(req.url == '/alunos'){
            axios.get('http://localhost:3001/alunos')
            .then(function (resp){
                alunos = resp.data
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write('<h2>Escola de Música: Lista de alunos</h2>')
                res.write('<ul>')
                alunos.forEach(a => {
                    res.write('<li><a href=/alunos/' + a.id + '>' + a.id + ' - ' + a.nome + '</a></li>')
                })
                res.write('</ul>')
                res.write('<address>[<a href="/">Voltar</a>]</address>')
                res.end()
            })
            .catch(function(error){
                console.log("Erro na obtenção da lista de alunos " + error)
            })
        }

        // --------------------------------- Alunos Ind --------------------------------

        else if(req.url.match(/\/alunos\/A[0-9]+/)){
            var nums = req.url.match(/\d+/)
            axios.get('http://localhost:3001/alunos/A' + nums[0])
            .then(function (resp){
                aluno = resp.data
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write('<h3>Aluno: '+ aluno.nome + '</h3>')
                res.write('<ul>')
                res.write('<li><b>Id</b>: '+ aluno.id + '</li>')
                res.write('<li><b>Data de Nascimento</b>: '+ aluno.dataNasc + '</li>')
                res.write('<li><b>Curso</b>: '+ aluno.curso + '</li>')
                res.write('<li><b>Ano Curso</b>: '+ aluno.anoCurso + '</li>')
                res.write('<li><b>Instrumento</b>: '+ aluno.instrumento + '</li>')
                res.write('</ul>')
                res.write('<address>[<a href="/alunos">Voltar</a>]</address>')
                res.end()
            })
            .catch(function(error){
                console.log("Erro na obtenção da lista de alunos " + error)
            })
        }

        // ----------------------------------- Cursos ----------------------------------

        else if(req.url == '/cursos'){
            axios.get('http://localhost:3001/cursos?_sort=id')
            .then(function (resp){
                cursos = resp.data
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write('<h2>Escola de Música: Lista de cursos</h2>')
                res.write('<ul>')
                cursos.forEach(c => {
                    res.write('<li><a href=/cursos/' + c.id + '>' + c.id + ' - ' + c.designacao + '</a></li>')
                })
                res.write('</ul>')
                res.write('<address>[<a href="/">Voltar</a>]</address>')
                res.end()
            })
            .catch(function(error){
                console.log("Erro na obtenção da lista de cursos " + error)
            })
        }

        // --------------------------------- Cursos Ind --------------------------------

        else if(req.url.match(/\/cursos\/C[B|S][0-9]+/)){

            var r = req.url.substring(req.url.indexOf("C")+1)
            axios.get('http://localhost:3001/cursos/C' + r)
            .then(function (resp){
                curso = resp.data
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write('<h3>Curso: '+ curso.designacao + '</h3>')
                res.write('<ul>')
                res.write('<li><b>Id</b>: '+ curso.id + '</li>')
                res.write('<li><b>Duracao</b>: '+ curso.duracao + '</li>')
                res.write('<li><b>Id Instrumento</b>: '+  curso.instrumento.id + '</li>')
                res.write('<li><b>Texto Instrumento</b>: '+  curso.instrumento["#text"] + '</li>')
                res.write('</ul>')
                res.write('<address>[<a href="/cursos">Voltar</a>]</address>')
                res.end()
            })
            .catch(function(error){
                console.log("Erro na obtenção da lista de cursos " + error)
            })
        }

        // ------------------------------- Instrumentos --------------------------------

        else if(req.url == '/instrumentos'){
            axios.get('http://localhost:3001/instrumentos')
            .then(function (resp){
                instrumentos = resp.data
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write('<h2>Escola de Música: Lista de instrumentos</h2>')
                res.write('<ul>')
                instrumentos.forEach(i => {
                    res.write('<li><a href=/instrumentos/' + i.id + '>' + i.id + ' - ' + i["#text"] + '</a></li>')
                })
                res.write('</ul>')
                res.write('<address>[<a href="/">Voltar</a>]</address>')
                res.end()
            })
            .catch(function(error){
                console.log("Erro na obtenção da lista de instrumentos " + error)
            })
        }

        // ----------------------------- Instrumentos Ind ------------------------------

        else if(req.url.match(/\/instrumentos\/I[0-9]+/)){

            var r = req.url.substring(req.url.indexOf("I")+1)
            axios.get('http://localhost:3001/instrumentos/I' + r)
            .then(function (resp){
                instrumento = resp.data
                res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
                res.write('<h3>Curso: '+ instrumento["#text"] + '</h3>')
                res.write('<ul>')
                res.write('<li><b>Id</b>: '+ instrumento.id + '</li>')
                res.write('</ul>')
                res.write('<address>[<a href="/instrumentos">Voltar</a>]</address>')
                res.end()
            })
            .catch(function(error){
                console.log("Erro na obtenção da lista de instrumentos " + error)
            })
        }

        // -------------------------------- Unsupported --------------------------------

        else{
            res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
            res.write("<p>Pedido não suportado: " + req.method + " - " + req.url + "</p>")
            res.end() 
        }
    }

    // ------------------------------- Não é pedido GET --------------------------------

    else{
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
        res.write("<p>Pedido não suportado: " + req.method + " - " + req.url + "</p>")
        res.end() 
    }

}).listen(4000)

console.log("Servidor à escuta na porta 4000!")