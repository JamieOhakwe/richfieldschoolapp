import React from 'react'
import girlClassroom from '../../public/img/girl-classroom.jpg'
import { url } from 'inspector'

const Downloads = () => {
  return (
    <>
        <div className='  w-full min-h-[12rem]  '>

            <div className='   w-full min-h-[12rem] flex flex-col md:flex-row '
    >           
                <span className='text-blue-700'>Downloads</span>
                <div className='  bg-white m-auto flex items-center justify-center flex-col md:flex-row gap-2'>
                    <div className='flex p-4 gap-2 relative '>
                    
                        <div className='bg-blue-700  py-3 px-5 rounded shadow text-white hover: cursor-pointer hover:bg-blue-900 hover:text-white hover:shadow-2xl hover:border-blue-950'>


                        <a href="#">Download school calendar</a>
                        </div>
                    </div>
                    <div className='flex p-4 gap-2'>

                        <div className='bg-blue-700 py-3 px-5 rounded shadow text-white'>

                        <a href="#">Download Admission form</a>
                        </div>
                    </div>
                    <div className='flex p-4 gap-2'>

                        <div className='bg-blue-700 py-3 px-5 rounded shadow text-white'>


                        <a href="#">Download Newsletter</a>
                        </div>
                    </div>
                    <div className='flex p-4 gap-2'>

                        <div className='bg-blue-700 py-3 px-5 rounded shadow text-white'>

                        <a href="#">Download bus run schedule</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Downloads