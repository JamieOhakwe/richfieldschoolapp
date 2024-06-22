import Image from 'next/image'
import React from 'react'
import playground from '../../public/img/playground.jpg'

const Contact = () => {

  const data = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // ... other properties you want to store
  };
  
  // POST request
async function postData(data: any) {
  const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
  }
  const result = await response.json();
  console.log('Data posted:', result);
}


  
  return (
    <>
        <div className='flex flex-col items-center relative'>
            <h1 className=' absolute inset-0 flex justify-center items-center text-white font-bold text-8xl '>Contact Us</h1>
            <Image
            width={800}
            height={600}
            layout='responsive'
            alt='playground'
            src="/img/playground.jpg"
            className=' opacity-75 brightness-75'
            />
        </div>
    </>
  )
}

export default Contact