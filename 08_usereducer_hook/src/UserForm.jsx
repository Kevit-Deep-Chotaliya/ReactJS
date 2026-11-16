import React from 'react'
import { useId } from 'react'

const UserForm = () => {

   const id = useId();

    return (
        <form action="">
            <label htmlFor={`${id}-name`}>Enter UserName: </label>
            <input type="text" id={`${id}-name`} />
            <br /><br />

            <label htmlFor={`${id}-password`}>Enter Password: </label>
            <input type="text" id={`${id}-password`} />

        </form>
    )
}

export default UserForm