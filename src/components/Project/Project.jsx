import React from 'react';
import ProjectImage1 from './../../assets/images/project_1.webp';
import ProjectImage2 from './../../assets/images/project_2.webp';
import ProjectImage3 from './../../assets/images/project_3.webp';
import ProjectImage4 from './../../assets/images/project_4.webp';
import ProjectImage5 from './../../assets/images/project_5.webp';
import ProjectImage6 from './../../assets/images/project_6.webp';
import { FaSearch } from 'react-icons/fa';
import './Project.css';

const Project = () => {
	return (
		<div className='project-section py-12 md:py-20 bg-gray-100'>
			<div className='container mx-auto'>
				<h4 className='md:text-lg text-sm primary-color text-center font-bold mb-4'>
					Portfolio
				</h4>
				<h1 className='text-4xl md:text-5xl font-medium text-center mb-5 md:mb-24'>
					Projects
				</h1>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-0'>
					<div className='project-card relative overflow-hidden'>
						<img
							src={ProjectImage1}
							alt='project'
							className=' object-cover h-full w-full'
						/>
						<a
							href='/'
							className=' absolute top-0 right-0 z-10 text-white bg-primary-color p-4 text-xl opacity-0'>
							<FaSearch />
						</a>
						<div className='px-6 md:px-10 py-6 opacity-0 absolute z-10 mx-auto'>
							<h1 className=' text-base md:text-2xl font-medium text-white  '>
								BUILDING
							</h1>
							<span className='text-lg md:text-4xl text-white '>High Tower Works</span>
						</div>
						<div className='overlay'></div>
					</div>
					<div className='project-card relative overflow-hidden'>
						<img
							src={ProjectImage2}
							alt='project'
							className=' object-cover h-full w-full'
						/>
						<a
							href='/'
							className=' absolute top-0 right-0 z-10 text-white bg-primary-color p-4 text-xl opacity-0'>
							<FaSearch />
						</a>
						<div className='px-6 md:px-10 py-6 opacity-0 absolute z-10 mx-auto'>
							<h1 className=' text-base md:text-2xl font-medium text-white  '>
								BUILDING
							</h1>
							<span className='text-lg md:text-4xl text-white '>High Tower Works</span>
						</div>
						<div className='overlay'></div>
					</div>
					<div className='project-card relative overflow-hidden'>
						<img
							src={ProjectImage3}
							alt='project'
							className=' object-cover h-full w-full'
						/>
						<a
							href='/'
							className=' absolute top-0 right-0 z-10 text-white bg-primary-color p-4 text-xl opacity-0'>
							<FaSearch />
						</a>
						<div className='px-6 md:px-10 py-6 opacity-0 absolute z-10 mx-auto'>
							<h1 className=' text-base md:text-2xl font-medium text-white  '>
								BUILDING
							</h1>
							<span className='text-lg md:text-4xl text-white '>High Tower Works</span>
						</div>
						<div className='overlay'></div>
					</div>
					<div className='project-card relative overflow-hidden'>
						<img
							src={ProjectImage4}
							alt='project'
							className=' object-cover h-full w-full'
						/>
						<a
							href='/'
							className=' absolute top-0 right-0 z-10 text-white bg-primary-color p-4 text-xl opacity-0'>
							<FaSearch />
						</a>
						<div className='px-6 md:px-10 py-6 opacity-0 absolute z-10 mx-auto'>
							<h1 className=' text-base md:text-2xl font-medium text-white  '>
								BUILDING
							</h1>
							<span className='text-lg md:text-4xl text-white '>High Tower Works</span>
						</div>
						<div className='overlay'></div>
					</div>
					<div className='project-card relative overflow-hidden'>
						<img
							src={ProjectImage5}
							alt='project'
							className=' object-cover h-full w-full'
						/>
						<a
							href='/'
							className=' absolute top-0 right-0 z-10 text-white bg-primary-color p-4 text-xl opacity-0'>
							<FaSearch />
						</a>
						<div className='px-6 md:px-10 py-6 opacity-0 absolute z-10 mx-auto'>
							<h1 className=' text-base md:text-2xl font-medium text-white  '>
								BUILDING
							</h1>
							<span className='text-lg md:text-4xl text-white '>High Tower Works</span>
						</div>
						<div className='overlay'></div>
					</div>
					<div className='project-card relative overflow-hidden'>
						<img
							src={ProjectImage6}
							alt='project'
							className=' object-cover h-full w-full'
						/>
						<a
							href='/'
							className=' absolute top-0 right-0 z-10 text-white bg-primary-color p-4 text-xl opacity-0'>
							<FaSearch />
						</a>
						<div className='px-6 md:px-10 py-6 opacity-0 absolute z-10 mx-auto'>
							<h1 className=' text-base md:text-2xl font-medium text-white  '>
								BUILDING
							</h1>
							<span className='text-lg md:text-4xl text-white '>High Tower Works</span>
						</div>
						<div className='overlay'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
