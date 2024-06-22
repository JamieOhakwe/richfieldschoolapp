import Image from "next/image";
import Link from "next/link";

import React from "react";

const NavBar = () => {
	return (
		<>
			<div className="text-red-600 text-center font-bold  ">Admission is still on</div>
			<div className="navbar bg-blue-950 md:px-[6rem]">
				<div className="navbar-start mid:mx-[5rem] text-white">
					<div className="dropdown">
						<div
							tabIndex="0"
							role="button"		
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>w
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						{/* Menu */}
						<ul
							tabIndex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>School</a>
								<ul className="p-2">
									<li>
										<a>Pre-school</a>
									</li>
									<li>
										<a>Elementary</a>
									</li>
                                    <li>
										<a>College</a>
									</li>
								</ul> 
							</li>
							<li>
								<a>Contact</a>
							</li>
						</ul>
					</div>
					<Link href="/">
					
					
					<div  className="btn btn-ghost md:text-xl">RICHFIELD School</div>
					</Link>
					<Image src="/img/richfield_logo.png" height={100} width={100} alt="logo"/>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/about">
							
							<div >About</div>
							</Link>
						</li>
						<li>
							<details>
								<summary>School</summary>
								<ul className="p-2 z-10">
									<li>
									
										<a>Pre-school</a>
									</li>
									<li>
										<a>Elementary</a>
									</li>
                                    <li>
										<a>College</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end ">
					<Link href={'/admission'}>
					 <div  className="btn bg-white text-xl text-blue-950">Portal</div>
					</Link>
				</div>
			</div>

			
		</>
	);
};

export default NavBar;
