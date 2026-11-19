import { useEffect } from "react";
import { fetchPhotos, fetchGIF } from "../api/mediaApi";
import { setError, setResults, setLoading } from "../redux/features/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()

    useEffect(function () {

        if (!query) return 
        const getData = async () => {
            try {

                dispatch(setLoading())
                let data = []
                if (activeTab == "photos") {
                    let response = await fetchPhotos(query)
                    data = response.map((item) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full
                    }))
                }
                if (activeTab == "GIF") {
                    let response = await fetchGIF(query)
                    data = response.map((item) => ({
                        id: item.id,
                        type: "GIF",
                        title: item.title,
                        thumbnail: item.embed_url,
                        src: item.url

                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }

        getData()
    }, [query, activeTab])

    if (error) {
        return <h1>Error</h1>
    } if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="flex flex-wrap w-full gap-6 overflow-auto px-10 justify-between">
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid