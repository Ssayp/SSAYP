const { response, request } = require("express");

const Data = require("../models/WebPageModel");

const {  listService, disableService, updateService, createService } = require("../utils/transversalService");


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
    listService(Data, req, res, { populate0: "site_id" });
}

module.exports = {
    create,
    getAll,
    update,
    disable
}