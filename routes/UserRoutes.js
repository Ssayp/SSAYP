const { Router } = require('express');

const { validator } = require("../middlewares/validator");
const { validJWT } = require("../middlewares/validarjwt");
const { validTokenApp } = require("../middlewares/validTokenApp");
const { UserSchema, UserUpdate, AppUpdate } = require("../schemas/UserSchema");
const { GenericDisable } = require("../schemas/GenericSchema");

const { create, update, list, disable, changePassword } = require("../controllers/UserController");

const router = Router();

router.post("/create", [validJWT, validator(UserSchema)] , create);

router.post("/update",  [validJWT, validator(UserUpdate)], update);

router.post("/disable", [validJWT, validator(GenericDisable)], disable);

router.get("/list",  [validJWT], list);

router.post("/app/update",  [validTokenApp, validator(AppUpdate)], changePassword);

module.exports = router;