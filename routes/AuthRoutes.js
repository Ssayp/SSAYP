const { Router } = require("express");
const { validTokenApp } = require("../middlewares/validTokenApp");

const { Auth } = require("../controllers/AuthController");

const router = Router();

router.post("/login", Auth);
router.post("/app/login", [validTokenApp], Auth);

module.exports = router;