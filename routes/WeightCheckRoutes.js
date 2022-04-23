const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { WeightCheckCreate, WeightCheckUpdate } = require("../schemas/WeightCheckSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/WeightCheckController");

const router = Router();

router.post("/create", [validJWT, validator(WeightCheckCreate)], create);

router.post("/update", [validJWT, validator(WeightCheckUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;