const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { AgriculturalProducerFormCreate, AgriculturalProducerFormUpdate } = require("../schemas/AgriculturalProducerFormSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/AgriculturalProducerFormController");

const router = Router();

router.post("/create", [validJWT, validator(AgriculturalProducerFormCreate)], create);

router.post("/update", [validJWT, validator(AgriculturalProducerFormUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;