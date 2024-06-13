// import React from 'react'

import Image from "next/image"
// import mission from '../public/img/landingImage/mission.png'
import mission from '../../public/img/landingImage/mission.png'
import corevalues from '../../public/img/landingImage/corevalues.png'
import vision from '../../public/img/landingImage/vision.png'

const Carousel = () => {

  let posts = [
    {image: mission,
      
    },
    
    {image: vision,
      
    },
    {image: corevalues,
      
    },
    
  ];
  return (
    <>
        <div className="overflow-hidden m-5">

          <div className="flex md:flex-row flex-col gap-3 justify-around items-center">
              {posts.map((p, index)=>(
              <Image height={300} width={300} src={p.image} alt="posts" key={index}/>
            ))}

          </div>
        </div>
        
        
					
				
    </>
  )
}

export default Carousel