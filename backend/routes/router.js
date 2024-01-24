// centralizar as rotas da aplicação

const router = require("express").Router()

// rota serviços

const servicesRouter = require("./services");

router.use("/", servicesRouter); // todas as rotas com '/' iram vir de services

// Parties routes

const partyRouter = require("./parties");

router.use("/", partyRouter); // todas as rotas com '/' iram vir de parties !

module.exports = router;