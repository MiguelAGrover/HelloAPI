const axios = require('axios');

let getNationalizeAPI = function getWeather(name=Wizeline){
        const promise = axios.get('https://api.nationalize.io/', {
        params: {
        name:name
        }
        })

        const dataPromise = promise.then((response) => response.data)

        return dataPromise
    }


module.exports = getNationalizeAPI;