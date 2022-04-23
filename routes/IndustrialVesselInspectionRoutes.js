const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { IndustrialVesselInspectionCreate, IndustrialVesselInspectionUpdate } = require("../schemas/IndustrialVesselInspectionSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/IndustrialVesselInspectionController");

const router = Router();

router.post("/create", [validJWT, validator(IndustrialVesselInspectionCreate)], create);

router.post("/update", [validJWT, validator(IndustrialVesselInspectionUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;