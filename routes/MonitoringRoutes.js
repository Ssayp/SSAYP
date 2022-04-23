const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { MonitoringCreate, MonitoringUpdate } = require("../schemas/MonitoringSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/MonitoringController");

const router = Router();

router.post("/create", [validJWT, validator(MonitoringCreate)], create);

router.post("/update", [validJWT, validator(MonitoringUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;