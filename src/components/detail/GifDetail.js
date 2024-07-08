import GifComponent from '../gif/Gif'
import useSingleGif from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'

export default function Detail ({ params }) {
    const { gif, loading } = useSingleGif({ id: params['id'] })
    const title = gif && gif.title ? gif.title : ''
    useSEO({ title, description: `Description of ${title}` })

    return (
        <div>
            {
                loading ? <i>Cargando... ☯☯☯</i> : <GifComponent nameClass='Gif-Single' { ...gif } />
            }
        </div>
    )
}