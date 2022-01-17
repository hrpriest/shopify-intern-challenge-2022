import axios from 'axios'

//startDate cannot be after endDate
export const fetchData = async (startDate, endDate) => {
    return axios.get(`/.netlify/functions/fetch-nasa-data?startDate=${startDate}&endDate=${endDate}`)
        .then((response) => {
            return response
        })
}