const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FishingTechniqueCreate, FishingTechniqueUpdate } = require("../schemas/FishingTechniqueSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FishingTechniqueController");

const router = Router();

router.post("/create", [validJWT, validator(FishingTechniqueCreate)], create);

router.post("/update", [validJWT, validator(FishingTechniqueUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;