import { useState } from "react"
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
    }

    return (
        <div>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className="flex gap-10 p-10 bg-(--c1)">
                <input
                    required
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    className="border-2 px-4 py-2 text-xl w-full rounded outline-none"
                    type="text"
                    placeholder="search anything..." />
                <button className="border-2 px-4 py-2 text-xl rounded outline-none required cursor-pointer active:scale-95">Search</button>
            </form>
        </div>
    )
}

export default SearchBar