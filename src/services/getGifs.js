import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGetGifs = apiResponse => {
    const { data = [] } = apiResponse
    const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.fixed_height_downsampled
        return { url, title, id }
    })

    return gifs
}

export default function getGifs ({ limit = 10, keyword = 'morty', page = 0} = {}) {
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(apiUrl)
        .then(res => res.json())
        .then(fromApiResponseToGetGifs)
}