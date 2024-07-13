import { useReducer } from 'react'

const actions = {
    updateKeyword: 'update_keyword',
    updateRating: 'update_rating'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.updateKeyword:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }

        case actions.updateRating:
            return {
                ...state,
                rating: action.rating
            }

        default:
            return state
    }
}

export default function useForm ({ initialKeyword, initialRating }) {
    const [state, dispatch] = useReducer(reducer, {
        keyword: initialKeyword,
        ratings: initialRating,
        times: 0
    })

    const { keyword, rating, times } = state

    return {
        keyword,
        rating,
        times,
        updateKeyword: keyword =>  dispatch({ type: actions.updateKeyword, payload: keyword }),
        updateRating: rating => dispatch({ type: actions.updateRating, payload: rating })
    }
}