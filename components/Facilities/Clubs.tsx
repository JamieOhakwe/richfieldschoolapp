import Image from 'next/image'
import React from 'react'
import dance from '../../public/img/dance.webp'
import madscience from '../../public/img/madscience.jpg'
import techstars from '../../public/img/techstars.jpg'

const Clubs = () => {
  return (
    <>
      <div className='bg-white min-h-[20rem] w-full flex flex-col p-3 text-blue-950 font-bold'>
        <span className='text-center text-2xl my-3'>Our Clubs</span>
        <div className='flex flex-col lg:flex-row gap-[2rem] mb-[2rem]'>
          <div className='m-auto'>
              <Image
                width={500}
                height={400}
                src={dance}
                alt='Dance CLub'
                className='rounded-xl'
              />
              <span>Dance Club</span>
          </div>
          <div className='m-auto'>
              <Image
                width={500}
                height={400}
                src={techstars}
                alt='school facilities'
                className='rounded-xl'
              />
              <span>Techstars Club (Coding & Robotics)</span>

          </div>
          <div className='m-auto'>
              <Image
                width={500}
                height={400}
                src={madscience}
                alt='school facilities'
                className='rounded-xl'
              />
              <span>Madscience</span>

          </div>
        </div>
      </div>
    </>
  )
}

export default Clubs