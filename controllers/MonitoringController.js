const { response, request } = require("express");

const Data = require("../models/MonitoringModel");

const { disableService, updateService, createService, listService, reportServices } = require("../utils/transversalService");

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
    listService(Data, req, res, {populate0: "create_by"});
}

const getReport = (req = request, res = response) => {
    reportServices(Data, req, res, {populate0: "create_by", populate1: "site", populate2: "zone", populate3: "name_ship", populate4: "type_motor"});
}

module.exports = {
    create,
    getAll,
    update,
    disable,
    getReport
}