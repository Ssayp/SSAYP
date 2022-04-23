const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { VersionCreate, VersionUpdate } = require("../schemas/VersionSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/VersionController");

const router = Router();

router.post("/create", [validJWT, validator(VersionCreate)], create);

router.post("/update", [validJWT, validator(VersionUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;