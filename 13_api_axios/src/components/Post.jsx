import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

export const Post = () => {

    const [data, setData] = useState([]);

    const getPostData = async () => {
        try {

            const res = await getPost();
            console.log(res.data);
            setData(res.data);

        } catch (error) {

            console.error("Failed to fetch posts:", error);

        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <section className="section-post">
            <ul>
                {data.map((ele) => {
                    const { id, body, title } = ele;
                    return (
                        <li key={id}>
                            <p>{title}</p>
                            <p>{body}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};