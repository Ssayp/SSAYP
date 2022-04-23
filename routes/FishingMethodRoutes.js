const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FishingMethodCreate,FishingMethodUpdate } = require("../schemas/FishingMethodSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FishingMethodController");

const router = Router();

router.post("/create", [validJWT, validator(FishingMethodCreate)], create);

router.post("/update", [validJWT, validator(FishingMethodUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;