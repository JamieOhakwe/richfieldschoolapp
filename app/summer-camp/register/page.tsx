// import { Label } from '@headlessui/react'
import React from 'react'

const Register = () => {
  return (
    <>
    
    <div>Register</div>
    <div className='flex item-center justify-center '>
        <div className='bg-white w-[20rem] shadow-xl p-4 rounded-xl '>

            <form className='flex flex-col gap-2 text-blue-950  mb-4 '>
                <span>First Name:</span>
                <input className='bg-blue-200 ' type="text" />
                
                <span>Last Name:</span>
                <input className='bg-blue-200 ' type="text" />
                
                <span>Email</span>
                <input className='bg-blue-200 ' type="password" />
            
                <span>Phone number</span>
                <input className='bg-blue-200 ' type="text" />
                
                <span>School</span>
                <select className='bg-blue-200'>
                    <option value="1">Select school</option>
                    <option value="1">Pre-school</option>
                    <option value="2">Elementary</option>
                    <option value="2">College</option>
                </select>
                <span>Class</span>
                <select className='bg-blue-200'>
                    <option value="1">Select class</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="2">Year 3</option>
                    <option value="2">Year 4</option>
                    <option value="2">Year 5</option>
                    <option value="2">Year 6</option>
                    <option value="2">Year 7</option>
                    <option value="2">Year 8</option>
                    <option value="2">Year 9</option>
                    <option value="2">Year 10</option>
                    <option value="2">Year 11</option>
                    <option value="2">Year 12</option>
                </select><br />
                <button className='bg-blue-600 rounded-xl my-2 w-full  px-5 py-3 text-white'>Register Now!</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register