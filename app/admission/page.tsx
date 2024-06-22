import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admission = () => {
	return (
		<>
			
			<div className="flex relative flex-col md:flex-row">
				<div className="bg-gray-200 flex-1 justify-end md:block hidden">
					
					<Image
						width={500}
						height={700}
						alt="girl smiling"
						src={"/img/signup-image.jpeg"}
					/>
				</div>
				<div className="bg-gray-200 border flex flex-col  items-center justify-center md:hidden">
					
					<Image
						width={300}
						height={100}
						alt="girl smiling"
						src={"/img/signup-image.jpeg"}
					/>
					<span className="font-bold text-blue-950 text-[2rem] ">
						SIGN UP
					</span>
				</div>
				<div className="bg-white  flex-1 w-[8rem]  flex flex-col relative items-center justify-center text-gray-800 ">
					
					<form
						action=""
						method="post"
						className="flex flex-col m-auto h-[20rem] w-[30rem] rounded-xl bg-blue-100 justify-center relative align-middle items-center
           "
					>
						<label htmlFor="">Username</label>
						<input
							type="text"
							className="bg-white rounded w-[20rem] h-[2.5rem]"
						/>
						<label htmlFor="">Password</label>
						<input
							type="text"
							className="bg-white rounded w-[20rem] h-[2.5rem]"
						/>
						<label htmlFor="">Email</label>
						<input
							type="text"
							className="bg-white rounded w-[20rem] h-[2.5rem]"
						/>
            <button className="bg-blue-950 h-[2.5rem] rounded-full mt-5 text-white w-[20rem]">REGISTER</button>
					</form>
					<div className=" text-gray-600 p-5 flex item-center justify-center bg-red-100 rounded-xl"> 
						<span className="max-w-[5rem]">Go back</span>
						<Link href={'/'}>
						<span className="text-red-500 font-bold ml-3">HOME</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admission;
