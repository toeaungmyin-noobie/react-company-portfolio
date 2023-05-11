import React from 'react';
import AboutEngineer from './../../assets/images/engineer-icon.png';
import Building from './../../assets/images/building-icon.png';

const Counter = () => {
	return (
		<div className='counter-section'>
			<div className='absolute top-0 left-0 z-10 w-full h-full'>
				<div className='container h-full mx-auto grid grid-cols-2 lg:grid-cols-4 px-6 md:px-20 '>
					<div className='flex justify-center items-center gap-x-4'>
						<img src={Building} alt='service' className='object-cover w-16 md:w-20' />
						<div className=''>
							<h3 className='text-xl md:text-4xl primary-color font-bold'>3,000</h3>
							<span className=' uppercase text-white'>COMPLETED PROJECTS</span>
						</div>
					</div>
					<div className='flex justify-center items-center gap-x-4'>
						<img
							src={AboutEngineer}
							alt='service'
							width=''
							className='object-cover w-16 md:w-20'
						/>
						<div className=''>
							<h3 className='text-xl md:text-4xl primary-color font-bold'>320</h3>
							<span className=' uppercase text-white'>HAPPY CLIENTS</span>
						</div>
					</div>
					<div className='flex justify-center items-center gap-x-4'>
						<img
							src={AboutEngineer}
							alt='service'
							width=''
							className='object-cover w-16 md:w-20'
						/>
						<div className=''>
							<h3 className='text-xl md:text-4xl primary-color font-bold'>1,000</h3>
							<span className=' uppercase text-white'>CUP OF COFFEE</span>
						</div>
					</div>
					<div className='flex justify-center items-center gap-x-4'>
						<img
							src={AboutEngineer}
							alt='service'
							width=''
							className='object-cover w-16 md:w-20'
						/>
						<div className=''>
							<h3 className='text-xl md:text-4xl primary-color font-bold'>587</h3>
							<span className=' uppercase text-white'>ENGINEERS & STAFFS</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
