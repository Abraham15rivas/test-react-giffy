import React from 'react';
import { useLocation } from 'wouter'
import useForm from './hook';

const ratings = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword, initialRating }) {
    const [path, pushLocation] = useLocation('');
    //const [keyword, setKeyword] = useState(initialKeyword)
    //const [rating, setRating] = useState(initialRating)
    //const [times, setTimes] = useState(0)

    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/gifs/${keyword}/${rating}`)
    }

    const handleChange = (event) => {
        updateKeyword(event.target.value)
    }

    const handleChangeRating = (event) => {
        updateRating(event.target.value)
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} />
            <select onChange={handleChangeRating} value={rating}>
                <option selected>Rating type</option>
                {
                    ratings.map((rating, index) => <option key={index}>{ rating }</option>)
                }
            </select>
            {times}
        </form>
    </>)
}

export default React.memo(SearchForm)