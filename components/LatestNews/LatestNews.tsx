import React from 'react'

function LatestNews() {
  return (
    <>
        <div className='bg-red-600 text-white flex '>
            <span className='p-3 text-center font-bold text-xl'>Latest News</span>
            <div className='p-3'>
                <ul className=''>
                    <a href="#">

                    <li className='hover:border-b ' >Excursion</li>
                    </a>
                    <a href="#">

                    <li className='hover:border-b '>Donation</li>
                    </a>
                    <a href="#">

                    <li className='hover:border-b ' >Class Party</li>
                    </a>
                    <a href="#">

                    <li className='hover:border-b '>Vacation</li>
                    </a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default LatestNews