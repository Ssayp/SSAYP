const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { PropulsionMethodCreate, PropulsionMethodUpdate } = require("../schemas/PropulsionMethodSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/PropulsionMethodController");

const router = Router();

router.post("/create", [validJWT, validator(PropulsionMethodCreate)], create);

router.post("/update", [validJWT, validator(PropulsionMethodUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;