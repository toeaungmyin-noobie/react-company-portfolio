import React from 'react';
import ClientImage1 from './../../assets/images/client_1.webp';
import ClientImage2 from './../../assets/images/client_2.webp';
import CommaWhite from './../../assets/images/inverted-commas-white.png';
import './Testimonial.css';

const Testimonial = () => {
	return (
		<div className='testimonial py-12 md:py-20 px-4 bg-gray-100'>
			<div className='container mx-auto'>
				<h4 className='md:text-lg text-sm primary-color text-center font-bold mb-4'>
					Testimonial
				</h4>
				<h1 className='text-4xl md:text-5xl font-medium text-center mb-8 md:mb-24'>
					Happy Clients
				</h1>

				<div className='hidden md:block'>
					<div className='carousel w-full '>
						<div id='mditem1' className='carousel-item w-full'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-40'>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage2}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id='mditem2' className='carousel-item w-full'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-40'>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage2}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage2}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center w-full py-10 gap-2'>
						<a href='#mditem1' className='w-10 h-1 bg-gray-600'>
							{' '}
						</a>
						<a href='#mditem2' className='w-10 h-1 bg-gray-600'>
							{' '}
						</a>
					</div>
				</div>
				<div className='md:hidden'>
					<div className='carousel w-full'>
						<div id='item1' className='carousel-item w-full'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-2 md:px-40'>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id='item2' className='carousel-item w-full'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-2 md:px-40'>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id='item3' className='carousel-item w-full'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-2 md:px-40'>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id='item4' className='carousel-item w-full'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-2 md:px-40'>
								<div className='bg-white shadow-sm border w-full h-full py-8'>
									<div className='client-card py-4 flex flex-row justify-center items-center gap-x-8'>
										<div className='client-image relative'>
											<img
												src={ClientImage1}
												alt='client'
												className=' rounded-full w-24 '
											/>
											<img src={CommaWhite} alt='comma' className='comma w-6' />
										</div>
										<div className=''>
											<h3 className='text-lg'>ROGER SCOTT</h3>
											<span className=' primary-color'>MARKETING MANAGER</span>
										</div>
									</div>
									<div className='px-10 text-gray-500 leading-7'>
										<p>
											Far far away, behind the word mountains, far from the countries
											Vokalia and Consonantia, there live the blind texts.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center w-full pt-8 pb-4 gap-2'>
						<a href='#item1' className='w-10 h-1 bg-gray-600'>
							{' '}
						</a>
						<a href='#item2' className='w-10 h-1 bg-gray-600'>
							{' '}
						</a>
						<a href='#item3' className='w-10 h-1 bg-gray-600'>
							{' '}
						</a>
						<a href='#item4' className='w-10 h-1 bg-gray-600'>
							{' '}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
