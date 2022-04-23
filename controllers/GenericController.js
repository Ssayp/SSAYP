const { response, request } = require("express");
const { message } = require("../constants/response");
const { sendDataResponse, internalError, badRequestError } = require("../utils/response");

const Boat = require("../models/BoatModel");
const Species = require("../models/SpeciesModel");
const FishingArea = require("../models/FishingAreaModel");
const FishingArt = require("../models/FishingArtModel");
const FishingMethod = require("../models/FishingMethodModel");
const Propulsion = require("../models/PropulsionMethodModel");
const FishingSite = require("../models/FishingSiteModel");
const CropModel = require("../models/CropModel");

const { GenericSave } = require("../constants/generic");
const Activitie = require("../models/ActivitiesModel");
const Measurement = require("../models/MeasurementModel");
const Monitore = require("../models/MonitoringModel");
const WeightCheck = require("../models/WeightCheckModel");
const { Actions } = require("../constants/actionLogs");


const getData = async (req = request, res = response) => {
    try{
        const boats = await Boat.find({is_active: true});
        const species = await Species.find({is_active: true});
        const areas = await FishingArea.find({is_active: true});
        const arts = await FishingArt.find({is_active: true});
        const methods = await FishingMethod.find({is_active: true});
        const propulsions = await Propulsion.find({is_active: true});
        const sites = await FishingSite.find({is_active: true});
        const crops = await CropModel.find({is_active: true});

        const objectData = {
            boats,
            species,
            areas,
            arts,
            methods,
            propulsions,
            sites,
            crops
        };
        sendDataResponse(res, message.list, objectData, {
            Data: { modelName: "Generic"},
            req,
            action: Actions.list
        });
            
            
    }catch(error) {
        internalError(res, error, { Data: { modelName: "Generic"}, req, action: Actions.list });
    }

}

const saveData = (req = request, res = response) => {
    try{
        const requestBody = req.body;
        console.log(requestBody);

        const ModelGeneric = GenericSave[requestBody.idFormulario];
        
        if(ModelGeneric != undefined){
            const data = new ModelGeneric(requestBody);

            data.save(function(error, saved){
                console.log(error);
                if(error)
                badRequestError(res, error, { Data: ModelGeneric, req, action: Actions.create, object: `body: ${requestBody}` });
                else
                sendDataResponse(res, message.create, { _id: saved._id }, { Data: { modelName: "Generic"}, req, action: Actions.create, object: `body: ${requestBody}` });
            })
        }else {  
            console.log(error);
            badRequestError(res, error, { Data: { modelName: "Generic"}, req, action: Actions.create, object: `body: ${requestBody}` });
        }
        

    }catch(error){
        console.log(error);
        internalError(res, error, { Data: { modelName: "Generic"}, req, action: Actions.create });
    }
}

const historicByUser = (req = request, res = response) => {
    try{
        const requestBody = req.body;

        const { idUser } = requestBody;

        const activities = Activitie.find({is_active: true, create_by: idUser});
        const measurement = Measurement.find({is_active: true, create_by: idUser});
        const monitoring = Monitore.find({is_active: true, create_by: idUser});
        const weightCheck = WeightCheck.find({is_active: true, create_by: idUser});
        
        const objectData = {
            formats: [
                {
                    name: "Formato de actividades",
                    data: activities
                },
                {
                    name: "Formato de tallas",
                    data: measurement
                },
                {
                    name: "Formato de Monitoreo",
                    data: monitoring
                },
                {
                    name: "Formato de verificación de peso",
                    data: weightCheck
                }
            ]
        };
        sendDataResponse(res, message.list, objectData, {
            Data: { modelName: "Generic"},
            req,
            action: Actions.list
        });

    }catch(error){
        internalError(res, error, { Data: { modelName: "Generic"}, req, action: Actions.list });
    }
}

module.exports = {
    getData,
    saveData,
    historicByUser
}




