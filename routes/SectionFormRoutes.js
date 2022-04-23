const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { SectionFormCreate, SectionFormUpdate } = require("../schemas/SectionFormSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/SectionFormController");

const router = Router();

router.post("/create", [validJWT, validator(SectionFormCreate)], create);

router.post("/update", [validJWT, validator(SectionFormUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;