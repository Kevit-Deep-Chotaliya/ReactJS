
const ResultCard = ({ item }) => {
    return (
        <div className="w-[18vw] h-80 rounded-xl overflow-hidden bg-white relative">
            <div className="h-full">
                {item.type == 'photo' ? <img className="w-full h-full object-cover object-center" src={item.src} alt="" /> : ""}
                {item.type == 'GIF' ? <img className="w-full h-full object-cover object-center" src={item.src} alt="" /> : ""}
            </div>
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
            </div>
        </div>
    )
}

export default ResultCard