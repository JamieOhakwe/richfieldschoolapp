import React, { useState } from 'react'
import {CREATE_USER_MUTATION} from '../../GraphQL/Mutation'
import { useMutation } from '@apollo/client'
// import { useMutation } from '@apollo/react-hooks'



const Form = () => {
    const [createUser, {error} ] = useMutation(CREATE_USER_MUTATION)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = ()=>{
        createUser({
            variables: {
                firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
            }
        }) 
        if (error){
            console.log(error);
        }
    }
  return (
   <>
    <div>
        <h1>Form</h1>
        
            <input type="text" className='bg-blue-100 text-red-600 p-2' placeholder="First Name" onChange={(e)=>setFirstName(e.target
            .value)} value={firstName} /> 
            <input className='bg-blue-100 text-red-600 p-2' type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target
            .value)} value={lastName} />
            <input className='bg-blue-100 text-red-600 p-2' type="text" placeholder="Email" onChange={(e)=>setEmail(e.target
            .value)} value={email} />
            <input className='bg-blue-100 text-red-600 p-2' type="text" placeholder="Password" onChange={(e)=>setPassword(e.target
            .value)} value={password} />
            <button onClick={addUser} className='p-2 bg-red-600 rounded w-10rem text-white'>Create User</button>

        
    </div>
   </>
  )
}

export default Form