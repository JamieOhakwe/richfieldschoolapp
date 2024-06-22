import React from 'react'

const Subscribe = () => {
  return (
    <>
        <div className='bg-yellow-400  h-[20rem] text-blue-950  flex items-center justify-center '>

            <div className='mx-[2rem]'>
                <div>
                    <span className=' text-[1.5rem] '>Subscribe</span><br />
                    <span> Sign up with your email address to receive our newsletters and updates</span>
                </div>
                <div>
                    <div className='flex mt-5  md:flex-row gap-5 flex-col'>
                        <input type="text" className='h-[4rem] w-[16rem] p-3 bg-white text-center rounded-full' placeholder='Email address '/>
                        <button className='px-[3rem]  w-[16rem]  h-[4rem] text-white bg-blue-950 rounded-full'>SIGN UP</button>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Subscribe