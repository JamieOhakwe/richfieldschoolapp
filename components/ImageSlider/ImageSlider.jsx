// 'use client'

import Image from 'next/image'
import React from 'react'
// import play from "../../img/landingImage/playground.jpg"
import play from '../../public/img/landingImage/playground.jpg'
import basketball from "../../public/img/landingImage/basketball.jpg"
import hall from "../../public/img/landingImage/Hall.jpg"
import lab from "../../public/img/landingImage/lab.jpg"
import post2 from "../../public/img/landingImage/post2.png"




const ImageSlider = () => {
  let slides = [
    {image: play,
      title: "Kiddies Playground"
    },
    
    {image: basketball,
      title: "basketball court"
    },
    {image: hall,
      title: "school hall"
    },
    {image: lab,
      title: "science lab"
    },
    {image: post2,
      title: "instagram feed"
    },
  ];

 
  return (
    <>
      {/* <div className="carousel w-full">
				<div id="slide1" className="carousel-item relative  ">
          {slides.map((s, index)=>{

            <Image
              src={play}
              width={400}
              height={300}
              alt="Picture of a girl-student "
              // className="w-full"
            />
          })}        

					
				</div>
								
				
			</div> */}
      <div className="carousel w-full">
        
        <div id="slide1" className="carousel-item relative  ">
          {slides.map((s, index)=>(
              <>

              <Image
                      src={s.image}
                      width={400}
                      height={300}
                      alt="Picture of a girl-student "
                      // className="w-full"
                    />
              </>
              
                ))}
        </div>
      </div>
    </>
  )
}

export default ImageSlider