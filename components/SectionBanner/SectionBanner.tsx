import Image from 'next/image'
import React from 'react'

const SectionBanner = () => {
  return (
    <>
        <div className='h-[200px] w-full relative'>
            <div className='z-10 absolute text-white  text-[2rem] pl-[6rem] pt-[4rem] '>
                <span>About us</span>
            </div>
            <Image src="/img/facility2.jpg" fill className='absolute object-cover ' alt='banner'/>
            <div className='bg-black opacity-90 w-full h-[200px]'></div>
            <h1>Still loading...</h1>
        </div>
    </>
  )
}

export default SectionBanner