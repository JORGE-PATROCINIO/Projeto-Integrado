const mongoose = require("mongoose");

const {Schema} = mongoose;

const {serviceSchema} = require("./service")

const partySchema = new Schema ({
    title:{
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    budget: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    services: {
        type: [serviceSchema], // chama a estrutura de models service!
    },                                              
 },
 {timestamps: true} // salva a data de criação de registro e a data de atualização!
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
    