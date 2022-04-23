const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { ActivitiesCreate, ActivitiesUpdate } = require("../schemas/ActivitiesSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/ActivitiesController");

const router = Router();

router.post("/create", [validJWT, validator(ActivitiesCreate)], create);

router.post("/update", [validJWT, validator(ActivitiesUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;