const { Router } = require('express');

const { getSitesWeb } = require("../controllers/PublicWebController");

const router = Router();

router.get("/site/:id", getSitesWeb);

module.exports = router;