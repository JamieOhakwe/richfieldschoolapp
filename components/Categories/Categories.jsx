'use client'
import React from 'react'
import PreSchool  from '../../public/img/landingImage/Preschool.jpg'
import Elementary  from '../../public/img/landingImage/Elementary.jpg'
import College  from '../../public/img/landingImage/College.jpg'
import Image from 'next/image'
import Modal2 from '../Modal/Modal2'

const Categories = () => {


    let schools = [
        {image: PreSchool,
        title: "Preschool",
        description: "Learn and grow with our preschool programs designed for young minds.",
        id: 1
        },
        {image: Elementary,
            title: "Elementary",
            description: "Build a strong foundation with our elementary programs.",
            id: 2
            },
       {image: College,
            title: "College",
            description: "Pursue your dreams with our college programs designed for success.",
            id: 3
            },     
    ]

  return (
    <>
        <div className=''>

            <div className='m-4 flex md:flex-row   gap-4 flex-col justify-around items-center  '>
            
            {schools.map((s )=>(
                <div key={s.id} className='max-w-[18rem] shadow-xl '>

                    <Image
                        className=' max-h-[200px]  hover:transform'
                        height={200}
                        
                        src={s.image}
                        width={300}
                        alt="preschool" 
                        />
                    <div className='text-white p-3 text-center hover:bg-slate-600  bg-blue-950 hover:cursor-pointer '>{s.title}</div>
                    <span className='text-blue-950 p-2 '>{s.description}</span>
                </div>
                    
                
            ))}            
                     <Modal2 className='absolute' />   
                     <span className='absolute'>Modal here jor</span>
            
            </div>
        </div>
        

    </>
  )
}

export default Categories