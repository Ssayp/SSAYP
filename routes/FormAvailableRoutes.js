const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { FormAvailableCreate, FormAvailableUpdate } = require("../schemas/FormAvailableSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/FormAvailableController");

const router = Router();

router.post("/create", [validJWT, validator(FormAvailableCreate)], create);

router.post("/update", [validJWT, validator(FormAvailableUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;