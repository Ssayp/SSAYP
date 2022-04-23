const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FishingArtCreate, FishingArtUpdate } = require("../schemas/FishingArtSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FishingArtController");

const router = Router();

router.post("/create", [validJWT, validator(FishingArtCreate)], create);

router.post("/update", [validJWT, validator(FishingArtUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;