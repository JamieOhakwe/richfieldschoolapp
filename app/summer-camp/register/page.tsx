import { Label } from '@headlessui/react'
import React from 'react'

const Register = () => {
  return (
    <>
    
    <div>Register</div>
    <div className='flex item-center justify-center '>
        <div className='bg-white w-[20rem]  p-4  '>

            <form className='flex flex-col '>
                <span>First Name:</span>
                <input className='bg-blue-200 ' type="text" />
                <br />
                <span>Last Name:</span>
                <input className='bg-blue-200 ' type="text" />
                <br />
                <span>Email</span><br />
                <input className='bg-blue-200 ' type="password" />
                <br />
                <span>Phone number</span><br />
                <input className='bg-blue-200 ' type="text" />
                <br />
                <span>School</span>
                <select>
                    <option value="1">Select school</option>
                    <option value="1">Pre-school</option>
                    <option value="2">Elementary</option>
                    <option value="2">College</option>
                </select><br />
                <span>Class</span>
                <select>
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