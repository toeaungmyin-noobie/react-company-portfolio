import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import './Banner.css';
const Banner = () => {
	return (
		<div id='banner'>
			<div className='overlay'></div>
			<div className='banner-content'>
				<h4 className='since mt-44 md:mt-28'>SINCE 1982</h4>
				<h1 className='main-header'>
					WE WILL BE <span>HAPPY</span> TO TAKE CARE OF YOUR WORK
				</h1>
				<div className='flex flex-col md:flex-row justify-center gap-4 banner-btn mt-20 md:mt-20'>
					<button className='contact-btn uppercase flex items-center justify-center gap-x-2 '>
						Contact us <BiRightArrowAlt className='text-lg' />
					</button>
					<button className='request-btn uppercase flex items-center justify-center gap-x-2 '>
						Request a quote <BiRightArrowAlt className='text-lg' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
