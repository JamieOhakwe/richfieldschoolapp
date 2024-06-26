import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SummerSchool = () => {
  return (
    <>
        <div className='flex items-center justify-center flex-col p-8'>
            <div className='md:w-[40rem] text-blue-950 flex flex-col'>
                <div>

                    <span className='bg-blue-900 text-white  mb-5 font-bold py-3'>2024  RICHFIELD VACATION SCHOOL: </span>
                    <span className='text-blue-950 flex mt-2 font-bold text-l border'>Empowering Young Minds with life changing Skills</span>
                </div>
                <Image
                height={200}
                width={300}
                style={{height: "20rem", width:"28rem", opacity: "20"}}
                // fill
                src="/img/landingImage/Summer-school2.jpg"
                alt="Summer School"
                />
                <p>As the holidays approach, we are excited to announce that the 2024 Vacation School Programme has been designed to equip students/ pupils with future-ready skills that blends creativity, technology, and AI appreciation. <br /> <span className='font-bold bg-blue-950 text-white p-2 flex mt-2 mb-2'>Date</span>From  <span className='bg-red-200 font-bold'>Tuesday July 23rd to Friday, August 23rd, 2024</span>, the four-weeks programme will empower participants to thrive in the global market space.
                </p>
            </div>
            <div className='bg-blue-100 p-3 text-blue-950'>
                <span>Participants will be engaged in entrepreneurial and digital skills such as </span>
                <ul className='font-bold'>
                    <li>-Web Development (Python)</li>
                    <li>-Web Development (HTML and CSS)
                    </li>
                    <li>-Coding and robotics
                    </li>
                    <li>-Arts and Crafts
                    </li>
                    <li>-Tie&Dye/HouseHold Product
                    </li>
                    <li>Cookery </li>
                    <li>Music</li>
                    <li>-Photography 
                    </li>
                    <li>-Video/Photo Editing
                    </li>
                    <li>-Fashion designing</li>
                    <li>-Mathematics and English Language 
                    </li>
                    <li>Yoruba, French and Spanish.</li>
                </ul>
                <span className='mt-3 flex'>Other soft skills</span>
                <ul className='font-bold'>
                    <li>-Public speaking and etiquette
                    </li>
                    <li>-Leadership and teamwork</li>
                    <li>-Entrepreneurial mindset and innovation</li>
                </ul>
                <div className='flex flex-col mt-3'>
                    <span>Click the button below to secure your spot</span>
                    <Link href='/summer-camp/register'>
                    <button className='bg-blue-950 rounded-xl my-2 w-full  px-5 py-3 text-white'>Register Now!</button>
                    </Link>

                    <span>Join us for a fun-filled educational fiesta that prepares young minds for a future driven by innovation!

</span>
<span> <span className='font-bold'>Note:</span>The activities for Year 12 students will be strictly academic.</span>
<div className='bg-red-200 '>

    <span className=' font-bold' >For enquiries, call us on <br /><span className='text-red-500 text-xl'>+234 808 421 5028</span>
    </span><br />
    <span>Thank you.</span>
</div>
                </div>
            </div>


        </div>
    </>
  )
}

export default SummerSchool