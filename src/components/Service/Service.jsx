import React from 'react';
import ServiceImage from './../../assets/images/services.jpg.webp';

import Building from './../../assets/images/building-icon.png';

import BlueprintWhite from './../../assets/images/blueprint-icon-white.png';

import MechanicialWhite from './../../assets/images/construction-icon.png';

const Service = () => {
	return (
		<div className='service-section py-12 lg:py-32 px-6  bg-gray-100 '>
			<div className='container mx-auto'>
				<h4 className='md:text-lg text-sm primary-color text-center font-bold mb-1'>
					What We Do
				</h4>
				<h1 className='text-4xl md:text-5xl font-normal text-center mb-5 md:mb-24'>
					Services
				</h1>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					<img
						src={ServiceImage}
						alt='service'
						width='100%'
						className='h-full object-cover'
					/>
					<div className='grid grid-cols-1 gap-y-3'>
						<div className='shadow-sm px-4 py-3 flex justify-center items-start gap-x-4 bg-gray-700 '>
							<div className='px-2 p'>
								<img src={Building} alt='engineer icon' className=' w-28' />
							</div>
							<div className='px-3'>
								<h2 className='text-2xl text-gray-50 my-3'>Construction Services</h2>
								<p className='text-gray-50 leading-7'>
									Far far away, behind the word mountains, far from the countries Vokalia
									and Consonantia, there live the blind.
								</p>
								<button className='bg-white primary-color font-semibold uppercase md:text-sm text-xs px-3 py-2 my-6'>
									Learn more
								</button>
							</div>
						</div>
						<div className='shadow-sm px-4 py-3 flex justify-center items-start gap-x-4 bg-primary-color '>
							<div className='px-2 p'>
								<img src={BlueprintWhite} alt='engineer icon' className=' w-28' />
							</div>
							<div className='px-3'>
								<h2 className='text-2xl text-gray-50 my-3'>Infrastructure Services</h2>
								<p className='text-gray-50 leading-7'>
									Far far away, behind the word mountains, far from the countries Vokalia
									and Consonantia, there live the blind.
								</p>
								<button className='bg-white primary-color font-semibold uppercase md:text-sm text-xs px-3 py-2 my-6'>
									Learn more
								</button>
							</div>
						</div>
						<div className='shadow-sm px-4 py-3 flex justify-center items-start gap-x-4 bg-white '>
							<div className='px-2 p'>
								<img src={MechanicialWhite} alt='engineer' className=' w-28' />
							</div>
							<div className='px-3'>
								<h2 className='text-2xl text-gray-900 my-3'>Architecture Services</h2>
								<p className='text-gray-900 leading-7'>
									Far far away, behind the word mountains, far from the countries Vokalia
									and Consonantia, there live the blind.
								</p>
								<button className='bg-white primary-color border border-amber-400 font-semibold uppercase md:text-sm text-xs px-3 py-2 my-6'>
									Learn more
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
