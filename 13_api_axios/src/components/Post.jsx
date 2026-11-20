import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";
import Form from "./Form.jsx";

export const Post = () => {

    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({})

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

    //Function to delete Post

    const handleDeletePost = async (id) => {
        const res = await deletePost(id);
        try {
            if (res.status === 200) {
                const newUpdatedPosts = data.filter((curPost) => {
                    return curPost.id != id
                })

                setData(newUpdatedPosts)
            } else {
                console.log("Failed to delete the post", res.status)
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Function to update post

    const handleUpdatePost = (ele) => setUpdateDataApi(ele)

    return (
        <>
            <section className="section-form">
                <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
            </section>
            <section className="section-post">
                <ol>
                    {data.map((ele) => {
                        const { id, body, title } = ele;
                        return (
                            <li key={id}>
                                <p>Title: {title}</p>
                                <p>Body: {body}</p>
                                <button onClick={() => handleUpdatePost(ele)}>Edit</button>
                                <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
                            </li>
                        );
                    })}
                </ol>
            </section>
        </>
    );
};