const { getUser } = require("../utils/getUser");
const { Interface } = require("../constants/actionLogs");
const ActionLog = require("../models/ActionLogModel");

const saveActionLog = async(Data, req, action, info, type, isAuth) => {
    try{
        const path = req._parsedUrl.path.substring(1, 4);
        const { modelName} = Data;
        let user = {};
        if(isAuth == undefined && path != "app") user = {user: await getUser(req)} ;
        const objectAction = { ...user, model: modelName, action, interface: path == "app" ? Interface.mobile : Interface.web, info, type};
        const data = new ActionLog(objectAction);
        data.save();
    }catch(error){
        console.log(error);
    }
    
}

module.exports = {
    saveActionLog
}