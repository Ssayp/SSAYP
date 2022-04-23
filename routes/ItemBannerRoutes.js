const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { ItemBannerCreate, ItemBannerUpdate } = require("../schemas/ItemBannerSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/ItemBannerController");

const router = Router();

router.post("/create", [validJWT, validator(ItemBannerCreate)], create);

router.post("/update", [validJWT, validator(ItemBannerUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;