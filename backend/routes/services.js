const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

// funções
// método de post do usuário para api /services!
router
.route("/services")
.post((req, res) => serviceController.create(req, res));

// rota para o método get da api!

router
.route("/services")
.get((req, res) => serviceController.getAll(req, res));

// rota para o método get pelo id(individual) !
router
.route("/services/:id")
.get((req, res) => serviceController.get(req, res));

// rota para o método delete !
router
.route("/services/:id")
.delete((req, res) => serviceController.delete(req, res));

// rota para atualização!
router
.route("/services/:id")
.put((req, res) => serviceController.update(req, res));

module.exports = router;

