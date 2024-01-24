const express = require("express");  // importando o express
const cors = require("cors"); //importando o módulo cors
const app = express(); // faz a chamada don express

// configuração do módulo
app.use(cors()); // indica quer a aplicação está usando o módulo cors.
app.use(express.json()); // indica que a aplicação vai fazer uso de json.

// mongo DB "atlas" -> banco na nuvem, não precisa instalar na máquina e é gratuito!
// conectando o banco de dados!

const conn = require("./db/conn");

conn();

// rotas

const routes = require("./routes/router");

app.use("/api", routes);


app.listen(3000, function(){ // criando servidor.
    console.log("Servidor ativo")
});

