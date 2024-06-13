import React from 'react'

const SignupCard = () => {
  return (
    <>
        <div className='w-full h-full flex'>
            <div className='bg-white h-[90vh] w-[15rem] flex-1 flex items-center justify-center'>
                <div className=''>
                    <span className='text-black font-bold text-[2rem]'>Experience the best of both worlds</span>
                    <br /><span className='text-[1.5rem]'>Sign up today for free</span>
                </div>
            </div>
            <div className='bg-gray-300 h-[90vh] w-[15rem] flex-1 flex items-center justify-center'>
                <div className='w-[23rem]  bg-white rounded-xl flex gap-2 flex-col p-8 text-blue-950'>
                    <span className='text-center text-blue-950 font-bold text-xl'>SIGN UP</span>
                        <span>First name</span>
                        <input className='rounded-full p-2 bg-gray-200' type="text" />
                        <span>Last name</span>
                        <input className='rounded-full p-2 bg-gray-200' type="text" />
                        <span>Email</span>
                        <input className='rounded-full p-2 bg-gray-200' type="text" />
                        <span>Password</span>
                        <input className='rounded-full p-2 bg-gray-200' type="text" />
                        <span>Confirm password</span>
                        <input className='rounded-full p-2 bg-gray-200' type="text" />
                        <button className='bg-blue-950 rounded-full p-3 mt-3 text-white'>REGISTER NOW</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignupCard