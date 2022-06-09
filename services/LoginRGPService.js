const { getUser } = require("../utils/getUser");
const axios = require('axios');

const getToken = async () => {
    try{
        let response = await axios.post(process.env.API_RPG+'oauth/token', {
            "client_id": "2",
            "client_secret": "mS5WmSWppoKIwewDs6P9JjVuWk0pebybYCyfA7Nf",
            "grant_type": "password",
            "password": "Temporal456@!",
            "scope": "externalApi",
            "username": "super_administrador@gmail.com"
        });

        let config = {
          headers: {
            Authorization: response.data.token_type + ' '+ response.data.access_token,
          }
        }

        return config;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getToken
}