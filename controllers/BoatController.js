const { response, request } = require("express");

const Data = require("../models/BoatModel");

const {  listService, disableService, updateService, createService, listServiceBoatRGP } = require("../utils/transversalService");


const create = (req = request, res = response) => {
    createService(Data, req, res);
}

const update = (req = request, res = response) => {
    updateService(Data, req, res);
}

const disable = (req = request, res = response) => {
    disableService(Data, req, res);
}

const getAll = (req = request, res = response) => {
    listService(Data, req, res, null);
}

const getAllRgp = (req = request, res = response) => {
    listServiceBoatRGP(req, res, null);
}

module.exports = {
    create,
    getAll,
    update,
    disable,
    getAllRgp
}