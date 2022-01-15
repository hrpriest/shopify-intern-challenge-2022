export const getData = () => {
    axios.get("/.netlify/functions/fetch-nasa-data?name=Hello")
        .then((response) => {
            return response.data
        })
}