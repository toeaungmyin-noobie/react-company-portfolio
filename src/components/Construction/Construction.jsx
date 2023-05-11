import React from 'react';
import './Construction.css';
const Construction = () => {
	return (
		<div className='construction overflow-hidden'>
			<div className='overlay'></div>
			<div className='overlay-cover'></div>
			<div
				className='overlay-content absolute top-0 left-0
				w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-6 z-10 text-white'>
				<div className='flex flex-col justify-center md:px-12 gap-y-5 px-8'>
					<span className=' text-sm font-bold tracking-wider'>
						YOU MAY CONTACT US FOR CONSTRUCTION & RENOVATION WORK
					</span>
					<h2 className='text-2xl md:text-4xl text-gray-700'>
						We Are Great Construction Company
					</h2>
				</div>
				<div className='flex md:ps-40 md:justify-start justify-center items-center'>
					<button className='uppercase md:text-sm text-xs px-6 py-4 md:px-8 md:py-6 shadow-lg border border-black md:border-none'>
						Make An Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Construction;
