import GifComponent from '../gif/Gif'
import useSingleGif from 'hooks/useSingleGif'
import { Helmet } from 'react-helmet'

export default function Detail ({ params }) {
    const { gif, loading } = useSingleGif({ id: params['id'] })
    const title = gif && gif.title ? gif.title : ''

    return (
        <div>
            <Helmet>
                <title>{ title }</title>
                <meta name='description' content={ title } />
            </Helmet>
            {
                loading ? <i>Cargando... ☯☯☯</i> : <GifComponent nameClass='Gif-Single' { ...gif } />
            }
        </div>
    )
}