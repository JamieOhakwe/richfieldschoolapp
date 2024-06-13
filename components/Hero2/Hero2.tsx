import Image from "next/image";
import React from "react";

const Hero2 = () => {
	return (
		<>
        <main className="">
            <div className="w-full h-[40rem] bg-fixed relative bg-cover " style={{ backgroundImage: "url(/img/entrance.jpg)"}} >
                
                <div className="bg-black w-full h-full opacity-80 absolute top-0 "></div>
                <div className="absolute top-5 text-white md:ml-[7rem] ml-[3rem] md:mt-[7rem] mt-[4rem] flex flex-col ">

                    <span className="text-[2rem] -mb-4">Welcome to</span>
                    <span className=" md:text-[5rem] text-[4rem] font-bold ">RICHFIELD <span className="font-light flex -mt-[2rem]">School</span> </span>
                    <span className="text-yellow-400 md:text-[2rem] text-[1.3rem]">Every child deserves an excellent education</span>
                    <div className="flex gap-4 mt-3">

                        <button className="bg-white w-[10rem] text-blue-950 rounded-xl p-4 font-bold hover:bg-yellow-500">Learn More</button>
                        <button className="bg-transparent border w-[10rem] text-white rounded-xl p-4 font-bold hover:bg-yellow-500">Enrol Now</button>
                    </div>
                   <span className="font-bold hover:text-yellow-500 mt-5"> Preschool | Elementary | College </span>
                </div>
            </div>
            
        </main>
		</>
	);
};

export default Hero2;
