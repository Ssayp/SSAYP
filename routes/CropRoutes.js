const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { CropCreate, CropUpdate } = require("../schemas/CropSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/CropController");

const router = Router();

router.post("/create", [validJWT, validator(CropCreate)], create);

router.post("/update", [validJWT, validator(CropUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;