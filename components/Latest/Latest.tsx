import Image from 'next/image'
import React from 'react'
import College from '../../public/img/college.jpg' 
// import SchoolTour from '../../public/video/SchoolTour.mp4'

const Latest = () => {
  return (
    <>
    <div className='bg-blue-950 w-full min-h-[25rem] p-3 m-auto text-white'>
        <span className='flex flex-col text-2xl font-bold p-5 text-center '>Latest Videos </span>
      <div className='flex flex-col md:flex-row gap-[2rem] relative items-center mx-auto '>

          <div>
              
            <Image
                    height={400}
                    src={College}
                    width={400}
                    alt="preschool" 
                    />
                <span>Orientation</span>
                {/* <iframe className="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe> */}

          </div>
          <div>
            <video width="400" height="240" controls>
              <source src="/video/SchoolTour.mp4" type="video/mp4" />

            </video>
            <span>School Tour</span>
          </div>
          <div>
            <video width="400" height="240" controls>
              <source src="/video/SchoolDay.mp4" type="video/mp4" />

            </video>
            <span>A day in the life of a Richfield student</span>

          </div>
      </div>
       
        
    </div>
    
    </>

  )
}

export default Latest