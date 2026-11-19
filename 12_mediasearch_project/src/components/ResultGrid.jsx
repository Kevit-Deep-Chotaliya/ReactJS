import { fetchPhotos, fetchGIF } from "../api/mediaApi";
import { setQuery, setError, setActiveTab, setResults, setLoading } from "../redux/features/searchSlice";
import { useSelector, useDispatch  } from "react-redux";

const ResultGrid = () => {

    const {query, activeTab, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()

    const getData = async () => {
        if(activeTab == "photos") {
            const data = await fetchPhotos(query)
            console.log(data)
        }
    }
    return (
        <div>
            <button onClick={getData}>getdata</button>
        </div>
    )
}

export default ResultGrid