const PartyModel = require("../models/Party");

// função auxiliar para validação, tem que ser fora do objeto !
const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price,0)

    if(priceSum > budget){
        return false;
    }

    return true;
}

// objeto de criação de festa !
const partyController ={
    create: async(req, res) => {
        try{
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };

            // validação para que o orçamento não seja menor do que o valor de serviço!

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                res.status(406).json({msg: "O seu orçamento é insuficiente!"})
                return
            }

            const response = await PartyModel.create(party);

            res.status(201).json({response, msg: "Festa criada com sucesso!"})

        }catch(error){
            console.log(error);
        }
    },
    getAll: async(req, res) => { // pega todos os registros da collection Services para enviar p front!
        try{
            const parties = await PartyModel.find();
            res.json(parties);
        }catch(error){
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if(!party){ // validação para caso do id nao possuir no banco de dados!
                res.status(404).json({msg: "Festa não encontrada! "});
                return;
            }
            res.json(party);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id; // vem pela URL
            const party = await PartyModel.findById(id);

            if(!party){ // validação para caso do id nao possuir no banco de dados!
                res.status(404).json({msg: "Festa não encontrado ! "});
                return;
            }

            const deletedParty = await PartyModel.findByIdAndDelete(id);
            res.status(200).json({deletedParty, msg: "Festa removida com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
       
       try {
        const id = req.params.id;
        const party = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            budget: req.body.budget,
            image: req.body.image,
            services: req.body.services
        };

        // validação para que o orçamento não seja menor do que o valor de serviço!

        if(party.services && !checkPartyBudget(party.budget, party.services)){
            res.status(406).json({msg: "O seu orçamento é insuficiente!"})
            return
        }
        const updateParty = await PartyModel.findByIdAndUpdate(id, party);

        if(!updateParty){ // validação para caso do id nao possuir no banco de dados!
            res.status(404).json({msg: "Festa não encontrada ! "});
            return;
        }
        res.status(200).json({ service, msg : "Festa atualizada com sucesso!"})
        
       } catch (error) {
            console.log(error);
       }
    },

};

module.exports = partyController;