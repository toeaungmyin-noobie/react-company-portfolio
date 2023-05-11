import React from 'react';
import {
	FaAngleRight,
	FaComment,
	FaFacebookF,
	FaInstagram,
	FaMap,
	FaPaperPlane,
	FaPhoneAlt,
	FaTwitter,
	FaUser,
} from 'react-icons/fa';
import BlogImage1 from './../../assets/images/blog_1.webp';
import BlogImage2 from './../../assets/images/blog_2.webp';
import BlogImage3 from './../../assets/images/blog_3.webp';

const Footer = () => {
	return (
		<div className=' bg-zinc-700 z-10'>
			<div className='container mx-auto py-12 md:py-20 p-8 md:px-28'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
					<div className=''>
						<h1 className='text-white hover:text-amber-500 duration-150 font-bold text-2xl'>
							BUILDREAM
						</h1>
						<p className=' mt-10 text-gray-200 leading-7 tracking-wide'>
							A small river named Duden flows by their place and supplies it with the
							necessary regelialia.
						</p>
						<ul className='list-none flex mt-5 gap-2'>
							<li className='inline'>
								<a
									href='/'
									className='primary-color p-3 block bg-gray-600 mx-1 rounded-sm'>
									<FaTwitter />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='primary-color p-3 block bg-gray-600 mx-1 rounded-sm'>
									<FaFacebookF />
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='primary-color p-3 block bg-gray-600 mx-1 rounded-sm'>
									<FaInstagram />
								</a>
							</li>
						</ul>
					</div>
					<div className=''>
						<h3 className='text-lg font-medium text-white'>Services</h3>
						<div className='flex flex-col mt-10 gap-y-6'>
							<div className='flex gap-x-4'>
								<img src={BlogImage1} alt='blog' className='w-20 h-20 object-cover' />
								<div className=' flex flex-col justify-between'>
									<p className='text-white font-medium'>
										Biggest Construction in New York, USA
									</p>
									<div className='flex items-center'>
										<FaUser className='me-1 primary-color' />
										<h3 className=' text-xs primary-color uppercase me-5'>ADMIN</h3>
										<FaComment className='me-1 primary-color' />
										<h3 className=' text-xs  primary-color uppercase'>19</h3>
									</div>
								</div>
							</div>
							<div className='flex gap-x-4'>
								<img src={BlogImage2} alt='blog' className='w-20 h-20 object-cover' />
								<div className=' flex flex-col justify-between'>
									<p className='text-white font-medium'>
										Biggest Construction in New York, USA
									</p>
									<div className='flex items-center'>
										<FaUser className='me-1 primary-color' />
										<h3 className=' text-xs primary-color uppercase me-5'>ADMIN</h3>
										<FaComment className='me-1 primary-color' />
										<h3 className=' text-xs  primary-color uppercase'>19</h3>
									</div>
								</div>
							</div>
							<div className='flex gap-x-4'>
								<img src={BlogImage3} alt='blog' className='w-20 h-20 object-cover' />
								<div className=' flex flex-col justify-between'>
									<p className='text-white font-medium'>
										Biggest Construction in New York, USA
									</p>
									<div className='flex items-center'>
										<FaUser className='me-1 primary-color' />
										<h3 className=' text-xs primary-color uppercase me-5'>ADMIN</h3>
										<FaComment className='me-1 primary-color' />
										<h3 className=' text-xs  primary-color uppercase'>19</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=''>
						<h3 className='text-lg font-medium text-white'>Quick Links</h3>
						<ul className='list-none flex flex-col mt-10 gap-y-4'>
							<li className='inline'>
								<a
									href='/'
									className='text-white flex items-center gap-x-2 hover:text-amber-500 duration-200'>
									<FaAngleRight /> Home
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white flex items-center gap-x-2 hover:text-amber-500 duration-200'>
									<FaAngleRight /> About
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white flex items-center gap-x-2 hover:text-amber-500 duration-200'>
									<FaAngleRight /> Services
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white flex items-center gap-x-2 hover:text-amber-500 duration-200'>
									<FaAngleRight /> Project
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white flex items-center gap-x-2 hover:text-amber-500 duration-200'>
									<FaAngleRight /> Pricing
								</a>
							</li>
							<li className='inline'>
								<a
									href='/'
									className='text-white flex items-center gap-x-2 hover:text-amber-500 duration-200'>
									<FaAngleRight /> Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div className=''>
						<h3 className='text-lg font-medium text-white'>Quick Links</h3>
						<div className='flex flex-col mt-10 gap-y-8'>
							<div className='flex gap-x-8'>
								<FaMap className=' primary-color text-3xl' />
								<p className=' text-white'>
									203 Fake St. Mountain View, San Francisco, California, USA
								</p>
							</div>
							<div className='flex gap-x-8'>
								<FaPhoneAlt className=' primary-color' />
								<p className=' text-white'>+2 392 3929 210</p>
							</div>
							<div className='flex gap-x-8'>
								<FaPaperPlane className=' primary-color' />
								<p className=' text-white'> info@yourdomain.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full h-44 bg-gray-800 flex items-center justify-center'>
				<p className=' text-gray-200 text-xs md:text-sm px-5 text-center '>
					Copyright ©2023 All rights reserved | This template is made with by
					<span className='primary-color mx-1'>Colorlib</span> and clone using
					<span className=' text-sky-400 mx-1'> React by Toe Aung Myin</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
