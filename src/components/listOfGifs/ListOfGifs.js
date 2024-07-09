
import { useEffect, useRef, useCallback } from 'react'
import { useGifs } from 'hooks/useGifs'
import Gif from '../gif/Gif'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import './ListOfGifs.css'

export default function ListOfGifs ({ params }) {
    const { keyword } = params
    const  { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        distance: '100px',
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs ? `${gifs.length} gifs of ${keyword}` : ''

    const debounceHandleNextPage = useCallback(
        debounce(() => setPage(prevPage => prevPage + 1), 1000)
    , [setPage])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return (<>
        {
            loading
            ? <i>Cargando... ☯☯☯</i>
            :
            <>
                <Helmet>
                    <title>{ title }</title>
                    <meta name='description' content={ title } />
                </Helmet>
                <div className='ListOfGifs'>
                    {
                        gifs.map(({ id, title, url }) =>
                            <Gif
                                id={id}
                                key={id}
                                title={title}
                                url={url}
                            />
                        )
                    }
                </div>
                <div ref={externalRef}></div>
            </>
        }
    </>)
}