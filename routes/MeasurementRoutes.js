const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { MeasurementCreate, MeasuremenUpdate } = require("../schemas/MeasurementSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/MeasurementController");

const router = Router();

router.post("/create", [validJWT, validator(MeasurementCreate)], create);

router.post("/update", [validJWT, validator(MeasuremenUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;