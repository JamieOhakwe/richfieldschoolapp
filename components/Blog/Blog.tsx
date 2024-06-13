import React from "react";
import collegeGirl from '../../public/img/collegeGirl.jpg'
import blog2 from '../../public/img/blog2.jpeg'
import blog1 from '../../public/img/blog1.jpg'
import Image from "next/image";

const Blog = () => {
	return (
		<>
			<div className="p-3 w-full">
				<span className="text-blue-950 text-xl m-4 mb-6 p-3 font-bold ">School Blog</span><br />
                
			<div className="flex justify-around">

				<div className="bg-blue-200 w-[22rem] rounded-xl p-3 shadow">
					<Image src={collegeGirl} height={200} width={400} alt="" className="flex m-auto rounded-xl" />
				<span className="font-bold text-gray-800  mb-3 bg-blue-200">
					Welcome to <span className="text-red-600 ">Richfield College</span> on your first day
				</span>
					<div>
						<span>
							Welcome to <span>Richfield College</span> on your
							first day
						</span>

						<span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis accusamus neque ex excepturi non aspernatur omnis reprehenderit reiciendis, praesentium porro!</span>
					</div>
				</div>
				<div className="bg-blue-200 w-[22rem] rounded-xl p-3">
					<Image src={blog2} height={200} width={400} alt="" />
					<span className="font-bold text-gray-800  mb-3 bg-blue-200">
					Examamination Tips to<span className="text-red-600 ">smash your grades</span> in third term
				</span>
					<div>
						<span>
							Welcome to <span>Richfield College</span> on your
							first day
						</span>

						<span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis accusamus neque ex excepturi non aspernatur omnis reprehenderit reiciendis, praesentium porro!</span>
					</div>
				</div>
				<div className="bg-blue-200 w-[22rem] rounded-xl p-3">
					<Image src={blog1} height={200} width={400} alt="" />
					<span className="font-bold text-gray-800  mb-3 bg-blue-200">
					The <span className="text-red-600 ">Best Day</span> of my life (animated story)
				</span>
					<div>
						<span>
							Welcome to <span>Richfield College</span> on your
							first day
						</span>

						<span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis accusamus neque ex excepturi non aspernatur omnis reprehenderit reiciendis, praesentium porro!</span>
					</div>
				</div>
			</div>
			</div>
		</>
	);
};

export default Blog;
