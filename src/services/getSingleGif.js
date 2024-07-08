import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGetGif = apiResponse => {
    const { data = null } = apiResponse

    if (data) {
        const { images, title, id } = data
        const { url } = images && images.fixed_height_downsampled ? images.fixed_height_downsampled : ''
        return { url, title, id }
    }

}

export default function getSingleGif ({ id }) {
    const apiUrl = `${API_URL}/gifs/${id}?api_key=${API_KEY}`

    return fetch(apiUrl)
        .then(res => res.json())
        .then(fromApiResponseToGetGif)
}