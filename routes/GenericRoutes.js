const { Router } = require('express');

const { validJWT } = require("../middlewares/validarjwt");
const { validTokenApp } = require("../middlewares/validTokenApp");
const { validator } = require("../middlewares/validator");
const { getData, saveData, historicByUser } = require("../controllers/GenericController");
const { getSearch } = require('../controllers/SearchesController');
const { GenericHistoric } = require("../schemas/GenericSchema");

const router = Router();

router.get("/list", [validJWT], getData);

router.post("/app/create", [validTokenApp], saveData);

router.get('/app/getdata', [validTokenApp], getSearch);

router.get('/app/getdataAll', getSearch);

router.get('/getdata', [validJWT], getSearch);

router.get('/app/gethistoric', [validTokenApp, validator(GenericHistoric)], historicByUser);

module.exports = router;