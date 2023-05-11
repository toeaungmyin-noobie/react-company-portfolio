import React from 'react';
import TeamImage1 from './../../assets/images/engineer_1.webp';
import TeamImage2 from './../../assets/images/engineer_2.webp';
import TeamImage3 from './../../assets/images/engineer_3.webp';
import TeamImage4 from './../../assets/images/engineer_4.webp';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';
import './Team.css';
const Team = () => {
	return (
		<div className='team-section py-12 md:py-20 px-6 md:px-24 bg-gray-100'>
			<div className='container mx-auto'>
				<h4 className='md:text-lg text-sm primary-color text-center font-bold mb-4'>
					Team & Staff
				</h4>
				<h1 className='text-4xl md:text-5xl font-medium text-center mb-5 md:mb-24'>
					Qualified Engineers
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4'>
					<div className='team-card relative border shadow-sm '>
						<img src={TeamImage1} alt='team1' className='w-full object-cover' />
						<div className=' bg-gray-50 py-6 text-center'>
							<h1 className='text-xl font-medium mb-2'>Lionel Wurtchbach</h1>
							<span className='uppercase text-gray-500 text-base'>
								SENIOR ENGINEER
							</span>
						</div>
						<ul className=' opacity-0 absolute bottom-32 left-2  flex-col list-none justify-start items-start gap-y-2 flex'>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaTwitter />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaFacebookF />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaInstagram />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaGoogle />
								</a>
							</li>
						</ul>
					</div>
					<div className='team-card relative border shadow-sm'>
						<img src={TeamImage2} alt='team1' className='w-full object-cover' />
						<div className=' bg-gray-50 py-6 text-center'>
							<h1 className='text-xl font-medium mb-2'>Lionel Wurtchbach</h1>
							<span className='uppercase text-gray-500 text-base'>
								SENIOR ENGINEER
							</span>
						</div>
						<ul className=' opacity-0 absolute bottom-32 left-2  flex-col list-none justify-start items-start gap-y-2 flex'>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaTwitter />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaFacebookF />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaInstagram />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaGoogle />
								</a>
							</li>
						</ul>
					</div>
					<div className='team-card relative border shadow-sm'>
						<img src={TeamImage3} alt='team1' className='w-full object-cover' />
						<div className=' bg-gray-50 py-6 text-center'>
							<h1 className='text-xl font-medium mb-2'>Lionel Wurtchbach</h1>
							<span className='uppercase text-gray-500 text-base'>
								SENIOR ENGINEER
							</span>
						</div>
						<ul className=' opacity-0 absolute bottom-32 left-2  flex-col list-none justify-start items-start gap-y-2 flex'>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaTwitter />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaFacebookF />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaInstagram />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaGoogle />
								</a>
							</li>
						</ul>
					</div>
					<div className='team-card relative border shadow-sm'>
						<img src={TeamImage4} alt='team1' className='w-full object-cover' />
						<div className=' bg-gray-50 py-6 text-center'>
							<h1 className='text-xl font-medium mb-2'>Lionel Wurtchbach</h1>
							<span className='uppercase text-gray-500 text-base'>
								SENIOR ENGINEER
							</span>
						</div>
						<ul className=' opacity-0 absolute bottom-32 left-2  flex-col list-none justify-start items-start gap-y-2 flex'>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaTwitter />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaFacebookF />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaInstagram />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white p-3 block bg-gray-600 rounded-full hover:bg-gray-700'>
									<FaGoogle />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
