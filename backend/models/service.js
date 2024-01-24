const mongoose = require("mongoose");

const {Schema} = mongoose;

const serviceSchema = new Schema ({
    name:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
 },
 {timestamps: true} // salva a data de criação de registro e a data de atualização!
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema // porque a party depende do serviço, por isso é necessário exportar a Schema!
};