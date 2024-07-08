import { useState, useEffect } from 'react';
import getSingleGif from 'services/getSingleGif';

export default function useSingleGif({ id }) {
    const [loading, setLoading] = useState(false)
    const [gif, setGif] = useState({})

    useEffect(() => {
        setLoading(true)

        getSingleGif({ id })
            .then(gif => {
                setGif(gif)
                setLoading(false)
        })
    }, [id, setGif])

    return { gif, loading }

}