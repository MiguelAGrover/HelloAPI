const axios = require('axios');

/**
 * This function will sent the received name to nationalize and will return
 * a json with the regions and percentages it has.
 * @param  {string} name This is the name that would be sent to nationalize
 * @return {object}      Will return the percentage of assertion of the regions
 */
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