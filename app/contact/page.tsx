import Image from 'next/image'
import React from 'react'
import playground from '../../public/img/playground.jpg'

const Contact = () => {
  return (
    <>
        <div>
            <h1>Contact Us</h1>
            <Image
            height={300}
            width={400}
            alt='playground'
            src="/img/playground.jpg"
            />
        </div>
    </>
  )
}

export default Contact