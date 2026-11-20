import { useState } from "react"
import { addPost } from "../api/PostApi";
import { useEffect } from "react";

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

    const addPostData = async () => {
        const res = await addPost(addData)
        console.log("res", res)

        if (res.status === 201) {
            setData([...data, res.data])
            setAddData({ title: "", body: "" })
        }
    }

    //Form submission

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value;
        addPostData()

        if (action === "Add") {
            addPostData()
        } else if (action === "Edit") {

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