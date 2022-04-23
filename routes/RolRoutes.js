const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { RolCreate, RolUpdate } = require("../schemas/RolSchema")
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/RolController");

const router = Router();

router.post("/create", [validJWT, validator(RolCreate)], create);

router.post("/update", [validJWT, validator(RolUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;