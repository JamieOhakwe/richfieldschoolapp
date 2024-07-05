'use client'
import {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import { LOAD_USERS } from '../../graphQL/Queries';




const GetUsers = () => {
    const {loading, error, data} = useQuery(LOAD_USERS);
    const {users, setUsers} = useState([])

    useEffect(() => {
      if(data){     
        console.log(data);   
        // setUsers(data?.getAllUser)     
    }
    }, [data, setUsers]);
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (

    <>
    <div>

      <h1>Get Users</h1>
      {/* <div>

      {users.map((user)=>{
        return <p key={user.email}>{user.email}</p>
      })}
      </div> */}

      {data?.getAllUser.map((user)=>(
        <div className='text-gray-500 text-xl border border-red-500' key={user.email}>
          <h1> Email: {user.email}</h1>
          <h2> FirstName: {user.firstName}</h2>
          <span>Role: {user.role}</span>
        </div>
      ))}
    </div>
    </>
  )
}

export default GetUsers