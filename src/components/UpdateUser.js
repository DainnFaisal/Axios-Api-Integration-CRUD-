import React, { useState } from 'react'
import '../StyleSheets/UpdateUser.css'
import axios from 'axios'

function UpdateUser() {


    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    // Put request (update) to update users
    const UpdateUser = (e) => {
        e.preventDefault();
        axios.put('https://reqres.in/api/users/id', {
            name,
            job,
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));

        //clearing input fields after updating user
        setName("");
        setJob("");
    }


    return (
        <>
            {/*Form for Updating User Info:*/}
            <div>
                    <h3 className='update-user-heading' >Update User Info:</h3>
                    <br/>

                    <form className='update-user-form'>
                    <input className='input-fields' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <br/>

                    <input className='input-fields' type='text' placeholder='Job' value={job} onChange={(e) => setJob(e.target.value)} />
                    <br />
                    <br/>
                    <button className='update-user-btn' onClick={UpdateUser}>Update User:</button>
                </form>
            </div>
        </>
    )
}

export default UpdateUser
