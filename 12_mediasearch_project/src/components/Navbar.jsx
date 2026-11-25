import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="py-6 px-10 bg-(--c2) flex justify-between items-center">
            <h2 className="text-medium text-2xl">MediaSearch</h2>
            <div className="flex gap-5 items-center">
                <Link className="text-base font-medium bg-(--c4) ronded text-(--c1) px-5 py-2 hover:bg-green-200 active:scale-95" to='/'>Search</Link>
                <Link className="text-base font-medium bg-(--c4) ronded text-(--c1) px-5 py-2 hover:bg-green-200 active:scale-95" to='/collection'>Collection</Link>
            </div>

        </div>
    )
}

export default Navbar