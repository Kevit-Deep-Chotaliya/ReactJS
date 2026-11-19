import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {

    const dispatch = useDispatch()
    const activetab = useSelector((state) => state.search.activeTab)

    const tabs = ["photos", "GIF"]
    return (
        <div className="flex gap-5 p-12">
            {tabs.map(function (ele, index) {
                return <button
                    className={`${(activetab == ele ? "bg-blue-500" : "bg-blue-950")} transition px-5 py-2 cursor-pointer active:scale-95 rounded uppercase`}
                    key={index}
                    onClick={() => {
                        dispatch(setActiveTab(ele))
                    }}>
                    {ele}
                </button>
            })}
        </div>
    )
}

export default Tabs