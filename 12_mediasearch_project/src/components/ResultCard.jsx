
const ResultCard = ({ item }) => {
    return (
        <div className="w-[18vw] h-80 rounded-xl overflow-hidden bg-white relative">
            <div className="h-[100%]">
                {item.type == 'photo' ? <img className="w-full h-full object-cover object-center" src={item.src} alt="" /> : ""}
                {item.type === 'GIF' ? <img className="w-full h-full object-cover object-center" src={item.src}  alt="" /> : ""}
            </div>
        </div>
    )
}

export default ResultCard