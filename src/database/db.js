// // importa dependencias do sqlite

const sqlite3 = require("sqlite3").verbose()

// //iniciar projeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// //uilizar o objeto de banco de dados para nossas operações

// db.serialize(() => { })

//     //criar tabela

//     db.run( `
//         CREATE TABLE IF NOT EXISTS PLACES (
//             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //inserir dados na tabela


//         const query = `
//         INSERT INTO places (
//             image,
//             name,
//             adress,
//             adress2, 
//             state, 
//             city, 
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80", 
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("cadastrado com Sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     //   //consultar dados da tabela

//     //   db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("aqui estão seus registros: ")
//     //     console.log(rows)
//     // })


//     // //deletar dados da tabela

//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("registro deletado com sucesso!")
//     // })

  
