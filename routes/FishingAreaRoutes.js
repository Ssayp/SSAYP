const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FishingAreaCreate, FishingAreaUpdate } = require("../schemas/FishingAreaSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FishingAreaController");

const router = Router();

router.post("/create", [validJWT, validator(FishingAreaCreate)], create);

router.post("/update", [validJWT, validator(FishingAreaUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;