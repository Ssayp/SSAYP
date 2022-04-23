const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { SpeciesCreate, SpeciesUpdate } = require("../schemas/SpeciesSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/SpeciesController");

const router = Router();

router.post("/create", [validJWT, validator(SpeciesCreate)], create);

router.post("/update", [validJWT, validator(SpeciesUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;