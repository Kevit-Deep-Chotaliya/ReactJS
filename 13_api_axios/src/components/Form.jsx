import { useState } from "react"
import { addPost, updateData } from "../api/PostApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });

    let isEmpty = Object.keys(updateDataApi).length === 0;      

    //get the updated data and add into input field

    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || ""
        })
    }, [updateDataApi])


    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    //addPostData
    const addPostData = async () => {
        const res = await addPost(addData)
        console.log("res", res)

        if (res.status === 201) {
            setData([...data, res.data])
            setAddData({ title: "", body: "" })
            toast.success("Post created successfully!");
        }
    }

    //updatePostData
    const updatePostData = async () => {

        try {
            const res = await updateData(updateDataApi.id, addData)
            console.log(res);

            if (res.status === 200) {
                setData((prev) => {
                    return prev.map((curElem) => {
                        return curElem.id === res.data.id ? res.data : curElem;
                    })
                })

                setAddData({ title: "", body: "" })
                setUpdateDataApi({});
                toast.info("Post Updated successfully!");
            }

        } catch (error) {
            toast.error("Failed to update a post");
        }
    }

    //Form submission

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value; //Identifies which submit button triggers the form submission.

        if (action === "ADD") {
            addPostData()
        } else if (action === "EDIT") {
            updatePostData()
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange} />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input type="text"
                    autoComplete="off"
                    id="body"
                    name="body"
                    placeholder="Add Body"
                    value={addData.body}
                    onChange={handleInputChange} />
            </div>
            <button type="submit" value={isEmpty ? "ADD" : "EDIT"}>
                {isEmpty ? "ADD" : "EDIT"}
            </button>
        </form>
    )
}

export default Form