import React from 'react';
import './About.css';

import AboutImage from './../../assets/images/about_2.webp';
import AboutEngineer from './../../assets/images/engineer-icon.png';
import Building from './../../assets/images/building-icon.png';
import Blueprint from './../../assets/images/blueprint-icon.png';

import Mechanicial from './../../assets/images/construction-icon.png';

import Consult from './../../assets/images/consult-icon.png';
const About = () => {
	return (
		<div className=' py-12 md:py-32 px-2 md:px-24 w-full bg-gray-100'>
			<div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
				<div className='relative w-full h-full about-img px-5'>
					<img
						src={AboutImage}
						alt='about'
						className='w-full h-full object-cover object-center'
						style={{ minHeight: '60vh' }}
					/>
					<div className='absolute exp-card bottom-0 right-0 bg-[#3d424a] px-3 py-6 flex gap-x-5 text-white items-center justify-center w-80 md:w-96'>
						<img src={AboutEngineer} alt='engineer icon' className='w-16' />
						<div className='flex flex-col'>
							<span className=' text-[#ffa62b] md:text-4xl text-2xl'>38</span>
							<p className='text-lg md:text-2xl'>Years of experienced</p>
						</div>
					</div>
				</div>
				<div className='px-8 w-full h-full flex flex-col gap-y-3'>
					<p className='primary-color font-bold text-lg mt-5 md:mt-0'>
						Welcome to Buildream
					</p>
					<h1 className='text-4xl md:text-5xl ' style={{ lineHeight: 1.4 }}>
						Quality and Affordable Constructor
					</h1>
					<p className=' text-gray-400 leading-relaxed '>
						Far far away, behind the word mountains, far from the countries Vokalia
						and Consonantia, there live the blind texts. Separated they live in
						Bookmarksgrove right at the coast of the Semantics, a large language
						ocean.
					</p>
					<h3 className='text-2xl text-gray-600'>We Can Help You</h3>
					<div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
						<div className='about-card  px-4 py-6 flex justify-center items-center gap-x-4 shadow-sm bg-white hover:bg-gray-700 transaction duration-150'>
							<div className=''>
								<img src={Building} alt='engineer icon' className=' w-32 md:w-24' />
							</div>
							<div className='px-3'>
								<h2 className='text-lg mb-3'>Construction</h2>
								<p className='text-gray-400 leading-7'>
									Far far away, behind the word mountains.
								</p>
							</div>
						</div>
						<div className='about-card px-4 py-6  flex justify-center items-center gap-x-4 shadow-sm bg-white hover:bg-gray-700 transaction duration-150'>
							<div className=''>
								<img src={Blueprint} alt='engineer icon' className=' w-32 md:w-24' />
							</div>
							<div className='px-3'>
								<h2 className='text-lg mb-3'>Architecture</h2>
								<p className='text-gray-400 leading-7'>
									Far far away, behind the word mountains.
								</p>
							</div>
						</div>
						<div className='about-card px-4 py-6  flex justify-center items-center gap-x-4 shadow-sm bg-white hover:bg-gray-700 transaction duration-150'>
							<div className=''>
								<img src={Consult} alt='engineer icon' className=' w-32 md:w-24' />
							</div>
							<div className='px-3'>
								<h2 className='text-lg mb-3'>Consulting</h2>
								<p className='text-gray-400 leading-7'>
									Far far away, behind the word mountains.
								</p>
							</div>
						</div>
						<div className='about-card px-4 py-6  flex justify-center items-center gap-x-4 shadow-sm bg-white hover:bg-gray-700 transaction duration-150'>
							<div className=''>
								<img src={Mechanicial} alt='engineer icon' className=' w-32 md:w-24' />
							</div>
							<div className='px-3'>
								<h2 className='text-lg mb-3'>Mechanical</h2>
								<p className='text-gray-400 leading-7'>
									Far far away, behind the word mountains.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
