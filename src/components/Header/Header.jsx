import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Header = () => {
	return (
		<div className='bg-secondary-color'>
			<div className='flex container mx-auto py-2 items-center px-3'>
				<div className='flex-1'>
					<div className='w-full flex justify-between flex-col md:flex-row'>
						<div>
							<span className='primary-color mr-2'>Free Call:</span>
							<span className='text-white'>+1 234 456 78910</span>
						</div>
						<div>
							<span className='primary-color mr-2'>Email :</span>
							<span className='text-white'>buildream@info.com</span>
						</div>
					</div>
				</div>
				<div className=''>
					<ul className='list-none flex'>
						<li className='inline'>
							<a
								href='/'
								className='primary-color p-2 block bg-gray-600 mx-1 rounded-sm'>
								<FaTwitter />
							</a>
						</li>
						<li className='inline'>
							<a
								href='/'
								className='primary-color p-2 block bg-gray-600 mx-1 rounded-sm'>
								<FaFacebookF />
							</a>
						</li>
						<li className='inline'>
							<a
								href='/'
								className='primary-color p-2 block bg-gray-600 mx-1 rounded-sm'>
								<FaInstagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
