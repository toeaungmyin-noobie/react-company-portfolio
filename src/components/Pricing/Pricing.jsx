import React from 'react';

const Pricing = () => {
	return (
		<div className='team-section py-12 md:py-20 px-4 bg-gray-100'>
			<div className='container mx-auto'>
				<h4 className='md:text-lg text-sm primary-color text-center font-bold mb-4'>
					Our Pricing
				</h4>
				<h1 className='text-4xl md:text-5xl font-medium text-center mb-5 md:mb-24'>
					Pricing & Packages
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4'>
					<div className='team-card relative border shadow-sm bg-white text-center py-10'>
						<h3 className=' uppercase text-lg mb-3'>Basic Plan</h3>
						<h1 className=' uppercase primary-color text-5xl font-medium '>49K</h1>
						<p className=' text-base text-gray-400 leading-7 px-12 my-8'>
							Far far away, behind the word mountains, far from the countries Vokalia
							and Consonantia, there live the blind texts.
						</p>
						<button
							className='uppercase bg-primary-color px-4 py-3'
							style={{ minWidth: '65%' }}>
							Get Started
						</button>
					</div>
					<div className='team-card relative border shadow-sm bg-white text-center py-10'>
						<h3 className=' uppercase text-lg mb-3'>Beginner Plan</h3>
						<h1 className=' uppercase primary-color text-5xl font-medium '>79K</h1>
						<p className=' text-base text-gray-400 leading-7 px-12 my-8'>
							Far far away, behind the word mountains, far from the countries Vokalia
							and Consonantia, there live the blind texts.
						</p>
						<button
							className='uppercase bg-primary-color px-4 py-3'
							style={{ minWidth: '65%' }}>
							Get Started
						</button>
					</div>
					<div className='team-card relative border shadow-sm bg-white text-center py-10'>
						<h3 className=' uppercase text-lg mb-3'>PREMIUM PLAN</h3>
						<h1 className=' uppercase primary-color text-5xl font-medium '>109K</h1>
						<p className=' text-base text-gray-400 leading-7 px-12 my-8'>
							Far far away, behind the word mountains, far from the countries Vokalia
							and Consonantia, there live the blind texts.
						</p>
						<button
							className='uppercase bg-primary-color px-4 py-3'
							style={{ minWidth: '65%' }}>
							Get Started
						</button>
					</div>
					<div className='team-card relative border shadow-sm bg-white text-center py-10'>
						<h3 className=' uppercase text-lg mb-3'>ULTIMATE PLAN</h3>
						<h1 className=' uppercase primary-color text-5xl font-medium '>149K</h1>
						<p className=' text-base text-gray-400 leading-7 px-12 my-8'>
							Far far away, behind the word mountains, far from the countries Vokalia
							and Consonantia, there live the blind texts.
						</p>
						<button
							className='uppercase bg-primary-color px-4 py-3'
							style={{ minWidth: '65%' }}>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
