import React from "react";
import Image from "next/image";

import director from '../../public/img/landingImage/Director.png'


const HeadOfSchool = () => {
	return (
		<>
			<div className=" bg-white  p-4">
				<div className="flex flex-col md:flex-row m-3 justify-center items-center
				 ">					
                    <Image
						src={director}
						width={200}
						height={200}
						alt="Picture of a girl-student "
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div className="text-center">
						<h1 className="text-3xl font-bold text-blue-950">Message from Executive Director/Consultant</h1>
						<p className="py-6 text-blue-950">
						On behalf of everyone at Richfield Schools Lagos (RS), I would like to extend a very warm welcome to all parents and our precious gems to our wonderful learning community. At Richfield Schools, we offer a robust academic and
non- academic programmes from Crèche up to Year 12. We deliver a hybrid Nigerian and British curriculum . The
pupils at the end of year 6 will sit for all Nigerian statutory and the British Checkpoint examination while the students in the
lower secondary school will sit for BECE and Checkpoint. The Year 12 students will take WAEC and IGCSE and a range of other
examinations and IT certifications... 
						</p>
						<button className="btn bg-blue-950 hover:bg-transparent hover:text-blue-950 text-white px-8 py-3">Read More</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeadOfSchool;
