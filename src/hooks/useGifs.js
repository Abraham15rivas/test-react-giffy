import { useEffect, useState, useContext } from "react"
import getGifs from 'services/getGifs';
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating }) {
    const [page, setPage] = useState(INITIAL_PAGE)
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)

        getGifs({ keyword, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
        })
    }, [keyword, setGifs, rating])

    useEffect(() => {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword, page, rating })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keyword, page, setGifs, rating])

    return { loading, loadingNextPage, gifs, setPage }
}