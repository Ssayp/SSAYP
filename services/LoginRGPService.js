const axios = require('axios');

const getToken = async () => {
    try{
        let response = await axios.post(process.env.API_RPG+'oauth/token', {
            "client_id": process.env.RGP_CLIENT_ID,
            "client_secret": process.env.RGP_CLIENT_SECRET,
            "grant_type": "password",
            "password": process.env.RGP_SECRET,
            "scope": "externalApi",
            "username": process.env.RGP_USER
        }, );
        let config = {
          headers: {
            Authorization: response.data.token_type + ' '+ response.data.access_token,
          }
        };

        return config;
    }catch(error){
        throw (error);
        console.log(error);
    }
}

module.exports = {
    getToken
}
