import { useState } from "react";
import { Download, Check } from "lucide-react";

const ResultCard = ({ item }) => {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = (e) => {
        e.preventDefault(); // Prevents triggering the parent <a> link if needed
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 1500);
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
                className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            >
                <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
                    {item.title}
                </h2>

                <button
                    type="button"
                    aria-label="Download"
                    onClick={handleDownload}
                    className={`group/btn p-2.5 rounded-full backdrop-blur-md border transition-all duration-200 cursor-pointer shrink-0 active:scale-90 ${downloaded
                        ? "bg-emerald-400/30 border-emerald-300/50 text-emerald-200"
                        : "bg-white/15 border-white/25 text-white hover:bg-sky-300/30 hover:border-sky-200/60 hover:text-sky-100 hover:shadow-lg hover:shadow-sky-400/20"
                        }`}
                >
                    {downloaded ? (
                        <Check className="w-5 h-5 stroke-[2.5] animate-bounce" />
                    ) : (
                        <Download className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-y-0.5 group-active/btn:translate-y-1.5" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ResultCard;