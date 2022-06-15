const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { getAllRgp } = require("../controllers/FishermenController");

const router = Router();

router.get("/list-fishermen-rgp/:type", [validJWT], getAllRgp);

module.exports = router;
