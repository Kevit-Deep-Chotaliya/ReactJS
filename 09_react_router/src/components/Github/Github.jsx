import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("http://api.github.com/users/Deep1704")
    //         .then(Response => Response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 p-4 bg-amber-200 text-amber-900 text-2xl'>
            Github Followers: {data.followers}
            <img className='mx-auto'src={data.avatar_url} alt='Github Profile Picture' width={300} />

        </div>
    )
}

export const githubData = async () => {
    const response = await fetch("http://api.github.com/users/Deep1704");
    return response.json();
}

export default Github