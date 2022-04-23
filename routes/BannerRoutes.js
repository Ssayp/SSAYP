const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { BannerCreate, BannerUpdate } = require("../schemas/BannerSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/BannerController");

const router = Router();

router.post("/create", [validJWT, validator(BannerCreate)], create);

router.post("/update", [validJWT, validator(BannerUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;