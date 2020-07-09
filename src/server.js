const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurando pasta publica
server.use(express.static('public'))

//utilizando template Engine (nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



//Caminho até a página inicial
//req: requisição
//res: resposta

server.get("/", (req, res) => {
    return res.render("index.html", { title: "um título" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

server.get("/search", (req, res) => {


    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        
        //mostar a página html com os dados do banco de dados
        
        return res.render("search-results.html", { places: rows, total: total})
    })

})
 

//liga o servidor
server.listen(3000)
