import GifComponent from '../gif/Gif'
import useGlobalGifs from 'hooks/useGlobalGifs'

export default function Detail ({ params }) {
    const gifs = useGlobalGifs()

    if (gifs.length) {
        const gif = gifs.find(singleGif => singleGif.id === params.id)

        if (gif) {
            console.log(gif)
            return <GifComponent { ...gif }  />
        }
    }
}