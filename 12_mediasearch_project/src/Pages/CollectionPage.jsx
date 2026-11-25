import { useSelector, useDispatch } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)

    const dispatch = useDispatch()

    const clearAll = () => {
        dispatch(clearCollection())
    }
    return (
        <div className="overflow-auto px-10 py-8">

            {collection.length > 0 ?
                <div className="flex justify-between mb-6">
                    <h2 className="text-3xl font-medium">
                        Your Collection
                    </h2>
                    <button
                        className="bg-red-500 active:scale-95 cursor-pointer transition px-6 py-1 text-lg font-medium rounded"
                        onClick={() => { clearAll() }}
                    >Clear Collection</button>
                </div> : <h2 className="text-5xl py-10 text-gray-300 text-center font-medium">
                    Collection is Empty
                </h2>}


            <div className="flex flex-wrap w-full gap-2 justify-between">
                {collection.map((item, idx) => {
                    return <div key={idx}>
                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default CollectionPage