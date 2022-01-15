require('dotenv').config()
const axios = require('axios')
const API_KEY = process.env.API_KEY

const handler = async (event) => {
    const startDate = event.queryStringParameters['start-date']
    const endDate = event.queryStringParameters['end-date']
    

    if (startDate === undefined || endDate === undefined) {
        return {
            statusCode: 400,
            body: "Please include both a start and end date."
        }
    }

    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
    let response = await axios.get(url)
    console.log(response)
    
    if (response.status != "200") {
        return {
            statusCode: 502,
            body: "Problem reaching NASA API"
        }
    } else {
        return {
            statusCode: 200,
            body: response.body
        }
    }
}

module.exports = { handler }