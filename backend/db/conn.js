const mongoose = require("mongoose");

async function main(){  // conectar com banco de dados !

    try {

        mongoose.set("strictQuery", true)
        await mongoose.connect(
            "mongodb+srv://patrociniomello88:czr2CFqPdRYabWCy@cluster0.jzskezf.mongodb.net/?retryWrites=true&w=majority            "
        );

        console.log("conectado ao banco !")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;