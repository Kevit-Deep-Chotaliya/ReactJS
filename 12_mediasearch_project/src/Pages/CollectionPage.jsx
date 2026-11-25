import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)
    return (
        <div className="flex flex-wrap w-full gap-2 overflow-auto px-10 py-8 justify-between">
            {collection.map((item, idx) => {
                return <div key={idx}>
                    <CollectionCard item={item} />
                </div>
            })}
        </div>
    )
}

export default CollectionPage