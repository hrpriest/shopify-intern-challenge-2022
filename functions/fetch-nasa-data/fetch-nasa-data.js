require('dotenv').config()
const axios = require('axios')
const API_KEY = process.env.API_KEY

const handler = async (event) => {
    const startDate = event.queryStringParameters.startDate
    const endDate = event.queryStringParameters.endDate
    console.log(`Start date = ${startDate}`)
    console.log(`End date = ${endDate}`)


    if (startDate === undefined || endDate === undefined) {
        console.log("why is this broken?")
        return {
            statusCode: 400,
            body: "Please include both a start and end date."
        }
    }

    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
    console.log(url)
    let response = await axios.get(url)
    //console.log(response)

    if (response.status != "200") {
        return {
            statusCode: 502,
            body: "Problem reaching NASA API"
        }
    } else {

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    }
}

module.exports = { handler }
