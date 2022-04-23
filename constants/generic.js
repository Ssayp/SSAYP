const Activitie = require("../models/ActivitiesModel");
const Measurement = require("../models/MeasurementModel");
const Monitore = require("../models/MonitoringModel");
const WeightCheck = require("../models/WeightCheckModel");
const IndustrialVesselInspection = require("../models/IndustrialVesselInspectionModel");
const AgriculturalProducer = require("../models/AgriculturalProducerModel");
const CostsAndIncome = require("../models/CostsAndIncomeModel");
const MonitoringAgriculturalPrices = require("../models/MonitoringAgriculturalPricesModel");

const GenericSave = {
    "FO-MI-DP-03": Activitie,
    "1500-63.04": Measurement,
    "FO-MI-DP-02": Monitore,
    "FO-MI-DP-07": WeightCheck,
    "FO-MI-DP-06": IndustrialVesselInspection,
    "ID-RE-AGRO-01": AgriculturalProducer,
    "CO-IN-AGRO-01": CostsAndIncome,
    "MO-PRI-01": MonitoringAgriculturalPrices
}

module.exports = {
    GenericSave
}