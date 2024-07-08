import { useEffect, useState } from "react"
import getTrendingGifs from "services/getTrendingGifs"
import Category from "../category/CategoryList"

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingGifs().then(setTrends)
    }, [])

    return <Category options={trends} />
}