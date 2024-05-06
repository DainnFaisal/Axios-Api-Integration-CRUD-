import React, { useState, useEffect } from 'react'
import '../StyleSheets/CreateReadDeleteUser.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function CreateReadDeleteUser() {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [data, setData] = useState([]);

    //Get request to read list of users
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(result => setData(result.data.data))
            .catch(err => console.log(err));
    }, [])


    // Post request (create) to create new users
    const createNewUser = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/users', {
            name,
            job
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
        //clearing input fields after creating user
        setName("");
        setJob("");
    }


    // getting id for update and delete operations
    const setId = (id) => {
        console.log(id);
        localStorage.setItem('ID', id);
    }

    // delete request
    const handleDelete = (id) =>{
        axios.delete('https://reqres.in/api/users/id')
        .then(result => console.log(result))
        .catch ( error => console.log(error));
    }

    return (
        <>
            {/*Filling api data in list items after read request*/}
            <div className='users-list-div'> 
                <h3 className='users-list'>User's List:</h3>
                {
                    data.map((d, index) => {
                        return <>
                            <li key={index}>
                               <p className='id-text'><b>Id:</b> {d.id}</p> 
                                <p> -- <b>FirstName:</b> {d.first_name} </p>
                                <p> -- <b>lastName:</b> {d.last_name} </p>
                                <p> -- <b>Email:</b> {d.email} </p>
                               <Link to ="/UpdateUser"> <button className='edit-btn' onClick={() => setId(d.id)}>Edit</button> </Link>
                                <button className='delete-btn' onClick={ ()=> handleDelete(d.id) }>Delete</button>
                            </li>
                        </>
                    })
                }
            </div>

            {/*Form for creating User*/}
            <div>
                    <h3 className='create-user-heading'>Create New User:</h3>
                    <br />

                    <form className='create-user-form'>
                    <input className='input-fields' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <br/>

                    <input className='input-fields'type='text' placeholder='Job' value={job} onChange={(e) => setJob(e.target.value)} />
                    <br />
                    <br/>

                    <button className='create-user-btn' onClick={createNewUser}>Create User:</button>
                </form>
            </div>
        </>
    )
}

export default CreateReadDeleteUser
