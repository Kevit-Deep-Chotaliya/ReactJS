import { useState } from "react";
import { Trash2, Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
    const [removed, setRemoved] = useState(false);

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item));
        dispatch(removeToast());
    };

    const handleRemove = (e) => {
        e.preventDefault();
        setRemoved(true);
        setTimeout(() => setRemoved(false), 1500);
    };

    return (
        <div className="w-[18vw] h-80 rounded-xl overflow-hidden bg-white relative group">
            <a href={item.url} className="block h-full" target="_blank">
                {(item.type === "photo" || item.type === "GIF") && (
                    <img
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        src={item.src}
                        alt={item.title || ""}
                    />
                )}
            </a>

            <div
                id="bottom"
                className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white bg-linear-to-t from-black/80 via-black/40 to-transparent"
            >
                <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
                    {item.title}
                </h2>

                <button
                    type="button"
                    aria-label="Remove from collection"
                    onClick={(e) => {
                        handleRemove(e);
                        removeFromCollection(item);
                    }}
                    className={`group/btn p-2.5 rounded-full backdrop-blur-md border transition-all duration-200 cursor-pointer shrink-0 active:scale-90 ${
                        removed
                            ? "bg-red-500/35 border-red-300/60 text-red-100"
                            : "bg-white/15 border-white/25 text-white hover:bg-red-400/30 hover:border-red-300/60 hover:text-red-100 hover:shadow-lg hover:shadow-red-500/20"
                    }`}
                >
                    {removed ? (
                        <Check className="w-5 h-5 stroke-[2.5] animate-bounce" />
                    ) : (
                        <Trash2 className="w-5 h-5 transition-transform duration-200 group-hover/btn:scale-110 group-hover/btn:-rotate-6 group-active/btn:scale-90" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default CollectionCard;