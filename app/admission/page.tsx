import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admission = () => {
	return (
		<>
			
			<div className="flex relative">
				<div className="bg-gray-200 flex-1 justify-end flex">
					<Image
						width={500}
						height={700}
						alt="girl smiling"
						src={"/img/signup-image.jpeg"}
					/>
				</div>
				<div className="bg-white  flex-1 w-[8rem]  flex flex-col relative items-center text-gray-800 ">
					<div className="font-bold text-blue-950 text-[2rem]  relative top-10">
						SIGN UP
					</div>
					
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
					<div className="text-xl text-gray-600 "> Go back
						<Link href={'/'}>
						<span className="text-blue-950 ml-3">HOME</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admission;
