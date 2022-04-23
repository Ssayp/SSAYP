const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { CostsAndIncomeCreate, CostsAndIncomeUpdate } = require("../schemas/CostsAndIncomeSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable, getReport } = require("../controllers/CostsAndIncomeController");

const router = Router();

router.post("/create", [validJWT, validator(CostsAndIncomeCreate)], create);

router.post("/update", [validJWT, validator(CostsAndIncomeUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

router.post("/report", [validJWT], getReport);

module.exports = router;