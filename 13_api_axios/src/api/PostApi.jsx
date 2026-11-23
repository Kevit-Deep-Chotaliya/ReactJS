import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

//GET method

export const getPost = () => {
    return api.get("/posts");
}

//DELETE Method

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

//POST Method

export const addPost = (post) => {
    return api.post("/posts", post);
}

//PUT Method

export const updateData = (id, post) => {
    return api.put(`/posts/${id}`, post)
}

//PATCH Method



