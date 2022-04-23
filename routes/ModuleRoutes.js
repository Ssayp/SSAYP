const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { ModuleCreate, ModuleUpdate } = require("../schemas/ModuleSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/ModuleController");

const router = Router();

router.post("/create", [validJWT, validator(ModuleCreate)], create);

router.post("/update", [validJWT, validator(ModuleUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;