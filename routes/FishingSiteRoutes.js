const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FishingSiteCreate, FishingSiteUpdate } = require("../schemas/FishingSiteSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FishingSiteController");

const router = Router();

router.post("/create", [validJWT, validator(FishingSiteCreate)], create);

router.post("/update", [validJWT, validator(FishingSiteUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;