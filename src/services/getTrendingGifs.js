import { API_KEY, API_URL } from "./settings"

const fromApiResponseToTrending = apiResponse => {
    const { data = [] } = apiResponse
    return data
}

export default function getTrendingGifs () {
    const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(apiUrl)
        .then(res => res.json())
        .then(fromApiResponseToTrending)
}