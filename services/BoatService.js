const { getToken } = require("./LoginRGPService");
const axios = require('axios');

const listBoats = async(req) => {
    try{
        let auth = await getToken();
        let boats = await axios.get(`${process.env.API_RPG}api/rpg-sai/external-api/v1/all-boats/${req.params.type}`, {...auth, params: req.query});
        return boats.data;

    }catch(error){
        throw (error);
    }
}

module.exports = {
    listBoats
}
