const { response, request } = require("express");

const { listServiceFishermenRGP } = require("../utils/transversalService");

const getAllRgp = (req = request, res = response) => {
    listServiceFishermenRGP(req, res);
}

module.exports = {
    getAllRgp
}