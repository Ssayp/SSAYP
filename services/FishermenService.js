const { getToken } = require("./LoginRGPService");
const axios = require('axios');

const listFishermen = async(req) => {
    try{
        let auth = await getToken();

        let fishermen = await axios.get(`${process.env.API_RPG}api/rpg-sai/external-api/v1/all-fishermen/${req.params.type}`, {...auth, params: req.query});
        return fishermen.data.data;

    }catch(error){
        throw (error);
    }
}

module.exports = {
    listFishermen
}
