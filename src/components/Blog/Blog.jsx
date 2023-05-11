import React from 'react';

import BlogImage1 from './../../assets/images/blog_1.webp';
import BlogImage2 from './../../assets/images/blog_2.webp';
import BlogImage3 from './../../assets/images/blog_3.webp';
import { FaUser, FaComment } from 'react-icons/fa';

const Blog = () => {
	return (
		<div className='py-12 md:py-20 px-6 lg:px-28 bg-gray-100'>
			<div className='container mx-auto'>
				<h4 className='md:text-lg text-sm primary-color text-center font-bold mb-4'>
					Our Blogs
				</h4>
				<h1 className='text-4xl md:text-5xl font-medium text-center mb-8 md:mb-24'>
					Recent Blogs
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-8'>
					<div className='relative w-full h-full border rounded overflow-hidden'>
						<a href='/'>
							<img src={BlogImage1} alt='team1' className='w-full object-cover' />
						</a>
						<div className='absolute bottom-[61.6%] sm:bottom-[55.5%] md:bottom-[70.2%] lg:bottom-[48.1%]  left-6 p-2 lg:p-4 bg-gray-700'>
							<h1 className='text-lg lg:text-4xl text-gray-200'>16</h1>
							<h3 className='text-sm lg:text-xl text-gray-200'>JAN</h3>
						</div>
						<div className='bg-white py-8 px-8'>
							<div className='flex items-center'>
								<FaUser className='me-1 primary-color md:text-xl' />
								<h3 className=' text-sm font-bold primary-color uppercase me-5'>
									ADMIN
								</h3>
								<FaComment className='me-1 primary-color' />
								<h3 className=' text-sm font-bold primary-color uppercase'>
									3 comments
								</h3>
							</div>
							<h1 className=' lg:text-2xl font-normal my-5 hover:text-amber-500'>
								Biggest Construction in New York, USA
							</h1>
							<span className='text-sm text-gray-500 lg:text-base leading-7 '>
								A small river named Duden flows by their place and supplies it with the
								necessary regelialia.
							</span>
						</div>
					</div>
					<div className='relative w-full h-full border rounded overflow-hidden'>
						<a href='/'>
							<img src={BlogImage2} alt='team1' className='w-full object-cover' />
						</a>
						<div className='absolute bottom-[61.6%] sm:bottom-[55.5%] md:bottom-[70.2%] lg:bottom-[48.1%]  left-6 p-2 lg:p-4 bg-gray-700'>
							<h1 className='text-lg lg:text-4xl text-gray-200'>16</h1>
							<h3 className='text-sm lg:text-xl text-gray-200'>JAN</h3>
						</div>
						<div className='bg-white py-8 px-8'>
							<div className='flex items-center'>
								<FaUser className='me-1 primary-color md:text-xl' />
								<h3 className=' text-sm font-bold primary-color uppercase me-5'>
									ADMIN
								</h3>
								<FaComment className='me-1 primary-color' />
								<h3 className=' text-sm font-bold primary-color uppercase'>
									3 comments
								</h3>
							</div>
							<h1 className=' lg:text-2xl font-normal my-5 hover:text-amber-500'>
								Biggest Construction in New York, USA
							</h1>
							<span className='text-sm text-gray-500 lg:text-base leading-7'>
								A small river named Duden flows by their place and supplies it with the
								necessary regelialia.
							</span>
						</div>
					</div>
					<div className='relative w-full h-full border rounded overflow-hidden'>
						<a href='/'>
							<img src={BlogImage3} alt='team1' className='w-full object-cover' />
						</a>
						<div className='absolute bottom-[61.6%] sm:bottom-[55.5%] md:bottom-[70.2%] lg:bottom-[48.1%]  left-6 p-2 lg:p-4 bg-gray-700'>
							<h1 className='text-lg lg:text-4xl text-gray-200'>16</h1>
							<h3 className='text-sm lg:text-xl text-gray-200'>JAN</h3>
						</div>
						<div className='bg-white py-8 px-8'>
							<div className='flex items-center'>
								<FaUser className='me-1 primary-color md:text-xl' />
								<h3 className=' text-sm font-bold primary-color uppercase me-5'>
									ADMIN
								</h3>
								<FaComment className='me-1 primary-color' />
								<h3 className=' text-sm font-bold primary-color uppercase'>
									3 comments
								</h3>
							</div>
							<h1 className=' lg:text-2xl font-normal my-5 hover:text-amber-500'>
								Biggest Construction in New York, USA
							</h1>
							<span className='text-sm text-gray-500 lg:text-base leading-7'>
								A small river named Duden flows by their place and supplies it with the
								necessary regelialia.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
