const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validator } = require("../middlewares/validator");
const { WebPageCreate, WebPageUpdate } = require("../schemas/WebPageSchema");
const { GenericDisable } = require("../schemas/GenericSchema");
const { create, update, getAll, disable } = require("../controllers/WebPageController");

const router = Router();

router.post("/create", [validJWT, validator(WebPageCreate)], create);

router.post("/update", [validJWT, validator(WebPageUpdate)],update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list", [validJWT], getAll);

module.exports = router;